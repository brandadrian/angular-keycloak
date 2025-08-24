import { Routes } from '@angular/router';
import { HomepageComponent } from './components/home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { TodosComponent } from './components/todos/todos.component';

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
    {
      path: 'admin',
      component: AdminComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'todos',
      component: TodosComponent,
      canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: '' },
  ];