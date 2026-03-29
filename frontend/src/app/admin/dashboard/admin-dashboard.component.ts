import { Component, ChangeDetectorRef, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';
import { Restaurant, MonthlySummary } from '../../shared/models/models';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="fade-in">
      <!-- Header -->
      <div class="page-header">
        <div>
          <h1>Admin Dashboard</h1>
          <div class="subtitle">Overall performance across all outlets</div>
        </div>
        <div class="header-controls">
          <select class="form-control" style="width:160px" [(ngModel)]="selectedRestaurantId" (change)="loadData()">
            <option value="">All Restaurants</option>
            <option *ngFor="let r of restaurants" [value]="r.id">{{ r.name }}</option>
          </select>
          <div class="month-picker">
            <select class="form-control" [(ngModel)]="selectedMonth" (change)="loadData()">
              <option *ngFor="let m of months; let i = index" [value]="i+1">{{ m }}</option>
            </select>
            <select class="form-control" [(ngModel)]="selectedYear" (change)="loadData()">
              <option *ngFor="let y of years" [value]="y">{{ y }}</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Loading -->
      <div *ngIf="loading" class="loading-state">
        <div class="spinner" style="width:32px;height:32px;border-width:3px"></div>
        <span>Loading analytics…</span>
      </div>

      <ng-container *ngIf="!loading && summary">
        <!-- KPI Cards -->
        <div class="stat-grid">
          <div class="stat-card" style="--accent-color: var(--primary)">
            <div class="stat-label">Total Sales</div>
            <div class="stat-value">₹{{ summary.total_sales | number:'1.0-0' }}</div>
            <div class="stat-badge" [class.up]="summary.total_sales > 0">
              🛒 {{ summary.total_orders }} orders
            </div>
          </div>
          <div class="stat-card" style="--accent-color: var(--danger)">
            <div class="stat-label">Total Expenses</div>
            <div class="stat-value">₹{{ summary.total_expenses | number:'1.0-0' }}</div>
            <div class="stat-badge down">
              💸 This month
            </div>
          </div>
          <div class="stat-card" [style.--accent-color]="summary.net_profit >= 0 ? 'var(--success)' : 'var(--danger)'">
            <div class="stat-label">Net Profit</div>
            <div class="stat-value" [class.profit]="summary.net_profit >= 0" [class.loss]="summary.net_profit < 0">
              ₹{{ summary.net_profit | number:'1.0-0' }}
            </div>
            <div class="stat-badge" [class.up]="summary.net_profit >= 0" [class.down]="summary.net_profit < 0">
              {{ summary.profit_pct }}%
            </div>
          </div>
          <div class="stat-card" style="--accent-color: var(--info)">
            <div class="stat-label">Avg Order Value</div>
            <div class="stat-value">₹{{ avgOrderValue | number:'1.0-0' }}</div>
            <div class="stat-badge up">📈 Per order</div>
          </div>
        </div>

        <!-- Charts Row -->
        <div class="charts-grid">
          <!-- Sales vs Expenses Chart -->
          <div class="card chart-card">
            <div class="card-title">Daily Sales vs Expenses</div>
            <div class="chart-wrapper">
              <canvas #salesCanvas width="600" height="260"></canvas>
            </div>
          </div>

          <!-- Expense Breakdown -->
          <div class="card">
            <div class="card-title">Expense Breakdown</div>
            <div class="expense-list">
              <div *ngFor="let cat of expenseCategories" class="exp-row">
                <div class="exp-info">
                  <span class="exp-dot" [style.background]="cat.color"></span>
                  <span class="exp-name">{{ cat.name }}</span>
                </div>
                <div class="exp-right">
                  <div class="exp-amount">₹{{ cat.amount | number:'1.0-0' }}</div>
                  <div class="exp-pct">{{ cat.pct }}%</div>
                </div>
              </div>
              <div *ngIf="expenseCategories.length === 0" class="empty-state" style="padding:30px">
                <div>No expenses recorded</div>
              </div>
            </div>
          </div>
        </div>

        <!-- P&L Summary Table -->
        <div class="card" style="margin-top:20px">
          <div class="card-title">Monthly P&L Summary</div>
          <div class="pnl-grid">
            <div class="pnl-item">
              <span class="pnl-label">Gross Revenue</span>
              <span class="pnl-value">₹{{ summary.total_sales | number:'1.0-0' }}</span>
            </div>
            <div class="pnl-item">
              <span class="pnl-label">Total Expenses</span>
              <span class="pnl-value loss">- ₹{{ summary.total_expenses | number:'1.0-0' }}</span>
            </div>
            <div class="pnl-divider"></div>
            <div class="pnl-item pnl-total">
              <span class="pnl-label">Net Profit / Loss</span>
              <span class="pnl-value" [class.profit]="summary.net_profit >= 0" [class.loss]="summary.net_profit < 0">
                {{ summary.net_profit >= 0 ? '+' : '' }}₹{{ summary.net_profit | number:'1.0-0' }}
              </span>
            </div>
            <div class="pnl-item">
              <span class="pnl-label">Profit Margin</span>
              <span class="pnl-value" [class.profit]="summary.profit_pct >= 0" [class.loss]="summary.profit_pct < 0">
                {{ summary.profit_pct }}%
              </span>
            </div>
          </div>
        </div>

        <!-- Daily breakdown table -->
        <div class="card" style="margin-top:20px">
          <div class="card-title">Daily Breakdown</div>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Sales</th>
                  <th>Orders</th>
                  <th>Expenses</th>
                  <th>Profit</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let row of summary.chart_data">
                  <td>{{ row.date }}</td>
                  <td>₹{{ row.sales | number:'1.0-0' }}</td>
                  <td>{{ row.orders }}</td>
                  <td>₹{{ row.expenses | number:'1.0-0' }}</td>
                  <td [class.profit]="row.sales - row.expenses >= 0" [class.loss]="row.sales - row.expenses < 0">
                    ₹{{ (row.sales - row.expenses) | number:'1.0-0' }}
                  </td>
                  <td>
                    <span class="badge" [class.badge-success]="row.sales - row.expenses >= 0" [class.badge-danger]="row.sales - row.expenses < 0">
                      {{ row.sales - row.expenses >= 0 ? 'Profit' : 'Loss' }}
                    </span>
                  </td>
                </tr>
                <tr *ngIf="summary.chart_data.length === 0">
                  <td colspan="6" style="text-align:center;color:var(--text-muted);padding:30px">No data for this period</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ng-container>

      <!-- Empty state -->
      <div *ngIf="!loading && !summary" class="empty-state">
        <div class="empty-icon">📊</div>
        <h3>No data available</h3>
        <p>Select a restaurant and time period to view analytics</p>
      </div>
    </div>
  `,
  styles: [`
    .header-controls { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
    .month-picker { display: flex; gap: 8px; }
    .loading-state { display: flex; align-items: center; gap: 12px; padding: 40px; color: var(--text-muted); }
    .charts-grid { display: grid; grid-template-columns: 1fr 380px; gap: 20px; margin-top: 0; }
    .chart-card { overflow: hidden; }
    .chart-wrapper { position: relative; height: 260px; }
    .chart-wrapper canvas { width: 100% !important; height: 100% !important; }
    .expense-list { display: flex; flex-direction: column; gap: 10px; }
    .exp-row { display: flex; align-items: center; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--border); }
    .exp-row:last-child { border-bottom: none; }
    .exp-info { display: flex; align-items: center; gap: 10px; }
    .exp-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
    .exp-name { font-size: 0.875rem; color: var(--text); }
    .exp-right { text-align: right; }
    .exp-amount { font-weight: 600; font-family: var(--font-mono); }
    .exp-pct { font-size: 0.75rem; color: var(--text-muted); }
    .pnl-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; }
    .pnl-item { display: flex; flex-direction: column; gap: 4px; }
    .pnl-label { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-muted); }
    .pnl-value { font-size: 1.4rem; font-weight: 800; font-family: var(--font-mono); color: var(--text); }
    .pnl-divider { grid-column: 1/-1; border-top: 1px solid var(--border); }
    .pnl-total .pnl-value { font-size: 1.6rem; }
    @media (max-width: 900px) { .charts-grid { grid-template-columns: 1fr; } }
  `]
})
export class AdminDashboardComponent implements OnInit {
  @ViewChild('salesCanvas') salesCanvas?: ElementRef<HTMLCanvasElement>;
  restaurants: Restaurant[] = [];
  summary: MonthlySummary | null = null;
  loading = false;
  selectedRestaurantId = '';
  selectedMonth = new Date().getMonth() + 1;
  selectedYear = new Date().getFullYear();

  months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  years = [2024, 2025, 2026];

  expenseCategories: any[] = [];
  private chartInstance: any = null;

  get avgOrderValue(): number {
    if (!this.summary || !this.summary.total_orders) return 0;
    return this.summary.total_sales / this.summary.total_orders;
  }

  constructor(private api: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.api.getRestaurants().subscribe(r => { this.restaurants = r; });
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.api.getMonthlySummary(this.selectedYear, this.selectedMonth, this.selectedRestaurantId || undefined).subscribe({
      next: s => {
        this.summary = s;
        this.buildExpenseCategories();
        this.loading = false;
        this.cdr.detectChanges();
        setTimeout(() => this.renderChart(), 0);
      },
      error: () => { this.loading = false; }
    });
  }

  buildExpenseCategories() {
    if (!this.summary) return;
    const colors = ['#FF6B35','#00D4AA','#5B9CF6','#FFB347','#FF5E7D','#A78BFA','#34D399'];
    const total = Object.values(this.summary.expense_breakdown).reduce((a, b) => a + b, 0);
    this.expenseCategories = Object.entries(this.summary.expense_breakdown).map(([name, amount], i) => ({
      name, amount,
      color: colors[i % colors.length],
      pct: total > 0 ? Math.round((amount / total) * 100) : 0
    }));
  }

  renderChart() {
    const canvas = this.salesCanvas?.nativeElement;
    if (!canvas || !this.summary) return;
    if (this.chartInstance) this.chartInstance.destroy();
    const data = this.summary.chart_data;
    this.chartInstance = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: data.map(d => d.date.slice(5)),
        datasets: [
          {
            label: 'Sales',
            data: data.map(d => d.sales),
            backgroundColor: 'rgba(255,107,53,0.9)',
            borderColor: '#FF6B35',
            borderWidth: 1,
            borderRadius: 4
          },
          {
            label: 'Expenses',
            data: data.map(d => d.expenses),
            backgroundColor: 'rgba(255,94,125,0.9)',
            borderColor: '#FF5E7D',
            borderWidth: 1,
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 300 },
        plugins: {
          legend: { labels: { color: '#8B90A7', font: { size: 11 } } }
        },
        scales: {
          x: {
            ticks: { color: '#5A5F75', font: { size: 10 } },
            grid: { color: 'rgba(255,255,255,0.04)' }
          },
          y: {
            beginAtZero: true,
            ticks: { color: '#5A5F75', font: { size: 10 }, callback: (v: any) => '₹' + v },
            grid: { color: 'rgba(255,255,255,0.04)' }
          }
        }
      }
    });
  }
}
