import { Component, Output, EventEmitter } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [AvatarModule, ButtonModule, ToolbarModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css',
})
export class Toolbar {
  @Output() menuClick = new EventEmitter<void>();
}
