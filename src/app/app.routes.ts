	import { Routes } from '@angular/router';
	import { LandingComponent } from './features/landing/landing.component';

	export const routes: Routes = [
		{ path: '', component: LandingComponent },
		{
			path: 'login',
			loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
		},
		{
			path: 'register',
			loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule)
		},
		{
			path: 'dashboard',
			loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
		},
		// ...other routes
	];
