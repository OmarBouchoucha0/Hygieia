import { Component } from '@angular/core';
import { Toolbar } from '../../../toolbar/toolbar';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-patient-layout',
  imports: [Toolbar, RouterOutlet, DrawerModule, ButtonModule],
  templateUrl: './patient-layout.html',
  styleUrl: './patient-layout.css',
})
export class PatientLayout { }
