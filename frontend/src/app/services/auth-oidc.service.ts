import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthOidcService {
  constructor(private readonly oidcSecurityService: OidcSecurityService) {}

  isAuthenticated$(): Observable<boolean> {
    return this.oidcSecurityService.isAuthenticated$.pipe(
      map(result => result.isAuthenticated)
    );
  }

  login(): void {
    this.oidcSecurityService.authorize();
  }

  logout(): void {
    this.oidcSecurityService.logoffAndRevokeTokens().subscribe((result) => {
      window.location.href = '/';
    });
  }

  getIdToken(): Observable<string | null> {
    return this.oidcSecurityService.getIdToken();
  }

  getAccessToken(): Observable<string | null> {
    return this.oidcSecurityService.getAccessToken();
  }

  getUserData(): Observable<any> {
    return this.oidcSecurityService.userData$.pipe(
      map(userData => {
        console.log('User data:', userData);
        return userData;
      })
    );
  }

  hasRole(role: string): Observable<boolean> {
    return this.oidcSecurityService.userData$.pipe(
      map((user: any) => {
        const roles = user?.userData?.realm_access?.roles || [];
        return roles.includes(role);
      })
    );
  }

  hasAdminRole(): Observable<boolean> {
    return this.hasRole(environment.keycloak.adminRole);
  }

  hasUserRole(): Observable<boolean> {
    return this.hasRole(environment.keycloak.userRole);
  }
}
