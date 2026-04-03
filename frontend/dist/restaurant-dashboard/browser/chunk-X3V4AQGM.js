import {
  AuthService
} from "./chunk-KCWOUCMH.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-6NUVX2UH.js";
import {
  Router
} from "./chunk-YXH4DM33.js";
import {
  CommonModule,
  Component,
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
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4RACHFFU.js";

// src/app/shared/components/login/login.component.ts
function LoginComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span");
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
function LoginComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 21);
  }
}
function LoginComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign In \u2192");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.email = "";
    this.password = "";
    this.loading = false;
    this.error = "";
    this.showPw = false;
    if (auth.isLoggedIn) {
      this.redirect(auth.role);
    }
  }
  onLogin() {
    if (!this.email || !this.password) {
      this.error = "Please fill all fields";
      return;
    }
    this.loading = true;
    this.error = "";
    this.auth.login(this.email, this.password).subscribe({
      next: (res) => {
        this.loading = false;
        this.redirect(res.role);
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.detail || "Login failed. Check credentials.";
      }
    });
  }
  redirect(role) {
    this.router.navigate([role === "admin" ? "/admin" : "/manager"]);
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 32, vars: 8, consts: [[1, "login-page"], [1, "login-bg"], [1, "blob", "b1"], [1, "blob", "b2"], [1, "grid-overlay"], [1, "login-card", "fade-in"], [1, "login-brand"], [1, "brand-icon"], ["class", "alert alert-danger", 4, "ngIf"], [3, "ngSubmit"], [1, "form-group"], [1, "form-label"], ["type", "email", "name", "email", "placeholder", "you@restaurant.com", "autocomplete", "email", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "pw-wrap"], ["name", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password", "required", "", 1, "form-control", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "pw-toggle", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "w-full", 3, "disabled"], ["class", "spinner", 4, "ngIf"], [4, "ngIf"], [1, "login-footer"], [1, "alert", "alert-danger"], [1, "spinner"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275text(8, "\u{1F37D}\uFE0F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "h1");
        \u0275\u0275text(10, "RestaurantOS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p");
        \u0275\u0275text(12, "Multi-outlet management platform");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(13, LoginComponent_div_13_Template, 4, 1, "div", 8);
        \u0275\u0275elementStart(14, "form", 9);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_14_listener() {
          return ctx.onLogin();
        });
        \u0275\u0275elementStart(15, "div", 10)(16, "label", 11);
        \u0275\u0275text(17, "Email Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 10)(20, "label", 11);
        \u0275\u0275text(21, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 13)(23, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 15);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_24_listener() {
          return ctx.showPw = !ctx.showPw;
        });
        \u0275\u0275text(25);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "button", 16);
        \u0275\u0275template(27, LoginComponent_span_27_Template, 1, 0, "span", 17)(28, LoginComponent_span_28_Template, 2, 0, "span", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 19)(30, "span");
        \u0275\u0275text(31, "Secured with JWT \xB7 RBAC enabled");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275advance(5);
        \u0275\u0275property("type", ctx.showPw ? "text" : "password");
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.showPw ? "\u{1F648}" : "\u{1F441}\uFE0F", " ");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n.login-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg);\n  position: relative;\n  overflow: hidden;\n}\n.login-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.blob[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.15;\n}\n.b1[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 500px;\n  background: var(--primary);\n  top: -100px;\n  left: -100px;\n}\n.b2[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  background: var(--accent);\n  bottom: -80px;\n  right: -80px;\n}\n.grid-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.02) 1px,\n      transparent 1px);\n  background-size: 40px 40px;\n}\n.login-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 40px;\n  width: 100%;\n  max-width: 420px;\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5);\n}\n.login-brand[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 36px;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 12px;\n}\n.login-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--text);\n  margin-bottom: 6px;\n}\n.login-brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.875rem;\n}\n.pw-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.pw-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1rem;\n  color: var(--text-muted);\n  padding: 4px;\n}\n.pw-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 44px;\n}\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 8px;\n}\n.login-footer[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  text-align: center;\n  font-size: 0.75rem;\n  color: var(--text-dim);\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="login-page">
      <div class="login-bg">
        <div class="blob b1"></div>
        <div class="blob b2"></div>
        <div class="grid-overlay"></div>
      </div>

      <div class="login-card fade-in">
        <div class="login-brand">
          <div class="brand-icon">\u{1F37D}\uFE0F</div>
          <h1>RestaurantOS</h1>
          <p>Multi-outlet management platform</p>
        </div>

        <div *ngIf="error" class="alert alert-danger">
          <span>\u26A0\uFE0F</span> {{ error }}
        </div>

        <form (ngSubmit)="onLogin()">
          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input
              type="email"
              class="form-control"
              [(ngModel)]="email"
              name="email"
              placeholder="you@restaurant.com"
              autocomplete="email"
              required />
          </div>

          <div class="form-group">
            <label class="form-label">Password</label>
            <div class="pw-wrap">
              <input
                [type]="showPw ? 'text' : 'password'"
                class="form-control"
                [(ngModel)]="password"
                name="password"
                placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                autocomplete="current-password"
                required />
              <button type="button" class="pw-toggle" (click)="showPw = !showPw">
                {{ showPw ? '\u{1F648}' : '\u{1F441}\uFE0F' }}
              </button>
            </div>
          </div>

          <button type="submit" class="btn btn-primary btn-lg w-full" [disabled]="loading">
            <span *ngIf="loading" class="spinner"></span>
            <span *ngIf="!loading">Sign In \u2192</span>
          </button>
        </form>

        <div class="login-footer">
          <span>Secured with JWT \xB7 RBAC enabled</span>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;3769c25689eaf8844780a0df8230dcb9c76170e8917ed60de265a8435ab81265;C:/Users/ritik/Downloads/restaurant-dashboard/frontend/src/app/shared/components/login/login.component.ts */\n.login-page {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg);\n  position: relative;\n  overflow: hidden;\n}\n.login-bg {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.blob {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.15;\n}\n.b1 {\n  width: 500px;\n  height: 500px;\n  background: var(--primary);\n  top: -100px;\n  left: -100px;\n}\n.b2 {\n  width: 400px;\n  height: 400px;\n  background: var(--accent);\n  bottom: -80px;\n  right: -80px;\n}\n.grid-overlay {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.02) 1px,\n      transparent 1px);\n  background-size: 40px 40px;\n}\n.login-card {\n  position: relative;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 40px;\n  width: 100%;\n  max-width: 420px;\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5);\n}\n.login-brand {\n  text-align: center;\n  margin-bottom: 36px;\n}\n.brand-icon {\n  font-size: 2.5rem;\n  margin-bottom: 12px;\n}\n.login-brand h1 {\n  font-size: 1.75rem;\n  color: var(--text);\n  margin-bottom: 6px;\n}\n.login-brand p {\n  color: var(--text-muted);\n  font-size: 0.875rem;\n}\n.pw-wrap {\n  position: relative;\n}\n.pw-toggle {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1rem;\n  color: var(--text-muted);\n  padding: 4px;\n}\n.pw-wrap input {\n  padding-right: 44px;\n}\n.w-full {\n  width: 100%;\n  margin-top: 8px;\n}\n.login-footer {\n  margin-top: 24px;\n  text-align: center;\n  font-size: 0.75rem;\n  color: var(--text-dim);\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/shared/components/login/login.component.ts", lineNumber: 135 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-X3V4AQGM.js.map
