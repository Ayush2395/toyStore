import { Component, inject } from '@angular/core';
import { ApiService } from '../../../../common/services/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { IError } from '../../../../common/models/model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  private api = inject(ApiService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  public showPwd: boolean = false;
  public errors: IError = { error: false, message: "" };

  public loginForm = this.fb.group({
    email: ['', [Validators.email]],
    password: ['']
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  public signin() {
    const email = this.email?.value;
    const password = this.password?.value;
    if (!email || !password) return;
    this.api.login({ email, password })
      .subscribe({
        next: (token) => {
          if (token) {
            localStorage.setItem('token', JSON.stringify(token));
            this.api.tokenSignal.update(s=>token);
            this.router.navigate(['/home']);
          }
        },
        error: (err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.errors.error = true;
              this.errors.message = 'Credentials are incorrect.';
              setTimeout(() => {
                this.errors.error = false;
                this.errors.message = '';
              }, 5000);
            }
          }
        },
      });
  }
}
