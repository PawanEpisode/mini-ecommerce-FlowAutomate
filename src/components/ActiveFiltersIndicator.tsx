'use client';

import { X } from 'lucide-react';
import { Button } from './ui';

interface ActiveFiltersIndicatorProps {
  searchValue: string;
  categoryValue: string;
  sortValue: string;
  defaultSortValue?: string;
  onClearFilters: () => void;
  disabled?: boolean;
}

export function ActiveFiltersIndicator({
  searchValue,
  categoryValue,
  sortValue,
  defaultSortValue = 'default',
  onClearFilters,
  disabled = false,
}: ActiveFiltersIndicatorProps) {
  // Create array of active filter names, filtering out any falsy values
  const activeFilters = [
    searchValue && 'Search',
    categoryValue && 'Category',
    sortValue !== defaultSortValue && 'Sort',
  ].filter(Boolean);

  // If no active filters, return null
  if (activeFilters.length === 0) return null;

  return (
    <div className="flex items-center justify-between">
      <p className="text-muted-foreground text-sm">
        {activeFilters.join(', ')} applied
      </p>
      <Button
        onClick={onClearFilters}
        variant="ghost"
        size="sm"
        className="text-muted-foreground h-8"
        disabled={disabled}
      >
        <X className="mr-1 h-3 w-3" />
        Clear all
      </Button>
    </div>
  );
}
