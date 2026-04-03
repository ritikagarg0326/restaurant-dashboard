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
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf,
  TitleCasePipe,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4RACHFFU.js";

// src/app/manager/orders/orders.component.ts
function OrdersComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2705 Order saved \u2014 \u20B9", \u0275\u0275pipeBind2(2, 1, ctx_r0.lastAmount, "1.0-0"));
  }
}
function OrdersComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0\uFE0F ", ctx_r0.error);
  }
}
function OrdersComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_div_19_Template_input_ngModelChange_1_listener($event) {
      const line_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(line_r3.name, $event) || (line_r3.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function OrdersComponent_div_19_Template_input_ngModelChange_1_listener() {
      const line_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onItemNameChange(line_r3));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_div_19_Template_input_ngModelChange_2_listener($event) {
      const line_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(line_r3.quantity, $event) || (line_r3.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_div_19_Template_input_ngModelChange_3_listener($event) {
      const line_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(line_r3.price, $event) || (line_r3.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 43);
    \u0275\u0275listener("click", function OrdersComponent_div_19_Template_button_click_4_listener() {
      const i_r4 = \u0275\u0275restoreView(_r2).index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeLine(i_r4));
    });
    \u0275\u0275text(5, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", line_r3.name);
    \u0275\u0275property("name", "item" + i_r4);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", line_r3.quantity);
    \u0275\u0275property("name", "qty" + i_r4);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", line_r3.price);
    \u0275\u0275property("name", "price" + i_r4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.lines.length === 1);
  }
}
function OrdersComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "option", 44);
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275property("value", item_r5.name);
  }
}
function OrdersComponent_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 45);
  }
}
function OrdersComponent_div_67_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", item_r6.name, " \xD7", item_r6.quantity);
  }
}
function OrdersComponent_div_67_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Table: ", o_r7.table_no);
  }
}
function OrdersComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "div", 48);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 49);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 50);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 51);
    \u0275\u0275template(12, OrdersComponent_div_67_span_12_Template, 2, 2, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, OrdersComponent_div_67_div_13_Template, 2, 1, "div", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 5, o_r7.created_at, "HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, o_r7.payment_mode));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(10, 10, o_r7.total_amount, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", o_r7.items);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", o_r7.table_no);
  }
}
function OrdersComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57);
    \u0275\u0275text(2, "\u{1F6D2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4, "No orders yet today");
    \u0275\u0275elementEnd()();
  }
}
var OrdersComponent = class _OrdersComponent {
  get orderTotal() {
    return this.lines.reduce((s, l) => s + l.quantity * l.price, 0);
  }
  get todaySales() {
    return this.todayOrders.reduce((s, o) => s + o.total_amount, 0);
  }
  get isValid() {
    return this.lines.some((l) => l.name.trim() && l.quantity > 0 && l.price > 0) && this.orderTotal > 0;
  }
  constructor(api) {
    this.api = api;
    this.lines = [{ name: "", quantity: 1, price: 0 }];
    this.paymentMode = "cash";
    this.tableNo = "";
    this.notes = "";
    this.saving = false;
    this.success = false;
    this.error = "";
    this.lastAmount = 0;
    this.menuItems = [];
    this.todayOrders = [];
    this.todayDate = (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN");
  }
  ngOnInit() {
    this.loadTodayOrders();
    this.api.getMenu().subscribe((menu) => this.menuItems = menu);
  }
  addLine() {
    this.lines.push({ name: "", quantity: 1, price: 0 });
  }
  removeLine(i) {
    if (this.lines.length > 1)
      this.lines.splice(i, 1);
  }
  onItemNameChange(line) {
    const normalized = line.name.trim().toLowerCase();
    if (!normalized) {
      return;
    }
    const exact = this.menuItems.find((item) => item.name.toLowerCase() === normalized);
    if (exact) {
      line.price = exact.price;
      line.name = exact.name;
      return;
    }
    const partial = this.menuItems.find((item) => item.name.toLowerCase().startsWith(normalized));
    if (partial) {
      line.price = partial.price;
      return;
    }
  }
  loadTodayOrders() {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.api.getOrders({ date: today }).subscribe((o) => this.todayOrders = o);
  }
  submitOrder() {
    const items = this.lines.filter((l) => l.name.trim() && l.quantity > 0 && l.price > 0);
    if (!items.length) {
      this.error = "Add at least one valid item";
      return;
    }
    this.saving = true;
    this.error = "";
    this.api.createOrder({ items, payment_mode: this.paymentMode, table_no: this.tableNo || null, notes: this.notes || null }).subscribe({
      next: () => {
        this.saving = false;
        this.lastAmount = this.orderTotal;
        this.lines = [{ name: "", quantity: 1, price: 0 }];
        this.tableNo = "";
        this.notes = "";
        this.success = true;
        this.loadTodayOrders();
        setTimeout(() => this.success = false, 3e3);
      },
      error: (err) => {
        this.saving = false;
        this.error = err.error?.detail || "Failed to save order";
      }
    });
  }
  static {
    this.\u0275fac = function OrdersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrdersComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrdersComponent, selectors: [["app-orders"]], decls: 69, vars: 25, consts: [[1, "fade-in"], [1, "page-header"], [1, "subtitle"], [1, "orders-layout"], [1, "order-form-panel", "card"], [2, "margin-bottom", "20px"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "items-header"], [1, "card-title", 2, "margin", "0"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "items-list"], ["class", "item-row", 4, "ngFor", "ngForOf"], ["id", "order-menu-items"], [3, "value", 4, "ngFor", "ngForOf"], [1, "order-total"], [1, "total-amount"], [1, "form-row-2"], [1, "form-group"], [1, "form-label"], ["name", "paymentMode", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "cash"], ["value", "upi"], ["value", "card"], ["value", "zomato"], ["value", "swiggy"], ["name", "tableNo", "placeholder", "e.g. T4", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "notes", "placeholder", "Special instructions\u2026", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", "btn-lg", 2, "width", "100%", 3, "click", "disabled"], ["class", "spinner", 4, "ngIf"], [1, "today-orders"], [1, "card", 2, "padding", "0"], [2, "padding", "16px 20px", "border-bottom", "1px solid var(--border)", "display", "flex", "align-items", "center", "justify-content", "space-between"], [2, "font-size", "0.75rem", "color", "var(--text-muted)"], [1, "orders-scroll"], ["class", "order-card", 4, "ngFor", "ngForOf"], ["class", "empty-state", "style", "padding:40px", 4, "ngIf"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "item-row"], ["list", "order-menu-items", "placeholder", "Item name (e.g. Pasta)", 1, "form-control", 2, "flex", "2", 3, "ngModelChange", "ngModel", "name"], ["type", "number", "placeholder", "Qty", "min", "1", 1, "form-control", 2, "flex", "0.6", "text-align", "center", 3, "ngModelChange", "ngModel", "name"], ["type", "number", "placeholder", "\u20B9 Price", "min", "0", 1, "form-control", 2, "flex", "1", 3, "ngModelChange", "ngModel", "name"], [1, "btn", "btn-danger", "btn-sm", 2, "flex-shrink", "0", 3, "click", "disabled"], [3, "value"], [1, "spinner"], [1, "order-card"], [1, "oc-header"], [1, "oc-time"], [1, "badge", "badge-info"], [1, "oc-amount"], [1, "oc-items"], ["class", "item-chip", 4, "ngFor", "ngForOf"], ["class", "oc-table", 4, "ngIf"], [1, "item-chip"], [1, "oc-table"], [1, "empty-state", 2, "padding", "40px"], [1, "empty-icon"]], template: function OrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 2);
        \u0275\u0275text(6, "Enter each order as it comes in");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 3)(8, "div", 4)(9, "h3", 5);
        \u0275\u0275text(10, "\u2795 New Order");
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, OrdersComponent_div_11_Template, 3, 4, "div", 6)(12, OrdersComponent_div_12_Template, 2, 1, "div", 7);
        \u0275\u0275elementStart(13, "div", 8)(14, "div", 9);
        \u0275\u0275text(15, "Order Items");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 10);
        \u0275\u0275listener("click", function OrdersComponent_Template_button_click_16_listener() {
          return ctx.addLine();
        });
        \u0275\u0275text(17, "+ Add Item");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 11);
        \u0275\u0275template(19, OrdersComponent_div_19_Template, 6, 7, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "datalist", 13);
        \u0275\u0275template(21, OrdersComponent_option_21_Template, 1, 1, "option", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 15)(23, "span");
        \u0275\u0275text(24, "Order Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 16);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 17)(29, "div", 18)(30, "label", 19);
        \u0275\u0275text(31, "Payment Mode *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "select", 20);
        \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_Template_select_ngModelChange_32_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.paymentMode, $event) || (ctx.paymentMode = $event);
          return $event;
        });
        \u0275\u0275elementStart(33, "option", 21);
        \u0275\u0275text(34, "\u{1F4B5} Cash");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "option", 22);
        \u0275\u0275text(36, "\u{1F4F1} UPI");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "option", 23);
        \u0275\u0275text(38, "\u{1F4B3} Card");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "option", 24);
        \u0275\u0275text(40, "\u{1F534} Zomato");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "option", 25);
        \u0275\u0275text(42, "\u{1F7E0} Swiggy");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "div", 18)(44, "label", 19);
        \u0275\u0275text(45, "Table No.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "input", 26);
        \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_Template_input_ngModelChange_46_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.tableNo, $event) || (ctx.tableNo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "div", 18)(48, "label", 19);
        \u0275\u0275text(49, "Notes (optional)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "input", 27);
        \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_Template_input_ngModelChange_50_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.notes, $event) || (ctx.notes = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "button", 28);
        \u0275\u0275listener("click", function OrdersComponent_Template_button_click_51_listener() {
          return ctx.submitOrder();
        });
        \u0275\u0275template(52, OrdersComponent_span_52_Template, 1, 0, "span", 29);
        \u0275\u0275text(53);
        \u0275\u0275pipe(54, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "div", 30)(56, "div", 31)(57, "div", 32)(58, "div")(59, "div", 9);
        \u0275\u0275text(60, "Today's Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 33);
        \u0275\u0275text(62);
        \u0275\u0275pipe(63, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "button", 10);
        \u0275\u0275listener("click", function OrdersComponent_Template_button_click_64_listener() {
          return ctx.loadTodayOrders();
        });
        \u0275\u0275text(65, "\u21BB");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "div", 34);
        \u0275\u0275template(67, OrdersComponent_div_67_Template, 14, 13, "div", 35)(68, OrdersComponent_div_68_Template, 5, 0, "div", 36);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.success);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", ctx.lines);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.menuItems);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(27, 16, ctx.orderTotal, "1.0-0"));
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.paymentMode);
        \u0275\u0275advance(14);
        \u0275\u0275twoWayProperty("ngModel", ctx.tableNo);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.notes);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.saving || !ctx.isValid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.saving);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.saving ? "Saving\u2026" : "Save Order \u20B9" + \u0275\u0275pipeBind2(54, 19, ctx.orderTotal, "1.0-0"), " ");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate3("", ctx.todayDate, " \xB7 ", ctx.todayOrders.length, " orders \xB7 \u20B9", \u0275\u0275pipeBind2(63, 22, ctx.todaySales, "1.0-0"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.todayOrders);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.todayOrders.length === 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe, TitleCasePipe, DatePipe], styles: ["\n.orders-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 480px 1fr;\n  gap: 20px;\n  align-items: start;\n}\n.order-form-panel[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n}\n.items-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.items-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.item-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.order-total[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--bg-card-2);\n  border-radius: var(--radius-sm);\n  padding: 12px 16px;\n  margin-bottom: 18px;\n  font-weight: 600;\n}\n.total-amount[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  font-family: var(--font-mono);\n  color: var(--primary);\n}\n.form-row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.today-orders[_ngcontent-%COMP%] {\n}\n.orders-scroll[_ngcontent-%COMP%] {\n  max-height: 680px;\n  overflow-y: auto;\n}\n.order-card[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-bottom: 1px solid var(--border);\n  transition: background var(--transition);\n}\n.order-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.02);\n}\n.oc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 8px;\n}\n.oc-time[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  font-family: var(--font-mono);\n}\n.oc-amount[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-weight: 700;\n  font-family: var(--font-mono);\n  color: var(--primary);\n}\n.oc-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.item-chip[_ngcontent-%COMP%] {\n  background: var(--bg-card-2);\n  border: 1px solid var(--border);\n  border-radius: 20px;\n  padding: 2px 10px;\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.oc-table[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-dim);\n  margin-top: 6px;\n}\n@media (max-width: 900px) {\n  .orders-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=orders.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrdersComponent, [{
    type: Component,
    args: [{ selector: "app-orders", standalone: true, imports: [CommonModule, FormsModule], template: `
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
          <h3 style="margin-bottom:20px">\u2795 New Order</h3>

          <div *ngIf="success" class="alert alert-success">\u2705 Order saved \u2014 \u20B9{{ lastAmount | number:'1.0-0' }}</div>
          <div *ngIf="error" class="alert alert-danger">\u26A0\uFE0F {{ error }}</div>

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
                placeholder="\u20B9 Price"
                min="0"
                style="flex:1" />
              <button
                class="btn btn-danger btn-sm"
                (click)="removeLine(i)"
                [disabled]="lines.length === 1"
                style="flex-shrink:0">\u2715</button>
            </div>
          </div>

          <datalist id="order-menu-items">
            <option *ngFor="let item of menuItems" [value]="item.name"></option>
          </datalist>

          <!-- Total -->
          <div class="order-total">
            <span>Order Total</span>
            <span class="total-amount">\u20B9{{ orderTotal | number:'1.0-0' }}</span>
          </div>

          <!-- Payment & Table -->
          <div class="form-row-2">
            <div class="form-group">
              <label class="form-label">Payment Mode *</label>
              <select class="form-control" [(ngModel)]="paymentMode" name="paymentMode">
                <option value="cash">\u{1F4B5} Cash</option>
                <option value="upi">\u{1F4F1} UPI</option>
                <option value="card">\u{1F4B3} Card</option>
                <option value="zomato">\u{1F534} Zomato</option>
                <option value="swiggy">\u{1F7E0} Swiggy</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Table No.</label>
              <input class="form-control" [(ngModel)]="tableNo" name="tableNo" placeholder="e.g. T4" />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Notes (optional)</label>
            <input class="form-control" [(ngModel)]="notes" name="notes" placeholder="Special instructions\u2026" />
          </div>

          <button class="btn btn-primary btn-lg" style="width:100%" (click)="submitOrder()" [disabled]="saving || !isValid">
            <span *ngIf="saving" class="spinner"></span>
            {{ saving ? 'Saving\u2026' : 'Save Order \u20B9' + (orderTotal | number:'1.0-0') }}
          </button>
        </div>

        <!-- Today's Orders -->
        <div class="today-orders">
          <div class="card" style="padding:0">
            <div style="padding:16px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between">
              <div>
                <div class="card-title" style="margin:0">Today's Orders</div>
                <div style="font-size:0.75rem;color:var(--text-muted)">{{ todayDate }} \xB7 {{ todayOrders.length }} orders \xB7 \u20B9{{ todaySales | number:'1.0-0' }}</div>
              </div>
              <button class="btn btn-ghost btn-sm" (click)="loadTodayOrders()">\u21BB</button>
            </div>

            <div class="orders-scroll">
              <div *ngFor="let o of todayOrders" class="order-card">
                <div class="oc-header">
                  <div class="oc-time">{{ o.created_at | date:'HH:mm' }}</div>
                  <span class="badge badge-info">{{ o.payment_mode | titlecase }}</span>
                  <div class="oc-amount">\u20B9{{ o.total_amount | number:'1.0-0' }}</div>
                </div>
                <div class="oc-items">
                  <span *ngFor="let item of o.items" class="item-chip">{{ item.name }} \xD7{{ item.quantity }}</span>
                </div>
                <div *ngIf="o.table_no" class="oc-table">Table: {{ o.table_no }}</div>
              </div>
              <div *ngIf="todayOrders.length === 0" class="empty-state" style="padding:40px">
                <div class="empty-icon">\u{1F6D2}</div>
                <div>No orders yet today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;21d445a2871b392381070facd69e30c6e1b0b8dca728759f486548d5728c066c;C:/Users/ritik/Downloads/restaurant-dashboard/frontend/src/app/manager/orders/orders.component.ts */\n.orders-layout {\n  display: grid;\n  grid-template-columns: 480px 1fr;\n  gap: 20px;\n  align-items: start;\n}\n.order-form-panel {\n  position: sticky;\n  top: 0;\n}\n.items-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.items-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.item-row {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.order-total {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--bg-card-2);\n  border-radius: var(--radius-sm);\n  padding: 12px 16px;\n  margin-bottom: 18px;\n  font-weight: 600;\n}\n.total-amount {\n  font-size: 1.4rem;\n  font-weight: 800;\n  font-family: var(--font-mono);\n  color: var(--primary);\n}\n.form-row-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.today-orders {\n}\n.orders-scroll {\n  max-height: 680px;\n  overflow-y: auto;\n}\n.order-card {\n  padding: 14px 20px;\n  border-bottom: 1px solid var(--border);\n  transition: background var(--transition);\n}\n.order-card:hover {\n  background: rgba(255, 255, 255, 0.02);\n}\n.oc-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 8px;\n}\n.oc-time {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  font-family: var(--font-mono);\n}\n.oc-amount {\n  margin-left: auto;\n  font-weight: 700;\n  font-family: var(--font-mono);\n  color: var(--primary);\n}\n.oc-items {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.item-chip {\n  background: var(--bg-card-2);\n  border: 1px solid var(--border);\n  border-radius: 20px;\n  padding: 2px 10px;\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.oc-table {\n  font-size: 0.75rem;\n  color: var(--text-dim);\n  margin-top: 6px;\n}\n@media (max-width: 900px) {\n  .orders-layout {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=orders.component.css.map */\n"] }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrdersComponent, { className: "OrdersComponent", filePath: "src/app/manager/orders/orders.component.ts", lineNumber: 182 });
})();
export {
  OrdersComponent
};
//# sourceMappingURL=chunk-XEH2BS6X.js.map
