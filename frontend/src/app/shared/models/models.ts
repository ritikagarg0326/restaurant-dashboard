export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager';
  restaurant_id?: string;
  is_active: boolean;
}

export interface Restaurant {
  id: string;
  name: string;
  address?: string;
  phone?: string;
  manager_id?: string;
  manager_name?: string;
}

export interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

export interface MenuItem {
  name: string;
  price: number;
}

export interface Order {
  id: string;
  restaurant_id: string;
  items: OrderItem[];
  total_amount: number;
  payment_mode: string;
  table_no?: string;
  created_at: string;
}

export interface InventoryItem {
  item_name: string;
  opening_stock: number;
  unit: string;
  purchased_qty: number;
  closing_stock: number;
  cost_per_unit: number;
  consumption?: number;
  wastage?: number;
}

export interface Inventory {
  id: string;
  restaurant_id: string;
  date: string;
  items: InventoryItem[];
  created_at: string;
}

export interface Expense {
  id: string;
  restaurant_id: string;
  date: string;
  category: string;
  amount: number;
  notes?: string;
  created_at: string;
}

export interface DailySummary {
  date: string;
  total_sales: number;
  total_orders: number;
  payment_breakdown: Record<string, number>;
  total_expenses: number;
  net_profit: number;
}

export interface ChartPoint {
  date: string;
  sales: number;
  expenses: number;
  orders: number;
}

export interface MonthlySummary {
  year: number;
  month: number;
  total_sales: number;
  total_orders: number;
  total_expenses: number;
  net_profit: number;
  profit_pct: number;
  chart_data: ChartPoint[];
  expense_breakdown: Record<string, number>;
}

export interface AuthState {
  token: string;
  role: string;
  name: string;
  restaurant_id?: string;
}
