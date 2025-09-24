import { Component, inject } from '@angular/core';
import { HeaderPage } from '../../shared/header/header.page';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderPage, ReactiveFormsModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss',
    '../../styles/forms.scss'
  ]
})
export class LoginPage {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm = this.fb.group({
    username:['', [Validators.required, Validators.email]],
    password:['', [Validators.required]]
  })

  get f() { return this.loginForm.controls; }

  onSubmit() {
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.loginForm.markAllAsTouched();
    }

    const payload = {
      username: this.f.username.value!,
      password: this.f.password.value!
    }

    this.authService.login(payload as any).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.router.navigate(['/registration']);
      }
    })
  }
}
