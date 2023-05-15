import { CartItem } from "@/models/cart-item";
import { User } from "@/models/user";
import { OrderStatus } from "@/types/order-status";

export interface Order {
  user: User;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  date: Date;
}
