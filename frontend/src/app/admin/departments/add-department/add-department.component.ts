import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartmentService } from '../all-departments/department.service';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss'],
  standalone: true,
  imports: [
    BreadcrumbComponent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
})
export class AddDepartmentComponent {
  departmentForm: UntypedFormGroup;
  breadscrums = [
    {
      title: 'Add Department',
      items: ['Department'],
      active: 'Add',
    },
  ];
  constructor(private fb: UntypedFormBuilder,private departmentService: DepartmentService,private snackBar: MatSnackBar) {
    this.departmentForm = this.fb.group({
      dName: ['', [Validators.required]],
      hod: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      sYear: [''],
      sCapacity: ['', [Validators.required]],
      
    });
  }
  onSubmit() {
    this.departmentService.addDepartment(this.departmentForm.value).subscribe({
      next: (data) => {
        console.log('Department added successfully', data);
        this.showNotification('snackbar-success', 'Add Record Successfully...!!!', 'bottom', 'center');
        this.departmentForm.reset()
        // Traiter la réponse si nécessaire
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error adding department:', error);
        // Afficher un message d'erreur approprié à l'utilisateur
      }
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
