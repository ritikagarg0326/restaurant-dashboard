import {
  Router
} from "./chunk-YY7ERHIY.js";
import {
  BehaviorSubject,
  HttpClient,
  Injectable,
  environment,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PBBCOH4F.js";

// src/app/shared/services/auth.service.ts
var API = `${environment.apiBaseUrl}/api/v1`;
var AuthService = class _AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this._auth = new BehaviorSubject(this.loadFromStorage());
    this.auth$ = this._auth.asObservable();
  }
  get token() {
    return this._auth.value?.token ?? null;
  }
  get role() {
    return this._auth.value?.role ?? null;
  }
  get name() {
    return this._auth.value?.name ?? null;
  }
  get restaurantId() {
    return this._auth.value?.restaurant_id ?? null;
  }
  get isLoggedIn() {
    return !!this.token;
  }
  login(email, password) {
    return this.http.post(`${API}/auth/login`, { email, password }).pipe(tap((res) => {
      const state = {
        token: res.access_token,
        role: res.role,
        name: res.name,
        restaurant_id: res.restaurant_id
      };
      localStorage.setItem("auth", JSON.stringify(state));
      this._auth.next(state);
    }));
  }
  logout() {
    localStorage.removeItem("auth");
    this._auth.next(null);
    this.router.navigate(["/login"]);
  }
  loadFromStorage() {
    try {
      const raw = localStorage.getItem("auth");
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: Router }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-BU7QOKU7.js.map
