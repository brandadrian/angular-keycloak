import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { AuthOidcService } from "../services/auth-oidc.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthOidcService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isAuthenticated$().pipe(
      switchMap(isAuthenticated => {
        if (!isAuthenticated) {
          this.authService.login();
          return of(false);
        }

        // Get the roles required from the route.
        const requiredRoles = route.data["roles"];

        // Allow the user to proceed if no additional roles are required to access the route.
        if (!Array.isArray(requiredRoles) || requiredRoles.length === 0) {
          return of(true);
        }

        // Check if user has all required roles
        return this.authService.getUserData().pipe(
          map(userData => {
            const userRoles = userData?.realm_access?.roles || [];
            return requiredRoles.every((role: string) => userRoles.includes(role));
          })
        );
      })
    );
  }
}