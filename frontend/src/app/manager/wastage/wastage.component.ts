import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';
import { Expense, InventoryItem } from '../../shared/models/models';

@Component({
  selector: 'app-wastage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="fade-in">
      <div class="page-header">
        <div>
          <h1>Wastage</h1>
          <div class="subtitle">Log food wastage and automatically deduct it from inventory</div>
        </div>
        <button class="btn btn-primary" (click)="loadLatestInventory()">Refresh</button>
      </div>

      <div *ngIf="success" class="alert alert-success">✅ Wastage recorded and expense created</div>
      <div *ngIf="error" class="alert alert-danger">⚠️ {{ error }}</div>

      <div class="card" style="margin-bottom:20px">
        <div class="card-title">Report Wastage</div>
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">Date</label>
            <input type="date" class="form-control" [(ngModel)]="date" />
          </div>
          <div class="form-group">
            <label class="form-label">Inventory Item</label>
            <select class="form-control" [(ngModel)]="selectedItem" (change)="onItemChange()">
              <option value="">-- Select item --</option>
              <option *ngFor="let item of inventoryItems" [value]="item.item_name">{{ item.item_name }}</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Unit</label>
            <input class="form-control" [value]="selectedUnit" disabled />
          </div>
          <div class="form-group">
            <label class="form-label">Wastage Quantity</label>
            <input type="number" class="form-control" [(ngModel)]="wastageQty" min="0" step="0.1" />
          </div>
          <div class="form-group">
            <label class="form-label">Cost Per Unit (₹)</label>
            <input type="number" class="form-control" [(ngModel)]="costPerUnit" min="0" step="0.01" />
          </div>
          <div class="form-group">
            <label class="form-label">Notes</label>
            <input class="form-control" [(ngModel)]="notes" placeholder="Optional details" />
          </div>
        </div>

        <div class="summary-row">
          <div>Total wastage amount</div>
          <div class="summary-value">₹{{ totalAmount | number:'1.0-0' }}</div>
        </div>

        <div style="display:flex;gap:12px;justify-content:flex-end;margin-top:16px">
          <button class="btn btn-ghost" (click)="resetForm()">Reset</button>
          <button class="btn btn-primary" (click)="saveWastage()" [disabled]="saving || !selectedItem || wastageQty <= 0 || costPerUnit <= 0">
            <span *ngIf="saving" class="spinner"></span>
            {{ saving ? '' : 'Log Wastage' }}
          </button>
        </div>
      </div>

      <div class="card">
        <div class="card-title">Recent wastage entries</div>
        <div *ngIf="wasteHistory.length === 0" style="color:var(--text-muted);padding:24px">
          No wastage recorded yet.
        </div>
        <div class="table-wrap" *ngIf="wasteHistory.length > 0">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let w of wasteHistory">
                <td>{{ w.date }}</td>
                <td style="font-weight:700;font-family:var(--font-mono)">₹{{ w.amount | number:'1.0-0' }}</td>
                <td>{{ w.notes || 'Wastage item' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .form-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; }
    .summary-row { display: flex; justify-content: space-between; align-items: center; margin-top: 18px; padding: 12px; border: 1px solid var(--border); border-radius: var(--radius-md); background: var(--bg-card); }
    .summary-value { font-weight: 700; font-family: var(--font-mono); }
  `]
})
export class WastageComponent implements OnInit {
  inventoryItems: InventoryItem[] = [];
  wasteHistory: Expense[] = [];
  selectedItem = '';
  selectedUnit = '';
  wastageQty = 0;
  costPerUnit = 0;
  date = new Date().toISOString().split('T')[0];
  notes = '';
  saving = false;
  success = false;
  error = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadLatestInventory();
    this.loadWasteHistory();
  }

  get totalAmount(): number {
    return Math.max(0, this.wastageQty * this.costPerUnit);
  }

  loadLatestInventory() {
    this.api.getInventory().subscribe(items => {
      if (items.length) {
        this.inventoryItems = items[0].items;
      } else {
        this.inventoryItems = [];
      }
      if (!this.inventoryItems.find(i => i.item_name === this.selectedItem)) {
        this.selectedItem = '';
        this.selectedUnit = '';
        this.costPerUnit = 0;
      }
    });
  }

  loadWasteHistory() {
    this.api.getExpenses().subscribe(expenses => {
      this.wasteHistory = expenses.filter(e => e.category === 'Wastage').slice(0, 7);
    });
  }

  onItemChange() {
    const item = this.inventoryItems.find(i => i.item_name === this.selectedItem);
    if (item) {
      this.selectedUnit = item.unit;
      this.costPerUnit = item.cost_per_unit;
    } else {
      this.selectedUnit = '';
      this.costPerUnit = 0;
    }
  }

  saveWastage() {
    this.error = '';
    if (!this.selectedItem || this.wastageQty <= 0 || this.costPerUnit <= 0) {
      this.error = 'Select an item and enter valid wastage quantity and cost';
      return;
    }
    this.saving = true;
    this.api.reportWastage({
      date: this.date,
      item_name: this.selectedItem,
      unit: this.selectedUnit,
      wastage_qty: this.wastageQty,
      cost_per_unit: this.costPerUnit,
      notes: this.notes
    }).subscribe({
      next: () => {
        this.saving = false;
        this.success = true;
        this.error = '';
        this.resetForm();
        this.loadLatestInventory();
        this.loadWasteHistory();
        setTimeout(() => this.success = false, 3000);
      },
      error: err => {
        this.saving = false;
        this.error = err.error?.detail || 'Failed to log wastage';
      }
    });
  }

  resetForm() {
    this.selectedItem = '';
    this.selectedUnit = '';
    this.wastageQty = 0;
    this.costPerUnit = 0;
    this.notes = '';
  }
}
