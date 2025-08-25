import Link from 'next/link';
import { ShoppingCart, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link className="flex items-center space-x-2" href="/">
              <ShoppingCart className="h-6 w-6" />
              <span className="font-bold">One Piece Kart</span>
            </Link>
            <p className="text-muted-foreground mt-4 text-sm">
              Your one-stop shop for One Piece merchandise and collectibles.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link
                target="_blank"
                href="https://github.com/PawanEpisode/mini-ecommerce-FlowAutomate"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/products"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Support</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-muted-foreground hover:text-foreground">
                Contact
              </li>
              <li className="text-muted-foreground hover:text-foreground">
                FAQ
              </li>
              <li className="text-muted-foreground hover:text-foreground">
                Shipping
              </li>
            </ul>
          </div>
        </div>
        <div className="text-muted-foreground mt-8 border-t pt-8 text-center text-sm">
          © {new Date().getFullYear()} One Piece Kart. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
