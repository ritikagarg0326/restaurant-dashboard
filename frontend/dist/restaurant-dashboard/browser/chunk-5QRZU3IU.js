import {
  SidebarComponent
} from "./chunk-Y7MTPJZY.js";
import "./chunk-BU7QOKU7.js";
import {
  RouterOutlet
} from "./chunk-YY7ERHIY.js";
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
} from "./chunk-PBBCOH4F.js";

// src/app/manager/manager-shell.component.ts
var ManagerShellComponent = class _ManagerShellComponent {
  constructor() {
    this.nav = [
      { label: "Dashboard", icon: "\u{1F4CA}", route: "/manager/dashboard" },
      { label: "New Order", icon: "\u{1F6D2}", route: "/manager/orders" },
      { label: "Inventory", icon: "\u{1F4E6}", route: "/manager/inventory" },
      { label: "Wastage", icon: "\u{1F96B}", route: "/manager/wastage" },
      { label: "Expenses", icon: "\u{1F4B8}", route: "/manager/expenses" }
    ];
  }
  static {
    this.\u0275fac = function ManagerShellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ManagerShellComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManagerShellComponent, selectors: [["app-manager-shell"]], decls: 5, vars: 1, consts: [[1, "app-shell"], ["role", "manager", 3, "navItems"], [1, "main-content"], [1, "page-body"]], template: function ManagerShellComponent_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManagerShellComponent, [{
    type: Component,
    args: [{
      selector: "app-manager-shell",
      standalone: true,
      imports: [CommonModule, RouterOutlet, SidebarComponent],
      template: `
    <div class="app-shell">
      <app-sidebar [navItems]="nav" role="manager" />
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManagerShellComponent, { className: "ManagerShellComponent", filePath: "src/app/manager/manager-shell.component.ts", lineNumber: 21 });
})();
export {
  ManagerShellComponent
};
//# sourceMappingURL=chunk-5QRZU3IU.js.map
