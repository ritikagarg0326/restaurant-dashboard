import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent, NavItem } from '../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-admin-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent],
  template: `
    <div class="app-shell">
      <app-sidebar [navItems]="nav" role="admin" />
      <div class="main-content">
        <div class="page-body">
          <router-outlet />
        </div>
      </div>
    </div>
  `
})
export class AdminShellComponent {
  nav: NavItem[] = [
    { label: 'Dashboard', icon: '📊', route: '/admin/dashboard' },
    { label: 'Restaurants', icon: '🏪', route: '/admin/restaurants' },
    { label: 'Managers', icon: '👥', route: '/admin/users' }
  ];
}
