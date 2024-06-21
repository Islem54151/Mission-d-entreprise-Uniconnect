// import { Injectable } from '@angular/core';
// import { HttpClient, HttpResponse } from '@angular/common/http';
// import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
// import { User } from '../models/user';
// import { Role } from '@core/models/role';
// import { catchError, map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private currentUserSubject: BehaviorSubject<User>;
//   public currentUser: Observable<User>;
//   private users: User[] = [];

//   private readonly API_URL = 'http://localhost:8089/users-rest-controller/users';

//   constructor(private http: HttpClient) {
//     this.currentUserSubject = new BehaviorSubject<User>(
//       JSON.parse(localStorage.getItem('currentUser') || '{}')
//     );
//     this.currentUser = this.currentUserSubject.asObservable();
//     this.loadUsers();
//   }

//   public get currentUserValue(): User {
//     return this.currentUserSubject.value;
//   }
//   private loadUsers() {
//     console.log('Loading users from', this.API_URL);
//     this.http.get<User[]>(this.API_URL).pipe(
//       map(users => {
//         console.log('Users loaded:', users);
//         this.users = users;
//       }),
//       catchError(error => {
//         console.error('Failed to load users', error);
//         return of([]);
//       })
//     ).subscribe();
//     console.log('Users loaded:', this.users);

//   }
  
  
  
//   login(email: string, password: string) {
//     console.log('Attempting login with:', email, password);
  
//     const user = this.users.find((u) => u.email === email && u.password === password);
  
//     if (!user) {
//       console.log('User not found');
//       return this.error('Username or password is incorrect');
//     } else {
//       console.log('User found:', user);
//       localStorage.setItem('currentUser', JSON.stringify(user));
//       this.currentUserSubject.next(user);
//       return this.ok({
//         id: user.id,
//         img: user.img,
//         email: user.email,
//         firstname: user.firstname,
//         lastname: user.lastname,
//         dateBirth: user.dateBirth,
//         cin: user.cin,
//         token: user.token,
//         role: user.role
//       });
//     }
//   }
  

//   ok(body?: {
//     id: number;
//     img: string;
//     email: string;
//     firstname: string;
//     lastname: string;
//     cin: string;
//     dateBirth: string;
//     token: string;
//     role: Role;
//   }): Observable<HttpResponse<any>> {
//     return of(new HttpResponse({ status: 200, body }));
//   }

//   error(message: string): Observable<never> {
//     return throwError(message);
//   }

 
//   logout() {
//     // remove user from local storage to log user out
//     localStorage.removeItem('currentUser');
//     this.currentUserSubject.next(this.currentUserValue);
//     return of({ success: false });
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { User } from '../models/user';
import { Role } from '@core/models/role';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

    private users = [
    {
      id: 1,
      img: 'assets/images/user/admin.jpg',
      email: 'admin@school.org',
      password: 'admin@123',
      firstname: 'Sarah',
      lastname: 'Smith',
      cin:'12355665',
      dateBirth: '1980-01-01',
      role: Role.Admin,
      token: 'admin-token',
    },
    {
      id: 2,
      img: 'assets/images/user/teacher.jpg',
      email: 'teacher@school.org',
      password: 'teacher@123',
      firstname: 'Ashton',
      lastname: 'Cox',
      cin:'177755665',
      dateBirth: '1990-01-01',
      role: Role.Teacher,
      token: 'teacher-token',
    },
    {
      id: 3,
      img: 'assets/images/user/student.jpg',
      email: 'student@school.org',
      password: 'student@123',
      firstname: 'Ashton',
      lastname: 'Cox',
      cin:'177755665',
      dateBirth: '2000-01-01',

      role: Role.Student,
      token: 'student-token',
    },
  ];
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {

    const user = this.users.find((u) => u.email === email && u.password === password);

    if (!user) {
      return this.error('Username or password is incorrect');
    } else {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return this.ok({
      
        id: user.id,
        img: user.img,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        dateBirth: user.dateBirth,
        cin: user.cin,
        token: user.token,
        role: user.role

      });
    }
  }
  ok(body?: {
        id: number;
    img: string;
    email: string;
    firstname: string;
    lastname: string;
    cin: string;
    dateBirth: string;
     token: string;
     role:Role;
  }) {
    return of(new HttpResponse({ status: 200, body }));
  }
  error(message: string) {
    return throwError(message);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(this.currentUserValue);
    return of({ success: false });
  }
}
