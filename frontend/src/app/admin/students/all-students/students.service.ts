import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Students } from './students.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from '@shared';

@Injectable({
  providedIn: 'root',
})
export class StudentsService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'http://localhost:8089/users-rest-controller';
  isTblLoading = true;
  dataChange: BehaviorSubject<Students[]> = new BehaviorSubject<Students[]>([]);
  dialogData!: Students;

  constructor(private httpClient: HttpClient) {
    super();
  }

  get data(): Students[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllStudents(): void {
    this.subs.sink = this.httpClient.get<Students[]>(`${this.API_URL}/students`).subscribe({
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



  addStudent(student: Students): Observable<Students> {
    return this.httpClient.post<Students>(`${this.API_URL}/student`, student);
  }
  uploadImage(studentId: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.httpClient.post(`${this.API_URL}/${studentId}/uploadImage`, formData);
  }
  updateStudent(student: Students): void {
    this.subs.sink = this.httpClient.put(`${this.API_URL}/student`, student).subscribe({
      next: (data) => {
        this.dialogData = student;
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.name + ' ' + error.message);
      },
    });
  }

  deleteStudents(id: number): void {
    this.subs.sink = this.httpClient.delete(`${this.API_URL}/student/${id}`).subscribe({
      next: (data) => {
        console.log(id);
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.name + ' ' + error.message);
      },
    });
  }
}

  // getAllStudentss(): void {
  //   this.subs.sink = this.httpClient.get<Students[]>(this.API_URL).subscribe({
  //     next: (data) => {
  //       this.isTblLoading = false;
  //       this.dataChange.next(data);
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       this.isTblLoading = false;
  //       console.log(error.name + ' ' + error.message);
  //     },
  //   });
  // }
  // addStudents(students: Students): void {
  //   this.dialogData = students;

  //   // this.httpClient.post(this.API_URL, students)
  //   //   .subscribe({
  //   //     next: (data) => {
  //   //       this.dialogData = students;
  //   //     },
  //   //     error: (error: HttpErrorResponse) => {
  //   //        // error code here
  //   //     },
  //   //   });
  // }
  // updateStudents(students: Students): void {
  //   this.dialogData = students;

  //   // this.httpClient.put(this.API_URL + students.id, students)
  //   //     .subscribe({
  //   //       next: (data) => {
  //   //         this.dialogData = students;
  //   //       },
  //   //       error: (error: HttpErrorResponse) => {
  //   //          // error code here
  //   //       },
  //   //     });
  // }
  // deleteStudents(id: number): void {
  //   console.log(id);

  //   // this.httpClient.delete(this.API_URL + id)
  //   //     .subscribe({
  //   //       next: (data) => {
  //   //         console.log(id);
  //   //       },
  //   //       error: (error: HttpErrorResponse) => {
  //   //          // error code here
  //   //       },
  //   //     });
  // }

