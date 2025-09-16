import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MatIconModule
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  aboutPopupOpen = false;
  features = [
    {
      title: 'Easy Dashboard',
      desc: 'Intuitive dashboard for quick access to all modules.',
      img: '/Features/download.png'
    },
    {
      title: 'Secure Login',
      desc: 'Advanced authentication and role-based access.',
      img: '/Features/secure_ligin.png'
    },
    {
      title: 'Detailed Reports',
      desc: 'Comprehensive analytics and exportable reports.',
      img: '/Features/report.png'
    },
    {
      title: 'Notifications',
      desc: 'Real-time alerts for students, faculty, and admins.',
      img: '/Features/notification.png'
    },
    {
      title: 'Role-based Access',
      desc: 'Custom permissions for different user types.',
      img: '/Features/role_base_access.png'
    }
  ];
  hoveredFeature: number|null = null;
  services = [
    {
      title: 'Student Management',
      desc: 'Manage student records, admissions, and progress.',
      img: '/OurServices/mangement1.png',
      details: 'Easily enroll, update, and track student information with advanced search and reporting.'
    },
    {
      title: 'Faculty Management',
      desc: 'Organize faculty profiles, schedules, and payroll.',
      img: '/OurServices/faculty.png',
      details: 'Assign courses, manage attendance, and handle payroll efficiently.'
    },
    {
      title: 'Course Management',
      desc: 'Create and update courses, syllabi, and materials.',
      img: '/OurServices/course.png',
      details: 'Flexible course creation, prerequisites, and resource management.'
    },
    {
      title: 'Attendance Tracking',
      desc: 'Track student and faculty attendance in real time.',
      img: '/OurServices/attandance.png',
      details: 'Automated attendance with analytics and notifications.'
    },
    {
      title: 'Exam Management',
      desc: 'Schedule, conduct, and grade exams securely.',
      img: '/OurServices/exame.png',
      details: 'Online/offline exam support, grading, and result publishing.'
    }
  ];
socialIcons = [
  { iconClass: 'fab fa-facebook-f', url: 'https://example.com/facebook', ariaLabel: 'Facebook' },
  { iconClass: 'fab fa-twitter', url: 'https://example.com/twitter', ariaLabel: 'Twitter' },
  { iconClass: 'fab fa-youtube', url: 'https://example.com/youtube', ariaLabel: 'YouTube' },
  { iconClass: 'fab fa-instagram', url: 'https://example.com/instagram', ariaLabel: 'Instagram' }
];
  hoveredService: number|null = null;
  popupOpen = false;
  selectedService: any = null;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  openServicePopup(i: number, event: Event) {
    event.stopPropagation();
    this.selectedService = this.services[i];
    this.popupOpen = true;
  }
  closeServicePopup() {
    this.popupOpen = false;
    this.selectedService = null;
  }
  courseFees = [
    { course: 'B.Sc Computer Science', fees: '₹40,000/year' },
    { course: 'B.Com', fees: '₹35,000/year' },
    { course: 'B.A.', fees: '₹30,000/year' },
    { course: 'M.Sc', fees: '₹50,000/year' },
    { course: 'MBA', fees: '₹70,000/year' }
  ];
  mobileMenuOpened = false;

  // Banner slider logic
  bannerImages = [
    '/banner/banner1.jpg',
    '/banner/banner2.jpg',
    '/banner/banner3.jpg'
  ];
  currentBanner = 0;

  prevBanner() {
    this.currentBanner = (this.currentBanner - 1 + this.bannerImages.length) % this.bannerImages.length;
  }
  nextBanner() {
    this.currentBanner = (this.currentBanner + 1) % this.bannerImages.length;
  }
  goToBanner(i: number) {
    this.currentBanner = i;
  }
  scrollToSection(sectionId: string) {
    if (!sectionId || typeof sectionId !== 'string') {
      console.error('Invalid sectionId:', sectionId);
      return;
    }
    try {
      const el = this.document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`Section with id '${sectionId}' not found.`);
      }
    } catch (err) {
      console.error('Error scrolling to section:', err);
    }
  }
}
