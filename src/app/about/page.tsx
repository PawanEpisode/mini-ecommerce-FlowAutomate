import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

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
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To create a seamless, fast, and beautiful e-commerce experience
                that empowers both businesses and customers. We believe in
                leveraging cutting-edge technology to solve real-world problems.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2">
                <li>• Innovation through modern technology</li>
                <li>• User-centric design and experience</li>
                <li>• Performance and reliability first</li>
                <li>• Transparency and trust</li>
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
            <div>
              <h3 className="mb-3 text-xl font-semibold">
                Frontend Technologies
              </h3>
              <ul className="text-muted-foreground space-y-1">
                <li>
                  • <strong>Next.js 15</strong> - React framework with App
                  Router
                </li>
                <li>
                  • <strong>TypeScript</strong> - Type-safe development
                </li>
                <li>
                  • <strong>Tailwind CSS</strong> - Utility-first styling
                </li>
                <li>
                  • <strong>React 19</strong> - Latest React features
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold">Development Tools</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>
                  • <strong>ESLint</strong> - Code linting and quality
                </li>
                <li>
                  • <strong>Prettier</strong> - Code formatting
                </li>
                <li>
                  • <strong>Turbopack</strong> - Fast bundling and builds
                </li>
                <li>
                  • <strong>Git</strong> - Version control
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
