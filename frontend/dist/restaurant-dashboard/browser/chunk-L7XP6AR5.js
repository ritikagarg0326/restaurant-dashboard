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
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵarrowFunction,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4RACHFFU.js";

// src/app/manager/inventory/inventory.component.ts
var arrowFn0 = (ctx, view) => (i) => i.item;
function InventoryComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 18);
  }
}
function InventoryComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2705 Inventory saved for ", ctx_r0.selectedDate);
  }
}
function InventoryComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0\uFE0F ", ctx_r0.error);
  }
}
function InventoryComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, " \u26A0\uFE0F Low stock: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.lowStockItems.map(\u0275\u0275arrowFunction(1, arrowFn0, ctx)).join(", "));
  }
}
function InventoryComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function InventoryComponent_tr_41_Template_input_ngModelChange_4_listener($event) {
      const row_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(row_r3.item_name, $event) || (row_r3.item_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "select", 24);
    \u0275\u0275twoWayListener("ngModelChange", function InventoryComponent_tr_41_Template_select_ngModelChange_6_listener($event) {
      const row_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(row_r3.unit, $event) || (row_r3.unit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(7, "option");
    \u0275\u0275text(8, "kg");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option");
    \u0275\u0275text(10, "g");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option");
    \u0275\u0275text(12, "L");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option");
    \u0275\u0275text(14, "ml");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option");
    \u0275\u0275text(16, "pcs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option");
    \u0275\u0275text(18, "pkt");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "td")(20, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function InventoryComponent_tr_41_Template_input_ngModelChange_20_listener($event) {
      const row_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(row_r3.opening_stock, $event) || (row_r3.opening_stock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function InventoryComponent_tr_41_Template_input_ngModelChange_22_listener($event) {
      const row_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(row_r3.purchased_qty, $event) || (row_r3.purchased_qty = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td")(24, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function InventoryComponent_tr_41_Template_input_ngModelChange_24_listener($event) {
      const row_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(row_r3.closing_stock, $event) || (row_r3.closing_stock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td")(26, "span", 26);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td")(30, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function InventoryComponent_tr_41_Template_input_ngModelChange_30_listener($event) {
      const row_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(row_r3.cost_per_unit, $event) || (row_r3.cost_per_unit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "td")(32, "button", 28);
    \u0275\u0275listener("click", function InventoryComponent_tr_41_Template_button_click_32_listener() {
      const i_r4 = \u0275\u0275restoreView(_r2).index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeRow(i_r4));
    });
    \u0275\u0275text(33, "\u2715");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r3.item_name);
    \u0275\u0275property("name", "n" + i_r4);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r3.unit);
    \u0275\u0275property("name", "u" + i_r4);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", row_r3.opening_stock);
    \u0275\u0275property("name", "os" + i_r4);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r3.purchased_qty);
    \u0275\u0275property("name", "pq" + i_r4);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r3.closing_stock);
    \u0275\u0275property("name", "cs" + i_r4);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("high", ctx_r0.getConsumption(row_r3) > row_r3.opening_stock * 0.8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(28, 17, ctx_r0.getConsumption(row_r3), "1.1-1"), " ", row_r3.unit, " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", row_r3.cost_per_unit);
    \u0275\u0275property("name", "cpu" + i_r4);
  }
}
function InventoryComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 31);
    \u0275\u0275text(6, "Saved");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rec_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(rec_r5.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", rec_r5.items.length, " items tracked");
  }
}
function InventoryComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, "No history yet");
    \u0275\u0275elementEnd();
  }
}
var DEFAULT_ITEMS = [
  { item_name: "Refined Oil", unit: "L", opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: "Ghee", unit: "kg", opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: "Butter", unit: "kg", opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: "Milk", unit: "L", opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: "Cream", unit: "kg", opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: "Paneer", unit: "kg", opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: "Soya Chaap", unit: "pcs", opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: "Maida", unit: "kg", opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: "Atta", unit: "kg", opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: "Rice", unit: "kg", opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: "Tomato", unit: "kg", opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: "Onion", unit: "kg", opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: "Green Chilli", unit: "kg", opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: "Garlic", unit: "kg", opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: "Ginger", unit: "kg", opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: "Ginger Garlic Paste", unit: "kg", opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: "Salt", unit: "kg", opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: "Sugar", unit: "kg", opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: "Kasuri Methi", unit: "kg", opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: "Garam Masala", unit: "kg", opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: "Degi Mirch", unit: "kg", opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: "Haldi", unit: "kg", opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: "Chilli Powder", unit: "kg", opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: "Bread Crumbs", unit: "kg", opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 },
  { item_name: "Cheese", unit: "kg", opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 }
];
var InventoryComponent = class _InventoryComponent {
  constructor(api) {
    this.api = api;
    this.items = DEFAULT_ITEMS.map((i) => __spreadValues({}, i));
    this.selectedDate = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.saving = false;
    this.success = false;
    this.error = "";
    this.history = [];
    this.lowStockItems = [];
  }
  ngOnInit() {
    this.loadHistory();
    this.api.getLowStock().subscribe((ls) => this.lowStockItems = ls);
  }
  addRow() {
    this.items.push({ item_name: "", unit: "kg", opening_stock: 0, purchased_qty: 0, closing_stock: 0, cost_per_unit: 0 });
  }
  removeRow(i) {
    this.items.splice(i, 1);
  }
  getConsumption(row) {
    return Math.max(0, row.opening_stock + row.purchased_qty - row.closing_stock);
  }
  loadHistory() {
    this.api.getInventory().subscribe((inv) => this.history = inv.slice(0, 7));
  }
  submit() {
    const filled = this.items.filter((i) => i.item_name.trim());
    if (!filled.length) {
      this.error = "Add at least one item";
      return;
    }
    this.saving = true;
    this.api.submitInventory({ date: this.selectedDate, items: filled }).subscribe({
      next: () => {
        this.saving = false;
        this.success = true;
        this.error = "";
        this.loadHistory();
        setTimeout(() => this.success = false, 3e3);
      },
      error: (err) => {
        this.saving = false;
        this.error = err.error?.detail || "Failed to save";
      }
    });
  }
  static {
    this.\u0275fac = function InventoryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InventoryComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventoryComponent, selectors: [["app-inventory"]], decls: 47, vars: 10, consts: [[1, "fade-in"], [1, "page-header"], [1, "subtitle"], [2, "display", "flex", "gap", "10px", "align-items", "center"], ["type", "date", 1, "form-control", 2, "width", "160px", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-ghost", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-warning", "style", "margin-bottom:16px", 4, "ngIf"], [1, "card", 2, "padding", "0"], [1, "table-wrap"], [4, "ngFor", "ngForOf"], [1, "card", 2, "margin-top", "24px"], [1, "card-title"], ["class", "hist-row", 4, "ngFor", "ngForOf"], ["style", "color:var(--text-muted);font-size:0.875rem", 4, "ngIf"], [1, "spinner"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "alert", "alert-warning", 2, "margin-bottom", "16px"], [2, "color", "var(--text-dim)"], ["placeholder", "Item name", 1, "form-control", 2, "min-width", "140px", 3, "ngModelChange", "ngModel", "name"], [1, "form-control", 2, "width", "70px", 3, "ngModelChange", "ngModel", "name"], ["type", "number", "min", "0", "step", "0.1", 1, "form-control", "num-input", 3, "ngModelChange", "ngModel", "name"], [1, "consumption-val"], ["type", "number", "min", "0", "placeholder", "0", 1, "form-control", "num-input", 3, "ngModelChange", "ngModel", "name"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "hist-row"], [2, "color", "var(--text-muted)"], [1, "badge", "badge-success"], [2, "color", "var(--text-muted)", "font-size", "0.875rem"]], template: function InventoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Inventory");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 2);
        \u0275\u0275text(6, "Daily stock tracking");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 3)(8, "input", 4);
        \u0275\u0275twoWayListener("ngModelChange", function InventoryComponent_Template_input_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedDate, $event) || (ctx.selectedDate = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 5);
        \u0275\u0275listener("click", function InventoryComponent_Template_button_click_9_listener() {
          return ctx.addRow();
        });
        \u0275\u0275text(10, "+ Add Item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 6);
        \u0275\u0275listener("click", function InventoryComponent_Template_button_click_11_listener() {
          return ctx.submit();
        });
        \u0275\u0275template(12, InventoryComponent_span_12_Template, 1, 0, "span", 7);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(14, InventoryComponent_div_14_Template, 2, 1, "div", 8)(15, InventoryComponent_div_15_Template, 2, 1, "div", 9)(16, InventoryComponent_div_16_Template, 4, 2, "div", 10);
        \u0275\u0275elementStart(17, "div", 11)(18, "div", 12)(19, "table")(20, "thead")(21, "tr")(22, "th");
        \u0275\u0275text(23, "#");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "th");
        \u0275\u0275text(25, "Item Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "th");
        \u0275\u0275text(27, "Unit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "th");
        \u0275\u0275text(29, "Opening Stock");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "th");
        \u0275\u0275text(31, "Purchased");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "th");
        \u0275\u0275text(33, "Closing Stock");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "th");
        \u0275\u0275text(35, "Consumption");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "th");
        \u0275\u0275text(37, "Cost/Unit (\u20B9)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "th");
        \u0275\u0275text(39, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "tbody");
        \u0275\u0275template(41, InventoryComponent_tr_41_Template, 34, 20, "tr", 13);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(42, "div", 14)(43, "div", 15);
        \u0275\u0275text(44, "Recent Submissions");
        \u0275\u0275elementEnd();
        \u0275\u0275template(45, InventoryComponent_div_45_Template, 7, 2, "div", 16)(46, InventoryComponent_div_46_Template, 2, 0, "div", 17);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedDate);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.saving);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.saving);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.saving ? "" : "Save Inventory", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.success);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.lowStockItems.length > 0);
        \u0275\u0275advance(25);
        \u0275\u0275property("ngForOf", ctx.items);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.history);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.history.length === 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe], styles: ["\n.num-input[_ngcontent-%COMP%] {\n  width: 90px;\n  text-align: right;\n  font-family: var(--font-mono);\n}\n.consumption-val[_ngcontent-%COMP%] {\n  font-family: var(--font-mono);\n  font-size: 0.875rem;\n  color: var(--success);\n  font-weight: 600;\n}\n.consumption-val.high[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.hist-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--border);\n  font-size: 0.875rem;\n}\n.hist-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n/*# sourceMappingURL=inventory.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InventoryComponent, [{
    type: Component,
    args: [{ selector: "app-inventory", standalone: true, imports: [CommonModule, FormsModule], template: `
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

      <div *ngIf="success" class="alert alert-success">\u2705 Inventory saved for {{ selectedDate }}</div>
      <div *ngIf="error" class="alert alert-danger">\u26A0\uFE0F {{ error }}</div>

      <!-- Low Stock Alerts -->
      <div *ngIf="lowStockItems.length > 0" class="alert alert-warning" style="margin-bottom:16px">
        \u26A0\uFE0F Low stock: <strong>{{ lowStockItems.map(i => i.item).join(', ') }}</strong>
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
                <th>Cost/Unit (\u20B9)</th>
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
                  <button class="btn btn-danger btn-sm" (click)="removeRow(i)">\u2715</button>
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
  `, styles: ["/* angular:styles/component:css;1b32a0ef89b5a4b64c3205076b9dbc72bd83765fb4fab7046480b35fdaff6dfa;C:/Users/ritik/Downloads/restaurant-dashboard/frontend/src/app/manager/inventory/inventory.component.ts */\n.num-input {\n  width: 90px;\n  text-align: right;\n  font-family: var(--font-mono);\n}\n.consumption-val {\n  font-family: var(--font-mono);\n  font-size: 0.875rem;\n  color: var(--success);\n  font-weight: 600;\n}\n.consumption-val.high {\n  color: var(--warning);\n}\n.hist-row {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--border);\n  font-size: 0.875rem;\n}\n.hist-row:last-child {\n  border-bottom: none;\n}\n/*# sourceMappingURL=inventory.component.css.map */\n"] }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventoryComponent, { className: "InventoryComponent", filePath: "src/app/manager/inventory/inventory.component.ts", lineNumber: 138 });
})();
export {
  InventoryComponent
};
//# sourceMappingURL=chunk-L7XP6AR5.js.map
