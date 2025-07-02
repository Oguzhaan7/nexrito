# Nexrito - League of Legends Stats & Information

A modern, high-performance web application built with Next.js 15 that provides comprehensive information about League of Legends champions, items, and summoner statistics with real-time data integration.

## 🚀 Live Demo

**[View Live Application](https://nexrito.vercel.app/)**

## 📊 Technical Overview

- **Performance**: Built with Next.js 15 App Router for optimal performance and SEO
- **Type Safety**: 100% TypeScript coverage with strict mode enabled
- **Caching Strategy**: Intelligent caching with React Query and Next.js ISR
- **API Integration**: Efficient Riot Games API consumption with error handling
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Internationalization**: Multi-language support with client-side translation
- **Modern Architecture**: Component-based design with custom hooks

## Features

- 🎮 **Summoner Search**: Look up summoner profiles with detailed statistics
- 🦸 **Champion Information**: Browse and search through the complete champion roster
- 🛠️ **Item Database**: Access detailed information about in-game items
- 🌐 **Multilingual Support**: Available in multiple languages:
  - English (en_US)
  - German (de_DE)
  - Spanish (es_ES)
  - French (fr_FR)
  - Turkish (tr_TR)
- 🎨 **Modern UI**: Built with Tailwind CSS and custom components
- 🔄 **Real-time Data**: Integration with the Riot Games API

## Tech Stack

### Core

- **Framework**: Next.js 15.1.8 (App Router) - React framework for production
- **Runtime**: React 19 - Latest React with concurrent features
- **Language**: TypeScript 5 - For type-safe code with strict mode
- **Package Manager**: pnpm - Fast, disk space efficient package manager

### Frontend

- **Styling**:
  - Tailwind CSS 3.4.1 - Utility-first CSS framework
  - Tailwind Merge - For efficient class merging
  - Tailwindcss Animate - For smooth animations
  - Class Variance Authority - For component variants
  - Shadcn/ui - Re-usable components built with Radix UI and Tailwind
- **UI Components**:
  - @radix-ui/react-dropdown-menu - Accessible dropdown menus
  - @radix-ui/react-navigation-menu - Navigation components
  - @radix-ui/react-popover - Popover components
  - @radix-ui/react-tabs - Tab components
  - Lucide React - Beautiful icon library
- **State Management**:
  - @tanstack/react-query 5.77.2 - Server state management and caching
  - React Context - Global state management
  - js-cookie - Cookie management for user preferences
- **Internationalization**:
  - Custom i18n implementation with JSON files
  - Language switcher with SVG flags

### API Integration

- **Riot Games API** - For League of Legends data
  - Champion information
  - Summoner statistics
  - Match history
  - Item database
- **DataDragon CDN** - For game assets and static data

### Development Tools

- **ESLint** - For code linting
- **TypeScript** - For static type checking
- **PostCSS** - For processing Tailwind CSS
- **next-env** - For environment type declarations

### Architecture & Performance

- **App Router**: Next.js 15 App Router for enhanced performance
- **Static Generation**: ISR for champion and item data
- **Server Components**: Leverage React Server Components
- **Streaming**: React 19 concurrent features for better UX
- **Bundle Optimization**: Tree shaking and code splitting
- **Image Optimization**: Next.js Image component with WebP support
- **API Routes**: Edge Runtime for faster response times
- **Caching Strategy**: 
  - React Query for client-side caching
  - Next.js ISR for static data
  - HTTP cache headers for CDN optimization

### File Structure

- Next.js 13+ App Router structure
- Component-based architecture
- Type-safe API routes
- Modular styling with Tailwind
- Organized by feature folders

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm
- Riot Games API Key

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd nexrito
```

2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env` file in the root directory with the following variables:

```env
RIOT_API_KEY=your-api-key
RIOT_REGION=europe
BASE_URL=api.riotgames.com
NEXT_PUBLIC_DATADRAGON_URL=https://ddragon.leagueoflegends.com/cdn
NEXT_PUBLIC_VERSION=15.10.1
```

4. Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

- `/app` - Next.js application routes and API endpoints
- `/components` - Reusable React components
  - `/champion` - Champion-related components
  - `/layout` - Layout components (Footer, Menu)
  - `/main` - Main components (Search, Wallpaper)
  - `/providers` - Context providers
  - `/ui` - UI components (buttons, dropdowns, etc.)
- `/hooks` - Custom React hooks
- `/lib` - Utility functions and API handlers
- `/locales` - Language translation files
- `/public` - Static assets
- `/styles` - Global styles
- `/types` - TypeScript type definitions

## Features in Detail

### Summoner Search

- Search for summoners by name and tag
- View detailed summoner statistics
- Access match history and performance data

### Champion Information

- Browse complete champion roster
- View champion statistics and abilities
- Check champion tiers and meta information

### Item Database

- Access comprehensive item information
- View item statistics and build paths
- Filter items by categories

### Multilingual Support

- Switch between different languages
- Fully localized interface
- Language-specific assets and content

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - See LICENSE file for details
