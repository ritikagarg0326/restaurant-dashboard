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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4RACHFFU.js";

// src/app/manager/wastage/wastage.component.ts
function WastageComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1, "\u2705 Wastage recorded and expense created");
    \u0275\u0275elementEnd();
  }
}
function WastageComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0\uFE0F ", ctx_r0.error);
  }
}
function WastageComponent_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("value", item_r2.item_name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.item_name);
  }
}
function WastageComponent_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 31);
  }
}
function WastageComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, " No wastage recorded yet. ");
    \u0275\u0275elementEnd();
  }
}
function WastageComponent_div_58_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 35);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const w_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(w_r3.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(5, 3, w_r3.amount, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(w_r3.notes || "Wastage item");
  }
}
function WastageComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Notes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275template(11, WastageComponent_div_58_tr_11_Template, 8, 6, "tr", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r0.wasteHistory);
  }
}
var WastageComponent = class _WastageComponent {
  constructor(api) {
    this.api = api;
    this.inventoryItems = [];
    this.wasteHistory = [];
    this.selectedItem = "";
    this.selectedUnit = "";
    this.wastageQty = 0;
    this.costPerUnit = 0;
    this.date = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.notes = "";
    this.saving = false;
    this.success = false;
    this.error = "";
  }
  ngOnInit() {
    this.loadLatestInventory();
    this.loadWasteHistory();
  }
  get totalAmount() {
    return Math.max(0, this.wastageQty * this.costPerUnit);
  }
  loadLatestInventory() {
    this.api.getInventory().subscribe((items) => {
      if (items.length) {
        this.inventoryItems = items[0].items;
      } else {
        this.inventoryItems = [];
      }
      if (!this.inventoryItems.find((i) => i.item_name === this.selectedItem)) {
        this.selectedItem = "";
        this.selectedUnit = "";
        this.costPerUnit = 0;
      }
    });
  }
  loadWasteHistory() {
    this.api.getExpenses().subscribe((expenses) => {
      this.wasteHistory = expenses.filter((e) => e.category === "Wastage").slice(0, 7);
    });
  }
  onItemChange() {
    const item = this.inventoryItems.find((i) => i.item_name === this.selectedItem);
    if (item) {
      this.selectedUnit = item.unit;
      this.costPerUnit = item.cost_per_unit;
    } else {
      this.selectedUnit = "";
      this.costPerUnit = 0;
    }
  }
  saveWastage() {
    this.error = "";
    if (!this.selectedItem || this.wastageQty <= 0 || this.costPerUnit <= 0) {
      this.error = "Select an item and enter valid wastage quantity and cost";
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
        this.error = "";
        this.resetForm();
        this.loadLatestInventory();
        this.loadWasteHistory();
        setTimeout(() => this.success = false, 3e3);
      },
      error: (err) => {
        this.saving = false;
        this.error = err.error?.detail || "Failed to log wastage";
      }
    });
  }
  resetForm() {
    this.selectedItem = "";
    this.selectedUnit = "";
    this.wastageQty = 0;
    this.costPerUnit = 0;
    this.notes = "";
  }
  static {
    this.\u0275fac = function WastageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WastageComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WastageComponent, selectors: [["app-wastage"]], decls: 59, vars: 18, consts: [[1, "fade-in"], [1, "page-header"], [1, "subtitle"], [1, "btn", "btn-primary", 3, "click"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "card", 2, "margin-bottom", "20px"], [1, "card-title"], [1, "form-grid"], [1, "form-group"], [1, "form-label"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["disabled", "", 1, "form-control", 3, "value"], ["type", "number", "min", "0", "step", "0.1", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "step", "0.01", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Optional details", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "summary-row"], [1, "summary-value"], [2, "display", "flex", "gap", "12px", "justify-content", "flex-end", "margin-top", "16px"], [1, "btn", "btn-ghost", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner", 4, "ngIf"], [1, "card"], ["style", "color:var(--text-muted);padding:24px", 4, "ngIf"], ["class", "table-wrap", 4, "ngIf"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [3, "value"], [1, "spinner"], [2, "color", "var(--text-muted)", "padding", "24px"], [1, "table-wrap"], [4, "ngFor", "ngForOf"], [2, "font-weight", "700", "font-family", "var(--font-mono)"]], template: function WastageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Wastage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 2);
        \u0275\u0275text(6, "Log food wastage and automatically deduct it from inventory");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 3);
        \u0275\u0275listener("click", function WastageComponent_Template_button_click_7_listener() {
          return ctx.loadLatestInventory();
        });
        \u0275\u0275text(8, "Refresh");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, WastageComponent_div_9_Template, 2, 0, "div", 4)(10, WastageComponent_div_10_Template, 2, 1, "div", 5);
        \u0275\u0275elementStart(11, "div", 6)(12, "div", 7);
        \u0275\u0275text(13, "Report Wastage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "label", 10);
        \u0275\u0275text(17, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function WastageComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.date, $event) || (ctx.date = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 9)(20, "label", 10);
        \u0275\u0275text(21, "Inventory Item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "select", 12);
        \u0275\u0275twoWayListener("ngModelChange", function WastageComponent_Template_select_ngModelChange_22_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedItem, $event) || (ctx.selectedItem = $event);
          return $event;
        });
        \u0275\u0275listener("change", function WastageComponent_Template_select_change_22_listener() {
          return ctx.onItemChange();
        });
        \u0275\u0275elementStart(23, "option", 13);
        \u0275\u0275text(24, "-- Select item --");
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, WastageComponent_option_25_Template, 2, 2, "option", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 9)(27, "label", 10);
        \u0275\u0275text(28, "Unit");
        \u0275\u0275elementEnd();
        \u0275\u0275element(29, "input", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 9)(31, "label", 10);
        \u0275\u0275text(32, "Wastage Quantity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function WastageComponent_Template_input_ngModelChange_33_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.wastageQty, $event) || (ctx.wastageQty = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 9)(35, "label", 10);
        \u0275\u0275text(36, "Cost Per Unit (\u20B9)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "input", 17);
        \u0275\u0275twoWayListener("ngModelChange", function WastageComponent_Template_input_ngModelChange_37_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.costPerUnit, $event) || (ctx.costPerUnit = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 9)(39, "label", 10);
        \u0275\u0275text(40, "Notes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "input", 18);
        \u0275\u0275twoWayListener("ngModelChange", function WastageComponent_Template_input_ngModelChange_41_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.notes, $event) || (ctx.notes = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "div", 19)(43, "div");
        \u0275\u0275text(44, "Total wastage amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 20);
        \u0275\u0275text(46);
        \u0275\u0275pipe(47, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 21)(49, "button", 22);
        \u0275\u0275listener("click", function WastageComponent_Template_button_click_49_listener() {
          return ctx.resetForm();
        });
        \u0275\u0275text(50, "Reset");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "button", 23);
        \u0275\u0275listener("click", function WastageComponent_Template_button_click_51_listener() {
          return ctx.saveWastage();
        });
        \u0275\u0275template(52, WastageComponent_span_52_Template, 1, 0, "span", 24);
        \u0275\u0275text(53);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(54, "div", 25)(55, "div", 7);
        \u0275\u0275text(56, "Recent wastage entries");
        \u0275\u0275elementEnd();
        \u0275\u0275template(57, WastageComponent_div_57_Template, 2, 0, "div", 26)(58, WastageComponent_div_58_Template, 12, 1, "div", 27);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.success);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.date);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedItem);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.inventoryItems);
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.selectedUnit);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.wastageQty);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.costPerUnit);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.notes);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(47, 15, ctx.totalAmount, "1.0-0"));
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", ctx.saving || !ctx.selectedItem || ctx.wastageQty <= 0 || ctx.costPerUnit <= 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.saving);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.saving ? "" : "Log Wastage", " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.wasteHistory.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.wasteHistory.length > 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe], styles: ["\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 18px;\n  padding: 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  background: var(--bg-card);\n}\n.summary-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-family: var(--font-mono);\n}\n/*# sourceMappingURL=wastage.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WastageComponent, [{
    type: Component,
    args: [{ selector: "app-wastage", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="fade-in">
      <div class="page-header">
        <div>
          <h1>Wastage</h1>
          <div class="subtitle">Log food wastage and automatically deduct it from inventory</div>
        </div>
        <button class="btn btn-primary" (click)="loadLatestInventory()">Refresh</button>
      </div>

      <div *ngIf="success" class="alert alert-success">\u2705 Wastage recorded and expense created</div>
      <div *ngIf="error" class="alert alert-danger">\u26A0\uFE0F {{ error }}</div>

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
            <label class="form-label">Cost Per Unit (\u20B9)</label>
            <input type="number" class="form-control" [(ngModel)]="costPerUnit" min="0" step="0.01" />
          </div>
          <div class="form-group">
            <label class="form-label">Notes</label>
            <input class="form-control" [(ngModel)]="notes" placeholder="Optional details" />
          </div>
        </div>

        <div class="summary-row">
          <div>Total wastage amount</div>
          <div class="summary-value">\u20B9{{ totalAmount | number:'1.0-0' }}</div>
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
                <td style="font-weight:700;font-family:var(--font-mono)">\u20B9{{ w.amount | number:'1.0-0' }}</td>
                <td>{{ w.notes || 'Wastage item' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;bf1fde3c2fd8eda1f658ecad50109a43af9522fc666891ce509064ce843d96a0;C:/Users/ritik/Downloads/restaurant-dashboard/frontend/src/app/manager/wastage/wastage.component.ts */\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}\n.summary-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 18px;\n  padding: 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  background: var(--bg-card);\n}\n.summary-value {\n  font-weight: 700;\n  font-family: var(--font-mono);\n}\n/*# sourceMappingURL=wastage.component.css.map */\n"] }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WastageComponent, { className: "WastageComponent", filePath: "src/app/manager/wastage/wastage.component.ts", lineNumber: 102 });
})();
export {
  WastageComponent
};
//# sourceMappingURL=chunk-KXZI4VF5.js.map
