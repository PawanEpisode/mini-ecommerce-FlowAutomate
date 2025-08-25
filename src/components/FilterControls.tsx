'use client';

import { X } from 'lucide-react';
import { Button, CustomDropdown } from './ui';
import { SearchInput } from './SearchInput';

export interface FilterOption {
  value: string;
  label: string;
}

export interface FilterControlsProps {
  // Search props
  searchValue: string;
  onSearchChange: (value: string) => void;
  onSearchClear: () => void;
  searchPlaceholder?: string;
  searchLabel?: string;

  // Category props
  categoryValue: string;
  categoryOptions: FilterOption[];
  onCategoryChange: (value: string) => void;
  categoryLabel?: string;
  categoriesLoading?: boolean;

  // Sort props
  sortValue: string;
  sortOptions: FilterOption[];
  onSortChange: (value: string) => void;
  sortLabel?: string;

  // Clear filters
  onClearFilters: () => void;
  hasActiveFilters: boolean;

  // General props
  disabled?: boolean;
  isMobile?: boolean;
  showClearButton?: boolean;
}

export function FilterControls({
  searchValue,
  onSearchChange,
  onSearchClear,
  searchPlaceholder = 'Search by title...',
  searchLabel = 'Search Products',

  categoryValue,
  categoryOptions,
  onCategoryChange,
  categoryLabel = 'Category',
  categoriesLoading = false,

  sortValue,
  sortOptions,
  onSortChange,
  sortLabel = 'Sort By',

  onClearFilters,
  hasActiveFilters,

  disabled = false,
  isMobile = false,
  showClearButton = true,
}: FilterControlsProps) {
  const containerClasses = isMobile
    ? 'flex w-full flex-col gap-4 p-4'
    : 'flex w-full gap-4';

  const dropdownClasses = isMobile ? 'w-full' : 'w-full sm:w-60';

  return (
    <div className="flex w-full flex-col gap-2">
      <div className={containerClasses}>
        {/* Search */}
        <SearchInput
          id={isMobile ? 'mobile-search' : 'search'}
          value={searchValue}
          onChange={onSearchChange}
          onClear={onSearchClear}
          placeholder={searchPlaceholder}
          label={searchLabel}
          disabled={disabled}
          className="flex-1"
          showLabel={!isMobile}
        />

        {/* Category Filter */}
        <CustomDropdown
          id={isMobile ? 'mobile-category' : 'category'}
          label={categoryLabel}
          className={dropdownClasses}
          options={categoryOptions}
          value={categoryValue}
          onChange={onCategoryChange}
          disabled={disabled || categoriesLoading}
        />

        {/* Sort */}
        <CustomDropdown
          id={isMobile ? 'mobile-sort' : 'sort'}
          label={sortLabel}
          className={dropdownClasses}
          options={sortOptions}
          value={sortValue}
          onChange={onSortChange}
          disabled={disabled}
        />
      </div>

      {/* Clear Filters Button */}
      {showClearButton && hasActiveFilters && (
        <Button
          onClick={onClearFilters}
          variant="outline"
          size="sm"
          className={`text-muted-foreground w-fit ${isMobile ? 'mx-4' : 'mt-4'}`}
          disabled={disabled}
        >
          <X className="text-muted-foreground mr-2 h-4 w-4" />
          {isMobile ? 'Clear all' : 'Remove Filters'}
        </Button>
      )}
    </div>
  );
}
