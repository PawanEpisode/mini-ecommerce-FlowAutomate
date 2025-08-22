'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Header() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">
              Mini Ecommerce
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              className="hover:text-foreground/80 text-foreground/60 transition-colors"
              href="/products"
            >
              Products
            </Link>
            <Link
              className="hover:text-foreground/80 text-foreground/60 transition-colors"
              href="/categories"
            >
              Categories
            </Link>
            <Link
              className="hover:text-foreground/80 text-foreground/60 transition-colors"
              href="/about"
            >
              About
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button variant="outline" size="sm">
              Search
            </Button>
          </div>
          <nav className="flex items-center space-x-1">
            <Button variant="ghost" size="sm">
              Cart (0)
            </Button>
            <Button size="sm">Sign In</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
