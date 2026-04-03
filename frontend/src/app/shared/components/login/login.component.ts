import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-page">
      <div class="login-bg">
        <div class="blob b1"></div>
        <div class="blob b2"></div>
        <div class="grid-overlay"></div>
      </div>

      <div class="login-card fade-in">
        <div class="login-brand">
          <div class="brand-icon">🍽️</div>
          <h1>Son of Swaad Restaurant Dashboard</h1>
          <p>Multi-outlet management platform</p>
        </div>

        <div *ngIf="error" class="alert alert-danger">
          <span>⚠️</span> {{ error }}
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
                placeholder="••••••••"
                autocomplete="current-password"
                required />
              <button type="button" class="pw-toggle" (click)="showPw = !showPw">
                {{ showPw ? '🙈' : '👁️' }}
              </button>
            </div>
          </div>

          <button type="submit" class="btn btn-primary btn-lg w-full" [disabled]="loading">
            <span *ngIf="loading" class="spinner"></span>
            <span *ngIf="!loading">Sign In →</span>
          </button>
        </form>

        <div class="login-footer">
          <span>Secured with JWT · RBAC enabled</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-page {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--bg);
      position: relative;
      overflow: hidden;
    }
    .login-bg { position: absolute; inset: 0; pointer-events: none; }
    .blob {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.15;
    }
    .b1 {
      width: 500px; height: 500px;
      background: var(--primary);
      top: -100px; left: -100px;
    }
    .b2 {
      width: 400px; height: 400px;
      background: var(--accent);
      bottom: -80px; right: -80px;
    }
    .grid-overlay {
      position: absolute; inset: 0;
      background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
      background-size: 40px 40px;
    }
    .login-card {
      position: relative;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      padding: 40px;
      width: 100%;
      max-width: 420px;
      box-shadow: 0 24px 80px rgba(0,0,0,0.5);
    }
    .login-brand { text-align: center; margin-bottom: 36px; }
    .brand-icon { font-size: 2.5rem; margin-bottom: 12px; }
    .login-brand h1 { font-size: 1.75rem; color: var(--text); margin-bottom: 6px; }
    .login-brand p { color: var(--text-muted); font-size: 0.875rem; }
    .pw-wrap { position: relative; }
    .pw-toggle {
      position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
      background: none; border: none; cursor: pointer; font-size: 1rem;
      color: var(--text-muted); padding: 4px;
    }
    .pw-wrap input { padding-right: 44px; }
    .w-full { width: 100%; margin-top: 8px; }
    .login-footer {
      margin-top: 24px;
      text-align: center;
      font-size: 0.75rem;
      color: var(--text-dim);
    }
  `]
})
export class LoginComponent {
  email = '';
  password = '';
  loading = false;
  error = '';
  showPw = false;

  constructor(private auth: AuthService, private router: Router) {
    if (auth.isLoggedIn) {
      this.redirect(auth.role!);
    }
  }

  onLogin() {
    if (!this.email || !this.password) { this.error = 'Please fill all fields'; return; }
    this.loading = true;
    this.error = '';
    this.auth.login(this.email, this.password).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.redirect(res.role);
      },
      error: (err: any) => {
        this.loading = false;
        this.error = err.error?.detail || 'Login failed. Check credentials.';
      }
    });
  }

  private redirect(role: string) {
    this.router.navigate([role === 'admin' ? '/admin' : '/manager']);
  }
}
