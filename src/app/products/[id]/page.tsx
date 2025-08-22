import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/index';
import {
  ArrowLeft,
  ShoppingCart,
  Star,
  Truck,
  Shield,
  RotateCcw,
} from 'lucide-react';
import { getProductById } from '../../../lib/api';
import { FakeStoreProduct } from '../../../types';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Helper function to format category names for display
function formatCategory(category: string): string {
  return category
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  try {
    const { id } = await params;
    const productId = parseInt(id);

    if (isNaN(productId)) {
      return {
        title: 'Product Not Found',
        description: 'The requested product could not be found.',
      };
    }

    const product = await getProductById(productId);

    return {
      title: `${product.title} | Mini E-commerce`,
      description: product.description,
      openGraph: {
        title: product.title,
        description: product.description,
        images: [
          {
            url: product.image,
            width: 800,
            height: 800,
            alt: product.title,
          },
        ],
      },
    };
  } catch {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    };
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  let product: FakeStoreProduct | null = null;
  let error: string | null = null;

  try {
    const { id } = await params;
    const productId = parseInt(id);

    if (isNaN(productId)) {
      notFound();
    }

    product = await getProductById(productId);
  } catch (err) {
    error = err instanceof Error ? err.message : 'Failed to load product';
    console.error('Error loading product:', err);
  }

  if (error || !product) {
    notFound();
  }

  return (
    <div className="container py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Button variant="outline" size="sm" asChild>
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Product Image */}
        <div className="space-y-4">
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="bg-muted aspect-square overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          {/* Category Badge */}
          <div>
            <span className="bg-muted text-muted-foreground inline-block rounded-full px-3 py-1 text-sm">
              {formatCategory(product.category)}
            </span>
          </div>

          {/* Title and Rating */}
          <div>
            <h1 className="mb-4 text-3xl font-bold">{product.title}</h1>

            <div className="mb-4 flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating.rate)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground ml-2 text-sm">
                  {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </div>
            </div>

            <p className="text-primary mb-6 text-4xl font-bold">
              ${product.price.toFixed(2)}
            </p>
          </div>

          {/* Description */}
          <div>
            <h3 className="mb-3 text-lg font-semibold">Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <Button size="lg" className="w-full">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>

            <Button variant="outline" size="lg" className="w-full">
              Buy Now
            </Button>
          </div>

          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Why Choose This Product?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Truck className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium">Free Shipping</p>
                  <p className="text-muted-foreground text-sm">
                    On orders over $50
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Secure Payment</p>
                  <p className="text-muted-foreground text-sm">
                    Your payment information is safe
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <RotateCcw className="h-5 w-5 text-orange-600" />
                <div>
                  <p className="font-medium">30-Day Returns</p>
                  <p className="text-muted-foreground text-sm">
                    Easy returns within 30 days
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
