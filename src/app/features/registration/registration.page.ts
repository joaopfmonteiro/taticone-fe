import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { HeaderPage } from '../../shared/header/header.page';
import { AuthService } from '../../auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ERROR_MSGS } from '../../shared/forms/error-messages';

function matchPasswords(group: AbstractControl): ValidationErrors | null {
  const pwd = group.get('password')?.value;
  const confirm = group.get('confirmPassword')?.value;
  return pwd && confirm && pwd !== confirm ? { passwordMismatch: true } : null;
}

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [HeaderPage, CommonModule, ReactiveFormsModule],
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss']
})
export class RegistrationPage implements OnInit{

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  submitted = false;
  loading = false;
  error = '';
  success = false;

  isInvalid(controlName: string): boolean {
    const c = this.registrationForm.get(controlName);
    return !!c && (c.touched || this.submitted) && c.invalid;
  }

  getError(controlName: string): string {
    const c = this.registrationForm.get(controlName);
    if (!c) return '';
    if (!c.touched && !this.submitted) return '';
    const errors = c.errors;
    if (!errors) return '';

    const map = (ERROR_MSGS as any)[controlName] || {};
    for (const key of Object.keys(errors)) {
      if (map[key]) {
        const msg = map[key];
        return typeof msg === 'function' ? msg(errors[key]) : msg;
      }
    }
      return '';
  }

  registrationForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    username: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]],
    isCoach: [false],
    role: ['', [Validators.required]]
  }, { validators: matchPasswords });

  get f() { return this.registrationForm.controls; }


  ngOnInit(): void {
    this.registrationForm.get('isCoach')!.valueChanges.subscribe(checked => {
      this.f.role.setValue(checked ? 'COACH' : '');
      this.f.role.updateValueAndValidity();
    });
  }

  onSubmit() {
    if (this.registrationForm.invalid){
      console.log(this.registrationForm.value);
      this.registrationForm.markAllAsTouched();
      console.log('Registration invalid:', this.registrationForm.value);
      return;
    }

    this.loading = true;
    this.error = '';
    this.success = false;

    const payload = {
      firstName: this.f.firstName.value!,
      lastName: this.f.lastName.value!,
      username: this.f.username.value!,
      email: this.f.email.value!,
      password: this.f.password.value!,
      role: this.f.role.value!
    };

    this.authService.register(payload as any).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        this.success = true;
        this.registrationForm.reset({ role: 'COACH' });
              console.log(this.registrationForm.value);
      },
      error: (err: HttpErrorResponse) => {
        console.error('Registration error:', err);
        this.error =
          err.error?.message ||
          (typeof err.error === 'string' ? err.error : '') ||
          'Falha ao registar. Tenta novamente.';
                console.log(this.registrationForm.value);

      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}