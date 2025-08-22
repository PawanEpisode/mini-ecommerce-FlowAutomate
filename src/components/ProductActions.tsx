'use client';

import { useState } from 'react';
import { Button } from './ui';
import { ShoppingCart, Plus, Minus, Check } from 'lucide-react';
import { FakeStoreProduct } from '../types';
import { useCart } from '../hooks/useCart';

interface ProductActionsProps {
  product: FakeStoreProduct;
}

export function ProductActions({ product }: ProductActionsProps) {
  const { addItem, isInCart, getItemQuantity, updateQuantity } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const currentQuantityInCart = getItemQuantity(product.id);
  const inCart = isInCart(product.id);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleUpdateCartQuantity = (newQuantity: number) => {
    updateQuantity(product.id, newQuantity);
  };

  return (
    <div className="space-y-4">
      {/* Quantity Selector */}
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium">Quantity:</span>
        <div className="flex items-center rounded-lg border">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleQuantityChange(quantity - 1)}
            disabled={quantity <= 1}
            className="h-10 w-10 p-0"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-12 text-center text-lg font-medium">
            {quantity}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleQuantityChange(quantity + 1)}
            disabled={quantity >= 10}
            className="h-10 w-10 p-0"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <Button
        size="lg"
        className="w-full hover:border hover:border-white"
        onClick={handleAddToCart}
        disabled={justAdded}
      >
        {justAdded ? (
          <>
            <Check className="mr-2 h-5 w-5" />
            Added to Cart!
          </>
        ) : (
          <>
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </>
        )}
      </Button>

      {/* Show current cart status */}
      {inCart && (
        <div className="bg-muted rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-sm">
              Currently in cart: {currentQuantityInCart} item
              {currentQuantityInCart !== 1 ? 's' : ''}
            </span>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  handleUpdateCartQuantity(currentQuantityInCart - 1)
                }
                disabled={currentQuantityInCart <= 1}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="w-8 text-center text-sm">
                {currentQuantityInCart}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  handleUpdateCartQuantity(currentQuantityInCart + 1)
                }
                disabled={currentQuantityInCart >= 10}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      )}

      <Button variant="outline" size="lg" className="w-full">
        Buy Now
      </Button>
    </div>
  );
}
