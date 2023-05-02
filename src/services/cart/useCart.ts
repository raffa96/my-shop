import { CartItem } from "@/models/cart-item";
import { Product } from "@/models/product";
import { create } from "zustand";

export interface CartState {
  items: CartItem[];
  addToCart: (product: Product) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

export const useCart = create<CartState>((set, get) => ({
  items: [],
  addToCart: (product: Product) => {
    const found = get().items.find(({ product: p }) => p.id === product.id);
    if (found) {
      found.quantity++;
      set((state) => ({
        items: state.items.map((item) => {
          return item.product.id === found.product.id ? found : item;
        }),
      }));
    } else {
      const item: CartItem = { product, quantity: 1 };
      set({ items: [...get().items, item] });
    }
  },
  increaseQuantity: (productId: string) => {},
  decreaseQuantity: (productId: string) => {},
  removeFromCart: (productId: string) => {},
  clearCart: () => {},
}));
