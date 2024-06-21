import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Department } from './department.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from '@shared';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'http://localhost:8089/departement-rest-controller'; // Update with your actual backend URL

  isTblLoading = true;
  dataChange: BehaviorSubject<Department[]> = new BehaviorSubject<Department[]>([]);
  dialogData!: Department;

  constructor(private httpClient: HttpClient) {
    super();
  }

  get data(): Department[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */

  getAllDepartments(): void {
    this.subs.sink = this.httpClient.get<Department[]>(`${this.API_URL}/departement`).subscribe({
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

  addDepartment(department: Department): Observable<any> {
   return this.httpClient.post<Department>(`${this.API_URL}/departement`, department)
  }
  

  updateDepartment(department: Department): void {
    this.httpClient.put<Department>(`${this.API_URL}/departement`, department).subscribe({
      next: (data) => {
        this.dialogData = data; // Optionally update dialogData with the response
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error updating department: ' + error.message);
      },
    });
  }

  deleteDepartment(id: number): void {
    this.httpClient.delete(`${this.API_URL}/departement/${id}`).subscribe({
      next: () => {
        console.log(`Department with ID ${id} deleted.`);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error deleting department: ' + error.message);
      },
    });
  }
}
