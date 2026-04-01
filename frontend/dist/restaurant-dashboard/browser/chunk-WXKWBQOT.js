import {
  HttpClient,
  HttpParams,
  Injectable,
  environment,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PBBCOH4F.js";

// src/app/shared/services/api.service.ts
var API = `${environment.apiBaseUrl}/api/v1`;
var ApiService = class _ApiService {
  constructor(http) {
    this.http = http;
  }
  // ── Users ──
  getUsers() {
    return this.http.get(`${API}/users/`);
  }
  createUser(data) {
    return this.http.post(`${API}/users/`, data);
  }
  toggleUser(id) {
    return this.http.patch(`${API}/users/${id}/toggle`, {});
  }
  getMe() {
    return this.http.get(`${API}/users/me`);
  }
  // ── Restaurants ──
  getRestaurants() {
    return this.http.get(`${API}/restaurants/`);
  }
  createRestaurant(data) {
    return this.http.post(`${API}/restaurants/`, data);
  }
  assignManager(restaurantId, userId) {
    return this.http.patch(`${API}/restaurants/${restaurantId}/assign/${userId}`, {});
  }
  // ── Orders ──
  createOrder(data) {
    return this.http.post(`${API}/orders/`, data);
  }
  getMenu() {
    return this.http.get(`${API}/orders/menu`);
  }
  getOrders(params) {
    let p = new HttpParams();
    if (params?.restaurant_id)
      p = p.set("restaurant_id", params.restaurant_id);
    if (params?.date)
      p = p.set("date", params.date);
    return this.http.get(`${API}/orders/`, { params: p });
  }
  getDailySummary(date, restaurantId) {
    let p = new HttpParams().set("date", date);
    if (restaurantId)
      p = p.set("restaurant_id", restaurantId);
    return this.http.get(`${API}/orders/summary/daily`, { params: p });
  }
  getMonthlySummary(year, month, restaurantId) {
    let p = new HttpParams().set("year", year).set("month", month);
    if (restaurantId)
      p = p.set("restaurant_id", restaurantId);
    return this.http.get(`${API}/orders/summary/monthly`, { params: p });
  }
  // ── Inventory ──
  submitInventory(data) {
    return this.http.post(`${API}/inventory/`, data);
  }
  getInventory(params) {
    let p = new HttpParams();
    if (params?.restaurant_id)
      p = p.set("restaurant_id", params.restaurant_id);
    if (params?.date)
      p = p.set("date", params.date);
    return this.http.get(`${API}/inventory/`, { params: p });
  }
  reportWastage(data) {
    return this.http.post(`${API}/inventory/wastage`, data);
  }
  getLowStock(restaurantId) {
    let p = new HttpParams();
    if (restaurantId)
      p = p.set("restaurant_id", restaurantId);
    return this.http.get(`${API}/inventory/low-stock`, { params: p });
  }
  // ── Expenses ──
  createExpense(data) {
    return this.http.post(`${API}/expenses/`, data);
  }
  getExpenses(params) {
    let p = new HttpParams();
    if (params?.restaurant_id)
      p = p.set("restaurant_id", params.restaurant_id);
    if (params?.date_from)
      p = p.set("date_from", params.date_from);
    if (params?.date_to)
      p = p.set("date_to", params.date_to);
    return this.http.get(`${API}/expenses/`, { params: p });
  }
  static {
    this.\u0275fac = function ApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ApiService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ApiService
};
//# sourceMappingURL=chunk-WXKWBQOT.js.map
