import { FakeStoreProduct } from '../types';

export interface FilterOptions {
  search: string;
  category: string;
  sort: string;
}

/**
 * Filters products based on search query and category
 */
export function filterProducts(
  products: FakeStoreProduct[],
  { search, category }: Pick<FilterOptions, 'search' | 'category'>
): FakeStoreProduct[] {
  let filtered = [...products];

  // Filter by search query (title)
  if (search.trim()) {
    const searchLower = search.toLowerCase().trim();
    filtered = filtered.filter((product) =>
      product.title.toLowerCase().includes(searchLower)
    );
  }

  // Filter by category
  if (category) {
    filtered = filtered.filter((product) => product.category === category);
  }

  return filtered;
}

/**
 * Sorts products based on the sort option
 */
export function sortProducts(
  products: FakeStoreProduct[],
  sortOption: string
): FakeStoreProduct[] {
  const sorted = [...products];

  switch (sortOption) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);

    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);

    case 'title-asc':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));

    case 'title-desc':
      return sorted.sort((a, b) => b.title.localeCompare(a.title));

    case 'rating-desc':
      return sorted.sort((a, b) => b.rating.rate - a.rating.rate);

    case 'default':
    default:
      // Return original order (by ID)
      return sorted.sort((a, b) => a.id - b.id);
  }
}

/**
 * Applies all filters and sorting to products
 */
export function processProducts(
  products: FakeStoreProduct[],
  options: FilterOptions
): FakeStoreProduct[] {
  const filtered = filterProducts(products, options);
  const sorted = sortProducts(filtered, options.sort);
  return sorted;
}

/**
 * Debounced function utility
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
