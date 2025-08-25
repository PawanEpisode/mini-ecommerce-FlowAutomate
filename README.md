# Mini Ecommerce

A modern, fast, and beautiful e-commerce platform built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

### Core E-commerce Functionality

- 🛒 **Shopping Cart System** - Full cart management with persistent storage
- 🔍 **Advanced Search & Filtering** - Real-time search with category and price filters
- 📦 **Product Catalog** - Dynamic product grid with loading states and error handling
- 💳 **Order Management** - Cart summary with tax calculation and checkout preparation
- 🔗 **URL State Management** - Filter persistence through browser navigation

### Technical Excellence

- ⚡ **Lightning Fast** - Built with Next.js 15 and Turbopack for optimal performance
- 🎨 **Beautiful Design** - Modern UI with Tailwind CSS and custom components
- 🔒 **Type Safe** - Full TypeScript support for better developer experience
- 📱 **Responsive** - Mobile-first design with drawer navigation and touch controls
- 🛠️ **Developer Experience** - ESLint, Prettier, and modern tooling
- 🌙 **Dark Mode** - Built-in dark mode support
- ♿ **Accessibility** - ARIA-compliant components with keyboard navigation
- 🎯 **Performance Optimized** - Debounced search, lazy loading, and efficient state management

## 🛠️ Tech Stack

### Core Framework

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Runtime:** React 19.1.0
- **Development:** Turbopack for fast builds

### Styling & UI

- **Styling:** Tailwind CSS v4
- **UI Components:** Custom components with Radix UI primitives
- **Icons:** Lucide React
- **Animations:** Custom Tailwind animations
- **Themes:** Next-themes for dark mode support
- **Fonts:** Inter (Google Fonts)

### State Management

- **Cart State:** React Context with localStorage persistence
- **URL State:** Next.js search params with custom hooks
- **Filter State:** Real-time updates with debounced search

### Utility Libraries

- **Class Management:** clsx + tailwind-merge
- **Component Variants:** class-variance-authority
- **Drawer/Modal:** Vaul + Radix UI Dialog
- **Accessibility:** Full ARIA support with keyboard navigation

### Code Quality

- **Linting:** ESLint + TypeScript ESLint
- **Formatting:** Prettier with Tailwind CSS plugin
- **Type Safety:** Strict TypeScript configuration

## 📦 Project Structure

