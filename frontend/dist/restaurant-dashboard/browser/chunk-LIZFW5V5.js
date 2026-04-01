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
  UpperCasePipe,
  filter,
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

// src/app/admin/users/users.component.ts
function UsersComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2705 ", ctx_r0.success);
  }
}
function UsersComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0\uFE0F ", ctx_r0.error);
  }
}
function UsersComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, "Loading managers...");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 15)(3, "div", 16);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td", 17);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 18);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "button", 19);
    \u0275\u0275listener("click", function UsersComponent_tr_28_Template_button_click_16_listener() {
      const u_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggle(u_r3));
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 14, u_r3.name.charAt(0)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getRestaurantName(u_r3.restaurant_id));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-success", u_r3.is_active)("badge-danger", !u_r3.is_active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r3.is_active ? "Active" : "Disabled", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-ghost", u_r3.is_active)("btn-success", !u_r3.is_active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r3.is_active ? "Disable" : "Enable", " ");
  }
}
function UsersComponent_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 20);
    \u0275\u0275text(2, " No managers yet. Create one to get started. ");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_div_30_option_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275property("value", r_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r5.name);
  }
}
function UsersComponent_div_30_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 39);
  }
}
function UsersComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275listener("click", function UsersComponent_div_30_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal($event));
    });
    \u0275\u0275elementStart(1, "div", 22)(2, "div", 23)(3, "h3");
    \u0275\u0275text(4, "Create Manager Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 24);
    \u0275\u0275listener("click", function UsersComponent_div_30_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal = false);
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 25);
    \u0275\u0275text(8, " Managers cannot self-register. Only admin can create their accounts. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 26)(10, "label", 27);
    \u0275\u0275text(11, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_30_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.name, $event) || (ctx_r0.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 26)(14, "label", 27);
    \u0275\u0275text(15, "Email Address *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_30_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.email, $event) || (ctx_r0.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 26)(18, "label", 27);
    \u0275\u0275text(19, "Password *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_30_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.password, $event) || (ctx_r0.form.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 26)(22, "label", 27);
    \u0275\u0275text(23, "Assign Restaurant (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "select", 31);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_30_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.restaurant_id, $event) || (ctx_r0.form.restaurant_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(25, "option", 32);
    \u0275\u0275text(26, "-- Assign later --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, UsersComponent_div_30_option_27_Template, 2, 2, "option", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 34)(29, "button", 35);
    \u0275\u0275listener("click", function UsersComponent_div_30_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal = false);
    });
    \u0275\u0275text(30, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 36);
    \u0275\u0275listener("click", function UsersComponent_div_30_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.create());
    });
    \u0275\u0275template(32, UsersComponent_div_30_span_32_Template, 1, 0, "span", 37);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.password);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.restaurant_id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.restaurants);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving ? "" : "Create Manager", " ");
  }
}
var UsersComponent = class _UsersComponent {
  constructor(api, router) {
    this.api = api;
    this.router = router;
    this.users = [];
    this.restaurants = [];
    this.showModal = false;
    this.saving = false;
    this.loading = false;
    this.success = "";
    this.error = "";
    this.form = { name: "", email: "", password: "", restaurant_id: "" };
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.loadAll();
    this.api.getRestaurants().subscribe((r) => this.restaurants = r);
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntil(this.destroy$)).subscribe(() => {
      if (this.router.url.includes("/admin/users")) {
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
    this.api.getUsers().subscribe({
      next: (u) => {
        this.users = u;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.detail || "Failed to load managers";
        console.error("Users load failed", err);
      }
    });
  }
  getRestaurantName(id) {
    if (!id)
      return "\u2014";
    return this.restaurants.find((r) => r.id === id)?.name || id;
  }
  closeModal(e) {
    if (e.target.classList.contains("modal-overlay"))
      this.showModal = false;
  }
  create() {
    this.error = "";
    if (!this.form.name || !this.form.email || !this.form.password) {
      this.error = "Name, email and password are required";
      return;
    }
    const payload = {
      name: this.form.name,
      email: this.form.email,
      password: this.form.password
    };
    if (this.form.restaurant_id) {
      payload.restaurant_id = this.form.restaurant_id;
    }
    this.saving = true;
    this.api.createUser(payload).subscribe({
      next: (user) => {
        this.saving = false;
        this.showModal = false;
        this.form = { name: "", email: "", password: "", restaurant_id: "" };
        this.success = "Manager account created!";
        this.users = [...this.users, user];
        if (user.restaurant_id && !this.restaurants.find((r) => r.id === user.restaurant_id)) {
          this.api.getRestaurants().subscribe((r) => this.restaurants = r);
        }
        setTimeout(() => this.success = "", 3e3);
      },
      error: (err) => {
        this.saving = false;
        this.error = err.error?.detail || "Failed to create";
      }
    });
  }
  toggle(u) {
    this.api.toggleUser(u.id).subscribe({
      next: (res) => {
        u.is_active = res.is_active;
      },
      error: () => {
        this.error = "Failed to update status";
      }
    });
  }
  static {
    this.\u0275fac = function UsersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UsersComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], decls: 31, vars: 6, consts: [[1, "fade-in"], [1, "page-header"], [1, "subtitle"], [1, "btn", "btn-primary", 3, "click"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-info", 4, "ngIf"], [1, "card", 2, "padding", "0"], [1, "table-wrap"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "alert", "alert-info"], [1, "user-cell"], [1, "user-av"], [2, "color", "var(--text-muted)"], [1, "badge"], [1, "btn", "btn-sm", 3, "click"], ["colspan", "5", 2, "text-align", "center", "color", "var(--text-muted)", "padding", "40px"], [1, "modal-overlay", 3, "click"], [1, "modal-box"], [1, "modal-header"], [1, "modal-close", 3, "click"], [2, "font-size", "0.82rem", "margin-bottom", "20px"], [1, "form-group"], [1, "form-label"], ["placeholder", "Manager name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "manager@restaurant.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "Min 8 characters", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [2, "display", "flex", "gap", "12px", "justify-content", "flex-end"], [1, "btn", "btn-ghost", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner", 4, "ngIf"], [3, "value"], [1, "spinner"]], template: function UsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Managers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 2);
        \u0275\u0275text(6, "Create and manage restaurant managers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 3);
        \u0275\u0275listener("click", function UsersComponent_Template_button_click_7_listener() {
          return ctx.showModal = true;
        });
        \u0275\u0275text(8, "+ Add Manager");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, UsersComponent_div_9_Template, 2, 1, "div", 4)(10, UsersComponent_div_10_Template, 2, 1, "div", 5)(11, UsersComponent_div_11_Template, 2, 0, "div", 6);
        \u0275\u0275elementStart(12, "div", 7)(13, "div", 8)(14, "table")(15, "thead")(16, "tr")(17, "th");
        \u0275\u0275text(18, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "th");
        \u0275\u0275text(20, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "th");
        \u0275\u0275text(22, "Restaurant");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "th");
        \u0275\u0275text(24, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "th");
        \u0275\u0275text(26, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "tbody");
        \u0275\u0275template(28, UsersComponent_tr_28_Template, 18, 16, "tr", 9)(29, UsersComponent_tr_29_Template, 3, 0, "tr", 10);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(30, UsersComponent_div_30_Template, 34, 8, "div", 11);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.success);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance(17);
        \u0275\u0275property("ngForOf", ctx.users);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.users.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, UpperCasePipe], styles: ["\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-av[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: var(--primary-muted);\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=users.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersComponent, [{
    type: Component,
    args: [{ selector: "app-users", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="fade-in">
      <div class="page-header">
        <div>
          <h1>Managers</h1>
          <div class="subtitle">Create and manage restaurant managers</div>
        </div>
        <button class="btn btn-primary" (click)="showModal = true">+ Add Manager</button>
      </div>

      <div *ngIf="success" class="alert alert-success">\u2705 {{ success }}</div>
      <div *ngIf="error" class="alert alert-danger">\u26A0\uFE0F {{ error }}</div>
      <div *ngIf="loading" class="alert alert-info">Loading managers...</div>

      <div class="card" style="padding:0">
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Restaurant</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let u of users">
                <td>
                  <div class="user-cell">
                    <div class="user-av">{{ u.name.charAt(0) | uppercase }}</div>
                    <span>{{ u.name }}</span>
                  </div>
                </td>
                <td style="color:var(--text-muted)">{{ u.email }}</td>
                <td>{{ getRestaurantName(u.restaurant_id) }}</td>
                <td>
                  <span class="badge" [class.badge-success]="u.is_active" [class.badge-danger]="!u.is_active">
                    {{ u.is_active ? 'Active' : 'Disabled' }}
                  </span>
                </td>
                <td>
                  <button
                    class="btn btn-sm"
                    [class.btn-ghost]="u.is_active"
                    [class.btn-success]="!u.is_active"
                    (click)="toggle(u)">
                    {{ u.is_active ? 'Disable' : 'Enable' }}
                  </button>
                </td>
              </tr>
              <tr *ngIf="users.length === 0">
                <td colspan="5" style="text-align:center;color:var(--text-muted);padding:40px">
                  No managers yet. Create one to get started.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Create Manager Modal -->
      <div class="modal-overlay" *ngIf="showModal" (click)="closeModal($event)">
        <div class="modal-box">
          <div class="modal-header">
            <h3>Create Manager Account</h3>
            <button class="modal-close" (click)="showModal = false">\xD7</button>
          </div>
          <p style="font-size:0.82rem;margin-bottom:20px">
            Managers cannot self-register. Only admin can create their accounts.
          </p>
          <div class="form-group">
            <label class="form-label">Full Name *</label>
            <input class="form-control" [(ngModel)]="form.name" placeholder="Manager name" />
          </div>
          <div class="form-group">
            <label class="form-label">Email Address *</label>
            <input class="form-control" type="email" [(ngModel)]="form.email" placeholder="manager@restaurant.com" />
          </div>
          <div class="form-group">
            <label class="form-label">Password *</label>
            <input class="form-control" type="password" [(ngModel)]="form.password" placeholder="Min 8 characters" />
          </div>
          <div class="form-group">
            <label class="form-label">Assign Restaurant (optional)</label>
            <select class="form-control" [(ngModel)]="form.restaurant_id">
              <option value="">-- Assign later --</option>
              <option *ngFor="let r of restaurants" [value]="r.id">{{ r.name }}</option>
            </select>
          </div>
          <div style="display:flex;gap:12px;justify-content:flex-end">
            <button class="btn btn-ghost" (click)="showModal = false">Cancel</button>
            <button class="btn btn-primary" (click)="create()" [disabled]="saving">
              <span *ngIf="saving" class="spinner"></span>
              {{ saving ? '' : 'Create Manager' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;58645eeb557394c03b81c7884cc8ebfb0192c7c063f7328b48b66853ff64b2a0;C:/Users/ritik/Downloads/restaurant-dashboard/frontend/src/app/admin/users/users.component.ts */\n.user-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-av {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: var(--primary-muted);\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=users.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src/app/admin/users/users.component.ts", lineNumber: 126 });
})();
export {
  UsersComponent
};
//# sourceMappingURL=chunk-LIZFW5V5.js.map
