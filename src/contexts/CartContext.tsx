'use client';

import React, { createContext, useCallback, useEffect, useState } from 'react';
import { CartItem, FakeStoreProduct } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

export interface CartContextType {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (product: FakeStoreProduct, quantity?: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  isInCart: (productId: number) => boolean;
  getItemQuantity: (productId: number) => number;
}

export const CartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
  children: React.ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'cart-items',
    []
  );
  const [isHydrated, setIsHydrated] = useState(false);

  // Handle hydration mismatch
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const addItem = useCallback(
    (product: FakeStoreProduct, quantity: number = 1) => {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find(
          (item) => item.product.id === product.id
        );

        if (existingItem) {
          return prevItems.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        }

        return [...prevItems, { product, quantity }];
      });
    },
    [setCartItems]
  );

  const removeItem = useCallback(
    (productId: number) => {
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.product.id !== productId)
      );
    },
    [setCartItems]
  );

  const updateQuantity = useCallback(
    (productId: number, quantity: number) => {
      if (quantity <= 0) {
        removeItem(productId);
        return;
      }

      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    },
    [setCartItems, removeItem]
  );

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, [setCartItems]);

  const isInCart = useCallback(
    (productId: number) => {
      return cartItems.some((item) => item.product.id === productId);
    },
    [cartItems]
  );

  const getItemQuantity = useCallback(
    (productId: number) => {
      const item = cartItems.find((item) => item.product.id === productId);
      return item ? item.quantity : 0;
    },
    [cartItems]
  );

  const contextValue: CartContextType = {
    items: isHydrated ? cartItems : [],
    totalItems: isHydrated ? totalItems : 0,
    totalPrice: isHydrated ? totalPrice : 0,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    isInCart,
    getItemQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
