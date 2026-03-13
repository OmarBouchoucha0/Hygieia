import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, NgZone, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [ButtonModule, InputTextModule, PasswordModule, FormsModule, CommonModule, FloatLabelModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private ngZone: NgZone) { }
  @ViewChild('card') cardRef!: ElementRef<HTMLDivElement>;

  private targetX = 0; private targetY = 0;
  private currentX = 0; private currentY = 0;
  private floatT = 0;
  private rafId = 0;
  private readonly LERP = 0.5;
  private lastMoveTime = 0;
  email = '';
  password = '';
  emailInvalid = false;
  passwordInvalid = false;
  submitted = false;



  private onMouseMove = (e: MouseEvent) => {
    const now = Date.now();
    if (now - this.lastMoveTime < 16) return; // cap at ~60fps
    this.lastMoveTime = now;

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    this.targetX = ((e.clientY - cy) / cy) * -2;
    this.targetY = ((e.clientX - cx) / cx) * 2;
  };

  private onMouseLeave = () => { this.targetX = 0; this.targetY = 0; };

  ngOnInit() {
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseleave', this.onMouseLeave);
    this.ngZone.runOutsideAngular(() => this.loop());
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.rafId);
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseleave', this.onMouseLeave);
  }

  private loop() {
    this.currentX += (this.targetX - this.currentX) * this.LERP;
    this.currentY += (this.targetY - this.currentY) * this.LERP;

    const dx = Math.abs(this.targetX - this.currentX);
    const dy = Math.abs(this.targetY - this.currentY);

    const card = this.cardRef?.nativeElement;
    if (card && (dx > 0.001 || dy > 0.001)) {
      card.style.transform = `rotateX(${this.currentX}deg) rotateY(${this.currentY}deg)`;
    }

    this.rafId = requestAnimationFrame(() => this.loop());
  }

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
