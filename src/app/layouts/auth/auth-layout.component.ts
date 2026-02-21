import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div class="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full blur-[100px]"
             style="background: color-mix(in srgb, var(--color-primary-500), transparent 80%)"></div>
        <div class="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full blur-[100px]"
             style="background: color-mix(in srgb, var(--color-secondary-500), transparent 80%)"></div>
      </div>

      <div class="w-full max-w-md relative z-10">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AuthLayoutComponent { }
