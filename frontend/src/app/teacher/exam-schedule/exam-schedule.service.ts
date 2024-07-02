import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ExamSchedule } from './exam-schedule.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from '@shared';

@Injectable({
  providedIn: 'root',
})
export class ExamScheduleService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'http://localhost:8089/examen-rest-controller';
  isTblLoading = true;
  dataChange: BehaviorSubject<ExamSchedule[]> = new BehaviorSubject<ExamSchedule[]>([]);
  dialogData!: ExamSchedule;

  constructor(private httpClient: HttpClient) {
    super();
  }

  get data(): ExamSchedule[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllExamSchedule(): void {
    this.subs.sink = this.httpClient
      .get<ExamSchedule[]>(this.API_URL + '/examen')
      .subscribe({
        next: (data) => {
          this.isTblLoading = false;
          this.dataChange.next(data);
        },
        error: (error: HttpErrorResponse) => {
          this.isTblLoading = false;
          console.error(error.name + ' ' + error.message);
        },
      });
  }

  addExamSchedule(examSchedule: ExamSchedule): void {
    this.dialogData = examSchedule;
    this.httpClient.post(this.API_URL + '/examen', examSchedule)
      .subscribe({
        next: (data) => {
          this.dialogData = examSchedule;
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error adding exam schedule', error);
        },
      });
  }

  updateExamSchedule(examSchedule: ExamSchedule): void {
    this.dialogData = examSchedule;
    this.httpClient.put(this.API_URL + '/examen/' + examSchedule.id, examSchedule)
      .subscribe({
        next: (data) => {
          this.dialogData = examSchedule;
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error updating exam schedule', error);
        },
      });
  }

  deleteExamSchedule(id: number): void {
    this.httpClient.delete(this.API_URL + '/examen/' + id)
      .subscribe({
        next: (data) => {
          console.log('Exam schedule deleted', id);
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error deleting exam schedule', error);
        },
      });
  }
}
