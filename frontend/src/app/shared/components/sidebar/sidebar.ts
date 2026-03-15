import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [DrawerModule, ButtonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  logout() {
    this.router.navigate(['/login']);
  }

  close() {
    this.visibleChange.emit(false);
  }

  onHide() {
    this.visibleChange.emit(false);
  }
}
