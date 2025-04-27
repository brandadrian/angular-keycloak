import { Routes } from '@angular/router';
import { HomepageComponent } from './components/home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

export const routes: Routes = [
    { 
      path: '', 
      component: HomepageComponent, 
    },
    { 
      path: 'user-profile', 
      component: UserProfileComponent, 
      canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: '' },
  ];