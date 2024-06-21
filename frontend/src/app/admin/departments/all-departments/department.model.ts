import { formatDate } from "@angular/common";

export class Department {
    id: number;
  dName: string;
  hod: string;
  phone: number; // Changed to number from string
  email: string;
  sYear: Date;
  sCapacity: number; 
  constructor(department: Department) {
    {
      this.id = department.id || this.getRandomID();
      this.dName = department.dName ??'';
      this.hod = department.hod??'';
      this.phone = department.phone ?? '';
      this.email = department.email ??'';
      
      this.sYear = department.sYear ? new Date(department.sYear) : new Date(); // Convertir en Date si ce n'est pas déjà fait
      this.sCapacity = department.sCapacity ??'';
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
  formattedStartDate(): string {
    return this.sYear ? this.sYear.toDateString() : '';
  }
}
