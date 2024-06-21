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
import { Teachers } from '../all-teachers/teachers.model';
import { TeachersService } from '../all-teachers/teachers.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss'],
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
export class AddTeacherComponent {
  proForm: UntypedFormGroup;
  breadscrums = [
    {
      title: 'Add Teacher',
      items: ['Teacher'],
      active: 'Add Teacher',
    },
  ];
  constructor(private fb: UntypedFormBuilder , private ps:TeachersService) {
    this.proForm = this.fb.group({
    
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      lastname: ['',[Validators.required, Validators.pattern('[a-zA-Z]+')]],
      cin: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      dateBirth: ['', [Validators.required]],

      img: [''],  
      password: ['', [Validators.required]],
      conformPassword: ['', [Validators.required]],
      department: [''],
    
    });
  }
  onSubmit() {
    const formValues = this.proForm.value;
    const newTeacher = new Teachers({
      ...formValues,
      role: 'TEACHER', // valeur par défaut
      token: 'teacher-token', // valeur par défaut
    });

    this.ps.addTeachers(newTeacher);
    console.log('Form Value', newTeacher);
    this.proForm.reset({
      firstname: '',
      lastname: '',
      cin: '',
      gender: '',
      email: '',
      dateBirth: '',
      image: '',
      department:'',
      password:'',
      conformPassword:''
    });  }
}
