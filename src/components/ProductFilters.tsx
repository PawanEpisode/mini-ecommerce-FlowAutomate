'use client';

import { useEffect, useState } from 'react';
import { Search, X, RefreshCw } from 'lucide-react';
import { Input, Select, Button } from './ui';
import { useSearchParamsState } from '../hooks/useSearchParams';
import { useDebounce } from '../hooks/useDebounce';
import { getAllCategories } from '../lib/api';

export interface FilterState {
  search: string;
  category: string;
  sort: string;
}

interface ProductFiltersProps {
  onFiltersChange: (filters: FilterState) => void;
  isLoading?: boolean;
  onRetry?: () => void;
}

export function ProductFilters({
  onFiltersChange,
  isLoading = false,
  onRetry,
}: ProductFiltersProps) {
  const { updateSearchParams, getParam } = useSearchParamsState();
  const [categories, setCategories] = useState<string[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  const eraseInput = () => {
    setSearchInput('');
  };

  // Get current values from URL
  const urlSearch = getParam('search');
  const category = getParam('category');
  const sort = getParam('sort') || 'default';

  // Debounce search input
  const debouncedSearch = useDebounce(searchInput, 300);

  // Initialize search input from URL
  useEffect(() => {
    setSearchInput(urlSearch);
  }, [urlSearch]);

  // Load categories on mount
  useEffect(() => {
    const loadCategories = async () => {
      try {
        setCategoriesLoading(true);
        const fetchedCategories = await getAllCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error('Failed to load categories:', error);
      } finally {
        setCategoriesLoading(false);
      }
    };

    loadCategories();
  }, []);

  // Update URL when debounced search changes
  useEffect(() => {
    updateSearchParams({ search: debouncedSearch || null });
  }, [debouncedSearch, updateSearchParams]);

  // Notify parent of filter changes
  useEffect(() => {
    onFiltersChange({ search: debouncedSearch, category, sort });
  }, [debouncedSearch, category, sort, onFiltersChange]);

  const handleSearchChange = (value: string) => {
    setSearchInput(value);
  };

  const handleCategoryChange = (value: string) => {
    updateSearchParams({ category: value || null });
  };

  const handleSortChange = (value: string) => {
    updateSearchParams({ sort: value === 'default' ? null : value });
  };

  const clearFilters = () => {
    setSearchInput('');
    updateSearchParams({ search: null, category: null, sort: null });
  };

  const hasActiveFilters = debouncedSearch || category || sort !== 'default';

  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-4xl font-bold">Our Products</h1>
        {onRetry && (
          <Button
            onClick={onRetry}
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

      {/* Filters */}
      <div className="bg-card flex flex-col gap-4 rounded-lg border p-4 sm:flex-row sm:items-end">
        {/* Search */}
        <div className="flex-1 flex flex-col gap-2">
          <label htmlFor="search" className="text-muted-foreground text-sm font-medium">
            Search Products
          </label>
          <div className="relative">
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              id="search"
              type="text"
              placeholder="Search by title..."
              value={searchInput}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-9 text-muted-foreground placeholder:text-muted-foreground"
              disabled={isLoading}
            />
            {searchInput && (<Button
              variant="ghost"
              size="icon"
              onClick={eraseInput}
              className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2"
              >
                <X className="text-muted-foreground" />
              </Button>
            )}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-col gap-2 sm:min-w-[200px]">
          <label htmlFor="category" className="text-muted-foreground text-sm font-medium">
            Category
          </label>
          <Select
            className="text-muted-foreground"
            id="category"
            value={category}
            onChange={(e) => handleCategoryChange(e.target.value)}
            disabled={isLoading || categoriesLoading}
          >
            <option className="text-muted-foreground" value="">All Categories</option>
            {categories.map((cat) => (
              <option className="text-muted-foreground" key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </Select>
        </div>

        {/* Sort */}
        <div className="flex flex-col gap-2 sm:min-w-[200px]">
          <label htmlFor="sort" className="text-muted-foreground text-sm font-medium">
            Sort By
          </label>
          <Select
            className="text-muted-foreground"
            id="sort"
            value={sort}
            onChange={(e) => handleSortChange(e.target.value)}
            disabled={isLoading}
          >
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="title-asc">Title: A to Z</option>
            <option value="title-desc">Title: Z to A</option>
            <option value="rating-desc">Highest Rated</option>
          </Select>
        </div>

        
      </div>
      {/* Clear Filters */}
      {hasActiveFilters && (
          <Button
            onClick={clearFilters}
            variant="outline"
            size="sm"
            className="sm:mt-auto text-muted-foreground"
            disabled={isLoading}
          >
            <X className="mr-2 h-4 w-4 text-muted-foreground" />
            Remove Filters
          </Button>
        )}
    </div>
  );
}
