import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GridToolComponent, GridAction } from '../../shared/components/grid-tool/grid-tool.component';

@Component({
  selector: 'app-dynamic-page',
  standalone: true,
  imports: [CommonModule, GridToolComponent],
  template: `
    <div class="space-y-6">
      <div class="flex items-center gap-4">
        <h1 class="text-2xl font-bold text-white capitalize">{{ pageTitle() }}</h1>
      </div>

      <div class="p-6 bg-slate-800/30 rounded-2xl border border-primary-500/20 text-center py-20 backdrop-blur-sm">
        <div class="text-6xl mb-4 opacity-20">🚧</div>
        <h2 class="text-xl text-gray-300 font-medium">Feature Under Construction</h2>
        <p class="text-gray-500 mt-2">This is a placeholder page for the {{ pageTitle() }} module.</p>
      </div>

      <div>
        <h2 class="text-lg font-semibold text-white mb-4">Module Actions</h2>
        <app-grid-tool [actions]="actions()"></app-grid-tool>
      </div>
    </div>
  `
})
export class DynamicPageComponent {
  route = inject(ActivatedRoute);

  pageTitle = computed(() => {
    // Extract last segment of URL as title
    const url = this.route.snapshot.url;
    return url.length > 0 ? url[url.length - 1].path.replace(/-/g, ' ') : 'Page';
  });

  actions = signal<GridAction[]>([
    { label: 'Create New', icon: 'add_circle', tooltip: 'Create new item', action: () => alert('Action 1'), color: '#4caf50' },
    { label: 'View List', icon: 'list', tooltip: 'View all items', action: () => alert('Action 2'), color: '#2196f3' },
    { label: 'Export', icon: 'download', tooltip: 'Export data', action: () => alert('Action 3'), color: '#ff9800' },
    { label: 'Import', icon: 'upload', tooltip: 'Import data', action: () => alert('Action 4'), color: '#9c27b0' },
    { label: 'Settings', icon: 'tune', tooltip: 'Configure module', action: () => alert('Action 5'), color: '#607d8b' },
    { label: 'Help', icon: 'help', tooltip: 'View documentation', action: () => alert('Action 6'), color: '#00bcd4' },
  ]);
}
