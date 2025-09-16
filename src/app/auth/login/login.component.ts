
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { MatCard, MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule,
    MatCard,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule
  ],
})
export class LoginComponent {
  loginForm: FormGroup;
  captchaValue: string = '';
  captchaInput: string = '';
  errorMsg: string = '';

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
  
     this.loginForm = this.fb.group({
      userid: ['', Validators.required],
      password: ['', Validators.required],
      captcha: ['', Validators.required]
    });
    this.generateCaptcha();
    this.route.queryParams.subscribe(params => {
      if (params['message']) {
        this.errorMsg = params['message'];
      }
    });
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userid: ['', Validators.required],
      password: ['', Validators.required],
      captcha: ['', Validators.required]
    });
  }

  generateCaptcha() {
    // Generate a 6-character mixed-case captcha
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    this.captchaValue = captcha;
  }

  onSubmit() {
    // if (this.loginForm.invalid) {
    //   this.errorMsg = 'Please fill all fields.';
    //   localStorage.removeItem('isLoggedIn');
    //   return;
    // }
    // if (this.loginForm.value.captcha !== this.captchaValue) {
    //   this.errorMsg = 'Invalid captcha.';
    //   this.generateCaptcha();
    //   this.loginForm.patchValue({ captcha: '' });
    //   localStorage.removeItem('isLoggedIn');
    //   return;
    // }
    // Dummy authentication logic (replace with real auth service)
    // Example roles: Super Admin, Admin, Staff, Student
    let role = 'Super Admin';
    // if (this.loginForm.value.userid === 'superadmin' && this.loginForm.value.password === 'superadmin123') {
    //   role = 'Super Admin';
    // } else if (this.loginForm.value.userid === 'admin' && this.loginForm.value.password === 'admin123') {
    //   role = 'Admin';
    // } else if (this.loginForm.value.userid === 'staff' && this.loginForm.value.password === 'staff123') {
    //   role = 'Staff';
    // } else if (this.loginForm.value.userid === 'student' && this.loginForm.value.password === 'student123') {
    //   role = 'Student';
    // }
    if (role) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userRole', role);
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMsg = 'Invalid userid or password.';
      this.generateCaptcha();
      this.loginForm.patchValue({ captcha: '' });
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userRole');
    }
  }
}
