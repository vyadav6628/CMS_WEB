import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [ CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule]
})
export class SidebarComponent {
  @Input() role: string = '';
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
