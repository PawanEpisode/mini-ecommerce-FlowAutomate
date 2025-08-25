'use client';

import { useEffect, useState } from 'react';
import { Filter } from 'lucide-react';
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
  DrawerFooter,
} from './ui';
import { SearchInput } from './SearchInput';
import { FilterControls, FilterOption } from './FilterControls';
import { ActiveFiltersIndicator } from './ActiveFiltersIndicator';
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
}

const categoryAllOptions: FilterOption[] = [{ value: '', label: 'All' }];

const sortOptions: FilterOption[] = [
  { value: 'default', label: 'Default' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'title-asc', label: 'Title: A to Z' },
  { value: 'title-desc', label: 'Title: Z to A' },
];

export function ProductFilters({
  onFiltersChange,
  isLoading = false,
}: ProductFiltersProps) {
  const { updateSearchParams, getParam } = useSearchParamsState();
  const [categories, setCategories] = useState<string[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  // Get current values from URL
  const urlSearch = getParam('search');
  const category = getParam('category');
  const sort = getParam('sort') || 'default';

  // Initialize search input with URL value ONLY on mount - no further synchronization
  const [searchInput, setSearchInput] = useState(() => urlSearch);

  const eraseInput = () => {
    setSearchInput('');
  };

  // Debounce search input
  const debouncedSearch = useDebounce(searchInput, 300);

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
  }, [debouncedSearch]);

  // Notify parent of filter changes
  useEffect(() => {
    onFiltersChange({ search: debouncedSearch, category, sort });
  }, [debouncedSearch, category, sort]);

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

  const hasActiveFilters =
    !!debouncedSearch || !!category || sort !== 'default';

  const categoryOptions: FilterOption[] = [
    ...categoryAllOptions,
    ...categories.map((category) => ({
      value: category,
      label: category.charAt(0).toUpperCase() + category.slice(1),
    })),
  ];

  return (
    <div className="mb-4 w-full sticky top-[65px] dark:bg-black bg-white z-50">
      {/* Desktop Filters - Hidden on mobile */}
      <div className="hidden md:block">
        <div className="rounded-lg border p-4">
          <FilterControls
            searchValue={searchInput}
            onSearchChange={handleSearchChange}
            onSearchClear={eraseInput}
            categoryValue={category}
            categoryOptions={categoryOptions}
            onCategoryChange={handleCategoryChange}
            categoriesLoading={categoriesLoading}
            sortValue={sort}
            sortOptions={sortOptions}
            onSortChange={handleSortChange}
            onClearFilters={clearFilters}
            hasActiveFilters={hasActiveFilters}
            disabled={isLoading}
            isMobile={false}
          />
        </div>
      </div>

      {/* Mobile Filter Button and Drawer */}
      <div className="md:hidden p-2">
        <div className="mb-2 flex items-center justify-between gap-4">
          {/* Search bar - always visible on mobile */}
          <SearchInput
            id="mobile-quick-search"
            value={searchInput}
            onChange={handleSearchChange}
            onClear={eraseInput}
            placeholder="Search products..."
            disabled={isLoading}
            className="flex-1"
            showLabel={false}
          />

          {/* Filter Button */}
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                variant="outline"
                size="default"
                className="h-11"
                disabled={isLoading}
              >
                <Filter className="mr-2 h-4 w-4" />
                Filters
                {hasActiveFilters && (
                  <span className="bg-primary absolute -top-1 -right-1 h-3 w-3 rounded-full" />
                )}
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-white dark:bg-black">
              <DrawerHeader>
                <DrawerTitle>Filter Products</DrawerTitle>
              </DrawerHeader>
              <FilterControls
                searchValue={searchInput}
                onSearchChange={handleSearchChange}
                onSearchClear={eraseInput}
                categoryValue={category}
                categoryOptions={categoryOptions}
                onCategoryChange={handleCategoryChange}
                categoriesLoading={categoriesLoading}
                sortValue={sort}
                sortOptions={sortOptions}
                onSortChange={handleSortChange}
                onClearFilters={clearFilters}
                hasActiveFilters={hasActiveFilters}
                disabled={isLoading}
                isMobile={true}
                showClearButton={false}
              />
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Active filters indicator */}
        <ActiveFiltersIndicator
          searchValue={searchInput}
          categoryValue={category}
          sortValue={sort}
          onClearFilters={clearFilters}
          disabled={isLoading}
        />
      </div>
    </div>
  );
}
