import {
  SidebarComponent
} from "./chunk-EY2YBRBM.js";
import "./chunk-KCWOUCMH.js";
import {
  RouterOutlet
} from "./chunk-YXH4DM33.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty
} from "./chunk-4RACHFFU.js";

// src/app/admin/admin-shell.component.ts
var AdminShellComponent = class _AdminShellComponent {
  constructor() {
    this.nav = [
      { label: "Dashboard", icon: "\u{1F4CA}", route: "/admin/dashboard" },
      { label: "Restaurants", icon: "\u{1F3EA}", route: "/admin/restaurants" },
      { label: "Managers", icon: "\u{1F465}", route: "/admin/users" }
    ];
  }
  static {
    this.\u0275fac = function AdminShellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminShellComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminShellComponent, selectors: [["app-admin-shell"]], decls: 5, vars: 1, consts: [[1, "app-shell"], ["role", "admin", 3, "navItems"], [1, "main-content"], [1, "page-body"]], template: function AdminShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-sidebar", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("navItems", ctx.nav);
      }
    }, dependencies: [CommonModule, RouterOutlet, SidebarComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminShellComponent, [{
    type: Component,
    args: [{
      selector: "app-admin-shell",
      standalone: true,
      imports: [CommonModule, RouterOutlet, SidebarComponent],
      template: `
    <div class="app-shell">
      <app-sidebar [navItems]="nav" role="admin" />
      <div class="main-content">
        <div class="page-body">
          <router-outlet />
        </div>
      </div>
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminShellComponent, { className: "AdminShellComponent", filePath: "src/app/admin/admin-shell.component.ts", lineNumber: 21 });
})();
export {
  AdminShellComponent
};
//# sourceMappingURL=chunk-DZZXC5JH.js.map
