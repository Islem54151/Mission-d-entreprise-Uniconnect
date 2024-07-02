import { formatDate } from '@angular/common';

export class ExamSchedule {
  id: number;
  subject: string;
  classe: string;
  date: Date;
  time: string;
  duration: string;
  roomNo: string;
  totalMarks: number;
  reqMarks: number;

  constructor(examSchedule: Partial<ExamSchedule> = {}) {
    this.id = examSchedule.id ?? this.getRandomID();
    this.subject = examSchedule.subject ?? '';
    this.classe = examSchedule.classe ?? '';
    this.date = examSchedule.date ?? new Date();
    this.time = examSchedule.time ?? '';
    this.duration = examSchedule.duration ?? '';
    this.roomNo = examSchedule.roomNo ?? '';
    this.totalMarks = examSchedule.totalMarks ?? 0;
    this.reqMarks = examSchedule.reqMarks ?? 0;
  }

  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }

  public getFormattedDate(): string {
    return formatDate(this.date, 'yyyy-MM-dd', 'en');
  }
}
