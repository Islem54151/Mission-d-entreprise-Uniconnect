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
import { StudentsService } from '../all-students/students.service';
import { Students } from '../all-students/students.model';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

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
export class AddStudentComponent implements OnInit {
  stdForm: UntypedFormGroup;
  selectedFile: File | null = null;
  students: Students[] = [];

  breadscrums = [
    {
      title: 'Add Student',
      items: ['Student'],
      active: 'Add Student',
    },
  ];

  constructor(private fb: UntypedFormBuilder, private s: StudentsService, private snackBar: MatSnackBar) {
    this.stdForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      cin: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(5)]],
      dateBirth: ['', [Validators.required]],
      image: ['/uploads/Default_user.png'],
      password: ['', [Validators.required]],
      department: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.loadAllStudents();
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  loadAllStudents() {
    this.s.getAllStudents();
    this.s.dataChange.subscribe((data) => {
      this.students = data;
    });
  }

  addStd() {
    const formValues = this.stdForm.value;
    const emailExists = this.students.some(student => student.email === formValues.email);

    if (emailExists) {
      this.showNotification('snackbar-danger', 'Student is already registered!', 'bottom', 'center');
      return;
    }

    const newStudent = new Students({
      ...formValues,
      role: 'STUDENT', // valeur par défaut
      token: 'student-token', // valeur par défaut
    });

    this.s.addStudent(newStudent).subscribe({
      next: (student: Students) => {
        if (this.selectedFile) {
          this.s.uploadImage(student.id, this.selectedFile).subscribe({
            next: (response: any) => {
              console.log('Image uploaded successfully:', response);
              student.image = response.imageUrl; // Assigner l'URL correcte de l'image
            },
            error: (error: any) => {
              console.error('Error uploading image:', error);
            },
          });
        }
        console.log('Student added successfully:', student);
        this.showNotification('snackbar-success', 'Add Record Successfully...!!!', 'bottom', 'center');
        this.stdForm.reset();
      },
      error: (error: any) => {
        console.error('Error adding student:', error);
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

// import { Component } from '@angular/core';
// import { UntypedFormBuilder, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatButtonModule } from '@angular/material/button';
// import { FileUploadComponent } from '@shared/components/file-upload/file-upload.component';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatOptionModule } from '@angular/material/core';
// import { MatSelectModule } from '@angular/material/select';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
// import { StudentsService } from '../all-students/students.service';
// import { Students } from '../all-students/students.model';
// import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
// @Component({
//   selector: 'app-add-student',
//   templateUrl: './add-student.component.html',
//   styleUrls: ['./add-student.component.scss'],
//   standalone: true,
//   imports: [
//     BreadcrumbComponent,
//     FormsModule,
//     ReactiveFormsModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatSelectModule,
//     MatOptionModule,
//     MatDatepickerModule,
//     FileUploadComponent,
//     MatButtonModule,
//   ],
// })
// export class AddStudentComponent {
//   stdForm: UntypedFormGroup;
//   selectedFile: File | null = null;

//   breadscrums = [
//     {
//       title: 'Add Student',
//       items: ['Student'],
//       active: 'Add Student',
//     },
//   ];
//   constructor(private fb: UntypedFormBuilder,private s:StudentsService,private snackBar: MatSnackBar) {
//     this.stdForm = this.fb.group({
//       firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
//       lastname: ['',[Validators.required, Validators.pattern('[a-zA-Z]+')]],
//       cin: ['', [Validators.required]],
//       gender: ['', [Validators.required]],
//       email: [
//         '',
//         [Validators.required, Validators.email, Validators.minLength(5)],
//       ],
//       dateBirth: ['', [Validators.required]],
//       image: ['/uploads/Default_user.png'],
//       password: ['', [Validators.required]],
//       department: ['', [Validators.required]],

//     });
//   }
//   onFileSelected(event: any): void {
//     this.selectedFile = event.target.files[0];
//   }
//   addStd() {
//     const formValues = this.stdForm.value;
//     const newStudent = new Students({
//       ...formValues,
//       role: 'STUDENT', // valeur par défaut
//       token: 'student-token', // valeur par défaut
//     });

//     // this.s.addStudent(newStudent);
//     this.s.addStudent(newStudent).subscribe({
//       next: (student: Students) => {
//         if (this.selectedFile) {
//           this.s.uploadImage(student.id, this.selectedFile).subscribe({
//             next: (response: any) => {
//               console.log('Image uploaded successfully:', response);
//               student.image = response.imageUrl; // Assign the correct image URL
//             //  this.refreshTable();
//             },
//             error: (error: any) => {
//               console.error('Error uploading image:', error);
//             }
//           });
//         }
//         console.log('Student added successfully:', student);
//         this.showNotification('snackbar-success', 'Add Record Successfully...!!!', 'bottom', 'center');
//         this.stdForm.reset()
//       //  this.refreshTable();
//       },
//       error: (error: any) => {
//         console.error('Error adding student:', error);
//       }
//     });
  
//     console.log('Form Value', newStudent);
  
//   }
 

//   showNotification(colorName: string, text: string, placementFrom: MatSnackBarVerticalPosition, placementAlign: MatSnackBarHorizontalPosition) {
//     this.snackBar.open(text, '', {
//       duration: 2000,
//       verticalPosition: placementFrom,
//       horizontalPosition: placementAlign,
//       panelClass: colorName,
//     });
//   }
  

// }
