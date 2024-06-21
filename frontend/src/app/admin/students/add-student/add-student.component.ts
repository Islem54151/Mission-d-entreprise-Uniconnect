import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FileUploadComponent } from '@shared/components/file-upload/file-upload.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { StudentsService } from '../all-students/students.service';
import { Students } from '../all-students/students.model';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
  standalone: true,
  imports: [
    BreadcrumbComponent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    FileUploadComponent,
    MatButtonModule,
  ],
})
export class AddStudentComponent {
  stdForm: UntypedFormGroup;
  breadscrums = [
    {
      title: 'Add Student',
      items: ['Student'],
      active: 'Add Student',
    },
  ];
  constructor(private fb: UntypedFormBuilder,private s:StudentsService) {
    this.stdForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      lastname: ['',[Validators.required, Validators.pattern('[a-zA-Z]+')]],
      cin: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      dateBirth: ['', [Validators.required]],

      image: [''],
    });
  }
  // addStd() {
  //   this.s.addStudent(this.stdForm.value);
  //   console.log('Form Value', this.stdForm.value);
  // }
  addStd() {
    const formValues = this.stdForm.value;
    const newStudent = new Students({
      ...formValues,
      role: 'STUDENT', // valeur par défaut
      token: 'student-token', // valeur par défaut
      image: formValues.image || 'assets/images/user/user.png', // valeur par défaut si non fourni
    });

    this.s.addStudent(newStudent);
    console.log('Form Value', newStudent);
    this.stdForm.reset({
      firstname: '',
      lastname: '',
      cin: '',
      gender: '',
      email: '',
      dateBirth: '',
      image: '', // ou l'URL par défaut si nécessaire
    });
  }
}
