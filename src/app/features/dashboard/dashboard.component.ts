
import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar.component';
import { SidebarComponent } from '../../layout/sidebar.component';
import { FooterComponent } from '../../layout/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  role: string = '';
  ngOnInit() {
    this.role = localStorage.getItem('userRole') || '';
  }
}
