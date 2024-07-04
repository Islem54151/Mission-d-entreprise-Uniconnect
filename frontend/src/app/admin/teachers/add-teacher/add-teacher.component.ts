import { Component, OnInit } from '@angular/core';
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
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

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
export class AddTeacherComponent implements OnInit {
  proForm: UntypedFormGroup;
  selectedFile: File | null = null;

  teachers:Teachers[] = [];
  breadscrums = [
    {
      title: 'Add Teacher',
      items: ['Teacher'],
      active: 'Add Teacher',
    },
  ];
  constructor(private fb: UntypedFormBuilder , private ps:TeachersService, private snackBar: MatSnackBar) {
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
      img: ['/uploads/Default_user.png'],       
      department: ['', [Validators.required]],
      password: ['', [Validators.required]],
    
    });
  }
  ngOnInit() {
    this.loadAllTeachers();
  }
  loadAllTeachers() {
    this.ps.getAllTeachers();
    this.ps.dataChange.subscribe((data) => {
      this.teachers = data;
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  addPro() {
    const formValues = this.proForm.value;
    const emailExists = this.teachers.some(teacher => teacher.email === formValues.email);

    if (emailExists) {
      this.showNotification('snackbar-danger', 'Teacher is already registered!', 'bottom', 'center');
      return;
    }

    const newTeacher = new Teachers({
      ...formValues,
      role: 'TEACHER', // valeur par défaut
      token: 'teacher-token', // valeur par défaut
    });

    this.ps.addTeachers(newTeacher).subscribe({
      next: (teacher: Teachers) => {
        if (this.selectedFile) {
          this.ps.uploadImage(teacher.id, this.selectedFile).subscribe({
            next: (response: any) => {
              console.log('Image uploaded successfully:', response);
              teacher.img = response.imageUrl; // Assigner l'URL correcte de l'image
            },
            error: (error: any) => {
              console.error('Error uploading image:', error);
            },
          });
        }
        console.log('Teacher added successfully:',teacher);
        this.showNotification('snackbar-success', 'Add Record Successfully...!!!', 'bottom', 'center');
        this.proForm.reset();
      },
      error: (error: any) => {
        console.error('Error adding Teacher:', error);
      },
    });
  }

  showNotification(colorName: string, text: string, placementFrom: MatSnackBarVerticalPosition, placementAlign: MatSnackBarHorizontalPosition) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }

}
