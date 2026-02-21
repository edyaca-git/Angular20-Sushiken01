import { Component, output, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from '../../core/services/auth.service';
import { CurrencyService } from '../../core/services/currency.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatDividerModule
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    private auth = inject(AuthService);
    private currencyService = inject(CurrencyService);
    private themeService = inject(ThemeService);

    toggleSidenav = output<void>();
    logout = output<void>();

    currentTime = signal(new Date());
    exchangeRates = this.currencyService.rates;

    // Theme
    themes = this.themeService.themes;
    activeTheme = this.themeService.activeTheme;

    // Connect to Auth Service
    currentUser = this.auth.currentUser;

    userName = computed(() => this.currentUser()?.fullName || 'Guest');
    userRole = computed(() => this.currentUser()?.role || '');
    currentBranch = computed(() => this.currentUser()?.branch || 'Main Branch');

    userInitial = computed(() => {
        const name = this.userName();
        return name ? name.charAt(0).toUpperCase() : '?';
    });

    setTheme(themeId: string) {
        this.themeService.setTheme(themeId);
    }

    constructor() {
        // Update clock every second
        setInterval(() => {
            this.currentTime.set(new Date());
        }, 1000);
    }
}
