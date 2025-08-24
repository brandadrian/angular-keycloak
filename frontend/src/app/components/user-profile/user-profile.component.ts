import { Component, OnInit } from '@angular/core';
import { KeycloakOperationService } from '../../services/keycloak.service';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  userProfile: any | null = null;
  userProfileJson: string = '';
  userRolesJson: string = '';
  userTokenJson: string = '';

  constructor(
    private keyCloakService: KeycloakOperationService,
  ) {}
  ngOnInit(): void {
    this.keyCloakService.getUserProfile().then((data: any) => {
      this.userProfile = data;
      this.userProfileJson = JSON.parse(JSON.stringify(data));
    });

    const roles = this.keyCloakService.getUserRoles();
    this.userRolesJson = JSON.parse(JSON.stringify(roles));

    this.keyCloakService.getToken().then((data: any) => {
      const decoded = JSON.parse(atob(data.split('.')[1]));
      this.userTokenJson = JSON.parse(JSON.stringify(decoded));
    });
  }
}
