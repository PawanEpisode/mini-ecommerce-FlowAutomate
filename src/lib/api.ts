import { FakeStoreProduct } from '../types';

const FAKE_STORE_API_BASE = 'https://fakestoreapi.com';

/**
 * Fetches all products from the Fake Store API
 * @returns Promise<FakeStoreProduct[]>
 */
export async function getAllProducts(): Promise<FakeStoreProduct[]> {
  try {
    const response = await fetch(`${FAKE_STORE_API_BASE}/products`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const products: FakeStoreProduct[] = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products');
  }
}

/**
 * Fetches a single product by ID from the Fake Store API
 * @param id - The product ID
 * @returns Promise<FakeStoreProduct>
 */
export async function getProductById(id: number): Promise<FakeStoreProduct> {
  try {
    const response = await fetch(`${FAKE_STORE_API_BASE}/products/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const product: FakeStoreProduct = await response.json();
    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw new Error('Failed to fetch product');
  }
}

/**
 * Fetches products by category from the Fake Store API
 * @param category - The category name
 * @returns Promise<FakeStoreProduct[]>
 */
export async function getProductsByCategory(
  category: string
): Promise<FakeStoreProduct[]> {
  try {
    const response = await fetch(
      `${FAKE_STORE_API_BASE}/products/category/${category}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const products: FakeStoreProduct[] = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw new Error('Failed to fetch products by category');
  }
}

/**
 * Fetches all available categories from the Fake Store API
 * @returns Promise<string[]>
 */
export async function getAllCategories(): Promise<string[]> {
  try {
    const response = await fetch(`${FAKE_STORE_API_BASE}/products/categories`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const categories: string[] = await response.json();
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw new Error('Failed to fetch categories');
  }
}
