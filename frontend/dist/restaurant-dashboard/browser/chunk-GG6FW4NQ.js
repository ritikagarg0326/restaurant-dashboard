import {
  ApiService
} from "./chunk-UYULKMB3.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-6NUVX2UH.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4RACHFFU.js";

// src/app/manager/expenses/expenses.component.ts
function ExpensesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, "\u2705 Expense recorded");
    \u0275\u0275elementEnd();
  }
}
function ExpensesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0\uFE0F ", ctx_r0.error);
  }
}
function ExpensesComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r2.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(5, 3, cat_r2.amount, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", cat_r2.count, " entries");
  }
}
function ExpensesComponent_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 26);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 8);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r3.date);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r3.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(8, 4, e_r3.amount, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r3.notes || "\u2014");
  }
}
function ExpensesComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2, "No expenses found");
    \u0275\u0275elementEnd()();
  }
}
function ExpensesComponent_div_41_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275property("value", c_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5);
  }
}
function ExpensesComponent_div_41_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 45);
  }
}
function ExpensesComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function ExpensesComponent_div_41_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal($event));
    });
    \u0275\u0275elementStart(1, "div", 29)(2, "div", 30)(3, "h3");
    \u0275\u0275text(4, "Add Expense");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275listener("click", function ExpensesComponent_div_41_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal = false);
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 32)(8, "label", 33);
    \u0275\u0275text(9, "Date *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function ExpensesComponent_div_41_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.date, $event) || (ctx_r0.form.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 32)(12, "label", 33);
    \u0275\u0275text(13, "Category *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 35);
    \u0275\u0275twoWayListener("ngModelChange", function ExpensesComponent_div_41_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.category, $event) || (ctx_r0.form.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(15, "option", 36);
    \u0275\u0275text(16, "-- Select category --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, ExpensesComponent_div_41_option_17_Template, 2, 2, "option", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 32)(19, "label", 33);
    \u0275\u0275text(20, "Amount (\u20B9) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ExpensesComponent_div_41_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.amount, $event) || (ctx_r0.form.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 32)(23, "label", 33);
    \u0275\u0275text(24, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function ExpensesComponent_div_41_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.notes, $event) || (ctx_r0.form.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 40)(27, "button", 41);
    \u0275\u0275listener("click", function ExpensesComponent_div_41_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal = false);
    });
    \u0275\u0275text(28, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 42);
    \u0275\u0275listener("click", function ExpensesComponent_div_41_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveExpense());
    });
    \u0275\u0275template(30, ExpensesComponent_div_41_span_30_Template, 1, 0, "span", 43);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.category);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.categories);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.amount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.notes);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving ? "" : "Save Expense", " ");
  }
}
var EXPENSE_CATEGORIES = [
  "Raw Material",
  "Packaging",
  "Electricity",
  "Gas/Fuel",
  "Wages",
  "Cleaning",
  "Maintenance",
  "Rent",
  "Internet",
  "Recharge",
  "Advance",
  "Miscellaneous"
];
var ExpensesComponent = class _ExpensesComponent {
  get totalExpenses() {
    return this.expenses.reduce((s, e) => s + e.amount, 0);
  }
  get categorySummary() {
    const map = {};
    for (const e of this.expenses) {
      if (!map[e.category])
        map[e.category] = { category: e.category, amount: 0, count: 0 };
      map[e.category].amount += e.amount;
      map[e.category].count++;
    }
    return Object.values(map).sort((a, b) => b.amount - a.amount);
  }
  constructor(api) {
    this.api = api;
    this.expenses = [];
    this.showModal = false;
    this.saving = false;
    this.success = false;
    this.error = "";
    this.filterFrom = "";
    this.filterTo = "";
    this.categories = EXPENSE_CATEGORIES;
    this.form = { date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0], category: "", amount: 0, notes: "" };
  }
  ngOnInit() {
    this.loadExpenses();
  }
  loadExpenses() {
    this.api.getExpenses({
      date_from: this.filterFrom || void 0,
      date_to: this.filterTo || void 0
    }).subscribe((e) => this.expenses = e);
  }
  clearFilter() {
    this.filterFrom = "";
    this.filterTo = "";
    this.loadExpenses();
  }
  closeModal(e) {
    if (e.target.classList.contains("modal-overlay"))
      this.showModal = false;
  }
  saveExpense() {
    if (!this.form.category || !this.form.amount || this.form.amount <= 0) {
      this.error = "Category and amount are required";
      return;
    }
    this.saving = true;
    this.api.createExpense(this.form).subscribe({
      next: () => {
        this.saving = false;
        this.showModal = false;
        this.success = true;
        this.error = "";
        this.form = { date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0], category: "", amount: 0, notes: "" };
        this.loadExpenses();
        setTimeout(() => this.success = false, 3e3);
      },
      error: (err) => {
        this.saving = false;
        this.error = err.error?.detail || "Failed";
      }
    });
  }
  static {
    this.\u0275fac = function ExpensesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExpensesComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExpensesComponent, selectors: [["app-expenses"]], decls: 42, vars: 12, consts: [[1, "fade-in"], [1, "page-header"], [1, "subtitle"], [1, "btn", "btn-primary", 3, "click"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "filter-bar"], ["type", "date", 1, "form-control", 2, "width", "150px", 3, "ngModelChange", "change", "ngModel"], [2, "color", "var(--text-muted)"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "total-badge"], [1, "cat-summary"], ["class", "cat-card card", 4, "ngFor", "ngForOf"], [1, "card", 2, "padding", "0", "margin-top", "20px"], [1, "table-wrap"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "cat-card", "card"], [1, "cat-name"], [1, "cat-amount"], [1, "cat-count"], [2, "font-family", "var(--font-mono)", "font-size", "0.8rem"], [1, "badge", "badge-info"], [2, "font-weight", "700", "font-family", "var(--font-mono)"], ["colspan", "4", 2, "text-align", "center", "color", "var(--text-muted)", "padding", "32px"], [1, "modal-overlay", 3, "click"], [1, "modal-box"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "form-group"], [1, "form-label"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "placeholder", "0", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Optional description\u2026", 1, "form-control", 3, "ngModelChange", "ngModel"], [2, "display", "flex", "gap", "12px", "justify-content", "flex-end"], [1, "btn", "btn-ghost", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner", 4, "ngIf"], [3, "value"], [1, "spinner"]], template: function ExpensesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Expenses");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 2);
        \u0275\u0275text(6, "Track daily operational costs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 3);
        \u0275\u0275listener("click", function ExpensesComponent_Template_button_click_7_listener() {
          return ctx.showModal = true;
        });
        \u0275\u0275text(8, "+ Add Expense");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, ExpensesComponent_div_9_Template, 2, 0, "div", 4)(10, ExpensesComponent_div_10_Template, 2, 1, "div", 5);
        \u0275\u0275elementStart(11, "div", 6)(12, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function ExpensesComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterFrom, $event) || (ctx.filterFrom = $event);
          return $event;
        });
        \u0275\u0275listener("change", function ExpensesComponent_Template_input_change_12_listener() {
          return ctx.loadExpenses();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "to");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function ExpensesComponent_Template_input_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterTo, $event) || (ctx.filterTo = $event);
          return $event;
        });
        \u0275\u0275listener("change", function ExpensesComponent_Template_input_change_15_listener() {
          return ctx.loadExpenses();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 9);
        \u0275\u0275listener("click", function ExpensesComponent_Template_button_click_16_listener() {
          return ctx.clearFilter();
        });
        \u0275\u0275text(17, "Clear");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 10);
        \u0275\u0275text(19, " Total: ");
        \u0275\u0275elementStart(20, "strong");
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "number");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 11);
        \u0275\u0275template(24, ExpensesComponent_div_24_Template, 8, 6, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 13)(26, "div", 14)(27, "table")(28, "thead")(29, "tr")(30, "th");
        \u0275\u0275text(31, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "th");
        \u0275\u0275text(33, "Category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "th");
        \u0275\u0275text(35, "Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "th");
        \u0275\u0275text(37, "Notes");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(38, "tbody");
        \u0275\u0275template(39, ExpensesComponent_tr_39_Template, 11, 7, "tr", 15)(40, ExpensesComponent_tr_40_Template, 3, 0, "tr", 16);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(41, ExpensesComponent_div_41_Template, 32, 8, "div", 17);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.success);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterFrom);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterTo);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(22, 9, ctx.totalExpenses, "1.0-0"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.categorySummary);
        \u0275\u0275advance(15);
        \u0275\u0275property("ngForOf", ctx.expenses);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.expenses.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe], styles: ["\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.total-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: var(--primary-muted);\n  color: var(--primary);\n  padding: 6px 16px;\n  border-radius: 20px;\n  font-size: 0.875rem;\n}\n.cat-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 12px;\n}\n.cat-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px;\n}\n.cat-name[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  margin-bottom: 8px;\n}\n.cat-amount[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 800;\n  font-family: var(--font-mono);\n  color: var(--text);\n}\n.cat-count[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-dim);\n  margin-top: 4px;\n}\n/*# sourceMappingURL=expenses.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpensesComponent, [{
    type: Component,
    args: [{ selector: "app-expenses", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="fade-in">
      <div class="page-header">
        <div>
          <h1>Expenses</h1>
          <div class="subtitle">Track daily operational costs</div>
        </div>
        <button class="btn btn-primary" (click)="showModal = true">+ Add Expense</button>
      </div>

      <div *ngIf="success" class="alert alert-success">\u2705 Expense recorded</div>
      <div *ngIf="error" class="alert alert-danger">\u26A0\uFE0F {{ error }}</div>

      <!-- Filter -->
      <div class="filter-bar">
        <input type="date" class="form-control" [(ngModel)]="filterFrom" (change)="loadExpenses()" style="width:150px" />
        <span style="color:var(--text-muted)">to</span>
        <input type="date" class="form-control" [(ngModel)]="filterTo" (change)="loadExpenses()" style="width:150px" />
        <button class="btn btn-ghost btn-sm" (click)="clearFilter()">Clear</button>

        <div class="total-badge">
          Total: <strong>\u20B9{{ totalExpenses | number:'1.0-0' }}</strong>
        </div>
      </div>

      <!-- Category Summary -->
      <div class="cat-summary">
        <div *ngFor="let cat of categorySummary" class="cat-card card">
          <div class="cat-name">{{ cat.category }}</div>
          <div class="cat-amount">\u20B9{{ cat.amount | number:'1.0-0' }}</div>
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
                <td style="font-weight:700;font-family:var(--font-mono)">\u20B9{{ e.amount | number:'1.0-0' }}</td>
                <td style="color:var(--text-muted)">{{ e.notes || '\u2014' }}</td>
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
            <button class="modal-close" (click)="showModal = false">\xD7</button>
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
            <label class="form-label">Amount (\u20B9) *</label>
            <input type="number" class="form-control" [(ngModel)]="form.amount" placeholder="0" min="0" />
          </div>
          <div class="form-group">
            <label class="form-label">Notes</label>
            <input class="form-control" [(ngModel)]="form.notes" placeholder="Optional description\u2026" />
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
  `, styles: ["/* angular:styles/component:css;5553f4aadcfb303fe56397e8b264799907fcdd84f645cf4e40e17bff732b129b;C:/Users/ritik/Downloads/restaurant-dashboard/frontend/src/app/manager/expenses/expenses.component.ts */\n.filter-bar {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.total-badge {\n  margin-left: auto;\n  background: var(--primary-muted);\n  color: var(--primary);\n  padding: 6px 16px;\n  border-radius: 20px;\n  font-size: 0.875rem;\n}\n.cat-summary {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 12px;\n}\n.cat-card {\n  text-align: center;\n  padding: 16px;\n}\n.cat-name {\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  margin-bottom: 8px;\n}\n.cat-amount {\n  font-size: 1.2rem;\n  font-weight: 800;\n  font-family: var(--font-mono);\n  color: var(--text);\n}\n.cat-count {\n  font-size: 0.72rem;\n  color: var(--text-dim);\n  margin-top: 4px;\n}\n/*# sourceMappingURL=expenses.component.css.map */\n"] }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExpensesComponent, { className: "ExpensesComponent", filePath: "src/app/manager/expenses/expenses.component.ts", lineNumber: 132 });
})();
export {
  ExpensesComponent
};
//# sourceMappingURL=chunk-GG6FW4NQ.js.map
