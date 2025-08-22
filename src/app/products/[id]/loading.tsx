import { Card, CardContent, CardHeader } from '../../../components/ui/card';

export default function ProductDetailLoading() {
  return (
    <div className="container py-8">
      {/* Back Button Skeleton */}
      <div className="mb-6">
        <div className="bg-muted h-9 w-32 animate-pulse rounded-md"></div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Product Image Skeleton */}
        <div className="space-y-4">
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="bg-muted aspect-square animate-pulse rounded-lg"></div>
            </CardContent>
          </Card>
        </div>

        {/* Product Details Skeleton */}
        <div className="space-y-6">
          {/* Category Badge Skeleton */}
          <div className="bg-muted h-6 w-24 animate-pulse rounded-full"></div>

          {/* Title and Rating Skeleton */}
          <div>
            <div className="bg-muted mb-4 h-9 animate-pulse rounded-md"></div>
            <div className="bg-muted mb-4 h-6 w-48 animate-pulse rounded-md"></div>
            <div className="bg-muted mb-6 h-10 w-32 animate-pulse rounded-md"></div>
          </div>

          {/* Description Skeleton */}
          <div>
            <div className="bg-muted mb-3 h-6 w-32 animate-pulse rounded-md"></div>
            <div className="space-y-2">
              <div className="bg-muted h-4 animate-pulse rounded-md"></div>
              <div className="bg-muted h-4 animate-pulse rounded-md"></div>
              <div className="bg-muted h-4 w-3/4 animate-pulse rounded-md"></div>
            </div>
          </div>

          {/* Actions Skeleton */}
          <div className="space-y-4">
            <div className="bg-muted h-12 animate-pulse rounded-md"></div>
            <div className="bg-muted h-12 animate-pulse rounded-md"></div>
          </div>

          {/* Features Card Skeleton */}
          <Card>
            <CardHeader>
              <div className="bg-muted h-6 w-48 animate-pulse rounded-md"></div>
            </CardHeader>
            <CardContent className="space-y-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-muted h-5 w-5 animate-pulse rounded-md"></div>
                  <div className="flex-1 space-y-1">
                    <div className="bg-muted h-4 w-32 animate-pulse rounded-md"></div>
                    <div className="bg-muted h-3 w-48 animate-pulse rounded-md"></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
