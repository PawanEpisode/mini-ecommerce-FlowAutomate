import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Package } from 'lucide-react';

export default function ProductNotFound() {
  return (
    <div className="container py-8">
      <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-6 text-center">
        <div className="bg-muted flex h-20 w-20 items-center justify-center rounded-full">
          <Package className="text-muted-foreground h-10 w-10" />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Product Not Found</h1>
          <p className="text-muted-foreground max-w-md text-lg">
            Sorry, we couldn't find the product you're looking for. It might
            have been removed or the link is incorrect.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild>
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="/">Go to Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
