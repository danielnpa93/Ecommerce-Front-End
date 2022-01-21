export interface RootState {
  orders: OrderState;
  auth: AuthState;
}

export type AuthState = Auth;

export interface OrderState {
  isLoading?: boolean;
  totalPages?: number;
  currentPage?: number;
  totalItems?: number;
  data?: Order[];
}

export interface Order {
  id: string;
  createdAt: string;
  deliveryDate: string;
  adress: string;
  products: Product[];
  deliveryTeam: Team;
}

export interface Team {
  name: string;
  description: string;
  vehicleIdentifier: string;
}

export interface Product {
  name: string;
  description: string;
  money: number;
}

export interface User {
  id: string;
  userName: string;
}

export interface Auth {
  token?: string;
}

export interface ErrorMessage {
  error?: string;
}

export interface ResponseEnvelope<T> {
  data: T;
  isValid: boolean;
  error?: any;
  message?: string;
}
