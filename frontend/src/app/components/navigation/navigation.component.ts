import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { KeycloakOperationService } from '../../services/keycloak.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, MatListModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  constructor(private keycloakService: KeycloakOperationService) {}

  get isLoggedIn(): boolean {
    return this.keycloakService.isLoggedIn();
  }
  
  get hasAdminRole(): boolean {
    return this.keycloakService.hasAdminRole();
  }

  get hasUserRole(): boolean {
    return this.keycloakService.hasUserRole();
  }
}
