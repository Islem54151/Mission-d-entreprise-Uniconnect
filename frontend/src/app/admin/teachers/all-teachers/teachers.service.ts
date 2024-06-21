import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Teachers } from './teachers.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from '@shared';

@Injectable({
  providedIn: 'root',
})

export class TeachersService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'http://localhost:8089/users-rest-controller';
  isTblLoading = true;
  dataChange: BehaviorSubject<Teachers[]> = new BehaviorSubject<Teachers[]>([]);
  // Temporarily stores data from dialogs
  dialogData!: Teachers;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Teachers[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllTeacherss(): void {
    this.subs.sink = this.httpClient.get<Teachers[]>(`${this.API_URL}/teachers`).subscribe({
      next: (data) => {
        this.isTblLoading = false;
        this.dataChange.next(data);
      },
      error: (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + ' ' + error.message);
      },
    });
  }
  addTeachers(teachers: Teachers): void {
    // this.dialogData = teachers;

    this.httpClient.post(`${this.API_URL}/teacher`, teachers)
      .subscribe({
        next: (data) => {
          this.dialogData = teachers;
        },
        error: (error: HttpErrorResponse) => {
          console.error(error);
        },
      });
  }
  updateTeachers(teachers: Teachers): void {
    // this.dialogData = teachers;

    this.httpClient.put(`${this.API_URL}/teacher`, teachers)
        .subscribe({
          next: (data) => {
            this.dialogData = teachers;
          },
          error: (error: HttpErrorResponse) => {
            console.error(error.name + ' ' + error.message);
          },
        });
  }
  deleteTeachers(id: number): void {
    this.subs.sink = this.httpClient.delete(`${this.API_URL}/teacher/${id}`).subscribe({
      next: (data) => {
        console.log(id);
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.name + ' ' + error.message);
      },
    });
  }
}
