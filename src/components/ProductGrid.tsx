'use client';

import Link from 'next/link';
import { ShoppingCart, Star, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, Button } from './ui';
import { FakeStoreProduct } from '../types';

// Helper function to format category names for display
function formatCategory(category: string): string {
  return category
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Helper function to truncate description
function truncateDescription(
  description: string,
  maxLength: number = 100
): string {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength).trim() + '...';
}

interface ProductGridProps {
  products: FakeStoreProduct[];
  isLoading?: boolean;
  error?: string | null;
  onRetry?: () => void;
  searchQuery?: string;
}

// Loading skeleton component
function ProductSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="bg-muted aspect-square animate-pulse" />
      <CardHeader className="pb-3">
        <div className="mb-2">
          <div className="bg-muted h-5 w-20 animate-pulse rounded-full" />
        </div>
        <div className="space-y-2">
          <div className="bg-muted h-5 w-full animate-pulse rounded" />
          <div className="bg-muted h-5 w-3/4 animate-pulse rounded" />
        </div>
        <div className="flex items-center justify-between">
          <div className="bg-muted h-6 w-16 animate-pulse rounded" />
          <div className="bg-muted h-4 w-12 animate-pulse rounded" />
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="mb-4 space-y-2">
          <div className="bg-muted h-3 w-full animate-pulse rounded" />
          <div className="bg-muted h-3 w-full animate-pulse rounded" />
          <div className="bg-muted h-3 w-2/3 animate-pulse rounded" />
        </div>
        <div className="bg-muted h-8 w-full animate-pulse rounded" />
      </CardContent>
    </Card>
  );
}

export function ProductGrid({
  products,
  isLoading = false,
  error = null,
  onRetry,
  searchQuery = '',
}: ProductGridProps) {
  // Loading state
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
        <AlertCircle className="mb-4 h-12 w-12 text-red-500" />
        <h2 className="mb-2 text-2xl font-bold text-red-600">
          Error Loading Products
        </h2>
        <p className="text-muted-foreground mb-4 max-w-md text-lg">{error}</p>
        {onRetry && (
          <Button onClick={onRetry} variant="outline">
            Try Again
          </Button>
        )}
      </div>
    );
  }

  // Empty state
  if (products.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
        <div className="mb-4 text-6xl">🔍</div>
        <h2 className="mb-2 text-2xl font-bold">No Products Found</h2>
        <p className="text-muted-foreground max-w-md text-lg">
          {searchQuery
            ? `No products match "${searchQuery}". Try adjusting your search or filters.`
            : "We couldn't find any products at the moment. Please try again later."}
        </p>
      </div>
    );
  }

  // Products grid
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <Card
          key={product.id}
          className="group overflow-hidden transition-all duration-200 hover:shadow-lg"
        >
          <Link href={`/products/${product.id}`}>
            <div className="bg-muted dark:bg-white aspect-square overflow-hidden p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </Link>
          <CardHeader className="pb-3">
            <div className="mb-2">
              <span className="bg-muted text-muted-foreground rounded-full px-2 py-1 text-xs">
                {formatCategory(product.category)}
              </span>
            </div>
            <CardTitle className="line-clamp-2 text-lg">
              <Link
                href={`/products/${product.id}`}
                className="hover:text-primary transition-colors"
              >
                {product.title}
              </Link>
            </CardTitle>
            <div className="flex items-center justify-between">
              <p className="text-primary text-2xl font-bold">
                ${product.price.toFixed(2)}
              </p>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-muted-foreground text-sm">
                  {product.rating.rate} ({product.rating.count})
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 pt-0 flex flex-col items-start justify-end">
            <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
              {truncateDescription(product.description, 120)}
            </p>
            <Button className="w-full dark:bg-white dark:text-black" size="sm">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
