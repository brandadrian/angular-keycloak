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
  title = 'angular-keycload-web';
  isLoggedIn = false;

  constructor(
    private keyCloakService: KeycloakOperationService,
  ) {}
  ngOnInit(): void {
      this.isLoggedIn = this.keyCloakService.isLoggedIn();
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
