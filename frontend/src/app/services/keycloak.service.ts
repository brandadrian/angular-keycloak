import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

export const ROLES = {
  ADMIN: 'brandclient-role-admin',
  USER: 'brandclient-role-user',
};

@Injectable({ providedIn: 'root' })
export class KeycloakOperationService {
  constructor(private readonly keycloak: KeycloakService) {}

  isLoggedIn(): boolean {
    return this.keycloak.isLoggedIn();
  }
  logout(redirectUrl: any): void {
    this.keycloak.logout(redirectUrl);
  }
  login(): void {
    this.keycloak.login();
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
  hasRole(role: string): boolean {
    return this.getUserRoles().includes(role);
  }
  hasAdminRole(): boolean {
    return this.getUserRoles().includes(ROLES.ADMIN);
  }
  hasUserRole(): boolean {
    return this.getUserRoles().includes(ROLES.USER);
  }
}