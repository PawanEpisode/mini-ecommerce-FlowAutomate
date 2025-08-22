'use client';

import { useState, useEffect, useCallback } from 'react';
import { getAllProducts } from '../../lib/api';
import { FakeStoreProduct } from '../../types';
import { ProductFilters, FilterState } from '../../components/ProductFilters';
import { ProductGrid } from '../../components/ProductGrid';
import { processProducts } from '../../lib/productUtils';

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
    <div className="container py-8">
      <ProductFilters
        onFiltersChange={handleFiltersChange}
        isLoading={isLoading}
        onRetry={error ? handleRetry : undefined}
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
