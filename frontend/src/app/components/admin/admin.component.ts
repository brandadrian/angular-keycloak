import { Component, OnInit } from '@angular/core';
import { KeycloakOperationService, ROLES } from '../../services/keycloak.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  hasRole = false;

  constructor(private keycloakService: KeycloakOperationService) {}

  ngOnInit(): void {
    this.hasRole = this.keycloakService.hasAdminRole();
  }
}
