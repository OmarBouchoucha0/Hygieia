import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TiltDirective } from '../shared/directives/tilt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ButtonModule, InputTextModule, PasswordModule, FormsModule, CommonModule, FloatLabelModule, TiltDirective],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';
  emailInvalid = false;
  passwordInvalid = false;
  submitted = false;

  constructor(public router: Router) { }

  onSubmit() {
    this.submitted = true;
    this.emailInvalid = !this.email || !this.validateEmail(this.email);
    this.passwordInvalid = !this.password || this.password.length < 6;
    if (!this.emailInvalid && !this.passwordInvalid) {
      console.log('Login submitted', { email: this.email, password: this.password });
    }
  }

  private validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
}
