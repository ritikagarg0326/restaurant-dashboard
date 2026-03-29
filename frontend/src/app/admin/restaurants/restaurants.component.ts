import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';
import { ApiService } from '../../shared/services/api.service';
import { Restaurant, User } from '../../shared/models/models';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="fade-in">
      <div class="page-header">
        <div>
          <h1>Restaurants</h1>
          <div class="subtitle">Manage all outlets</div>
        </div>
        <button class="btn btn-primary" (click)="showModal = true">+ Add Restaurant</button>
      </div>

      <div *ngIf="success" class="alert alert-success">✅ {{ success }}</div>
      <div *ngIf="error" class="alert alert-danger">⚠️ {{ error }}</div>
      <div *ngIf="loading" class="alert alert-info">Loading restaurants...</div>

      <!-- Cards Grid -->
      <div class="restaurant-grid">
        <div *ngFor="let r of restaurants" class="restaurant-card card">
          <div class="rc-header">
            <div class="rc-icon">🏪</div>
            <div>
              <div class="rc-name">{{ r.name }}</div>
              <div class="rc-address">{{ r.address || 'No address' }}</div>
            </div>
          </div>
          <div class="rc-meta">
            <div class="rc-meta-item">
              <span class="rc-meta-label">Manager</span>
              <span class="rc-meta-value">{{ r.manager_name || 'Unassigned' }}</span>
            </div>
            <div class="rc-meta-item">
              <span class="rc-meta-label">Phone</span>
              <span class="rc-meta-value">{{ r.phone || '—' }}</span>
            </div>
          </div>
          <div class="rc-actions">
            <button class="btn btn-ghost btn-sm" (click)="openAssign(r)">Assign Manager</button>
          </div>
        </div>

        <div *ngIf="restaurants.length === 0" class="empty-state" style="grid-column:1/-1">
          <div class="empty-icon">🏪</div>
          <h3>No restaurants yet</h3>
          <p>Add your first outlet to get started</p>
        </div>
      </div>

      <!-- Add Restaurant Modal -->
      <div class="modal-overlay" *ngIf="showModal" (click)="closeModal($event)">
        <div class="modal-box">
          <div class="modal-header">
            <h3>Add Restaurant</h3>
            <button class="modal-close" (click)="showModal = false">×</button>
          </div>
          <div class="form-group">
            <label class="form-label">Restaurant Name *</label>
            <input class="form-control" [(ngModel)]="form.name" placeholder="e.g. Spice Garden Kanpur" />
          </div>
          <div class="form-group">
            <label class="form-label">Address</label>
            <input class="form-control" [(ngModel)]="form.address" placeholder="Full address" />
          </div>
          <div class="form-group">
            <label class="form-label">Phone</label>
            <input class="form-control" [(ngModel)]="form.phone" placeholder="+91 XXXXXXXXXX" />
          </div>
          <div style="display:flex;gap:12px;justify-content:flex-end;margin-top:8px">
            <button class="btn btn-ghost" (click)="showModal = false">Cancel</button>
            <button class="btn btn-primary" (click)="createRestaurant()" [disabled]="saving">
              <span *ngIf="saving" class="spinner"></span>
              {{ saving ? '' : 'Create' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Assign Manager Modal -->
      <div class="modal-overlay" *ngIf="showAssign" (click)="closeModal($event)">
        <div class="modal-box">
          <div class="modal-header">
            <h3>Assign Manager — {{ assignTarget?.name }}</h3>
            <button class="modal-close" (click)="showAssign = false">×</button>
          </div>
          <div class="form-group">
            <label class="form-label">Select Manager</label>
            <select class="form-control" [(ngModel)]="assignUserId">
              <option value="">-- Choose Manager --</option>
              <option *ngFor="let u of managers" [value]="u.id">{{ u.name }} ({{ u.email }})</option>
            </select>
          </div>
          <div style="display:flex;gap:12px;justify-content:flex-end;margin-top:8px">
            <button class="btn btn-ghost" (click)="showAssign = false">Cancel</button>
            <button class="btn btn-primary" (click)="doAssign()" [disabled]="!assignUserId || saving">Assign</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .restaurant-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 18px; }
    .restaurant-card { cursor: default; }
    .rc-header { display: flex; align-items: flex-start; gap: 14px; margin-bottom: 16px; }
    .rc-icon { font-size: 1.8rem; flex-shrink: 0; }
    .rc-name { font-size: 1rem; font-weight: 700; color: var(--text); }
    .rc-address { font-size: 0.8rem; color: var(--text-muted); margin-top: 3px; }
    .rc-meta { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
    .rc-meta-item { display: flex; justify-content: space-between; }
    .rc-meta-label { font-size: 0.75rem; color: var(--text-muted); }
    .rc-meta-value { font-size: 0.85rem; font-weight: 500; }
    .rc-actions { border-top: 1px solid var(--border); padding-top: 14px; }
  `]
})
export class RestaurantsComponent implements OnInit, OnDestroy {
  restaurants: Restaurant[] = [];
  managers: User[] = [];
  showModal = false;
  showAssign = false;
  saving = false;
  loading = false;
  success = '';
  error = '';
  form = { name: '', address: '', phone: '' };
  assignTarget: Restaurant | null = null;
  assignUserId = '';
  private destroy$ = new Subject<void>();

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.loadAll();
    this.api.getUsers().subscribe(u => this.managers = u);
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      if (this.router.url.includes('/admin/restaurants')) {
        this.loadAll();
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadAll() {
    this.error = '';
    this.loading = true;
    this.api.getRestaurants().subscribe({
      next: r => {
        this.restaurants = r;
        this.loading = false;
      },
      error: err => {
        this.loading = false;
        this.error = err.error?.detail || 'Failed to load restaurants';
        console.error('Restaurants load failed', err);
      }
    });
  }

  closeModal(e: MouseEvent) {
    if ((e.target as Element).classList.contains('modal-overlay')) {
      this.showModal = false;
      this.showAssign = false;
    }
  }

  createRestaurant() {
    this.error = '';
    if (!this.form.name.trim()) { this.error = 'Name is required'; return; }
    this.saving = true;
    this.api.createRestaurant(this.form).subscribe({
      next: restaurant => {
        this.saving = false;
        this.showModal = false;
        this.form = { name: '', address: '', phone: '' };
        this.success = 'Restaurant created!';
        this.restaurants = [...this.restaurants, restaurant];
        this.loadAll();
        setTimeout(() => this.success = '', 3000);
      },
      error: err => { this.saving = false; this.error = err.error?.detail || 'Failed'; }
    });
  }

  openAssign(r: Restaurant) {
    this.assignTarget = r;
    this.assignUserId = r.manager_id || '';
    this.showAssign = true;
  }

  doAssign() {
    if (!this.assignTarget || !this.assignUserId) return;
    this.saving = true;
    this.api.assignManager(this.assignTarget.id, this.assignUserId).subscribe({
      next: () => {
        this.saving = false;
        this.showAssign = false;
        this.success = 'Manager assigned!';
        this.loadAll();
        setTimeout(() => this.success = '', 3000);
      },
      error: err => { this.saving = false; this.error = err.error?.detail || 'Failed'; }
    });
  }
}
