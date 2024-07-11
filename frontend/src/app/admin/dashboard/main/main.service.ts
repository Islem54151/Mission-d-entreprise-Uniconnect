import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private apiUrl = 'http://localhost:8089/users-rest-controller/counts';

  constructor(private http: HttpClient) { }

  getCounts(): Observable<{ students: number, teachers: number, newStudents: number, oldStudents: number, newTeachers: number, oldTeachers: number }> {
    return this.http.get<{ students: number, teachers: number, newStudents: number, oldStudents: number, newTeachers: number, oldTeachers: number }>(this.apiUrl);
  }
}
