'use client';

import { useState, useEffect, useCallback } from 'react';
import { getAllProducts } from '../../lib/api';
import { FakeStoreProduct } from '../../types';
import { ProductFilters, FilterState } from '../../components/ProductFilters';
import { ProductGrid } from '../../components/ProductGrid';
import { processProducts } from '../../lib/productUtils';
import { Button } from '../../components/ui';
import { RefreshCw } from 'lucide-react';

export default function ProductsPage() {
  const [allProducts, setAllProducts] = useState<FakeStoreProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<FakeStoreProduct[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: '',
    sort: 'default',
  });

  // Load products
  const loadProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const products = await getAllProducts();
      setAllProducts(products);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to load products';
      setError(errorMessage);
      console.error('Error loading products:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initial load
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  // Apply filters when allProducts or filters change
  useEffect(() => {
    if (allProducts.length > 0) {
      const processed = processProducts(allProducts, filters);
      setFilteredProducts(processed);
    }
  }, [allProducts, filters]);

  const handleFiltersChange = useCallback((newFilters: FilterState) => {
    setFilters(newFilters);
  }, []);

  const handleRetry = useCallback(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <div className="container py-8 gap-4 flex flex-col">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-4xl font-bold">Our Products</h1>
        {error && handleRetry && (
          <Button
            onClick={handleRetry}
            variant="outline"
            disabled={isLoading}
            className="sm:w-auto"
          >
            <RefreshCw
              className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`}
            />
            Retry
          </Button>
        )}
      </div>

      <p className="text-muted-foreground text-xl">
        Discover our amazing collection of products from around the world.
      </p>
      <ProductFilters
        onFiltersChange={handleFiltersChange}
        isLoading={isLoading}
      />

      {/* Results count */}
      {!isLoading && !error && (
        <div className="mb-6">
          <p className="text-muted-foreground text-sm">
            {filteredProducts.length === allProducts.length
              ? `Showing all ${allProducts.length} products`
              : `Showing ${filteredProducts.length} of ${allProducts.length} products`}
          </p>
        </div>
      )}

      <ProductGrid
        products={filteredProducts}
        isLoading={isLoading}
        error={error}
        onRetry={handleRetry}
        searchQuery={filters.search}
      />
    </div>
  );
}
