import { create } from 'zustand';
import { Car } from '../service/api.interface';

export interface CartItem extends Car {
  count: number;
}

type CartStore = {
  cart: CartItem[],
  count: () => number;
  add: (car: Car) => void,
  remove: (car_id: number) => void,
  removeAll: () => void,
  total: () => number,
}

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  count: () => {
    const { cart } = get();
    if (cart.length)
      return cart.map(item => item.count).reduce((prev, curr) => prev + curr);
    return 0;
  },
  add: (car: Car) => {
    const { cart } = get();
    const updatedCart = updateCart(car, cart)
    set({ cart: updatedCart });
  },
  remove: (car_id: number) => {
    const { cart } = get();
    const updatedCart = removeCart(car_id, cart);
    set({ cart: updatedCart });
  },
  removeAll: () => set({ cart: [] }),
  total: () => {
    const { cart } = get();
    const value = totalCart(cart);
    return value.toFixed(4)
  }
}));

function updateCart(car: Car, cart: CartItem[]): CartItem[] {
  const cartItem = { ...car, count: 1 } as CartItem;

  const carOnCart = cart.map(item => item.car_id).includes(car.car_id);

  if (!carOnCart) cart.push(cartItem)
  else {
    return cart.map(item => {
      if (item.car_id === car.car_id)
        return { ...item, count: item.count + 1 } as CartItem;
      return item
    })
  }

  return cart;
}

function removeCart(car_id: number, cart: CartItem[]): CartItem[] {
  return cart.map(item => {
    if (item.car_id === car_id)
      return { ...item, count: item.count - 1 }
    return item;
  }).filter(item => {
    return item.count;
  });
}

function totalCart(cart: CartItem[]): number{
  return cart.reduce((total, item) => total += item.price, 0 )
}
