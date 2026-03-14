import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TiltDirective } from '../shared/directives/tilt';
import { Router } from '@angular/router';



@Component({
  selector: 'app-not-found',
  imports: [ButtonModule, FormsModule, CommonModule, FloatLabelModule, TiltDirective],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {
  constructor(public router: Router) { }
}
