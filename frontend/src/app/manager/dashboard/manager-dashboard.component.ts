import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
import { DailySummary, MonthlySummary, Order } from '../../shared/models/models';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-manager-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="fade-in">
      <div class="page-header">
        <div>
          <h1>My Dashboard</h1>
          <div class="subtitle">{{ today }} · Live performance</div>
        </div>
        <div style="display:flex;gap:10px">
          <button class="btn btn-primary" (click)="router.navigate(['/manager/orders'])">
            + New Order
          </button>
          <button class="btn btn-ghost" (click)="loadAll()">↻ Refresh</button>
        </div>
      </div>

      <!-- Today KPIs -->
      <div class="section-label">TODAY</div>
      <div class="stat-grid" *ngIf="daily">
        <div class="stat-card" style="--accent-color:var(--primary)">
          <div class="stat-label">Total Sales</div>
          <div class="stat-value">₹{{ daily.total_sales | number:'1.0-0' }}</div>
          <div class="stat-badge up">🛒 {{ daily.total_orders }} orders</div>
        </div>
        <div class="stat-card" style="--accent-color:var(--info)">
          <div class="stat-label">Cash</div>
          <div class="stat-value">₹{{ (daily.payment_breakdown?.['cash'] || 0) | number:'1.0-0' }}</div>
          <div class="stat-badge up">💵 Cash sales</div>
        </div>
        <div class="stat-card" style="--accent-color:var(--accent)">
          <div class="stat-label">UPI / Online</div>
          <div class="stat-value">₹{{ upiTotal | number:'1.0-0' }}</div>
          <div class="stat-badge up">📱 Digital</div>
        </div>
        <div class="stat-card" [style.--accent-color]="daily.net_profit >= 0 ? 'var(--success)' : 'var(--danger)'">
          <div class="stat-label">Today's Profit</div>
          <div class="stat-value" [class.profit]="daily.net_profit >= 0" [class.loss]="daily.net_profit < 0">
            ₹{{ daily.net_profit | number:'1.0-0' }}
          </div>
          <div class="stat-badge" [class.up]="daily.net_profit >= 0" [class.down]="daily.net_profit < 0">
            After ₹{{ daily.total_expenses | number:'1.0-0' }} expenses
          </div>
        </div>
      </div>

      <!-- Monthly Summary -->
      <div class="section-label" style="margin-top:24px">THIS MONTH</div>
      <div class="monthly-row" *ngIf="monthly">
        <div class="card monthly-kpi">
          <div class="card-title">Monthly Sales</div>
          <div style="font-size:1.6rem;font-weight:800;font-family:var(--font-mono)">₹{{ monthly.total_sales | number:'1.0-0' }}</div>
          <div style="color:var(--text-muted);font-size:0.8rem;margin-top:4px">{{ monthly.total_orders }} orders total</div>
        </div>
        <div class="card monthly-kpi">
          <div class="card-title">Monthly Expenses</div>
          <div style="font-size:1.6rem;font-weight:800;font-family:var(--font-mono);color:var(--danger)">₹{{ monthly.total_expenses | number:'1.0-0' }}</div>
        </div>
        <div class="card monthly-kpi" [style.border-color]="monthly.net_profit >= 0 ? 'rgba(0,212,170,0.3)' : 'rgba(255,94,125,0.3)'">
          <div class="card-title">Net Profit / Loss</div>
          <div style="font-size:1.6rem;font-weight:800;font-family:var(--font-mono)"
            [class.profit]="monthly.net_profit >= 0"
            [class.loss]="monthly.net_profit < 0">
            {{ monthly.net_profit >= 0 ? '+' : '' }}₹{{ monthly.net_profit | number:'1.0-0' }}
          </div>
          <div style="font-size:0.8rem;margin-top:4px"
            [class.profit]="monthly.profit_pct >= 0"
            [class.loss]="monthly.profit_pct < 0">
            {{ monthly.profit_pct }}% margin
          </div>
        </div>
      </div>

      <!-- Chart -->
      <div class="card" style="margin-top:20px" *ngIf="monthly">
        <div class="card-title">Sales Trend (This Month)</div>
        <div style="position:relative;height:240px">
          <canvas id="trendChart" width="600" height="240"></canvas>
        </div>
      </div>

      <!-- Recent Orders -->
      <div class="card" style="margin-top:20px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
          <div class="card-title" style="margin:0">Recent Orders</div>
          <button class="btn btn-ghost btn-sm" (click)="router.navigate(['/manager/orders'])">View All</button>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Items</th>
                <th>Payment</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let o of recentOrders">
                <td style="color:var(--text-muted);font-size:0.8rem">{{ o.created_at | date:'HH:mm' }}</td>
                <td>{{ getItemSummary(o) }}</td>
                <td>
                  <span class="badge badge-info">{{ o.payment_mode | titlecase }}</span>
                </td>
                <td style="font-weight:700;font-family:var(--font-mono)">₹{{ o.total_amount | number:'1.0-0' }}</td>
              </tr>
              <tr *ngIf="recentOrders.length === 0">
                <td colspan="4" style="text-align:center;color:var(--text-muted);padding:24px">
                  No orders today yet. <a (click)="router.navigate(['/manager/orders'])" style="color:var(--primary);cursor:pointer">Add first order →</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .section-label {
      font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em;
      text-transform: uppercase; color: var(--text-dim); margin-bottom: 12px;
    }
    .monthly-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
    .monthly-kpi { border: 1px solid var(--border); transition: border-color 0.2s; }
    @media (max-width: 700px) { .monthly-row { grid-template-columns: 1fr; } }
  `]
})
export class ManagerDashboardComponent implements OnInit {
  daily: DailySummary | null = null;
  monthly: MonthlySummary | null = null;
  recentOrders: Order[] = [];
  today = new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' });
  private chartInstance: any = null;

  get upiTotal(): number {
    if (!this.daily) return 0;
    const bp = this.daily.payment_breakdown || {};
    return (bp['upi'] || 0) + (bp['card'] || 0) + (bp['zomato'] || 0) + (bp['swiggy'] || 0);
  }

  constructor(private api: ApiService, public router: Router) {}

  ngOnInit() { this.loadAll(); }

  loadAll() {
    const todayStr = new Date().toISOString().split('T')[0];
    const now = new Date();

    this.api.getDailySummary(todayStr).subscribe(d => this.daily = d);
    this.api.getMonthlySummary(now.getFullYear(), now.getMonth() + 1).subscribe(m => {
      this.monthly = m;
      setTimeout(() => this.renderChart(), 100);
    });
    this.api.getOrders({ date: todayStr }).subscribe(o => this.recentOrders = o.slice(0, 10));
  }

  getItemSummary(order: Order): string {
    return order.items.map(i => `${i.name} x${i.quantity}`).join(', ').slice(0, 40) + (order.items.length > 2 ? '…' : '');
  }

  renderChart() {
    const canvas = document.getElementById('trendChart') as HTMLCanvasElement;
    if (!canvas || !this.monthly) return;
    if (this.chartInstance) this.chartInstance.destroy();
    const data = this.monthly.chart_data;
    this.chartInstance = new Chart(canvas, {
      type: 'line',
      data: {
        labels: data.map(d => d.date.slice(5)),
        datasets: [{
          label: 'Sales',
          data: data.map(d => d.sales),
          borderColor: '#FF6B35',
          backgroundColor: 'rgba(255,107,53,0.08)',
          tension: 0.4, fill: true, pointRadius: 3
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: '#5A5F75', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.04)' } },
          y: { ticks: { color: '#5A5F75', font: { size: 10 }, callback: (v: any) => '₹' + v }, grid: { color: 'rgba(255,255,255,0.04)' } }
        }
      }
    });
  }
}
