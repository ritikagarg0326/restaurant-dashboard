import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { AuthState } from '../models/models';
import { environment } from '../../../environments/environment';

const API = `${environment.apiBaseUrl}/api/v1`;

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _auth = new BehaviorSubject<AuthState | null>(this.loadFromStorage());
  auth$ = this._auth.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  get token(): string | null { return this._auth.value?.token ?? null; }
  get role(): string | null  { return this._auth.value?.role ?? null; }
  get name(): string | null  { return this._auth.value?.name ?? null; }
  get restaurantId(): string | null { return this._auth.value?.restaurant_id ?? null; }
  get isLoggedIn(): boolean  { return !!this.token; }

  login(email: string, password: string) {
    return this.http.post<any>(`${API}/auth/login`, { email, password }).pipe(
      tap(res => {
        const state: AuthState = {
          token: res.access_token,
          role: res.role,
          name: res.name,
          restaurant_id: res.restaurant_id
        };
        localStorage.setItem('auth', JSON.stringify(state));
        this._auth.next(state);
      })
    );
  }

  logout() {
    localStorage.removeItem('auth');
    this._auth.next(null);
    this.router.navigate(['/login']);
  }

  private loadFromStorage(): AuthState | null {
    try {
      const raw = localStorage.getItem('auth');
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  }
}
