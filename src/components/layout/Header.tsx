'use client';

import Link from 'next/link';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { ThemeToggle } from '../theme-toggle';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-black sticky top-0 z-50 w-full border-b">
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
            href="/categories"
          >
            Categories
          </Link>
          <Link
            className="text-foreground/60 hover:text-foreground/80 transition-colors"
            href="/about"
          >
            About
          </Link>
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* Search */}
          <div className="hidden md:block">
            <Button variant="outline" size="sm">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Cart */}
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <ShoppingCart className="h-4 w-4" />
            <span className="ml-2">Cart (0)</span>
          </Button>

          {/* Mobile Cart */}
          <Button variant="ghost" size="icon" className="sm:hidden">
            <ShoppingCart className="h-4 w-4" />
            <span className="sr-only">Cart</span>
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
