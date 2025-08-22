import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Heart, Code, Zap, Shield, Palette, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Mini Ecommerce and our mission',
};

export default function AboutPage() {
  return (
    <div className="container py-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            About Mini Ecommerce
          </h1>
          <p className="text-muted-foreground text-xl">
            Building the future of online shopping with modern technology and
            exceptional user experience.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="group transition-all duration-200 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="bg-primary/10 group-hover:bg-primary/20 rounded-lg p-2 transition-colors">
                  <Target className="text-primary h-6 w-6" />
                </div>
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To create a seamless, fast, and beautiful e-commerce experience
                that empowers both businesses and customers. We believe in
                leveraging cutting-edge technology to solve real-world problems.
              </p>
            </CardContent>
          </Card>

          <Card className="group transition-all duration-200 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="bg-primary/10 group-hover:bg-primary/20 rounded-lg p-2 transition-colors">
                  <Heart className="text-primary h-6 w-6" />
                </div>
                Our Values
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-3">
                <li className="flex items-center gap-2">
                  <Zap className="text-primary h-4 w-4" />
                  Innovation through modern technology
                </li>
                <li className="flex items-center gap-2">
                  <Users className="text-primary h-4 w-4" />
                  User-centric design and experience
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="text-primary h-4 w-4" />
                  Performance and reliability first
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="text-primary h-4 w-4" />
                  Transparency and trust
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="mb-6 text-3xl font-bold">
            Built with Modern Technologies
          </h2>
          <p className="text-muted-foreground mb-6">
            Mini Ecommerce is built from the ground up using the latest web
            technologies to ensure optimal performance, scalability, and
            developer experience.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="group transition-all duration-200 hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Code className="text-primary h-6 w-6" />
                  Frontend Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-center gap-2">
                    <Code className="text-primary h-4 w-4" />
                    <span>
                      <strong>Next.js 15</strong> - React framework with App
                      Router
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="text-primary h-4 w-4" />
                    <span>
                      <strong>TypeScript</strong> - Type-safe development
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Palette className="text-primary h-4 w-4" />
                    <span>
                      <strong>Tailwind CSS</strong> - Utility-first styling
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Code className="text-primary h-4 w-4" />
                    <span>
                      <strong>React 19</strong> - Latest React features
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group transition-all duration-200 hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Zap className="text-primary h-6 w-6" />
                  Development Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-center gap-2">
                    <Shield className="text-primary h-4 w-4" />
                    <span>
                      <strong>ESLint</strong> - Code linting and quality
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Palette className="text-primary h-4 w-4" />
                    <span>
                      <strong>Prettier</strong> - Code formatting
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="text-primary h-4 w-4" />
                    <span>
                      <strong>Turbopack</strong> - Fast bundling and builds
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Code className="text-primary h-4 w-4" />
                    <span>
                      <strong>Git</strong> - Version control
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
