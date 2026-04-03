import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

export interface NavItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <aside class="sidebar">
      <div class="sidebar-brand">
        <div class="brand-icon">🍽️</div>
        <div>
          <div class="brand-name">Son of Swaad </div>
          <div class="brand-role">{{ role | titlecase }}</div>
        </div>
      </div>

      <nav class="sidebar-nav">
        <a
          *ngFor="let item of navItems"
          [routerLink]="item.route"
          routerLinkActive="active"
          class="nav-item">
          <span class="nav-icon">{{ item.icon }}</span>
          <span>{{ item.label }}</span>
        </a>
      </nav>

      <div class="sidebar-footer">
        <div class="user-info">
          <div class="user-avatar">{{ userName?.charAt(0) | uppercase }}</div>
          <div class="user-details">
            <div class="user-name">{{ userName }}</div>
            <div class="user-role">{{ role }}</div>
          </div>
        </div>
        <button class="logout-btn" (click)="logout()" title="Logout">⏻</button>
      </div>
    </aside>
  `,
  styles: [`
    .sidebar {
      position: fixed;
      left: 0; top: 0; bottom: 0;
      width: var(--sidebar-width);
      background: var(--bg-card);
      border-right: 1px solid var(--border);
      display: flex;
      flex-direction: column;
      z-index: 100;
    }
    .sidebar-brand {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 20px 20px 16px;
      border-bottom: 1px solid var(--border);
    }
    .brand-icon { font-size: 1.5rem; }
    .brand-name { font-size: 0.95rem; font-weight: 700; color: var(--text); }
    .brand-role {
      font-size: 0.68rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--primary);
    }
    .sidebar-nav {
      flex: 1;
      padding: 16px 12px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      overflow-y: auto;
    }
    .nav-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 14px;
      border-radius: var(--radius-sm);
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      transition: all var(--transition);
    }
    .nav-item:hover { background: var(--bg-card-2); color: var(--text); }
    .nav-item.active {
      background: var(--primary-muted);
      color: var(--primary);
      font-weight: 600;
    }
    .nav-icon { font-size: 1.1rem; width: 22px; text-align: center; }
    .sidebar-footer {
      padding: 16px;
      border-top: 1px solid var(--border);
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .user-info { display: flex; align-items: center; gap: 10px; flex: 1; min-width: 0; }
    .user-avatar {
      width: 34px; height: 34px;
      border-radius: 50%;
      background: var(--primary-muted);
      color: var(--primary);
      display: flex; align-items: center; justify-content: center;
      font-weight: 700;
      font-size: 0.9rem;
      flex-shrink: 0;
    }
    .user-name { font-size: 0.82rem; font-weight: 600; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .user-role { font-size: 0.7rem; color: var(--text-muted); text-transform: capitalize; }
    .logout-btn {
      background: none;
      border: 1px solid var(--border);
      color: var(--text-muted);
      border-radius: var(--radius-sm);
      width: 32px; height: 32px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: all var(--transition);
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .logout-btn:hover { background: rgba(255,94,125,0.1); color: var(--danger); border-color: rgba(255,94,125,0.3); }
  `]
})
export class SidebarComponent {
  @Input() navItems: NavItem[] = [];
  @Input() role = '';

  get userName() { return this.auth.name; }

  constructor(private auth: AuthService) {}
  logout() { this.auth.logout(); }
}
