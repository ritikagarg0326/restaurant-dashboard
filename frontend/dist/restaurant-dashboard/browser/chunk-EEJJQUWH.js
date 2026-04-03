import {
  auto_default
} from "./chunk-GIZME3LY.js";
import {
  ApiService
} from "./chunk-UYULKMB3.js";
import {
  FormsModule
} from "./chunk-6NUVX2UH.js";
import {
  NavigationEnd,
  Router
} from "./chunk-YXH4DM33.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf,
  Subject,
  TitleCasePipe,
  filter,
  forkJoin,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-4RACHFFU.js";

// src/app/manager/dashboard/manager-dashboard.component.ts
function ManagerDashboardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, "Loading dashboard...");
    \u0275\u0275elementEnd();
  }
}
function ManagerDashboardComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22);
    \u0275\u0275text(3, "Total Sales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 23);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 24);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 25)(10, "div", 22);
    \u0275\u0275text(11, "Cash");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 23);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 24);
    \u0275\u0275text(16, "\u{1F4B5} Cash sales");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 26)(18, "div", 22);
    \u0275\u0275text(19, "UPI / Online");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 23);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 24);
    \u0275\u0275text(24, "\u{1F4F1} Digital");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 27)(26, "div", 22);
    \u0275\u0275text(27, "Today's Profit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 23);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 28);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(6, 16, ctx_r0.daily.total_sales, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F6D2} ", ctx_r0.daily.total_orders, " orders");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(14, 19, ctx_r0.daily.payment_breakdown["cash"] || 0, "1.0-0"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(22, 22, ctx_r0.upiTotal, "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("--accent-color", ctx_r0.daily.net_profit >= 0 ? "var(--success)" : "var(--danger)");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("profit", ctx_r0.daily.net_profit >= 0)("loss", ctx_r0.daily.net_profit < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u20B9", \u0275\u0275pipeBind2(30, 25, ctx_r0.daily.net_profit, "1.0-0"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("up", ctx_r0.daily.net_profit >= 0)("down", ctx_r0.daily.net_profit < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" After \u20B9", \u0275\u0275pipeBind2(33, 28, ctx_r0.daily.total_expenses, "1.0-0"), " expenses ");
  }
}
function ManagerDashboardComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "div", 31);
    \u0275\u0275text(3, "Monthly Sales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 32);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 33);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 30)(10, "div", 31);
    \u0275\u0275text(11, "Monthly Expenses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 34);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 30)(16, "div", 31);
    \u0275\u0275text(17, "Net Profit / Loss");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 32);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 35);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(6, 16, ctx_r0.monthly.total_sales, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.monthly.total_orders, " orders total");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(14, 19, ctx_r0.monthly.total_expenses, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("border-color", ctx_r0.monthly.net_profit >= 0 ? "rgba(0,212,170,0.3)" : "rgba(255,94,125,0.3)");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("profit", ctx_r0.monthly.net_profit >= 0)("loss", ctx_r0.monthly.net_profit < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.monthly.net_profit >= 0 ? "+" : "", "\u20B9", \u0275\u0275pipeBind2(20, 22, ctx_r0.monthly.net_profit, "1.0-0"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("profit", ctx_r0.monthly.profit_pct >= 0)("loss", ctx_r0.monthly.profit_pct < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.monthly.profit_pct, "% margin ");
  }
}
function ManagerDashboardComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 31);
    \u0275\u0275text(2, "Sales Trend (This Month)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 36);
    \u0275\u0275element(4, "canvas", 37);
    \u0275\u0275elementEnd()();
  }
}
function ManagerDashboardComponent_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 39);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 40);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 4, o_r2.created_at, "HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getItemSummary(o_r2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, o_r2.payment_mode));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(12, 9, o_r2.total_amount, "1.0-0"));
  }
}
function ManagerDashboardComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 41);
    \u0275\u0275text(2, " No orders today yet. ");
    \u0275\u0275elementStart(3, "a", 42);
    \u0275\u0275listener("click", function ManagerDashboardComponent_tr_40_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.router.navigate(["/manager/orders"]));
    });
    \u0275\u0275text(4, "Add first order \u2192");
    \u0275\u0275elementEnd()()();
  }
}
var ManagerDashboardComponent = class _ManagerDashboardComponent {
  get upiTotal() {
    if (!this.daily)
      return 0;
    const bp = this.daily.payment_breakdown || {};
    return (bp["upi"] || 0) + (bp["card"] || 0) + (bp["zomato"] || 0) + (bp["swiggy"] || 0);
  }
  constructor(api, router) {
    this.api = api;
    this.router = router;
    this.daily = null;
    this.monthly = null;
    this.recentOrders = [];
    this.loading = false;
    this.today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" });
    this.chartInstance = null;
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.loadAll();
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntil(this.destroy$)).subscribe(() => {
      if (this.router.url.includes("/manager/dashboard")) {
        this.loadAll();
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadAll() {
    this.loading = true;
    const todayStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const now = /* @__PURE__ */ new Date();
    forkJoin({
      daily: this.api.getDailySummary(todayStr),
      monthly: this.api.getMonthlySummary(now.getFullYear(), now.getMonth() + 1),
      recentOrders: this.api.getOrders({ date: todayStr })
    }).subscribe({
      next: ({ daily, monthly, recentOrders }) => {
        this.daily = daily;
        this.monthly = monthly;
        this.recentOrders = recentOrders.slice(0, 10);
        this.loading = false;
        this.renderChart();
      },
      error: (err) => {
        this.loading = false;
        console.error("Dashboard load failed", err);
      }
    });
  }
  getItemSummary(order) {
    return order.items.map((i) => `${i.name} x${i.quantity}`).join(", ").slice(0, 40) + (order.items.length > 2 ? "\u2026" : "");
  }
  renderChart() {
    const canvas = document.getElementById("trendChart");
    if (!canvas || !this.monthly)
      return;
    if (this.chartInstance)
      this.chartInstance.destroy();
    const data = this.monthly.chart_data;
    this.chartInstance = new auto_default(canvas, {
      type: "line",
      data: {
        labels: data.map((d) => d.date.slice(5)),
        datasets: [{
          label: "Sales",
          data: data.map((d) => d.sales),
          borderColor: "#FF6B35",
          backgroundColor: "rgba(255,107,53,0.08)",
          tension: 0.4,
          fill: true,
          pointRadius: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: "#5A5F75", font: { size: 10 } }, grid: { color: "rgba(255,255,255,0.04)" } },
          y: { ticks: { color: "#5A5F75", font: { size: 10 }, callback: (v) => "\u20B9" + v }, grid: { color: "rgba(255,255,255,0.04)" } }
        }
      }
    });
  }
  static {
    this.\u0275fac = function ManagerDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ManagerDashboardComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManagerDashboardComponent, selectors: [["app-manager-dashboard"]], decls: 41, vars: 7, consts: [[1, "fade-in"], ["class", "alert alert-info", 4, "ngIf"], [1, "page-header"], [1, "subtitle"], [2, "display", "flex", "gap", "10px"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-ghost", 3, "click"], [1, "section-label"], ["class", "stat-grid", 4, "ngIf"], [1, "section-label", 2, "margin-top", "24px"], ["class", "monthly-row", 4, "ngIf"], ["class", "card", "style", "margin-top:20px", 4, "ngIf"], [1, "card", 2, "margin-top", "20px"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "margin-bottom", "16px"], [1, "card-title", 2, "margin", "0"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "table-wrap"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "alert", "alert-info"], [1, "stat-grid"], [1, "stat-card", 2, "--accent-color", "var(--primary)"], [1, "stat-label"], [1, "stat-value"], [1, "stat-badge", "up"], [1, "stat-card", 2, "--accent-color", "var(--info)"], [1, "stat-card", 2, "--accent-color", "var(--accent)"], [1, "stat-card"], [1, "stat-badge"], [1, "monthly-row"], [1, "card", "monthly-kpi"], [1, "card-title"], [2, "font-size", "1.6rem", "font-weight", "800", "font-family", "var(--font-mono)"], [2, "color", "var(--text-muted)", "font-size", "0.8rem", "margin-top", "4px"], [2, "font-size", "1.6rem", "font-weight", "800", "font-family", "var(--font-mono)", "color", "var(--danger)"], [2, "font-size", "0.8rem", "margin-top", "4px"], [2, "position", "relative", "height", "240px"], ["id", "trendChart", "width", "600", "height", "240"], [2, "color", "var(--text-muted)", "font-size", "0.8rem"], [1, "badge", "badge-info"], [2, "font-weight", "700", "font-family", "var(--font-mono)"], ["colspan", "4", 2, "text-align", "center", "color", "var(--text-muted)", "padding", "24px"], [2, "color", "var(--primary)", "cursor", "pointer", 3, "click"]], template: function ManagerDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ManagerDashboardComponent_div_1_Template, 2, 0, "div", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div")(4, "h1");
        \u0275\u0275text(5, "My Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 3);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 4)(9, "button", 5);
        \u0275\u0275listener("click", function ManagerDashboardComponent_Template_button_click_9_listener() {
          return ctx.router.navigate(["/manager/orders"]);
        });
        \u0275\u0275text(10, " + New Order ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 6);
        \u0275\u0275listener("click", function ManagerDashboardComponent_Template_button_click_11_listener() {
          return ctx.loadAll();
        });
        \u0275\u0275text(12, "\u21BB Refresh");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 7);
        \u0275\u0275text(14, "TODAY");
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, ManagerDashboardComponent_div_15_Template, 34, 31, "div", 8);
        \u0275\u0275elementStart(16, "div", 9);
        \u0275\u0275text(17, "THIS MONTH");
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, ManagerDashboardComponent_div_18_Template, 23, 25, "div", 10)(19, ManagerDashboardComponent_div_19_Template, 5, 0, "div", 11);
        \u0275\u0275elementStart(20, "div", 12)(21, "div", 13)(22, "div", 14);
        \u0275\u0275text(23, "Recent Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 15);
        \u0275\u0275listener("click", function ManagerDashboardComponent_Template_button_click_24_listener() {
          return ctx.router.navigate(["/manager/orders"]);
        });
        \u0275\u0275text(25, "View All");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 16)(27, "table")(28, "thead")(29, "tr")(30, "th");
        \u0275\u0275text(31, "Time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "th");
        \u0275\u0275text(33, "Items");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "th");
        \u0275\u0275text(35, "Payment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "th");
        \u0275\u0275text(37, "Amount");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(38, "tbody");
        \u0275\u0275template(39, ManagerDashboardComponent_tr_39_Template, 13, 12, "tr", 17)(40, ManagerDashboardComponent_tr_40_Template, 5, 0, "tr", 18);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.today, " \xB7 Live performance");
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", ctx.daily);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.monthly);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.monthly);
        \u0275\u0275advance(20);
        \u0275\u0275property("ngForOf", ctx.recentOrders);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.recentOrders.length === 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DecimalPipe, TitleCasePipe, DatePipe], styles: ["\n.section-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--text-dim);\n  margin-bottom: 12px;\n}\n.monthly-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.monthly-kpi[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  transition: border-color 0.2s;\n}\n@media (max-width: 700px) {\n  .monthly-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=manager-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManagerDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-manager-dashboard", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="fade-in">
      <div *ngIf="loading" class="alert alert-info">Loading dashboard...</div>
      <div class="page-header">
        <div>
          <h1>My Dashboard</h1>
          <div class="subtitle">{{ today }} \xB7 Live performance</div>
        </div>
        <div style="display:flex;gap:10px">
          <button class="btn btn-primary" (click)="router.navigate(['/manager/orders'])">
            + New Order
          </button>
          <button class="btn btn-ghost" (click)="loadAll()">\u21BB Refresh</button>
        </div>
      </div>

      <!-- Today KPIs -->
      <div class="section-label">TODAY</div>
      <div class="stat-grid" *ngIf="daily">
        <div class="stat-card" style="--accent-color:var(--primary)">
          <div class="stat-label">Total Sales</div>
          <div class="stat-value">\u20B9{{ daily.total_sales | number:'1.0-0' }}</div>
          <div class="stat-badge up">\u{1F6D2} {{ daily.total_orders }} orders</div>
        </div>
        <div class="stat-card" style="--accent-color:var(--info)">
          <div class="stat-label">Cash</div>
          <div class="stat-value">\u20B9{{ (daily.payment_breakdown['cash'] || 0) | number:'1.0-0' }}</div>
          <div class="stat-badge up">\u{1F4B5} Cash sales</div>
        </div>
        <div class="stat-card" style="--accent-color:var(--accent)">
          <div class="stat-label">UPI / Online</div>
          <div class="stat-value">\u20B9{{ upiTotal | number:'1.0-0' }}</div>
          <div class="stat-badge up">\u{1F4F1} Digital</div>
        </div>
        <div class="stat-card" [style.--accent-color]="daily.net_profit >= 0 ? 'var(--success)' : 'var(--danger)'">
          <div class="stat-label">Today's Profit</div>
          <div class="stat-value" [class.profit]="daily.net_profit >= 0" [class.loss]="daily.net_profit < 0">
            \u20B9{{ daily.net_profit | number:'1.0-0' }}
          </div>
          <div class="stat-badge" [class.up]="daily.net_profit >= 0" [class.down]="daily.net_profit < 0">
            After \u20B9{{ daily.total_expenses | number:'1.0-0' }} expenses
          </div>
        </div>
      </div>

      <!-- Monthly Summary -->
      <div class="section-label" style="margin-top:24px">THIS MONTH</div>
      <div class="monthly-row" *ngIf="monthly">
        <div class="card monthly-kpi">
          <div class="card-title">Monthly Sales</div>
          <div style="font-size:1.6rem;font-weight:800;font-family:var(--font-mono)">\u20B9{{ monthly.total_sales | number:'1.0-0' }}</div>
          <div style="color:var(--text-muted);font-size:0.8rem;margin-top:4px">{{ monthly.total_orders }} orders total</div>
        </div>
        <div class="card monthly-kpi">
          <div class="card-title">Monthly Expenses</div>
          <div style="font-size:1.6rem;font-weight:800;font-family:var(--font-mono);color:var(--danger)">\u20B9{{ monthly.total_expenses | number:'1.0-0' }}</div>
        </div>
        <div class="card monthly-kpi" [style.border-color]="monthly.net_profit >= 0 ? 'rgba(0,212,170,0.3)' : 'rgba(255,94,125,0.3)'">
          <div class="card-title">Net Profit / Loss</div>
          <div style="font-size:1.6rem;font-weight:800;font-family:var(--font-mono)"
            [class.profit]="monthly.net_profit >= 0"
            [class.loss]="monthly.net_profit < 0">
            {{ monthly.net_profit >= 0 ? '+' : '' }}\u20B9{{ monthly.net_profit | number:'1.0-0' }}
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
                <td style="font-weight:700;font-family:var(--font-mono)">\u20B9{{ o.total_amount | number:'1.0-0' }}</td>
              </tr>
              <tr *ngIf="recentOrders.length === 0">
                <td colspan="4" style="text-align:center;color:var(--text-muted);padding:24px">
                  No orders today yet. <a (click)="router.navigate(['/manager/orders'])" style="color:var(--primary);cursor:pointer">Add first order \u2192</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;dc65c90c66494890ec658efa4d1d96cf96d617bcc0fb4c25490b0f5414ec3269;C:/Users/ritik/Downloads/restaurant-dashboard/frontend/src/app/manager/dashboard/manager-dashboard.component.ts */\n.section-label {\n  font-size: 0.68rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--text-dim);\n  margin-bottom: 12px;\n}\n.monthly-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.monthly-kpi {\n  border: 1px solid var(--border);\n  transition: border-color 0.2s;\n}\n@media (max-width: 700px) {\n  .monthly-row {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=manager-dashboard.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManagerDashboardComponent, { className: "ManagerDashboardComponent", filePath: "src/app/manager/dashboard/manager-dashboard.component.ts", lineNumber: 140 });
})();
export {
  ManagerDashboardComponent
};
//# sourceMappingURL=chunk-EEJJQUWH.js.map
