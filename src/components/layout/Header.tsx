'use client';

import Link from 'next/link';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '../ui/index';
import { ThemeToggle } from '../theme-toggle';
import { useState } from 'react';
import { useCart } from '../../hooks/useCart';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-black">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <div className="mr-4 flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <ShoppingCart className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              One Piece Kart
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          <Link
            className="text-foreground/60 hover:text-foreground/80 transition-colors"
            href="/products"
          >
            Products
          </Link>
          <Link
            className="text-foreground/60 hover:text-foreground/80 transition-colors"
            href="/about"
          >
            About
          </Link>
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Cart */}
          <Button
            variant="ghost"
            size="sm"
            className="hidden rounded-full border border-white sm:flex dark:border-black"
            asChild
          >
            <Link href="/cart">
              <ShoppingCart className="h-4 w-4" />
              <span className="ml-2">Cart ({totalItems})</span>
            </Link>
          </Button>

          {/* Mobile Cart */}
          <Button variant="ghost" size="icon" className="sm:hidden" asChild>
            <Link href="/cart">
              <div className="relative">
                <ShoppingCart className="h-4 w-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
              </div>
              <span className="sr-only">Cart</span>
            </Link>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="bg-background border-t md:hidden">
          <nav className="container flex flex-col space-y-3 py-4">
            <Link
              className="text-foreground/60 hover:text-foreground/80 transition-colors"
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              className="text-foreground/60 hover:text-foreground/80 transition-colors"
              href="/categories"
              onClick={() => setMobileMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              className="text-foreground/60 hover:text-foreground/80 transition-colors"
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex items-center space-x-2 pt-2">
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
