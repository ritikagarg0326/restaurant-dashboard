import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';
import { Expense } from '../../shared/models/models';

const EXPENSE_CATEGORIES = [
  'Raw Material', 'Packaging', 'Electricity', 'Gas/Fuel',
  'Wages', 'Cleaning', 'Maintenance', 'Rent',
  'Internet', 'Recharge', 'Advance', 'Miscellaneous'
];

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="fade-in">
      <div class="page-header">
        <div>
          <h1>Expenses</h1>
          <div class="subtitle">Track daily operational costs</div>
        </div>
        <button class="btn btn-primary" (click)="showModal = true">+ Add Expense</button>
      </div>

      <div *ngIf="success" class="alert alert-success">✅ Expense recorded</div>
      <div *ngIf="error" class="alert alert-danger">⚠️ {{ error }}</div>

      <!-- Filter -->
      <div class="filter-bar">
        <input type="date" class="form-control" [(ngModel)]="filterFrom" (change)="loadExpenses()" style="width:150px" />
        <span style="color:var(--text-muted)">to</span>
        <input type="date" class="form-control" [(ngModel)]="filterTo" (change)="loadExpenses()" style="width:150px" />
        <button class="btn btn-ghost btn-sm" (click)="clearFilter()">Clear</button>

        <div class="total-badge">
          Total: <strong>₹{{ totalExpenses | number:'1.0-0' }}</strong>
        </div>
      </div>

      <!-- Category Summary -->
      <div class="cat-summary">
        <div *ngFor="let cat of categorySummary" class="cat-card card">
          <div class="cat-name">{{ cat.category }}</div>
          <div class="cat-amount">₹{{ cat.amount | number:'1.0-0' }}</div>
          <div class="cat-count">{{ cat.count }} entries</div>
        </div>
      </div>

      <!-- Expenses Table -->
      <div class="card" style="padding:0;margin-top:20px">
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let e of expenses">
                <td style="font-family:var(--font-mono);font-size:0.8rem">{{ e.date }}</td>
                <td><span class="badge badge-info">{{ e.category }}</span></td>
                <td style="font-weight:700;font-family:var(--font-mono)">₹{{ e.amount | number:'1.0-0' }}</td>
                <td style="color:var(--text-muted)">{{ e.notes || '—' }}</td>
              </tr>
              <tr *ngIf="expenses.length === 0">
                <td colspan="4" style="text-align:center;color:var(--text-muted);padding:32px">No expenses found</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Add Expense Modal -->
      <div class="modal-overlay" *ngIf="showModal" (click)="closeModal($event)">
        <div class="modal-box">
          <div class="modal-header">
            <h3>Add Expense</h3>
            <button class="modal-close" (click)="showModal = false">×</button>
          </div>
          <div class="form-group">
            <label class="form-label">Date *</label>
            <input type="date" class="form-control" [(ngModel)]="form.date" />
          </div>
          <div class="form-group">
            <label class="form-label">Category *</label>
            <select class="form-control" [(ngModel)]="form.category">
              <option value="">-- Select category --</option>
              <option *ngFor="let c of categories" [value]="c">{{ c }}</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Amount (₹) *</label>
            <input type="number" class="form-control" [(ngModel)]="form.amount" placeholder="0" min="0" />
          </div>
          <div class="form-group">
            <label class="form-label">Notes</label>
            <input class="form-control" [(ngModel)]="form.notes" placeholder="Optional description…" />
          </div>
          <div style="display:flex;gap:12px;justify-content:flex-end">
            <button class="btn btn-ghost" (click)="showModal = false">Cancel</button>
            <button class="btn btn-primary" (click)="saveExpense()" [disabled]="saving">
              <span *ngIf="saving" class="spinner"></span>
              {{ saving ? '' : 'Save Expense' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .filter-bar { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; flex-wrap: wrap; }
    .total-badge {
      margin-left: auto;
      background: var(--primary-muted);
      color: var(--primary);
      padding: 6px 16px;
      border-radius: 20px;
      font-size: 0.875rem;
    }
    .cat-summary { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px; }
    .cat-card { text-align: center; padding: 16px; }
    .cat-name { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 8px; }
    .cat-amount { font-size: 1.2rem; font-weight: 800; font-family: var(--font-mono); color: var(--text); }
    .cat-count { font-size: 0.72rem; color: var(--text-dim); margin-top: 4px; }
  `]
})
export class ExpensesComponent implements OnInit {
  expenses: Expense[] = [];
  showModal = false;
  saving = false;
  success = false;
  error = '';
  filterFrom = '';
  filterTo = '';
  categories = EXPENSE_CATEGORIES;

  form = { date: new Date().toISOString().split('T')[0], category: '', amount: 0, notes: '' };

  get totalExpenses(): number { return this.expenses.reduce((s, e) => s + e.amount, 0); }

  get categorySummary() {
    const map: Record<string, { category: string; amount: number; count: number }> = {};
    for (const e of this.expenses) {
      if (!map[e.category]) map[e.category] = { category: e.category, amount: 0, count: 0 };
      map[e.category].amount += e.amount;
      map[e.category].count++;
    }
    return Object.values(map).sort((a, b) => b.amount - a.amount);
  }

  constructor(private api: ApiService) {}

  ngOnInit() { this.loadExpenses(); }

  loadExpenses() {
    this.api.getExpenses({
      date_from: this.filterFrom || undefined,
      date_to: this.filterTo || undefined
    }).subscribe(e => this.expenses = e);
  }

  clearFilter() {
    this.filterFrom = '';
    this.filterTo = '';
    this.loadExpenses();
  }

  closeModal(e: MouseEvent) {
    if ((e.target as Element).classList.contains('modal-overlay')) this.showModal = false;
  }

  saveExpense() {
    if (!this.form.category || !this.form.amount || this.form.amount <= 0) {
      this.error = 'Category and amount are required'; return;
    }
    this.saving = true;
    this.api.createExpense(this.form).subscribe({
      next: () => {
        this.saving = false; this.showModal = false; this.success = true; this.error = '';
        this.form = { date: new Date().toISOString().split('T')[0], category: '', amount: 0, notes: '' };
        this.loadExpenses();
        setTimeout(() => this.success = false, 3000);
      },
      error: err => { this.saving = false; this.error = err.error?.detail || 'Failed'; }
    });
  }
}
