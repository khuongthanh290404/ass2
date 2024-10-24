// types.ts

import { Products } from "./Product";

export interface CartItem {
  product: Products;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export type CartAction =
  | { type: "ADD_TO_CART"; product: Products; quantity: number }
  | { type: "REMOVE_FROM_CART"; productId: string }
  | { type: "UPDATE_QUANTITY"; productId: string; quantity: number }
  | { type: "SET_CART"; cart: CartItem[] };
