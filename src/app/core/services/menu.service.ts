import { Injectable, signal } from '@angular/core';
import { MenuItem, Role } from '../models/core.models';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    constructor(private auth: AuthService) { }

    getMenu(): MenuItem[] {
        const role = this.auth.userRole();
        if (!role) return [];

        return this.filterMenu(ALL_MENU_ITEMS, role);
    }

    private filterMenu(items: MenuItem[], role: Role): MenuItem[] {
        return items
            .filter(item => !item.roles || item.roles.includes(role))
            .map(item => ({
                ...item,
                children: item.children ? this.filterMenu(item.children, role) : undefined
            }));
    }
}

const ALL_MENU_ITEMS: MenuItem[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        icon: 'dashboard',
        route: '/dashboard',
        roles: ['ADMIN', 'MANAGER', 'USER', 'WAITER']
    },
    {
        id: 'pos',
        title: 'Point of Sale',
        icon: 'point_of_sale',
        children: [
            { id: 'new-order', title: 'New Order', icon: 'add_shopping_cart', route: '/pos/new', roles: ['ADMIN', 'MANAGER', 'WAITER'] },
            { id: 'orders', title: 'Active Orders', icon: 'receipt_long', route: '/pos/orders', roles: ['ADMIN', 'MANAGER', 'WAITER'] },
            { id: 'tables', title: 'Table Map', icon: 'table_restaurant', route: '/pos/tables', roles: ['ADMIN', 'MANAGER', 'WAITER'] },
        ]
    },
    {
        id: 'admin',
        title: 'Administration',
        icon: 'admin_panel_settings',
        roles: ['ADMIN', 'MANAGER'],
        children: [
            { id: 'users', title: 'User Management', icon: 'people', route: '/admin/users', roles: ['ADMIN'] },
            { id: 'roles', title: 'Role Management', icon: 'lock_person', route: '/admin/roles', roles: ['ADMIN'] },
            { id: 'audit', title: 'Audit Logs', icon: 'history', route: '/admin/audit', roles: ['ADMIN'] },
            { id: 'settings', title: 'System Settings', icon: 'settings', route: '/admin/settings', roles: ['ADMIN', 'MANAGER'] },
        ]
    },
    {
        id: 'inventory',
        title: 'Inventory',
        icon: 'inventory_2',
        roles: ['ADMIN', 'MANAGER', 'USER'],
        children: [
            { id: 'products', title: 'Products', icon: 'category', route: '/inventory/products' },
            { id: 'stock', title: 'Stock Levels', icon: 'warehouse', route: '/inventory/stock' },
            { id: 'suppliers', title: 'Suppliers', icon: 'local_shipping', route: '/inventory/suppliers' },
        ]
    },
    {
        id: 'reports',
        title: 'Reports',
        icon: 'bar_chart',
        roles: ['ADMIN', 'MANAGER', 'USER'],
        children: [
            { id: 'sales-report', title: 'Sales Report', icon: 'monetization_on', route: '/reports/sales' },
            { id: 'inventory-report', title: 'Inventory Report', icon: 'description', route: '/reports/inventory' },
            { id: 'staff-performance', title: 'Staff Performance', icon: 'badge', route: '/reports/staff', roles: ['ADMIN', 'MANAGER'] },
        ]
    },
    {
        id: 'kitchen',
        title: 'Kitchen Display',
        icon: 'kitchen',
        route: '/kitchen',
        roles: ['ADMIN', 'MANAGER', 'WAITER'] // Waiters might check status
    },
    {
        id: 'delivery',
        title: 'Delivery',
        icon: 'delivery_dining',
        route: '/delivery',
        roles: ['ADMIN', 'MANAGER', 'WAITER']
    },
    {
        id: 'reservations',
        title: 'Reservations',
        icon: 'event_seat',
        route: '/reservations',
        roles: ['ADMIN', 'MANAGER', 'WAITER']
    },
    {
        id: 'marketing',
        title: 'Marketing',
        icon: 'campaign',
        route: '/marketing',
        roles: ['ADMIN', 'MANAGER']
    },
    {
        id: 'loyalty',
        title: 'Loyalty Program',
        icon: 'card_membership',
        route: '/loyalty',
        roles: ['ADMIN', 'MANAGER']
    },
    {
        id: 'accounting',
        title: 'Accounting',
        icon: 'account_balance',
        route: '/accounting',
        roles: ['ADMIN', 'MANAGER']
    },
    {
        id: 'help',
        title: 'Help & Support',
        icon: 'help',
        route: '/help',
        roles: ['ADMIN', 'MANAGER', 'USER', 'WAITER']
    }
];
