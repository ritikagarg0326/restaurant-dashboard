import {
  auto_default
} from "./chunk-MDNSIWFG.js";
import {
  ApiService
} from "./chunk-WXKWBQOT.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-35MON4WB.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  DecimalPipe,
  NgForOf,
  NgIf,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-PBBCOH4F.js";

// src/app/admin/dashboard/admin-dashboard.component.ts
var _c0 = ["salesCanvas"];
function AdminDashboardComponent_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    \u0275\u0275property("value", r_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r1.name);
  }
}
function AdminDashboardComponent_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    \u0275\u0275property("value", i_r3 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r2);
  }
}
function AdminDashboardComponent_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r4 = ctx.$implicit;
    \u0275\u0275property("value", y_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(y_r4);
  }
}
function AdminDashboardComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading analytics\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_ng_container_18_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46);
    \u0275\u0275element(2, "span", 47);
    \u0275\u0275elementStart(3, "span", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 49)(6, "div", 50);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 51);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", cat_r5.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r5.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(8, 5, cat_r5.amount, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", cat_r5.pct, "%");
  }
}
function AdminDashboardComponent_ng_container_18_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div");
    \u0275\u0275text(2, "No expenses recorded");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_ng_container_18_tr_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 53);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(5, 14, row_r6.sales, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r6.orders);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(10, 17, row_r6.expenses, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("profit", row_r6.sales - row_r6.expenses >= 0)("loss", row_r6.sales - row_r6.expenses < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u20B9", \u0275\u0275pipeBind2(13, 20, row_r6.sales - row_r6.expenses, "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge-success", row_r6.sales - row_r6.expenses >= 0)("badge-danger", row_r6.sales - row_r6.expenses < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.sales - row_r6.expenses >= 0 ? "Profit" : "Loss", " ");
  }
}
function AdminDashboardComponent_ng_container_18_tr_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 54);
    \u0275\u0275text(2, "No data for this period");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 16)(2, "div", 17)(3, "div", 18);
    \u0275\u0275text(4, "Total Sales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 20);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 21)(11, "div", 18);
    \u0275\u0275text(12, "Total Expenses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 19);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 22);
    \u0275\u0275text(17, " \u{1F4B8} This month ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 23)(19, "div", 18);
    \u0275\u0275text(20, "Net Profit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 19);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 24)(27, "div", 18);
    \u0275\u0275text(28, "Avg Order Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 19);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 25);
    \u0275\u0275text(33, "\u{1F4C8} Per order");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 26)(35, "div", 27)(36, "div", 28);
    \u0275\u0275text(37, "Daily Sales vs Expenses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 29);
    \u0275\u0275element(39, "canvas", 30, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 31)(42, "div", 28);
    \u0275\u0275text(43, "Expense Breakdown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 32);
    \u0275\u0275template(45, AdminDashboardComponent_ng_container_18_div_45_Template, 11, 8, "div", 33)(46, AdminDashboardComponent_ng_container_18_div_46_Template, 3, 0, "div", 34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 35)(48, "div", 28);
    \u0275\u0275text(49, "Monthly P&L Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 36)(51, "div", 37)(52, "span", 38);
    \u0275\u0275text(53, "Gross Revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 39);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 37)(58, "span", 38);
    \u0275\u0275text(59, "Total Expenses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span", 40);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(63, "div", 41);
    \u0275\u0275elementStart(64, "div", 42)(65, "span", 38);
    \u0275\u0275text(66, "Net Profit / Loss");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span", 39);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 37)(71, "span", 38);
    \u0275\u0275text(72, "Profit Margin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 39);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(75, "div", 35)(76, "div", 28);
    \u0275\u0275text(77, "Daily Breakdown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 43)(79, "table")(80, "thead")(81, "tr")(82, "th");
    \u0275\u0275text(83, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "th");
    \u0275\u0275text(85, "Sales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "th");
    \u0275\u0275text(87, "Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "th");
    \u0275\u0275text(89, "Expenses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "th");
    \u0275\u0275text(91, "Profit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "th");
    \u0275\u0275text(93, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(94, "tbody");
    \u0275\u0275template(95, AdminDashboardComponent_ng_container_18_tr_95_Template, 17, 23, "tr", 44)(96, AdminDashboardComponent_ng_container_18_tr_96_Template, 3, 0, "tr", 11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(7, 35, ctx_r6.summary.total_sales, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("up", ctx_r6.summary.total_sales > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F6D2} ", ctx_r6.summary.total_orders, " orders ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(15, 38, ctx_r6.summary.total_expenses, "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("--accent-color", ctx_r6.summary.net_profit >= 0 ? "var(--success)" : "var(--danger)");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("profit", ctx_r6.summary.net_profit >= 0)("loss", ctx_r6.summary.net_profit < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u20B9", \u0275\u0275pipeBind2(23, 41, ctx_r6.summary.net_profit, "1.0-0"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("up", ctx_r6.summary.net_profit >= 0)("down", ctx_r6.summary.net_profit < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r6.summary.profit_pct, "% ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(31, 44, ctx_r6.avgOrderValue, "1.0-0"));
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r6.expenseCategories);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r6.expenseCategories.length === 0);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(56, 47, ctx_r6.summary.total_sales, "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("- \u20B9", \u0275\u0275pipeBind2(62, 50, ctx_r6.summary.total_expenses, "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("profit", ctx_r6.summary.net_profit >= 0)("loss", ctx_r6.summary.net_profit < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r6.summary.net_profit >= 0 ? "+" : "", "\u20B9", \u0275\u0275pipeBind2(69, 53, ctx_r6.summary.net_profit, "1.0-0"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("profit", ctx_r6.summary.profit_pct >= 0)("loss", ctx_r6.summary.profit_pct < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r6.summary.profit_pct, "% ");
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r6.summary.chart_data);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r6.summary.chart_data.length === 0);
  }
}
function AdminDashboardComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56);
    \u0275\u0275text(2, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No data available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Select a restaurant and time period to view analytics");
    \u0275\u0275elementEnd()();
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  get avgOrderValue() {
    if (!this.summary || !this.summary.total_orders)
      return 0;
    return this.summary.total_sales / this.summary.total_orders;
  }
  constructor(api, cdr) {
    this.api = api;
    this.cdr = cdr;
    this.restaurants = [];
    this.summary = null;
    this.loading = false;
    this.selectedRestaurantId = "";
    this.selectedMonth = (/* @__PURE__ */ new Date()).getMonth() + 1;
    this.selectedYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    this.years = [2024, 2025, 2026];
    this.expenseCategories = [];
    this.chartInstance = null;
  }
  ngOnInit() {
    this.api.getRestaurants().subscribe((r) => {
      this.restaurants = r;
    });
    this.loadData();
  }
  loadData() {
    this.loading = true;
    this.api.getMonthlySummary(this.selectedYear, this.selectedMonth, this.selectedRestaurantId || void 0).subscribe({
      next: (s) => {
        this.summary = s;
        this.buildExpenseCategories();
        this.loading = false;
        this.cdr.detectChanges();
        setTimeout(() => this.renderChart(), 0);
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  buildExpenseCategories() {
    if (!this.summary)
      return;
    const colors = ["#FF6B35", "#00D4AA", "#5B9CF6", "#FFB347", "#FF5E7D", "#A78BFA", "#34D399"];
    const total = Object.values(this.summary.expense_breakdown).reduce((a, b) => a + b, 0);
    this.expenseCategories = Object.entries(this.summary.expense_breakdown).map(([name, amount], i) => ({
      name,
      amount,
      color: colors[i % colors.length],
      pct: total > 0 ? Math.round(amount / total * 100) : 0
    }));
  }
  renderChart() {
    const canvas = this.salesCanvas?.nativeElement;
    if (!canvas || !this.summary)
      return;
    if (this.chartInstance)
      this.chartInstance.destroy();
    const data = this.summary.chart_data;
    this.chartInstance = new auto_default(canvas, {
      type: "bar",
      data: {
        labels: data.map((d) => d.date.slice(5)),
        datasets: [
          {
            label: "Sales",
            data: data.map((d) => d.sales),
            backgroundColor: "rgba(255,107,53,0.9)",
            borderColor: "#FF6B35",
            borderWidth: 1,
            borderRadius: 4
          },
          {
            label: "Expenses",
            data: data.map((d) => d.expenses),
            backgroundColor: "rgba(255,94,125,0.9)",
            borderColor: "#FF5E7D",
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
          legend: { labels: { color: "#8B90A7", font: { size: 11 } } }
        },
        scales: {
          x: {
            ticks: { color: "#5A5F75", font: { size: 10 } },
            grid: { color: "rgba(255,255,255,0.04)" }
          },
          y: {
            beginAtZero: true,
            ticks: { color: "#5A5F75", font: { size: 10 }, callback: (v) => "\u20B9" + v },
            grid: { color: "rgba(255,255,255,0.04)" }
          }
        }
      }
    });
  }
  static {
    this.\u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminDashboardComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], viewQuery: function AdminDashboardComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.salesCanvas = _t.first);
      }
    }, decls: 20, vars: 9, consts: [["salesCanvas", ""], [1, "fade-in"], [1, "page-header"], [1, "subtitle"], [1, "header-controls"], [1, "form-control", 2, "width", "160px", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "month-picker"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["class", "loading-state", 4, "ngIf"], [4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [3, "value"], [1, "loading-state"], [1, "spinner", 2, "width", "32px", "height", "32px", "border-width", "3px"], [1, "stat-grid"], [1, "stat-card", 2, "--accent-color", "var(--primary)"], [1, "stat-label"], [1, "stat-value"], [1, "stat-badge"], [1, "stat-card", 2, "--accent-color", "var(--danger)"], [1, "stat-badge", "down"], [1, "stat-card"], [1, "stat-card", 2, "--accent-color", "var(--info)"], [1, "stat-badge", "up"], [1, "charts-grid"], [1, "card", "chart-card"], [1, "card-title"], [1, "chart-wrapper"], ["width", "600", "height", "260"], [1, "card"], [1, "expense-list"], ["class", "exp-row", 4, "ngFor", "ngForOf"], ["class", "empty-state", "style", "padding:30px", 4, "ngIf"], [1, "card", 2, "margin-top", "20px"], [1, "pnl-grid"], [1, "pnl-item"], [1, "pnl-label"], [1, "pnl-value"], [1, "pnl-value", "loss"], [1, "pnl-divider"], [1, "pnl-item", "pnl-total"], [1, "table-wrap"], [4, "ngFor", "ngForOf"], [1, "exp-row"], [1, "exp-info"], [1, "exp-dot"], [1, "exp-name"], [1, "exp-right"], [1, "exp-amount"], [1, "exp-pct"], [1, "empty-state", 2, "padding", "30px"], [1, "badge"], ["colspan", "6", 2, "text-align", "center", "color", "var(--text-muted)", "padding", "30px"], [1, "empty-state"], [1, "empty-icon"]], template: function AdminDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Admin Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275text(6, "Overall performance across all outlets");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "select", 5);
        \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_select_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedRestaurantId, $event) || (ctx.selectedRestaurantId = $event);
          return $event;
        });
        \u0275\u0275listener("change", function AdminDashboardComponent_Template_select_change_8_listener() {
          return ctx.loadData();
        });
        \u0275\u0275elementStart(9, "option", 6);
        \u0275\u0275text(10, "All Restaurants");
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, AdminDashboardComponent_option_11_Template, 2, 2, "option", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 8)(13, "select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_select_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedMonth, $event) || (ctx.selectedMonth = $event);
          return $event;
        });
        \u0275\u0275listener("change", function AdminDashboardComponent_Template_select_change_13_listener() {
          return ctx.loadData();
        });
        \u0275\u0275template(14, AdminDashboardComponent_option_14_Template, 2, 2, "option", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_select_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedYear, $event) || (ctx.selectedYear = $event);
          return $event;
        });
        \u0275\u0275listener("change", function AdminDashboardComponent_Template_select_change_15_listener() {
          return ctx.loadData();
        });
        \u0275\u0275template(16, AdminDashboardComponent_option_16_Template, 2, 2, "option", 7);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(17, AdminDashboardComponent_div_17_Template, 4, 0, "div", 10)(18, AdminDashboardComponent_ng_container_18_Template, 97, 56, "ng-container", 11)(19, AdminDashboardComponent_div_19_Template, 7, 0, "div", 12);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedRestaurantId);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.restaurants);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedMonth);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.months);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedYear);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.years);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.summary);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && !ctx.summary);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe], styles: ["\n.header-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.month-picker[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 40px;\n  color: var(--text-muted);\n}\n.charts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 380px;\n  gap: 20px;\n  margin-top: 0;\n}\n.chart-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.chart-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  height: 260px;\n}\n.chart-wrapper[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100% !important;\n}\n.expense-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.exp-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--border);\n}\n.exp-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.exp-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.exp-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.exp-name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text);\n}\n.exp-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.exp-amount[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-family: var(--font-mono);\n}\n.exp-pct[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.pnl-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n}\n.pnl-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.pnl-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n}\n.pnl-value[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  font-family: var(--font-mono);\n  color: var(--text);\n}\n.pnl-divider[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  border-top: 1px solid var(--border);\n}\n.pnl-total[_ngcontent-%COMP%]   .pnl-value[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n@media (max-width: 900px) {\n  .charts-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-admin-dashboard", standalone: true, imports: [CommonModule, FormsModule], template: `
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
        <span>Loading analytics\u2026</span>
      </div>

      <ng-container *ngIf="!loading && summary">
        <!-- KPI Cards -->
        <div class="stat-grid">
          <div class="stat-card" style="--accent-color: var(--primary)">
            <div class="stat-label">Total Sales</div>
            <div class="stat-value">\u20B9{{ summary.total_sales | number:'1.0-0' }}</div>
            <div class="stat-badge" [class.up]="summary.total_sales > 0">
              \u{1F6D2} {{ summary.total_orders }} orders
            </div>
          </div>
          <div class="stat-card" style="--accent-color: var(--danger)">
            <div class="stat-label">Total Expenses</div>
            <div class="stat-value">\u20B9{{ summary.total_expenses | number:'1.0-0' }}</div>
            <div class="stat-badge down">
              \u{1F4B8} This month
            </div>
          </div>
          <div class="stat-card" [style.--accent-color]="summary.net_profit >= 0 ? 'var(--success)' : 'var(--danger)'">
            <div class="stat-label">Net Profit</div>
            <div class="stat-value" [class.profit]="summary.net_profit >= 0" [class.loss]="summary.net_profit < 0">
              \u20B9{{ summary.net_profit | number:'1.0-0' }}
            </div>
            <div class="stat-badge" [class.up]="summary.net_profit >= 0" [class.down]="summary.net_profit < 0">
              {{ summary.profit_pct }}%
            </div>
          </div>
          <div class="stat-card" style="--accent-color: var(--info)">
            <div class="stat-label">Avg Order Value</div>
            <div class="stat-value">\u20B9{{ avgOrderValue | number:'1.0-0' }}</div>
            <div class="stat-badge up">\u{1F4C8} Per order</div>
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
                  <div class="exp-amount">\u20B9{{ cat.amount | number:'1.0-0' }}</div>
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
              <span class="pnl-value">\u20B9{{ summary.total_sales | number:'1.0-0' }}</span>
            </div>
            <div class="pnl-item">
              <span class="pnl-label">Total Expenses</span>
              <span class="pnl-value loss">- \u20B9{{ summary.total_expenses | number:'1.0-0' }}</span>
            </div>
            <div class="pnl-divider"></div>
            <div class="pnl-item pnl-total">
              <span class="pnl-label">Net Profit / Loss</span>
              <span class="pnl-value" [class.profit]="summary.net_profit >= 0" [class.loss]="summary.net_profit < 0">
                {{ summary.net_profit >= 0 ? '+' : '' }}\u20B9{{ summary.net_profit | number:'1.0-0' }}
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
                  <td>\u20B9{{ row.sales | number:'1.0-0' }}</td>
                  <td>{{ row.orders }}</td>
                  <td>\u20B9{{ row.expenses | number:'1.0-0' }}</td>
                  <td [class.profit]="row.sales - row.expenses >= 0" [class.loss]="row.sales - row.expenses < 0">
                    \u20B9{{ (row.sales - row.expenses) | number:'1.0-0' }}
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
        <div class="empty-icon">\u{1F4CA}</div>
        <h3>No data available</h3>
        <p>Select a restaurant and time period to view analytics</p>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;f0f7805fe5d1efaad57b000340b2b196248618645a08089174ad69d91ec88bdb;C:/Users/ritik/Downloads/restaurant-dashboard/frontend/src/app/admin/dashboard/admin-dashboard.component.ts */\n.header-controls {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.month-picker {\n  display: flex;\n  gap: 8px;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 40px;\n  color: var(--text-muted);\n}\n.charts-grid {\n  display: grid;\n  grid-template-columns: 1fr 380px;\n  gap: 20px;\n  margin-top: 0;\n}\n.chart-card {\n  overflow: hidden;\n}\n.chart-wrapper {\n  position: relative;\n  height: 260px;\n}\n.chart-wrapper canvas {\n  width: 100% !important;\n  height: 100% !important;\n}\n.expense-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.exp-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--border);\n}\n.exp-row:last-child {\n  border-bottom: none;\n}\n.exp-info {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.exp-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.exp-name {\n  font-size: 0.875rem;\n  color: var(--text);\n}\n.exp-right {\n  text-align: right;\n}\n.exp-amount {\n  font-weight: 600;\n  font-family: var(--font-mono);\n}\n.exp-pct {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.pnl-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n}\n.pnl-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.pnl-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n}\n.pnl-value {\n  font-size: 1.4rem;\n  font-weight: 800;\n  font-family: var(--font-mono);\n  color: var(--text);\n}\n.pnl-divider {\n  grid-column: 1/-1;\n  border-top: 1px solid var(--border);\n}\n.pnl-total .pnl-value {\n  font-size: 1.6rem;\n}\n@media (max-width: 900px) {\n  .charts-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: ChangeDetectorRef }], { salesCanvas: [{
    type: ViewChild,
    args: ["salesCanvas"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/admin/dashboard/admin-dashboard.component.ts", lineNumber: 207 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-S3ZUJFIK.js.map
