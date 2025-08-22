import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Zap, Palette, Shield, Code, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container py-8">
      {/* Hero Section */}
      <section className="py-12 text-center md:py-20">
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
          Welcome to{' '}
          <span className="font-bold">One Piece Kart</span>
        </h1>
        <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
          A modern, fast, and beautiful e-commerce platform built with Next.js,
          TypeScript, and Tailwind CSS.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/products">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Why Choose Mini Ecommerce?
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="group cursor-pointer transition-all duration-200 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="bg-primary/10 group-hover:bg-primary/20 rounded-lg p-2 transition-colors">
                  <Zap className="text-primary h-6 w-6" />
                </div>
                Lightning Fast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Built with Next.js 15 and modern performance optimizations for
                blazing fast user experience.
              </p>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer transition-all duration-200 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="bg-primary/10 group-hover:bg-primary/20 rounded-lg p-2 transition-colors">
                  <Palette className="text-primary h-6 w-6" />
                </div>
                Beautiful Design
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Crafted with Tailwind CSS and modern design principles for a
                stunning user interface.
              </p>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer transition-all duration-200 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="bg-primary/10 group-hover:bg-primary/20 rounded-lg p-2 transition-colors">
                  <Shield className="text-primary h-6 w-6" />
                </div>
                Type Safe
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
        <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
          <Card className="group cursor-pointer transition-all duration-200 hover:shadow-md">
            <CardContent className="pt-6">
              <Code className="text-primary mx-auto mb-3 h-8 w-8 transition-transform group-hover:scale-110" />
              <h3 className="mb-2 font-semibold">Next.js 15</h3>
              <p className="text-muted-foreground text-sm">React Framework</p>
            </CardContent>
          </Card>
          <Card className="group cursor-pointer transition-all duration-200 hover:shadow-md">
            <CardContent className="pt-6">
              <Shield className="text-primary mx-auto mb-3 h-8 w-8 transition-transform group-hover:scale-110" />
              <h3 className="mb-2 font-semibold">TypeScript</h3>
              <p className="text-muted-foreground text-sm">Type Safety</p>
            </CardContent>
          </Card>
          <Card className="group cursor-pointer transition-all duration-200 hover:shadow-md">
            <CardContent className="pt-6">
              <Palette className="text-primary mx-auto mb-3 h-8 w-8 transition-transform group-hover:scale-110" />
              <h3 className="mb-2 font-semibold">Tailwind CSS</h3>
              <p className="text-muted-foreground text-sm">Styling</p>
            </CardContent>
          </Card>
          <Card className="group cursor-pointer transition-all duration-200 hover:shadow-md">
            <CardContent className="pt-6">
              <Zap className="text-primary mx-auto mb-3 h-8 w-8 transition-transform group-hover:scale-110" />
              <h3 className="mb-2 font-semibold">ESLint & Prettier</h3>
              <p className="text-muted-foreground text-sm">Code Quality</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
