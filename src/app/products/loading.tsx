import { Card, CardContent, CardHeader } from '../../components/ui/card';

export default function ProductsLoading() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <div className="bg-muted mb-4 h-10 animate-pulse rounded-md"></div>
        <div className="bg-muted mb-2 h-6 w-3/4 animate-pulse rounded-md"></div>
        <div className="bg-muted h-4 w-1/4 animate-pulse rounded-md"></div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="bg-muted aspect-square overflow-hidden p-4">
              <div className="bg-muted-foreground/20 h-full w-full animate-pulse rounded"></div>
            </div>
            <CardHeader className="pb-3">
              <div className="mb-2">
                <div className="bg-muted h-5 w-20 animate-pulse rounded-full"></div>
              </div>
              <div className="space-y-2">
                <div className="bg-muted h-5 animate-pulse rounded-md"></div>
                <div className="bg-muted h-5 w-3/4 animate-pulse rounded-md"></div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="bg-muted h-8 w-20 animate-pulse rounded-md"></div>
                <div className="bg-muted h-4 w-16 animate-pulse rounded-md"></div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="mb-4 space-y-2">
                <div className="bg-muted h-4 animate-pulse rounded-md"></div>
                <div className="bg-muted h-4 animate-pulse rounded-md"></div>
                <div className="bg-muted h-4 w-2/3 animate-pulse rounded-md"></div>
              </div>
              <div className="bg-muted h-9 animate-pulse rounded-md"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
