import { Injectable, signal, effect, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export interface Theme {
    id: string;
    name: string;
    colors: {
        primary: string;
        secondary: string;
    };
    isDark: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private document = inject(DOCUMENT);

    readonly themes: Theme[] = [
        {
            id: 'theme-default',
            name: 'Rose Dark (Default)',
            colors: { primary: '#f43f5e', secondary: '#14b8a6' },
            isDark: true
        },
        {
            id: 'theme-ocean',
            name: 'Ocean Blue',
            colors: { primary: '#3b82f6', secondary: '#06b6d4' }, // Blue-500 / Cyan-500
            isDark: true
        },
        {
            id: 'theme-forest',
            name: 'Forest Green',
            colors: { primary: '#22c55e', secondary: '#84cc16' }, // Green-500 / Lime-500
            isDark: true
        },
        {
            id: 'theme-sunset',
            name: 'Sunset Orange',
            colors: { primary: '#f97316', secondary: '#eab308' }, // Orange-500 / Yellow-500
            isDark: true
        },
        {
            id: 'theme-royal',
            name: 'Royal Purple',
            colors: { primary: '#a855f7', secondary: '#ec4899' }, // Purple-500 / Pink-500
            isDark: true
        }
    ];

    private _activeTheme = signal<Theme>(this.themes[0]);
    activeTheme = this._activeTheme.asReadonly();

    constructor() {
        // Load saved theme
        const saved = localStorage.getItem('gastro_theme');
        if (saved) {
            const theme = this.themes.find(t => t.id === saved);
            if (theme) this._activeTheme.set(theme);
        }

        // Apply theme changes
        effect(() => {
            const theme = this._activeTheme();
            localStorage.setItem('gastro_theme', theme.id);

            // Remove old theme classes
            this.themes.forEach(t => {
                this.document.body.classList.remove(t.id);
            });

            // Add new theme class
            this.document.body.classList.add(theme.id);
        });
    }

    setTheme(themeId: string) {
        const theme = this.themes.find(t => t.id === themeId);
        if (theme) {
            this._activeTheme.set(theme);
        }
    }
}
