import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../core/services/auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule, MatIconModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    username = '';
    password = '';
    errorMessage = signal('');
    loading = signal(false);

    constructor(private auth: AuthService, private router: Router) {
        if (this.auth.isLoggedIn()) {
            this.router.navigate(['/dashboard']);
        }
    }

    onSubmit(event: Event) {
        event.preventDefault();
        this.loading.set(true);
        this.errorMessage.set('');

        // Simulate network delay
        setTimeout(() => {
            const success = this.auth.login(this.username, this.password);
            if (success) {
                this.router.navigate(['/dashboard']);
            } else {
                this.errorMessage.set('Invalid credentials');
                this.loading.set(false);
            }
        }, 800);
    }
}
