import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { AuthOidcService } from '../../services/auth-oidc.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  @Output() menuToggle = new EventEmitter<void>();
  
  isAuthenticated$: Observable<boolean>;
  userData$: Observable<any>;
  isAdmin$: Observable<boolean>;
  isUser$: Observable<boolean>;

  constructor(private authService: AuthOidcService) {
    this.isAuthenticated$ = this.authService.isAuthenticated$();
    this.userData$ = this.authService.getUserData();
    this.isAdmin$ = this.authService.hasAdminRole();
    this.isUser$ = this.authService.hasUserRole();
  }

  ngOnInit(): void {}

  login(): void {
    this.authService.login();
  }

  logout(): void {
    console.warn("LOGOUT")
    this.authService.logout();
  }
}
