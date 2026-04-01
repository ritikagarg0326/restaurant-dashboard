import {
  AuthService
} from "./chunk-BU7QOKU7.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-YY7ERHIY.js";
import {
  CommonModule,
  Component,
  Input,
  NgForOf,
  TitleCasePipe,
  UpperCasePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PBBCOH4F.js";

// src/app/shared/components/sidebar/sidebar.component.ts
function SidebarComponent_a_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14)(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
var SidebarComponent = class _SidebarComponent {
  get userName() {
    return this.auth.name;
  }
  constructor(auth) {
    this.auth = auth;
    this.navItems = [];
    this.role = "";
  }
  logout() {
    this.auth.logout();
  }
  static {
    this.\u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SidebarComponent)(\u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], inputs: { navItems: "navItems", role: "role" }, decls: 24, vars: 9, consts: [[1, "sidebar"], [1, "sidebar-brand"], [1, "brand-icon"], [1, "brand-name"], [1, "brand-role"], [1, "sidebar-nav"], ["routerLinkActive", "active", "class", "nav-item", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "sidebar-footer"], [1, "user-info"], [1, "user-avatar"], [1, "user-details"], [1, "user-name"], [1, "user-role"], ["title", "Logout", 1, "logout-btn", 3, "click"], ["routerLinkActive", "active", 1, "nav-item", 3, "routerLink"], [1, "nav-icon"]], template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275text(3, "\u{1F37D}\uFE0F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div")(5, "div", 3);
        \u0275\u0275text(6, "RestaurantOS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "titlecase");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "nav", 5);
        \u0275\u0275template(11, SidebarComponent_a_11_Template, 5, 3, "a", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 7)(13, "div", 8)(14, "div", 9);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "uppercase");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 10)(18, "div", 11);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 12);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "button", 13);
        \u0275\u0275listener("click", function SidebarComponent_Template_button_click_22_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(23, "\u23FB");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, ctx.role));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.navItems);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 7, ctx.userName == null ? null : ctx.userName.charAt(0)));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.userName);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.role);
      }
    }, dependencies: [CommonModule, NgForOf, RouterModule, RouterLink, RouterLinkActive, UpperCasePipe, TitleCasePipe], styles: ["\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: var(--sidebar-width);\n  background: var(--bg-card);\n  border-right: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  z-index: 100;\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 20px 20px 16px;\n  border-bottom: 1px solid var(--border);\n}\n.brand-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text);\n}\n.brand-role[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--primary);\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  overflow-y: auto;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  color: var(--text-muted);\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: all var(--transition);\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-card-2);\n  color: var(--text);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: var(--primary-muted);\n  color: var(--primary);\n  font-weight: 600;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 22px;\n  text-align: center;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-top: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-width: 0;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: var(--primary-muted);\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-role[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  text-transform: capitalize;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid var(--border);\n  color: var(--text-muted);\n  border-radius: var(--radius-sm);\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: all var(--transition);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 94, 125, 0.1);\n  color: var(--danger);\n  border-color: rgba(255, 94, 125, 0.3);\n}\n/*# sourceMappingURL=sidebar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{ selector: "app-sidebar", standalone: true, imports: [CommonModule, RouterModule], template: `
    <aside class="sidebar">
      <div class="sidebar-brand">
        <div class="brand-icon">\u{1F37D}\uFE0F</div>
        <div>
          <div class="brand-name">RestaurantOS</div>
          <div class="brand-role">{{ role | titlecase }}</div>
        </div>
      </div>

      <nav class="sidebar-nav">
        <a
          *ngFor="let item of navItems"
          [routerLink]="item.route"
          routerLinkActive="active"
          class="nav-item">
          <span class="nav-icon">{{ item.icon }}</span>
          <span>{{ item.label }}</span>
        </a>
      </nav>

      <div class="sidebar-footer">
        <div class="user-info">
          <div class="user-avatar">{{ userName?.charAt(0) | uppercase }}</div>
          <div class="user-details">
            <div class="user-name">{{ userName }}</div>
            <div class="user-role">{{ role }}</div>
          </div>
        </div>
        <button class="logout-btn" (click)="logout()" title="Logout">\u23FB</button>
      </div>
    </aside>
  `, styles: ["/* angular:styles/component:css;277230ca1eb3fb77d91ee2c5ee71bc29c6afa04c7baed15e36ccf9b942628e4a;C:/Users/ritik/Downloads/restaurant-dashboard/frontend/src/app/shared/components/sidebar/sidebar.component.ts */\n.sidebar {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: var(--sidebar-width);\n  background: var(--bg-card);\n  border-right: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  z-index: 100;\n}\n.sidebar-brand {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 20px 20px 16px;\n  border-bottom: 1px solid var(--border);\n}\n.brand-icon {\n  font-size: 1.5rem;\n}\n.brand-name {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text);\n}\n.brand-role {\n  font-size: 0.68rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--primary);\n}\n.sidebar-nav {\n  flex: 1;\n  padding: 16px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  overflow-y: auto;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  color: var(--text-muted);\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: all var(--transition);\n}\n.nav-item:hover {\n  background: var(--bg-card-2);\n  color: var(--text);\n}\n.nav-item.active {\n  background: var(--primary-muted);\n  color: var(--primary);\n  font-weight: 600;\n}\n.nav-icon {\n  font-size: 1.1rem;\n  width: 22px;\n  text-align: center;\n}\n.sidebar-footer {\n  padding: 16px;\n  border-top: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-info {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-width: 0;\n}\n.user-avatar {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: var(--primary-muted);\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.user-name {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-role {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  text-transform: capitalize;\n}\n.logout-btn {\n  background: none;\n  border: 1px solid var(--border);\n  color: var(--text-muted);\n  border-radius: var(--radius-sm);\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: all var(--transition);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.logout-btn:hover {\n  background: rgba(255, 94, 125, 0.1);\n  color: var(--danger);\n  border-color: rgba(255, 94, 125, 0.3);\n}\n/*# sourceMappingURL=sidebar.component.css.map */\n"] }]
  }], () => [{ type: AuthService }], { navItems: [{
    type: Input
  }], role: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src/app/shared/components/sidebar/sidebar.component.ts", lineNumber: 138 });
})();

export {
  SidebarComponent
};
//# sourceMappingURL=chunk-Y7MTPJZY.js.map
