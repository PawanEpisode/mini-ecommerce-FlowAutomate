import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our amazing collection of products',
};

const sampleProducts = [
  {
    id: 1,
    name: 'Premium Headphones',
    price: 299.99,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop&crop=center',
    description: 'High-quality wireless headphones with noise cancellation.',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 399.99,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop&crop=center',
    description: 'Advanced smartwatch with health monitoring features.',
  },
  {
    id: 3,
    name: 'Laptop Stand',
    price: 79.99,
    image:
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop&crop=center',
    description: 'Ergonomic laptop stand for better working posture.',
  },
  {
    id: 4,
    name: 'Wireless Mouse',
    price: 59.99,
    image:
      'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop&crop=center',
    description: 'Precision wireless mouse with long battery life.',
  },
  {
    id: 5,
    name: 'USB-C Hub',
    price: 89.99,
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center',
    description: 'Multi-port USB-C hub for modern devices.',
  },
  {
    id: 6,
    name: 'Desk Organizer',
    price: 39.99,
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center',
    description: 'Wooden desk organizer to keep your workspace tidy.',
  },
];

export default function ProductsPage() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Our Products</h1>
        <p className="text-muted-foreground text-xl">
          Discover our curated collection of premium tech accessories and
          workspace essentials.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sampleProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="bg-muted aspect-video">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{product.name}</CardTitle>
              <p className="text-primary text-2xl font-bold">
                ${product.price}
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {product.description}
              </p>
              <Button className="w-full">Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
