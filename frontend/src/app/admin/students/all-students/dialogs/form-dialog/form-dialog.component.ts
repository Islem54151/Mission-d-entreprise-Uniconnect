import { MAT_DIALOG_DATA, MatDialogRef, MatDialogContent, MatDialogClose } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { StudentsService } from '../../students.service';
import { UntypedFormControl, Validators, UntypedFormGroup, UntypedFormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Students } from '../../students.model';
import { formatDate } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export interface DialogData {
  id: number;
  action: string;
  students: Students;
}

@Component({
  selector: 'app-form-dialog:not(f)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogContent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatDialogClose,
  ],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  stdForm: UntypedFormGroup;
  students: Students;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public studentsService: StudentsService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.students.lastname;
      this.students = data.students;
    } else {
      this.dialogTitle = 'New Students';
      const blankObject = {} as Students;
      this.students = new Students(blankObject);
    }
    this.stdForm = this.createContactForm();
  }
  formControl = new UntypedFormControl('', [
    Validators.required,
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('email')
        ? 'Not a valid email'
        : '';
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      // id: [this.students.id],
      // firstname: [this.students.firstname, [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      // lastname: [this.students.lastname,[Validators.required, Validators.pattern('[a-zA-Z]+')]],
      // cin: [this.students.cin, [Validators.required]],
      // gender: [this.students.gender],
      // email: [
      //   this.students.email,
      //   ,
      //   [Validators.required, Validators.email, Validators.minLength(5)],
      // ],
      // dateBirth: [
      //   formatDate(this.students.dateBirth, 'yyyy-MM-dd', 'en'),
      //   [Validators.required],
      // ],
      id: [this.students.id],
      image: [this.students.image],
      
       firstname: [this.students.firstname, [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      lastname: [this.students.lastname,[Validators.required, Validators.pattern('[a-zA-Z]+')]],
     
      email: [
        this.students.email,
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      cin: [this.students.cin, [Validators.required]],
      dateBirth: [
        formatDate(this.students.dateBirth, 'yyyy-MM-dd', 'en'),
        [Validators.required],
      ],
      gender: [this.students.gender],
      department: [this.students.department],

    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.studentsService.addStudent(this.stdForm.getRawValue());
  }
}
