import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { User } from '../models/user';
import { Role } from '@core/models/role';
import { catchError, tap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private API_URL = 'http://localhost:8089'; // Base URL for API
  private users: User[] = []; // Initialize as empty array

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.API_URL}/users-rest-controller/users`).pipe(
      tap((data) => {
        this.users = data;
        console.log('Fetched users:', this.users); // Log users to the console
      }),
      catchError((error: HttpErrorResponse) => {
        console.error(error.name + ' ' + error.message);
        return throwError(error);
      })
    );
  }

  login(email: string, password: string): Observable<HttpResponse<any>> {
    return this.fetchUsers().pipe(
      switchMap(() => {
        const user = this.users.find((u) => u.email === email && u.password === password);

        if (!user) {
          console.log('Login failed: incorrect email or password');
          return this.error('Email or password is incorrect');
        } else {
          console.log('Login successful:', user);
          localStorage.setItem('currentUser', JSON.stringify(user));
          sessionStorage.setItem('User', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return this.ok({
            id: user.id,
            image: user.image,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            dateBirth: user.dateBirth,
            cin: user.cin,
            token: user.token,
            role: user.role,
          });
        }
      })
    );
  }

  ok(body?: {
    id: number;
    image: string;
    email: string;
    firstname: string;
    lastname: string;
    cin: string;
    dateBirth: string;
    token: string;
    role: Role;
  }): Observable<HttpResponse<any>> {
    return of(new HttpResponse({ status: 200, body }));
  }

  error(message: string): Observable<never> {
    return throwError(message);
  }

  logout(): Observable<any> {
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('User');
    this.currentUserSubject.next(this.currentUserValue);
    return of({ success: false });
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
// import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
// import { User } from '../models/user';
// import { Role } from '@core/models/role';
// import { catchError, tap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private currentUserSubject: BehaviorSubject<User>;
//   public currentUser: Observable<User>;
//   private API_URL = 'http://localhost:8089'; // Base URL for API
//   private users: User[] = []; // Initialize as empty array

//   constructor(private http: HttpClient) {
//     this.currentUserSubject = new BehaviorSubject<User>(
//       JSON.parse(localStorage.getItem('currentUser') || '{}')
//     );
//     this.currentUser = this.currentUserSubject.asObservable();
//   }

//   public get currentUserValue(): User {
//     return this.currentUserSubject.value;
//   }

//   fetchUsers(): void {
//     this.http.get<User[]>(`${this.API_URL}/users-rest-controller/users`).pipe(
//       tap((data) => {
//         this.users = data;
//         console.log('Fetched users:', this.users); // Log users to the console
//       }),
//       catchError((error: HttpErrorResponse) => {
//         console.error(error.name + ' ' + error.message);
//         return throwError(error);
//       })
//     ).subscribe();
//   }

//   login(email: string, password: string) {
//     // Ensure users are fetched before attempting to login
//     if (this.users.length === 0) {
//       this.fetchUsers();
//     }

//     const user = this.users.find((u) => u.email === email && u.password === password);

//     if (!user) {
//       return this.error('Email or password is incorrect');
//     } else {
//       localStorage.setItem('currentUser', JSON.stringify(user));
//       this.currentUserSubject.next(user);
//       return this.ok({
//         id: user.id,
//         image: user.image,
//         email: user.email,
//         firstname: user.firstname,
//         lastname: user.lastname,
//         dateBirth: user.dateBirth,
//         cin: user.cin,
//         token: user.token,
//         role: user.role,
//       });
//     }
//   }

//   ok(body?: {
//     id: number;
//     image: string;
//     email: string;
//     firstname: string;
//     lastname: string;
//     cin: string;
//     dateBirth: string;
//     token: string;
//     role: Role;
//   }) {
//     return of(new HttpResponse({ status: 200, body }));
//   }

//   error(message: string) {
//     return throwError(message);
//   }

//   logout() {
//     localStorage.removeItem('currentUser');
//     this.currentUserSubject.next(this.currentUserValue);
//     return of({ success: false });
//   }
// }
