import { Component, OnInit } from '@angular/core';
import { AuthOidcService } from '../../services/auth-oidc.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  hasAdminRole$: Observable<boolean>;
  userData$: Observable<any>;
  adminRole: string = environment.keycloak.adminRole;

  constructor(private authService: AuthOidcService) {
    this.hasAdminRole$ = this.authService.hasAdminRole();
    this.userData$ = this.authService.getUserData();
  }

  ngOnInit(): void {}
}
