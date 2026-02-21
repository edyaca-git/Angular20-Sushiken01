import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

export interface GridAction {
    label: string;
    icon: string;
    tooltip: string;
    action: () => void;
    color?: string; // Hex code or Tailwind class
}

@Component({
    selector: 'app-grid-tool',
    standalone: true,
    imports: [CommonModule, MatIconModule, MatTooltipModule],
    templateUrl: './grid-tool.component.html',
    styleUrl: './grid-tool.component.scss'
})
export class GridToolComponent {
    actions = input.required<GridAction[]>();
}