```
mini-ecommerce/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── about/             # About page
│   │   ├── cart/              # Shopping cart page with full functionality
│   │   ├── products/          # Products catalog with filtering
│   │   │   └── [id]/          # Individual product pages
│   │   ├── layout.tsx         # Root layout with cart provider
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── Button.tsx     # Versatile button component
│   │   │   ├── Card.tsx       # Container component
│   │   │   ├── Input.tsx      # Form input component
│   │   │   ├── Select.tsx     # Select dropdown component
│   │   │   ├── CustomDropdown.tsx  # Advanced dropdown with keyboard nav
│   │   │   ├── drawer.tsx     # Mobile drawer component
│   │   │   └── index.ts       # Component exports
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.tsx     # Navigation header
│   │   │   ├── Footer.tsx     # Site footer with branding
│   │   │   └── index.ts
│   │   ├── ActiveFiltersIndicator.tsx  # Shows active filters
│   │   ├── FilterControls.tsx          # Reusable filter interface
│   │   ├── ProductActions.tsx          # Product interaction buttons
│   │   ├── ProductFilters.tsx          # Advanced filtering system
│   │   ├── ProductGrid.tsx             # Responsive product grid
│   │   ├── SearchInput.tsx             # Search input with clear button
│   │   ├── theme-provider.tsx          # Dark mode provider
│   │   └── theme-toggle.tsx            # Dark mode toggle
│   ├── contexts/              # React contexts
│   │   └── CartContext.tsx    # Cart state management
│   ├── hooks/                 # Custom React hooks
│   │   ├── useCart.ts         # Cart operations hook
│   │   ├── useDebounce.ts     # Debounce utility hook
│   │   ├── useLocalStorage.ts # LocalStorage hook
│   │   └── useSearchParams.ts # URL state management hook
│   ├── lib/                   # Utility functions
│   │   ├── api.ts             # External API functions
│   │   ├── productUtils.ts    # Product filtering and sorting
│   │   └── utils.ts           # General utilities
│   ├── types/                 # TypeScript type definitions
│   │   └── index.ts           # All type definitions
│   └── constants/             # App constants
│       └── index.ts           # Configuration constants
├── public/                    # Static assets
│   └── cart.svg              # Cart icon
├── CHANGELOG.md              # Detailed change documentation
├── components.json           # Shadcn/ui configuration
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts            # Next.js configuration
├── postcss.config.mjs        # PostCSS configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17+ (recommended: use the latest LTS version)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd mini-ecommerce
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:9999](http://localhost:9999) in your browser.

## 📜 Available Scripts

| Script                 | Description                             |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Start development server with Turbopack |
| `npm run build`        | Build the application for production    |
| `npm run start`        | Start the production server             |
| `npm run lint`         | Run ESLint to check for code issues     |
| `npm run lint:fix`     | Run ESLint and automatically fix issues |
| `npm run format`       | Format code with Prettier               |
| `npm run format:check` | Check if code is properly formatted     |
| `npm run type-check`   | Run TypeScript compiler to check types  |

## 🎨 Styling

This project uses Tailwind CSS v4 with a custom design system:

- **Colors:** Custom color palette with dark mode support
- **Typography:** Inter font for optimal readability
- **Components:** Utility-first approach with reusable components
- **Responsive:** Mobile-first design principles

### Color System

The application uses a semantic color system:

- `background` / `foreground` - Main background and text colors
- `primary` / `primary-foreground` - Primary brand colors
- `secondary` / `secondary-foreground` - Secondary colors
- `muted` / `muted-foreground` - Subtle background and text
- `accent` / `accent-foreground` - Accent colors for highlights
- `destructive` / `destructive-foreground` - Error and danger states

## 🧩 Components

### UI Components

- **Button** - Flexible button component with multiple variants and sizes
- **Card** - Container component with header, content, and footer sections
- **Input** - Form input component with consistent styling
- **CustomDropdown** - Advanced dropdown with keyboard navigation and accessibility
- **Drawer** - Mobile-first drawer component for overlays and navigation
- **Select** - Basic select dropdown component

### Feature Components

- **ProductGrid** - Responsive product display with loading and error states
- **ProductFilters** - Advanced filtering system with search, category, and sort
- **FilterControls** - Reusable filter interface for desktop and mobile
- **SearchInput** - Search input with integrated clear functionality
- **ActiveFiltersIndicator** - Shows applied filters with clear option
- **ProductActions** - Add to cart and product interaction buttons

### Layout Components

- **Header** - Navigation header with cart integration and responsive design
- **Footer** - Site footer with "One Piece Kart" branding and links
- **ThemeProvider** - Dark mode state management
- **ThemeToggle** - Dark/light mode switcher

### Cart System

- **CartContext** - Global cart state management with persistence
- **CartProvider** - Context provider with localStorage integration
- **useCart Hook** - Simple interface for cart operations

All components are built with:

- **TypeScript** for complete type safety
- **Accessibility** features with ARIA support and keyboard navigation
- **Responsive Design** with mobile-first approach
- **Performance Optimization** with React.memo and useCallback
- **Consistent API** design across all components
- **Error Handling** and loading states
- **Dark Mode Support** throughout

## 🔧 Configuration

### ESLint

The project uses a modern ESLint configuration with:

- Next.js recommended rules
- TypeScript support
- React best practices
- Custom rules for code quality

### Prettier

Code formatting is handled by Prettier with:

- Tailwind CSS class sorting
- Consistent code style
- Automatic formatting on save

### TypeScript

Strict TypeScript configuration for:

- Type safety
- Better IntelliSense
- Compile-time error catching

## 🛒 E-commerce Features

### Shopping Cart

- **Persistent Storage**: Cart items are saved in localStorage and persist across sessions
- **Quantity Management**: Increment/decrement quantities with intuitive controls
- **Item Management**: Easy removal of individual items or clearing entire cart
- **Order Summary**: Real-time calculations including subtotal, tax (8%), and free shipping
- **Responsive Design**: Optimized cart experience on all devices

### Product Filtering & Search

- **Real-time Search**: Debounced search input with instant results (300ms delay)
- **Category Filtering**: Dynamic category loading from API with "All" option
- **Advanced Sorting**: Multiple sort options including price, title, and default order
- **URL Persistence**: Filters and search queries persist in URL for shareable links
- **Mobile Optimization**: Drawer-based filters for mobile devices with touch-friendly controls

### User Experience

- **Loading States**: Skeleton loaders and loading indicators throughout
- **Error Handling**: Comprehensive error states with retry functionality
- **Empty States**: Helpful messaging for empty cart and no search results
- **Responsive Navigation**: Mobile-first navigation with cart integration
- **Dark Mode**: Complete dark mode support across all components

### Performance Features

- **Debounced Search**: Prevents excessive API calls during typing
- **Lazy Loading**: Components load efficiently with code splitting
- **Optimized Renders**: React.memo and useCallback for performance
- **Local Storage**: Efficient persistence without external dependencies

## 🚀 Deployment

The easiest way to deploy this application is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/PawanEpisode/mini-ecommerce-FlowAutomate)

You can also deploy to other platforms like:

- [Netlify](https://netlify.com)
- [Railway](https://railway.app)
- [Digital Ocean App Platform](https://www.digitalocean.com/products/app-platform)

**Note**: The development server runs on port `9999` to avoid conflicts with other local services.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

### Core Technologies

- [Next.js](https://nextjs.org) - React framework for production
- [React](https://reactjs.org) - UI library
- [TypeScript](https://typescriptlang.org) - Type safety and developer experience
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework

### UI & UX Libraries

- [Radix UI](https://radix-ui.com) - Accessible component primitives
- [Lucide React](https://lucide.dev) - Beautiful icon library
- [Vaul](https://vaul.dev) - Drawer component for mobile interfaces
- [Next Themes](https://github.com/pacocoursey/next-themes) - Dark mode implementation

### Development Tools

- [ESLint](https://eslint.org) - Code linting
- [Prettier](https://prettier.io) - Code formatting
- [Turbopack](https://turbo.build/pack) - Fast build tool

### External Services

- [Fake Store API](https://fakestoreapi.com) - Product data for demonstration
- [Vercel](https://vercel.com) - Deployment platform

---

**One Piece Kart** - Built with ❤️ using modern web technologies.

_A comprehensive e-commerce platform showcasing the power of Next.js 15, React 19, and modern web development practices._
