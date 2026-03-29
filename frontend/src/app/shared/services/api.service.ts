import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Restaurant, Order, Inventory, Expense, DailySummary, MonthlySummary } from '../models/models';

const API = 'http://localhost:8000/api/v1';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  // ── Users ──
  getUsers(): Observable<User[]> { return this.http.get<User[]>(`${API}/users/`); }
  createUser(data: any): Observable<User> { return this.http.post<User>(`${API}/users/`, data); }
  toggleUser(id: string): Observable<any> { return this.http.patch(`${API}/users/${id}/toggle`, {}); }
  getMe(): Observable<User> { return this.http.get<User>(`${API}/users/me`); }

  // ── Restaurants ──
  getRestaurants(): Observable<Restaurant[]> { return this.http.get<Restaurant[]>(`${API}/restaurants/`); }
  createRestaurant(data: any): Observable<Restaurant> { return this.http.post<Restaurant>(`${API}/restaurants/`, data); }
  assignManager(restaurantId: string, userId: string): Observable<any> {
    return this.http.patch(`${API}/restaurants/${restaurantId}/assign/${userId}`, {});
  }

  // ── Orders ──
  createOrder(data: any): Observable<Order> { return this.http.post<Order>(`${API}/orders/`, data); }
  getOrders(params?: { restaurant_id?: string; date?: string }): Observable<Order[]> {
    let p = new HttpParams();
    if (params?.restaurant_id) p = p.set('restaurant_id', params.restaurant_id);
    if (params?.date) p = p.set('date', params.date);
    return this.http.get<Order[]>(`${API}/orders/`, { params: p });
  }
  getDailySummary(date: string, restaurantId?: string): Observable<DailySummary> {
    let p = new HttpParams().set('date', date);
    if (restaurantId) p = p.set('restaurant_id', restaurantId);
    return this.http.get<DailySummary>(`${API}/orders/summary/daily`, { params: p });
  }
  getMonthlySummary(year: number, month: number, restaurantId?: string): Observable<MonthlySummary> {
    let p = new HttpParams().set('year', year).set('month', month);
    if (restaurantId) p = p.set('restaurant_id', restaurantId);
    return this.http.get<MonthlySummary>(`${API}/orders/summary/monthly`, { params: p });
  }

  // ── Inventory ──
  submitInventory(data: any): Observable<Inventory> { return this.http.post<Inventory>(`${API}/inventory/`, data); }
  getInventory(params?: any): Observable<Inventory[]> {
    let p = new HttpParams();
    if (params?.restaurant_id) p = p.set('restaurant_id', params.restaurant_id);
    if (params?.date) p = p.set('date', params.date);
    return this.http.get<Inventory[]>(`${API}/inventory/`, { params: p });
  }
  getLowStock(restaurantId?: string): Observable<any[]> {
    let p = new HttpParams();
    if (restaurantId) p = p.set('restaurant_id', restaurantId);
    return this.http.get<any[]>(`${API}/inventory/low-stock`, { params: p });
  }

  // ── Expenses ──
  createExpense(data: any): Observable<Expense> { return this.http.post<Expense>(`${API}/expenses/`, data); }
  getExpenses(params?: any): Observable<Expense[]> {
    let p = new HttpParams();
    if (params?.restaurant_id) p = p.set('restaurant_id', params.restaurant_id);
    if (params?.date_from) p = p.set('date_from', params.date_from);
    if (params?.date_to) p = p.set('date_to', params.date_to);
    return this.http.get<Expense[]>(`${API}/expenses/`, { params: p });
  }
}
