import { Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { User, Role } from '../models/core.models';

const MOCK_USERS: (User & { password: string })[] = [
    { id: 1, username: 'admin', password: '123', fullName: 'System Administrator', role: 'ADMIN', branch: 'Plaza Las Palmas' },
    { id: 2, username: 'manager', password: '123', fullName: 'Restaurant Manager', role: 'MANAGER', branch: 'Paza Cancun' },
    { id: 3, username: 'user', password: '123', fullName: 'Regular User', role: 'USER', branch: 'Pala Bonita' },
    { id: 4, username: 'waiter', password: '123', fullName: 'John Waiter', role: 'WAITER', branch: 'Paza Grande' },
];

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _currentUser = signal<User | null>(null);

    readonly currentUser = this._currentUser.asReadonly();
    readonly isLoggedIn = computed(() => !!this._currentUser());
    readonly userRole = computed(() => this._currentUser()?.role);

    constructor(private router: Router) {
        // Check local storage for existing session (mock persistence)
        const stored = localStorage.getItem('gastro_user');
        if (stored) {
            this._currentUser.set(JSON.parse(stored));
        }
    }

    login(username: string, pass: string): boolean {
        const user = MOCK_USERS.find(u => u.username === username && u.password === pass);
        if (user) {
            const { password, ...safeUser } = user;
            this._currentUser.set(safeUser);
            localStorage.setItem('gastro_user', JSON.stringify(safeUser));
            return true;
        }
        return false;
    }

    logout() {
        this._currentUser.set(null);
        localStorage.removeItem('gastro_user');
        this.router.navigate(['/auth/login']);
    }

    hasRole(allowedRoles: Role[]): boolean {
        const role = this.userRole();
        return role ? allowedRoles.includes(role) : false;
    }
}
