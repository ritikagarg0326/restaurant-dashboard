import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';
import { roleGuard } from './shared/guards/role.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./shared/components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'admin',
    canActivate: [authGuard, roleGuard],
    data: { role: 'admin' },
    loadComponent: () => import('./admin/admin-shell.component').then(m => m.AdminShellComponent),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('./admin/dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent) },
      { path: 'restaurants', loadComponent: () => import('./admin/restaurants/restaurants.component').then(m => m.RestaurantsComponent) },
      { path: 'users', loadComponent: () => import('./admin/users/users.component').then(m => m.UsersComponent) }
    ]
  },
  {
    path: 'manager',
    canActivate: [authGuard, roleGuard],
    data: { role: 'manager' },
    loadComponent: () => import('./manager/manager-shell.component').then(m => m.ManagerShellComponent),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('./manager/dashboard/manager-dashboard.component').then(m => m.ManagerDashboardComponent) },
      { path: 'orders', loadComponent: () => import('./manager/orders/orders.component').then(m => m.OrdersComponent) },
      { path: 'inventory', loadComponent: () => import('./manager/inventory/inventory.component').then(m => m.InventoryComponent) },
      { path: 'wastage', loadComponent: () => import('./manager/wastage/wastage.component').then(m => m.WastageComponent) },
      { path: 'expenses', loadComponent: () => import('./manager/expenses/expenses.component').then(m => m.ExpensesComponent) }
    ]
  },
  { path: '**', redirectTo: '/login' }
];
