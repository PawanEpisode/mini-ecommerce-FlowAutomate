import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container py-8">
      {/* Hero Section */}
      <section className="py-12 text-center md:py-20">
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
          Welcome to <span className="text-primary">Mini Ecommerce</span>
        </h1>
        <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
          A modern, fast, and beautiful e-commerce platform built with Next.js,
          TypeScript, and Tailwind CSS.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg">
            <Link href="/products">Shop Now</Link>
          </Button>
          <Button variant="outline" size="lg">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Why Choose Mini Ecommerce?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                ⚡ Lightning Fast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Built with Next.js 15 and modern performance optimizations for
                blazing fast user experience.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎨 Beautiful Design
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Crafted with Tailwind CSS and modern design principles for a
                stunning user interface.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🔒 Type Safe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Built with TypeScript for better developer experience and fewer
                runtime errors.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Built with Modern Technologies
        </h2>
        <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          <div className="rounded-lg border p-6">
            <h3 className="mb-2 font-semibold">Next.js 15</h3>
            <p className="text-muted-foreground text-sm">React Framework</p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="mb-2 font-semibold">TypeScript</h3>
            <p className="text-muted-foreground text-sm">Type Safety</p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="mb-2 font-semibold">Tailwind CSS</h3>
            <p className="text-muted-foreground text-sm">Styling</p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="mb-2 font-semibold">ESLint & Prettier</h3>
            <p className="text-muted-foreground text-sm">Code Quality</p>
          </div>
        </div>
      </section>
    </div>
  );
}
