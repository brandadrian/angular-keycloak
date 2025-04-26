import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({ providedIn: 'root' })
export class KeycloakOperationService {
  constructor(private readonly keycloak: KeycloakService) {}

  isLoggedIn(): boolean {
    return this.keycloak.isLoggedIn();
  }
  logout(): void {
    this.keycloak.logout();
  }
  getUserProfile(): any {
    return this.keycloak.loadUserProfile();
  }
  getUserRoles(): any {
    return this.keycloak.getUserRoles();
  }
  getToken(): any {
    return this.keycloak.getToken();
  }
  // Add other methods as needed for token access, user info retrieval, etc.}
}