import {
  ApiService
} from "./chunk-UYULKMB3.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-6NUVX2UH.js";
import {
  NavigationEnd,
  Router
} from "./chunk-YXH4DM33.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  Subject,
  filter,
  setClassMetadata,
  takeUntil,
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

// src/app/admin/restaurants/restaurants.component.ts
function RestaurantsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2705 ", ctx_r0.success);
  }
}
function RestaurantsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0\uFE0F ", ctx_r0.error);
  }
}
function RestaurantsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "Loading restaurants...");
    \u0275\u0275elementEnd();
  }
}
function RestaurantsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div", 16);
    \u0275\u0275text(3, "\u{1F3EA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 19)(10, "div", 20)(11, "span", 21);
    \u0275\u0275text(12, "Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 22);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 20)(16, "span", 21);
    \u0275\u0275text(17, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 22);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 23)(21, "button", 24);
    \u0275\u0275listener("click", function RestaurantsComponent_div_13_Template_button_click_21_listener() {
      const r_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openAssign(r_r3));
    });
    \u0275\u0275text(22, "Assign Manager");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(r_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.address || "No address");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(r_r3.manager_name || "Unassigned");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r3.phone || "\u2014");
  }
}
function RestaurantsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275text(2, "\u{1F3EA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No restaurants yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Add your first outlet to get started");
    \u0275\u0275elementEnd()();
  }
}
function RestaurantsComponent_div_15_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 40);
  }
}
function RestaurantsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function RestaurantsComponent_div_15_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal($event));
    });
    \u0275\u0275elementStart(1, "div", 28)(2, "div", 29)(3, "h3");
    \u0275\u0275text(4, "Add Restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 30);
    \u0275\u0275listener("click", function RestaurantsComponent_div_15_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal = false);
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 31)(8, "label", 32);
    \u0275\u0275text(9, "Restaurant Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantsComponent_div_15_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.name, $event) || (ctx_r0.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 31)(12, "label", 32);
    \u0275\u0275text(13, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantsComponent_div_15_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.address, $event) || (ctx_r0.form.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 31)(16, "label", 32);
    \u0275\u0275text(17, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantsComponent_div_15_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.phone, $event) || (ctx_r0.form.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 36)(20, "button", 37);
    \u0275\u0275listener("click", function RestaurantsComponent_div_15_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal = false);
    });
    \u0275\u0275text(21, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 38);
    \u0275\u0275listener("click", function RestaurantsComponent_div_15_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.createRestaurant());
    });
    \u0275\u0275template(23, RestaurantsComponent_div_15_span_23_Template, 1, 0, "span", 39);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.address);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.phone);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving ? "" : "Create", " ");
  }
}
function RestaurantsComponent_div_16_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r6 = ctx.$implicit;
    \u0275\u0275property("value", u_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", u_r6.name, " (", u_r6.email, ")");
  }
}
function RestaurantsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function RestaurantsComponent_div_16_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal($event));
    });
    \u0275\u0275elementStart(1, "div", 28)(2, "div", 29)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 30);
    \u0275\u0275listener("click", function RestaurantsComponent_div_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showAssign = false);
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 31)(8, "label", 32);
    \u0275\u0275text(9, "Select Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "select", 41);
    \u0275\u0275twoWayListener("ngModelChange", function RestaurantsComponent_div_16_Template_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.assignUserId, $event) || (ctx_r0.assignUserId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(11, "option", 42);
    \u0275\u0275text(12, "-- Choose Manager --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, RestaurantsComponent_div_16_option_13_Template, 2, 3, "option", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 36)(15, "button", 37);
    \u0275\u0275listener("click", function RestaurantsComponent_div_16_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showAssign = false);
    });
    \u0275\u0275text(16, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 38);
    \u0275\u0275listener("click", function RestaurantsComponent_div_16_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.doAssign());
    });
    \u0275\u0275text(18, "Assign");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Assign Manager \u2014 ", ctx_r0.assignTarget == null ? null : ctx_r0.assignTarget.name);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.assignUserId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.managers);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r0.assignUserId || ctx_r0.saving);
  }
}
var RestaurantsComponent = class _RestaurantsComponent {
  constructor(api, router) {
    this.api = api;
    this.router = router;
    this.restaurants = [];
    this.managers = [];
    this.showModal = false;
    this.showAssign = false;
    this.saving = false;
    this.loading = false;
    this.success = "";
    this.error = "";
    this.form = { name: "", address: "", phone: "" };
    this.assignTarget = null;
    this.assignUserId = "";
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.loadAll();
    this.api.getUsers().subscribe((u) => this.managers = u);
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntil(this.destroy$)).subscribe(() => {
      if (this.router.url.includes("/admin/restaurants")) {
        this.loadAll();
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadAll() {
    this.error = "";
    this.loading = true;
    this.api.getRestaurants().subscribe({
      next: (r) => {
        this.restaurants = r;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.detail || "Failed to load restaurants";
        console.error("Restaurants load failed", err);
      }
    });
  }
  closeModal(e) {
    if (e.target.classList.contains("modal-overlay")) {
      this.showModal = false;
      this.showAssign = false;
    }
  }
  createRestaurant() {
    this.error = "";
    if (!this.form.name.trim()) {
      this.error = "Name is required";
      return;
    }
    this.saving = true;
    this.api.createRestaurant(this.form).subscribe({
      next: (restaurant) => {
        this.saving = false;
        this.showModal = false;
        this.form = { name: "", address: "", phone: "" };
        this.success = "Restaurant created!";
        this.restaurants = [...this.restaurants, restaurant];
        this.loadAll();
        setTimeout(() => this.success = "", 3e3);
      },
      error: (err) => {
        this.saving = false;
        this.error = err.error?.detail || "Failed";
      }
    });
  }
  openAssign(r) {
    this.assignTarget = r;
    this.assignUserId = r.manager_id || "";
    this.showAssign = true;
  }
  doAssign() {
    if (!this.assignTarget || !this.assignUserId)
      return;
    this.saving = true;
    this.api.assignManager(this.assignTarget.id, this.assignUserId).subscribe({
      next: () => {
        this.saving = false;
        this.showAssign = false;
        this.success = "Manager assigned!";
        this.loadAll();
        setTimeout(() => this.success = "", 3e3);
      },
      error: (err) => {
        this.saving = false;
        this.error = err.error?.detail || "Failed";
      }
    });
  }
  static {
    this.\u0275fac = function RestaurantsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RestaurantsComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RestaurantsComponent, selectors: [["app-restaurants"]], decls: 17, vars: 7, consts: [[1, "fade-in"], [1, "page-header"], [1, "subtitle"], [1, "btn", "btn-primary", 3, "click"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-info", 4, "ngIf"], [1, "restaurant-grid"], ["class", "restaurant-card card", 4, "ngFor", "ngForOf"], ["class", "empty-state", "style", "grid-column:1/-1", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "alert", "alert-info"], [1, "restaurant-card", "card"], [1, "rc-header"], [1, "rc-icon"], [1, "rc-name"], [1, "rc-address"], [1, "rc-meta"], [1, "rc-meta-item"], [1, "rc-meta-label"], [1, "rc-meta-value"], [1, "rc-actions"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "empty-state", 2, "grid-column", "1/-1"], [1, "empty-icon"], [1, "modal-overlay", 3, "click"], [1, "modal-box"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "form-group"], [1, "form-label"], ["placeholder", "e.g. Spice Garden Kanpur", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Full address", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "+91 XXXXXXXXXX", 1, "form-control", 3, "ngModelChange", "ngModel"], [2, "display", "flex", "gap", "12px", "justify-content", "flex-end", "margin-top", "8px"], [1, "btn", "btn-ghost", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner", 4, "ngIf"], [1, "spinner"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function RestaurantsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Restaurants");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 2);
        \u0275\u0275text(6, "Manage all outlets");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 3);
        \u0275\u0275listener("click", function RestaurantsComponent_Template_button_click_7_listener() {
          return ctx.showModal = true;
        });
        \u0275\u0275text(8, "+ Add Restaurant");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, RestaurantsComponent_div_9_Template, 2, 1, "div", 4)(10, RestaurantsComponent_div_10_Template, 2, 1, "div", 5)(11, RestaurantsComponent_div_11_Template, 2, 0, "div", 6);
        \u0275\u0275elementStart(12, "div", 7);
        \u0275\u0275template(13, RestaurantsComponent_div_13_Template, 23, 4, "div", 8)(14, RestaurantsComponent_div_14_Template, 7, 0, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, RestaurantsComponent_div_15_Template, 25, 6, "div", 10)(16, RestaurantsComponent_div_16_Template, 19, 4, "div", 10);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.success);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.restaurants);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.restaurants.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAssign);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n.restaurant-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 18px;\n}\n.restaurant-card[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.rc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 16px;\n}\n.rc-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  flex-shrink: 0;\n}\n.rc-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text);\n}\n.rc-address[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  margin-top: 3px;\n}\n.rc-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.rc-meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.rc-meta-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.rc-meta-value[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.rc-actions[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border);\n  padding-top: 14px;\n}\n/*# sourceMappingURL=restaurants.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RestaurantsComponent, [{
    type: Component,
    args: [{ selector: "app-restaurants", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="fade-in">
      <div class="page-header">
        <div>
          <h1>Restaurants</h1>
          <div class="subtitle">Manage all outlets</div>
        </div>
        <button class="btn btn-primary" (click)="showModal = true">+ Add Restaurant</button>
      </div>

      <div *ngIf="success" class="alert alert-success">\u2705 {{ success }}</div>
      <div *ngIf="error" class="alert alert-danger">\u26A0\uFE0F {{ error }}</div>
      <div *ngIf="loading" class="alert alert-info">Loading restaurants...</div>

      <!-- Cards Grid -->
      <div class="restaurant-grid">
        <div *ngFor="let r of restaurants" class="restaurant-card card">
          <div class="rc-header">
            <div class="rc-icon">\u{1F3EA}</div>
            <div>
              <div class="rc-name">{{ r.name }}</div>
              <div class="rc-address">{{ r.address || 'No address' }}</div>
            </div>
          </div>
          <div class="rc-meta">
            <div class="rc-meta-item">
              <span class="rc-meta-label">Manager</span>
              <span class="rc-meta-value">{{ r.manager_name || 'Unassigned' }}</span>
            </div>
            <div class="rc-meta-item">
              <span class="rc-meta-label">Phone</span>
              <span class="rc-meta-value">{{ r.phone || '\u2014' }}</span>
            </div>
          </div>
          <div class="rc-actions">
            <button class="btn btn-ghost btn-sm" (click)="openAssign(r)">Assign Manager</button>
          </div>
        </div>

        <div *ngIf="restaurants.length === 0" class="empty-state" style="grid-column:1/-1">
          <div class="empty-icon">\u{1F3EA}</div>
          <h3>No restaurants yet</h3>
          <p>Add your first outlet to get started</p>
        </div>
      </div>

      <!-- Add Restaurant Modal -->
      <div class="modal-overlay" *ngIf="showModal" (click)="closeModal($event)">
        <div class="modal-box">
          <div class="modal-header">
            <h3>Add Restaurant</h3>
            <button class="modal-close" (click)="showModal = false">\xD7</button>
          </div>
          <div class="form-group">
            <label class="form-label">Restaurant Name *</label>
            <input class="form-control" [(ngModel)]="form.name" placeholder="e.g. Spice Garden Kanpur" />
          </div>
          <div class="form-group">
            <label class="form-label">Address</label>
            <input class="form-control" [(ngModel)]="form.address" placeholder="Full address" />
          </div>
          <div class="form-group">
            <label class="form-label">Phone</label>
            <input class="form-control" [(ngModel)]="form.phone" placeholder="+91 XXXXXXXXXX" />
          </div>
          <div style="display:flex;gap:12px;justify-content:flex-end;margin-top:8px">
            <button class="btn btn-ghost" (click)="showModal = false">Cancel</button>
            <button class="btn btn-primary" (click)="createRestaurant()" [disabled]="saving">
              <span *ngIf="saving" class="spinner"></span>
              {{ saving ? '' : 'Create' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Assign Manager Modal -->
      <div class="modal-overlay" *ngIf="showAssign" (click)="closeModal($event)">
        <div class="modal-box">
          <div class="modal-header">
            <h3>Assign Manager \u2014 {{ assignTarget?.name }}</h3>
            <button class="modal-close" (click)="showAssign = false">\xD7</button>
          </div>
          <div class="form-group">
            <label class="form-label">Select Manager</label>
            <select class="form-control" [(ngModel)]="assignUserId">
              <option value="">-- Choose Manager --</option>
              <option *ngFor="let u of managers" [value]="u.id">{{ u.name }} ({{ u.email }})</option>
            </select>
          </div>
          <div style="display:flex;gap:12px;justify-content:flex-end;margin-top:8px">
            <button class="btn btn-ghost" (click)="showAssign = false">Cancel</button>
            <button class="btn btn-primary" (click)="doAssign()" [disabled]="!assignUserId || saving">Assign</button>
          </div>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;d70f57b0509acdeb8bc1d054360360733a0e4c9a46db0525e2d1dae66e1d01cf;C:/Users/ritik/Downloads/restaurant-dashboard/frontend/src/app/admin/restaurants/restaurants.component.ts */\n.restaurant-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 18px;\n}\n.restaurant-card {\n  cursor: default;\n}\n.rc-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 16px;\n}\n.rc-icon {\n  font-size: 1.8rem;\n  flex-shrink: 0;\n}\n.rc-name {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text);\n}\n.rc-address {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  margin-top: 3px;\n}\n.rc-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.rc-meta-item {\n  display: flex;\n  justify-content: space-between;\n}\n.rc-meta-label {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.rc-meta-value {\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.rc-actions {\n  border-top: 1px solid var(--border);\n  padding-top: 14px;\n}\n/*# sourceMappingURL=restaurants.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RestaurantsComponent, { className: "RestaurantsComponent", filePath: "src/app/admin/restaurants/restaurants.component.ts", lineNumber: 124 });
})();
export {
  RestaurantsComponent
};
//# sourceMappingURL=chunk-PX5VQQMS.js.map
