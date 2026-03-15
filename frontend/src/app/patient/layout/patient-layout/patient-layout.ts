import { Component } from '@angular/core';
import { Toolbar } from '../../../shared/components/toolbar/toolbar';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Sidebar } from '../../../shared/components/sidebar/sidebar';

@Component({
  selector: 'app-patient-layout',
  imports: [Toolbar, RouterOutlet, ButtonModule, Sidebar],
  templateUrl: './patient-layout.html',
  styleUrl: './patient-layout.css',
})
export class PatientLayout {
  sidebarVisible = false;
}
