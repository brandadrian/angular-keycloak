import { Component, OnInit } from '@angular/core';
import { AuthOidcService } from '../../services/auth-oidc.service';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

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
  userData$: Observable<any>;
  userProfileJson$: Observable<string>;
  userRolesJson$: Observable<string>;
  userTokenJson$: Observable<string>;

  constructor(
    private authService: AuthOidcService,
  ) {
    this.userData$ = this.authService.getUserData();
    
    this.userProfileJson$ = this.userData$.pipe(
      map(data => JSON.stringify(data, null, 2))
    );
    
    this.userRolesJson$ = this.userData$.pipe(
      map(data => JSON.stringify(data?.userData?.realm_access?.roles || [], null, 2))
    );
    
    this.userTokenJson$ = this.authService.getAccessToken().pipe(
      map(token => {
        if (token) {
          try {
            const decoded = JSON.parse(atob(token.split('.')[1]));
            return JSON.stringify(decoded, null, 2);
          } catch (e) {
            return 'Error decoding token';
          }
        }
        return 'No token available';
      })
    );
  }

  ngOnInit(): void {}
}
