import { Component, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../../components/headers/header.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    HeaderComponent,
    SideMenuComponent
  ],
  template: `
    <mat-sidenav-container class="h-screen" style="background-color: var(--color-surface-950)">
      <mat-sidenav #sidenav mode="side" opened class="!border-r-0 w-64 shadow-2xl" 
                   style="background-color: var(--color-surface-900)">
        <app-side-menu></app-side-menu>
      </mat-sidenav>

      <mat-sidenav-content class="flex flex-col h-full relative z-0">
        <app-header (toggleSidenav)="sidenav.toggle()" (logout)="auth.logout()"></app-header>
        
        <main class="flex-1 overflow-auto p-6" style="background-color: var(--color-surface-950)">
          <router-outlet></router-outlet>
        </main>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    mat-sidenav-container {
      height: 100vh;
    }
  `]
})
export class MainLayoutComponent {
  constructor(public auth: AuthService) { }
}
