import { formatDate } from '@angular/common';
export class Teachers {
  id: number;
  img: string;
  name: string;
  email: string;
  dateBirth: string;
  gender: string;
  cin: string;
  password: string;

  firstname: string;
  lastname: string;
  department: string;
  token: string;
  role: string;
  constructor(teachers: Teachers) {
    {
      this.id = teachers.id || this.getRandomID();
      this.cin = teachers.cin ?? '';
      this.firstname = teachers.firstname ?? '';
      this.lastname = teachers.lastname ?? '';
      this.img = teachers.img || '/uploads/Default_user.png';
      this.name = teachers.name || '';
      this.password = teachers.password ?? '';
      this.email = teachers.email || '';
      this.dateBirth = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.gender = teachers.gender || '';
      this.department = teachers.department || '';
      this.role = teachers.role ?? 'TEACHER';
      this.token= teachers.token?? 'teacher-token';
  
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
