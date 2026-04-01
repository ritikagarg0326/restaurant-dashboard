import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';
import { Order, MenuItem } from '../../shared/models/models';

interface OrderLine { name: string; quantity: number; price: number; }

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="fade-in">
      <div class="page-header">
        <div>
          <h1>Orders</h1>
          <div class="subtitle">Enter each order as it comes in</div>
        </div>
      </div>

      <div class="orders-layout">
        <!-- Order Entry Form -->
        <div class="order-form-panel card">
          <h3 style="margin-bottom:20px">➕ New Order</h3>

          <div *ngIf="success" class="alert alert-success">✅ Order saved — ₹{{ lastAmount | number:'1.0-0' }}</div>
          <div *ngIf="error" class="alert alert-danger">⚠️ {{ error }}</div>

          <!-- Items -->
          <div class="items-header">
            <div class="card-title" style="margin:0">Order Items</div>
            <button class="btn btn-ghost btn-sm" (click)="addLine()">+ Add Item</button>
          </div>

          <div class="items-list">
            <div *ngFor="let line of lines; let i = index" class="item-row">
              <input
                class="form-control"
                [(ngModel)]="line.name"
                (ngModelChange)="onItemNameChange(line)"
                [name]="'item'+i"
                list="order-menu-items"
                placeholder="Item name (e.g. Pasta)"
                style="flex:2" />
              <input
                class="form-control"
                type="number"
                [(ngModel)]="line.quantity"
                [name]="'qty'+i"
                placeholder="Qty"
                min="1"
                style="flex:0.6;text-align:center" />
              <input
                class="form-control"
                type="number"
                [(ngModel)]="line.price"
                [name]="'price'+i"
                placeholder="₹ Price"
                min="0"
                style="flex:1" />
              <button
                class="btn btn-danger btn-sm"
                (click)="removeLine(i)"
                [disabled]="lines.length === 1"
                style="flex-shrink:0">✕</button>
            </div>
          </div>

          <datalist id="order-menu-items">
            <option *ngFor="let item of menuItems" [value]="item.name"></option>
          </datalist>

          <!-- Total -->
          <div class="order-total">
            <span>Order Total</span>
            <span class="total-amount">₹{{ orderTotal | number:'1.0-0' }}</span>
          </div>

          <!-- Payment & Table -->
          <div class="form-row-2">
            <div class="form-group">
              <label class="form-label">Payment Mode *</label>
              <select class="form-control" [(ngModel)]="paymentMode" name="paymentMode">
                <option value="cash">💵 Cash</option>
                <option value="upi">📱 UPI</option>
                <option value="card">💳 Card</option>
                <option value="zomato">🔴 Zomato</option>
                <option value="swiggy">🟠 Swiggy</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Table No.</label>
              <input class="form-control" [(ngModel)]="tableNo" name="tableNo" placeholder="e.g. T4" />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Notes (optional)</label>
            <input class="form-control" [(ngModel)]="notes" name="notes" placeholder="Special instructions…" />
          </div>

          <button class="btn btn-primary btn-lg" style="width:100%" (click)="submitOrder()" [disabled]="saving || !isValid">
            <span *ngIf="saving" class="spinner"></span>
            {{ saving ? 'Saving…' : 'Save Order ₹' + (orderTotal | number:'1.0-0') }}
          </button>
        </div>

        <!-- Today's Orders -->
        <div class="today-orders">
          <div class="card" style="padding:0">
            <div style="padding:16px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between">
              <div>
                <div class="card-title" style="margin:0">Today's Orders</div>
                <div style="font-size:0.75rem;color:var(--text-muted)">{{ todayDate }} · {{ todayOrders.length }} orders · ₹{{ todaySales | number:'1.0-0' }}</div>
              </div>
              <button class="btn btn-ghost btn-sm" (click)="loadTodayOrders()">↻</button>
            </div>

            <div class="orders-scroll">
              <div *ngFor="let o of todayOrders" class="order-card">
                <div class="oc-header">
                  <div class="oc-time">{{ o.created_at | date:'HH:mm' }}</div>
                  <span class="badge badge-info">{{ o.payment_mode | titlecase }}</span>
                  <div class="oc-amount">₹{{ o.total_amount | number:'1.0-0' }}</div>
                </div>
                <div class="oc-items">
                  <span *ngFor="let item of o.items" class="item-chip">{{ item.name }} ×{{ item.quantity }}</span>
                </div>
                <div *ngIf="o.table_no" class="oc-table">Table: {{ o.table_no }}</div>
              </div>
              <div *ngIf="todayOrders.length === 0" class="empty-state" style="padding:40px">
                <div class="empty-icon">🛒</div>
                <div>No orders yet today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .orders-layout { display: grid; grid-template-columns: 480px 1fr; gap: 20px; align-items: start; }
    .order-form-panel { position: sticky; top: 0; }
    .items-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
    .items-list { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
    .item-row { display: flex; gap: 8px; align-items: center; }
    .order-total {
      display: flex; align-items: center; justify-content: space-between;
      background: var(--bg-card-2);
      border-radius: var(--radius-sm);
      padding: 12px 16px;
      margin-bottom: 18px;
      font-weight: 600;
    }
    .total-amount { font-size: 1.4rem; font-weight: 800; font-family: var(--font-mono); color: var(--primary); }
    .form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .today-orders {}
    .orders-scroll { max-height: 680px; overflow-y: auto; }
    .order-card {
      padding: 14px 20px;
      border-bottom: 1px solid var(--border);
      transition: background var(--transition);
    }
    .order-card:hover { background: rgba(255,255,255,0.02); }
    .oc-header { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
    .oc-time { font-size: 0.8rem; font-weight: 600; color: var(--text-muted); font-family: var(--font-mono); }
    .oc-amount { margin-left: auto; font-weight: 700; font-family: var(--font-mono); color: var(--primary); }
    .oc-items { display: flex; flex-wrap: wrap; gap: 6px; }
    .item-chip {
      background: var(--bg-card-2);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 2px 10px;
      font-size: 0.75rem;
      color: var(--text-muted);
    }
    .oc-table { font-size: 0.75rem; color: var(--text-dim); margin-top: 6px; }
    @media (max-width: 900px) { .orders-layout { grid-template-columns: 1fr; } }
  `]
})
export class OrdersComponent implements OnInit {
  lines: OrderLine[] = [{ name: '', quantity: 1, price: 0 }];
  paymentMode = 'cash';
  tableNo = '';
  notes = '';
  saving = false;
  success = false;
  error = '';
  lastAmount = 0;
  menuItems: MenuItem[] = [];
  todayOrders: Order[] = [];
  todayDate = new Date().toLocaleDateString('en-IN');

  get orderTotal(): number {
    return this.lines.reduce((s, l) => s + (l.quantity * l.price), 0);
  }

  get todaySales(): number {
    return this.todayOrders.reduce((s, o) => s + o.total_amount, 0);
  }

  get isValid(): boolean {
    return this.lines.some(l => l.name.trim() && l.quantity > 0 && l.price > 0) && this.orderTotal > 0;
  }

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadTodayOrders();
    this.api.getMenu().subscribe(menu => this.menuItems = menu);
  }

  addLine() { this.lines.push({ name: '', quantity: 1, price: 0 }); }

  removeLine(i: number) {
    if (this.lines.length > 1) this.lines.splice(i, 1);
  }

  onItemNameChange(line: OrderLine) {
    const normalized = line.name.trim().toLowerCase();
    if (!normalized) {
      return;
    }
    const exact = this.menuItems.find(item => item.name.toLowerCase() === normalized);
    if (exact) {
      line.price = exact.price;
      line.name = exact.name;
      return;
    }
    const partial = this.menuItems.find(item => item.name.toLowerCase().startsWith(normalized));
    if (partial) {
      line.price = partial.price;
      return;
    }
  }

  loadTodayOrders() {
    const today = new Date().toISOString().split('T')[0];
    this.api.getOrders({ date: today }).subscribe(o => this.todayOrders = o);
  }

  submitOrder() {
    const items = this.lines.filter(l => l.name.trim() && l.quantity > 0 && l.price > 0);
    if (!items.length) { this.error = 'Add at least one valid item'; return; }
    this.saving = true;
    this.error = '';
    this.api.createOrder({ items, payment_mode: this.paymentMode, table_no: this.tableNo || null, notes: this.notes || null }).subscribe({
      next: () => {
        this.saving = false;
        this.lastAmount = this.orderTotal;
        this.lines = [{ name: '', quantity: 1, price: 0 }];
        this.tableNo = '';
        this.notes = '';
        this.success = true;
        this.loadTodayOrders();
        setTimeout(() => this.success = false, 3000);
      },
      error: err => { this.saving = false; this.error = err.error?.detail || 'Failed to save order'; }
    });
  }
}
