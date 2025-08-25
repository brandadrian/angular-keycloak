import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { AuthOidcService } from '../../services/auth-oidc.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, MatListModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  isAuthenticated$: Observable<boolean>;
  hasAdminRole$: Observable<boolean>;
  hasUserRole$: Observable<boolean>;

  constructor(private authService: AuthOidcService) {
    this.isAuthenticated$ = this.authService.isAuthenticated$();
    this.hasAdminRole$ = this.authService.hasAdminRole();
    this.hasUserRole$ = this.authService.hasUserRole();
  }
}
