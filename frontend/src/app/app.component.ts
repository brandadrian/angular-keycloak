import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KeycloakAngularModule } from 'keycloak-angular';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NavigationComponent } from "./components/navigation/navigation.component";
import { HeaderComponent } from './components/header/header.component';
import { KeycloakOperationService } from './services/keycloak.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterOutlet,
    KeycloakAngularModule,
    HttpClientModule,
    NavigationComponent,
    HeaderComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-k-web';
  isLoggedIn = false;
  userName: string = '';
  userRoles: string[] = [];

  constructor(
    private keyCloakService: KeycloakOperationService,
  ) {}
  async ngOnInit(): Promise<void> {
      this.isLoggedIn = this.keyCloakService.isLoggedIn();
      if (this.isLoggedIn) {
        const profile = await this.keyCloakService.getUserProfile();
        this.userName = profile?.username || profile?.email || '';
        this.userRoles = this.keyCloakService.getUserRoles();
      }
  }

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
    if (this.keyCloakService.isLoggedIn()) {
      this.keyCloakService.logout(window.location.origin);
    } else {
      this.keyCloakService.login();
    }
  }
}
