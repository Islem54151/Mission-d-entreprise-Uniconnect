import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService, Role } from '@core';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
})
export class SigninComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit {
  authForm!: UntypedFormGroup;
  submitted = false;
  loading = false;
  error = '';
  hide = true;
  selectedRole: string | null = null;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    super();
  }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.authForm.controls;
  }

  adminSet() {
    this.selectedRole = 'ADMIN';
    this.authForm.reset();
  }

  teacherSet() {
    this.selectedRole = 'TEACHER';
    this.authForm.reset();
  }

  studentSet() {
    this.selectedRole = 'STUDENT';
    this.authForm.reset();
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.error = '';

    if (this.authForm.invalid || !this.selectedRole) {
      this.error = 'Email or Password not valid !';
      this.loading = false;
      return;
    }

    this.subs.sink = this.authService
      .login(this.f['email'].value, this.f['password'].value)
      .subscribe({
        next: (res) => {
          if (res) {
            const userRole = this.authService.currentUserValue.role;
            if (userRole !== this.selectedRole) {
              this.error = 'Role mismatch!';
              this.loading = false;
              return;
            }

            setTimeout(() => {
              if (userRole === Role.Admin) {
                this.router.navigate(['/admin/dashboard/main']);
              } else if (userRole === Role.Teacher) {
                this.router.navigate(['/teacher/dashboard']);
              } else if (userRole === Role.Student) {
                this.router.navigate(['/student/dashboard']);
              } else {
                this.router.navigate(['/authentication/signin']);
              }
              this.loading = false;
            }, 1000);
          } else {
            this.error = 'Invalid Login';
            this.loading = false;
          }
        },
        error: (error) => {
          this.error = error;
          this.submitted = false;
          this.loading = false;
        },
      });
  }
}
