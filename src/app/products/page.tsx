import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui';
import { Button } from '../../components/ui';
import { ShoppingCart, Star } from 'lucide-react';
import { getAllProducts } from '../../lib/api';
import { FakeStoreProduct } from '../../types';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Browse our amazing collection of products from the Fake Store API',
};

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

export default async function ProductsPage() {
  let products: FakeStoreProduct[] = [];
  let error: string | null = null;

  try {
    products = await getAllProducts();
  } catch (err) {
    error = err instanceof Error ? err.message : 'Failed to load products';
    console.error('Error loading products:', err);
  }

  if (error) {
    return (
      <div className="container py-8">
        <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-bold text-red-600">
            Error Loading Products
          </h1>
          <p className="text-muted-foreground mb-4 text-xl">{error}</p>
          <Button asChild>
            <Link href="/">Go Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Our Products</h1>
        <p className="text-muted-foreground text-xl">
          Discover our amazing collection of products from around the world.
        </p>
        <p className="text-muted-foreground mt-2 text-sm">
          Showing {products.length} products
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Card
            key={product.id}
            className="group overflow-hidden transition-all duration-200 hover:shadow-lg"
          >
            <Link href={`/products/${product.id}`}>
              <div className="bg-muted aspect-square overflow-hidden p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
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
                  className="hover:text-primary"
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
            <CardContent className="pt-0">
              <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                {truncateDescription(product.description, 120)}
              </p>
              <Button className="w-full" size="sm">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {products.length === 0 && !error && (
        <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
          <h2 className="mb-4 text-2xl font-bold">No Products Found</h2>
          <p className="text-muted-foreground">
            We couldn&apos;t find any products at the moment. Please try again
            later.
          </p>
        </div>
      )}
    </div>
  );
}
