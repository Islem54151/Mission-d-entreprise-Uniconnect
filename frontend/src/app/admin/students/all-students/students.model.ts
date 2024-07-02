import { formatDate } from '@angular/common';


export class Students {
  id: number;
  cin: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  dateBirth: string;
  image: string;
  role: string;
  gender: string;
  department: string;
  token: string;

  constructor(students: Partial<Students> = {}) {
    this.id = students.id ?? this.getRandomID();
    this.cin = students.cin ?? '';
    this.firstname = students.firstname ?? '';
    this.lastname = students.lastname ?? '';
    this.email = students.email ?? '';
    this.password = students.password ?? '';
    this.dateBirth = students.dateBirth ?? formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.image = students.image ?? '';
    this.role = students.role ?? 'STUDENT';
    this.token= students.token?? 'student-token';
    this.department = students.department ?? '';

    this.gender = students.gender ?? '';
  }

  public getRandomID(): number {
    const S4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000);
    };
    return S4() + S4();
  }
}
