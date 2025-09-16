import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = !!localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      this.router.navigate(['/login'], { queryParams: { message: 'Please login to access the dashboard.' } });
      return false;
    }
    return true;
  }
}
