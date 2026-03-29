import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';
import { User, Restaurant } from '../../shared/models/models';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="fade-in">
      <div class="page-header">
        <div>
          <h1>Managers</h1>
          <div class="subtitle">Create and manage restaurant managers</div>
        </div>
        <button class="btn btn-primary" (click)="showModal = true">+ Add Manager</button>
      </div>

      <div *ngIf="success" class="alert alert-success">✅ {{ success }}</div>
      <div *ngIf="error" class="alert alert-danger">⚠️ {{ error }}</div>

      <div class="card" style="padding:0">
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Restaurant</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let u of users">
                <td>
                  <div class="user-cell">
                    <div class="user-av">{{ u.name.charAt(0) | uppercase }}</div>
                    <span>{{ u.name }}</span>
                  </div>
                </td>
                <td style="color:var(--text-muted)">{{ u.email }}</td>
                <td>{{ getRestaurantName(u.restaurant_id) }}</td>
                <td>
                  <span class="badge" [class.badge-success]="u.is_active" [class.badge-danger]="!u.is_active">
                    {{ u.is_active ? 'Active' : 'Disabled' }}
                  </span>
                </td>
                <td>
                  <button
                    class="btn btn-sm"
                    [class.btn-ghost]="u.is_active"
                    [class.btn-success]="!u.is_active"
                    (click)="toggle(u)">
                    {{ u.is_active ? 'Disable' : 'Enable' }}
                  </button>
                </td>
              </tr>
              <tr *ngIf="users.length === 0">
                <td colspan="5" style="text-align:center;color:var(--text-muted);padding:40px">
                  No managers yet. Create one to get started.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Create Manager Modal -->
      <div class="modal-overlay" *ngIf="showModal" (click)="closeModal($event)">
        <div class="modal-box">
          <div class="modal-header">
            <h3>Create Manager Account</h3>
            <button class="modal-close" (click)="showModal = false">×</button>
          </div>
          <p style="font-size:0.82rem;margin-bottom:20px">
            Managers cannot self-register. Only admin can create their accounts.
          </p>
          <div class="form-group">
            <label class="form-label">Full Name *</label>
            <input class="form-control" [(ngModel)]="form.name" placeholder="Manager name" />
          </div>
          <div class="form-group">
            <label class="form-label">Email Address *</label>
            <input class="form-control" type="email" [(ngModel)]="form.email" placeholder="manager@restaurant.com" />
          </div>
          <div class="form-group">
            <label class="form-label">Password *</label>
            <input class="form-control" type="password" [(ngModel)]="form.password" placeholder="Min 8 characters" />
          </div>
          <div class="form-group">
            <label class="form-label">Assign Restaurant (optional)</label>
            <select class="form-control" [(ngModel)]="form.restaurant_id">
              <option value="">-- Assign later --</option>
              <option *ngFor="let r of restaurants" [value]="r.id">{{ r.name }}</option>
            </select>
          </div>
          <div style="display:flex;gap:12px;justify-content:flex-end">
            <button class="btn btn-ghost" (click)="showModal = false">Cancel</button>
            <button class="btn btn-primary" (click)="create()" [disabled]="saving">
              <span *ngIf="saving" class="spinner"></span>
              {{ saving ? '' : 'Create Manager' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .user-cell { display: flex; align-items: center; gap: 10px; }
    .user-av {
      width: 30px; height: 30px;
      border-radius: 50%;
      background: var(--primary-muted);
      color: var(--primary);
      display: flex; align-items: center; justify-content: center;
      font-weight: 700; font-size: 0.8rem;
    }
  `]
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  restaurants: Restaurant[] = [];
  showModal = false;
  saving = false;
  success = '';
  error = '';
  form = { name: '', email: '', password: '', restaurant_id: '' };

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadAll();
    this.api.getRestaurants().subscribe(r => this.restaurants = r);
  }

  loadAll() {
    this.api.getUsers().subscribe(u => this.users = u);
  }

  getRestaurantName(id?: string): string {
    if (!id) return '—';
    return this.restaurants.find(r => r.id === id)?.name || id;
  }

  closeModal(e: MouseEvent) {
    if ((e.target as Element).classList.contains('modal-overlay')) this.showModal = false;
  }

  create() {
    if (!this.form.name || !this.form.email || !this.form.password) {
      this.error = 'Name, email and password are required'; return;
    }
    this.saving = true;
    this.api.createUser(this.form).subscribe({
      next: () => {
        this.saving = false; this.showModal = false;
        this.form = { name: '', email: '', password: '', restaurant_id: '' };
        this.success = 'Manager account created!';
        this.loadAll();
        setTimeout(() => this.success = '', 3000);
      },
      error: err => { this.saving = false; this.error = err.error?.detail || 'Failed to create'; }
    });
  }

  toggle(u: User) {
    this.api.toggleUser(u.id).subscribe({
      next: res => { u.is_active = res.is_active; },
      error: () => { this.error = 'Failed to update status'; }
    });
  }
}
