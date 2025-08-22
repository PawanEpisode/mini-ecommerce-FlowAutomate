# Mini Ecommerce

A modern, fast, and beautiful e-commerce platform built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡ **Lightning Fast** - Built with Next.js 15 and Turbopack for optimal performance
- 🎨 **Beautiful Design** - Modern UI with Tailwind CSS and custom components
- 🔒 **Type Safe** - Full TypeScript support for better developer experience
- 📱 **Responsive** - Mobile-first design that works on all devices
- 🛠️ **Developer Experience** - ESLint, Prettier, and modern tooling
- 🌙 **Dark Mode** - Built-in dark mode support

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Custom components with Radix-like API
- **Code Quality:** ESLint + Prettier
- **Fonts:** Inter (Google Fonts)
- **Development:** Turbopack for fast builds

## 📦 Project Structure

```
mini-ecommerce/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── about/             # About page
│   │   ├── products/          # Products page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── index.ts
│   │   └── layout/            # Layout components
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       └── index.ts
│   ├── hooks/                 # Custom React hooks
│   │   └── useLocalStorage.ts
│   ├── lib/                   # Utility functions
│   │   └── utils.ts
│   ├── types/                 # TypeScript type definitions
│   │   └── index.ts
│   └── constants/             # App constants
│       └── index.ts
├── public/                    # Static assets
├── .prettierrc.json          # Prettier configuration
├── .prettierignore           # Prettier ignore file
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts            # Next.js configuration
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

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

- **Button** - Flexible button component with multiple variants
- **Card** - Container component for content sections

All components are built with:

- TypeScript for type safety
- Forwardable refs for flexibility
- Consistent API design
- Full accessibility support

### Layout Components

- **Header** - Navigation header with responsive design
- **Footer** - Site footer with links and information

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

## 🚀 Deployment

The easiest way to deploy this application is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/mini-ecommerce)

You can also deploy to other platforms like:

- [Netlify](https://netlify.com)
- [Railway](https://railway.app)
- [Digital Ocean App Platform](https://www.digitalocean.com/products/app-platform)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) - React framework
- [Tailwind CSS](https://tailwindcss.com) - CSS framework
- [TypeScript](https://typescriptlang.org) - Type safety
- [Vercel](https://vercel.com) - Deployment platform

---

Built with ❤️ using modern web technologies.
