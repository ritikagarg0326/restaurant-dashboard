import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';

interface InvLine { item_name: string; unit: string; opening_stock: number; purchased_qty: number; closing_stock: number; cost_per_unit: number; }

const DEFAULT_ITEMS: InvLine[] = [
  { item_name: 'Paneer', unit: 'kg', opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: 'Milk', unit: 'L', opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: 'Butter', unit: 'kg', opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: 'Garam Masala', unit: 'kg', opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: 'Maida', unit: 'kg', opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: 'Atta', unit: 'kg', opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: 'Salt', unit: 'kg', opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: 'Refined Oil', unit: 'L', opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: 'Degi Mirch', unit: 'kg', opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: 'Haldi', unit: 'kg', opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: 'Bread Crumbs', unit: 'kg', opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: 'Cheese', unit: 'kg', opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: 'Onion', unit: 'kg', opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: 'Tomato', unit: 'kg', opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
];

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="fade-in">
      <div class="page-header">
        <div>
          <h1>Inventory</h1>
          <div class="subtitle">Daily stock tracking</div>
        </div>
        <div style="display:flex;gap:10px;align-items:center">
          <input type="date" class="form-control" [(ngModel)]="selectedDate" style="width:160px" />
          <button class="btn btn-ghost" (click)="addRow()">+ Add Item</button>
          <button class="btn btn-primary" (click)="submit()" [disabled]="saving">
            <span *ngIf="saving" class="spinner"></span>
            {{ saving ? '' : 'Save Inventory' }}
          </button>
        </div>
      </div>

      <div *ngIf="success" class="alert alert-success">✅ Inventory saved for {{ selectedDate }}</div>
      <div *ngIf="error" class="alert alert-danger">⚠️ {{ error }}</div>

      <!-- Low Stock Alerts -->
      <div *ngIf="lowStockItems.length > 0" class="alert alert-warning" style="margin-bottom:16px">
        ⚠️ Low stock: <strong>{{ lowStockItems.map(i => i.item).join(', ') }}</strong>
      </div>

      <div class="card" style="padding:0">
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Item Name</th>
                <th>Unit</th>
                <th>Opening Stock</th>
                <th>Purchased</th>
                <th>Closing Stock</th>
                <th>Consumption</th>
                <th>Cost/Unit (₹)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let row of items; let i = index">
                <td style="color:var(--text-dim)">{{ i+1 }}</td>
                <td>
                  <input class="form-control" [(ngModel)]="row.item_name" [name]="'n'+i" placeholder="Item name" style="min-width:140px" />
                </td>
                <td>
                  <select class="form-control" [(ngModel)]="row.unit" [name]="'u'+i" style="width:70px">
                    <option>kg</option><option>g</option><option>L</option><option>ml</option><option>pcs</option><option>pkt</option>
                  </select>
                </td>
                <td>
                  <input class="form-control num-input" type="number" [(ngModel)]="row.opening_stock" [name]="'os'+i" min="0" step="0.1" />
                </td>
                <td>
                  <input class="form-control num-input" type="number" [(ngModel)]="row.purchased_qty" [name]="'pq'+i" min="0" step="0.1" />
                </td>
                <td>
                  <input class="form-control num-input" type="number" [(ngModel)]="row.closing_stock" [name]="'cs'+i" min="0" step="0.1" />
                </td>
                <td>
                  <span class="consumption-val" [class.high]="getConsumption(row) > row.opening_stock * 0.8">
                    {{ getConsumption(row) | number:'1.1-1' }} {{ row.unit }}
                  </span>
                </td>
                <td>
                  <input class="form-control num-input" type="number" [(ngModel)]="row.cost_per_unit" [name]="'cpu'+i" min="0" placeholder="0" />
                </td>
                <td>
                  <button class="btn btn-danger btn-sm" (click)="removeRow(i)">✕</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- History -->
      <div class="card" style="margin-top:24px">
        <div class="card-title">Recent Submissions</div>
        <div *ngFor="let rec of history" class="hist-row">
          <span>{{ rec.date }}</span>
          <span style="color:var(--text-muted)">{{ rec.items.length }} items tracked</span>
          <span class="badge badge-success">Saved</span>
        </div>
        <div *ngIf="history.length === 0" style="color:var(--text-muted);font-size:0.875rem">No history yet</div>
      </div>
    </div>
  `,
  styles: [`
    .num-input { width: 90px; text-align: right; font-family: var(--font-mono); }
    .consumption-val { font-family: var(--font-mono); font-size: 0.875rem; color: var(--success); font-weight: 600; }
    .consumption-val.high { color: var(--warning); }
    .hist-row { display: flex; align-items: center; gap: 16px; padding: 10px 0; border-bottom: 1px solid var(--border); font-size: 0.875rem; }
    .hist-row:last-child { border-bottom: none; }
  `]
})
export class InventoryComponent implements OnInit {
  items: InvLine[] = DEFAULT_ITEMS.map(i => ({ ...i }));
  selectedDate = new Date().toISOString().split('T')[0];
  saving = false;
  success = false;
  error = '';
  history: any[] = [];
  lowStockItems: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadHistory();
    this.api.getLowStock().subscribe(ls => this.lowStockItems = ls);
  }

  addRow() {
    this.items.push({ item_name: '', unit: 'kg', opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 });
  }

  removeRow(i: number) { this.items.splice(i, 1); }

  getConsumption(row: InvLine): number {
    return Math.max(0, row.opening_stock + row.purchased_qty - row.closing_stock);
  }

  loadHistory() {
    this.api.getInventory().subscribe(inv => this.history = inv.slice(0, 7));
  }

  submit() {
    const filled = this.items.filter(i => i.item_name.trim());
    if (!filled.length) { this.error = 'Add at least one item'; return; }
    this.saving = true;
    this.api.submitInventory({ date: this.selectedDate, items: filled }).subscribe({
      next: () => {
        this.saving = false; this.success = true; this.error = '';
        this.loadHistory();
        setTimeout(() => this.success = false, 3000);
      },
      error: err => { this.saving = false; this.error = err.error?.detail || 'Failed to save'; }
    });
  }
}
