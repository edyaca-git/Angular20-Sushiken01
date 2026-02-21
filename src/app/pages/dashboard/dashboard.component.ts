import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridToolComponent, GridAction } from '../../shared/components/grid-tool/grid-tool.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, GridToolComponent],
    templateUrl: './dashboard.component.html',
    styles: [`:host { display: block; }`]
})
export class DashboardComponent {

    dashboardActions = signal<GridAction[]>([
        { label: 'Consultar Ctas', icon: 'search', tooltip: 'Consultar Cuentas', action: () => console.log('Consultar'), color: '#ff9800' }, // Orange
        { label: 'Monitor Ventas', icon: 'trending_up', tooltip: 'Monitor de Ventas', action: () => console.log('Ventas'), color: '#2196f3' }, // Blue
        { label: 'Compras', icon: 'shopping_cart', tooltip: 'Gestión de Compras', action: () => console.log('Compras'), color: '#4caf50' }, // Green
        { label: 'Trasf./Almacén', icon: 'local_shipping', tooltip: 'Transferencias y Almacén', action: () => console.log('Almacen'), color: '#ff5722' }, // Deep Orange/Red
        { label: 'Inventario Físico', icon: 'inventory_2', tooltip: 'Inventario Físico', action: () => console.log('Inventario'), color: '#9c27b0' }, // Purple
        { label: 'Gráficas', icon: 'bar_chart', tooltip: 'Reportes y Gráficas', action: () => console.log('Graficas'), color: '#ff9800' }, // Orange
        { label: 'Salir', icon: 'logout', tooltip: 'Salir del sistema', action: () => console.log('Salir'), color: '#757575' }, // Grey
    ]);

}
