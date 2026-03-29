import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent, NavItem } from '../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-manager-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent],
  template: `
    <div class="app-shell">
      <app-sidebar [navItems]="nav" role="manager" />
      <div class="main-content">
        <div class="page-body">
          <router-outlet />
        </div>
      </div>
    </div>
  `
})
export class ManagerShellComponent {
  nav: NavItem[] = [
    { label: 'Dashboard',  icon: '📊', route: '/manager/dashboard' },
    { label: 'New Order',  icon: '🛒', route: '/manager/orders' },
    { label: 'Inventory',  icon: '📦', route: '/manager/inventory' },
    { label: 'Expenses',   icon: '💸', route: '/manager/expenses' }
  ];
}
