
# Carent - Car Rental Application

A modern, responsive car rental web application built with React, TypeScript, and Tailwind CSS.

## Project Overview

Carent is a sleek car rental platform that allows users to browse, filter, and explore various vehicle categories. The application features a modern UI with responsive design, making it accessible across all devices.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Vehicle Categories**: Browse cars by category (Economy, Luxury, SUV, Sports)
- **Advanced Filtering**: Filter vehicles by category with real-time updates
- **Multi-page Navigation**: Complete navigation structure with Home, Fleet, About, and Contact pages
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Sticky Navigation**: Persistent header with active page highlighting

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router DOM
- **State Management**: React hooks (useState)
- **Icons**: Lucide React
- **Data Fetching**: TanStack Query (React Query)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Homepage hero section
│   ├── FilterSection.tsx # Vehicle category filters
│   ├── FeaturedCars.tsx # Car listing grid
│   └── CarCard.tsx     # Individual car display card
├── pages/              # Application pages
│   ├── Index.tsx       # Homepage
│   ├── Fleet.tsx       # Vehicle fleet page
│   ├── About.tsx       # About us page
│   ├── Contact.tsx     # Contact page
│   └── NotFound.tsx    # 404 error page
├── data/               # Static data
│   └── carData.ts      # Vehicle information
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── App.tsx             # Main application component
```

## Key Components

### Header Component
- Responsive navigation with mobile menu
- Active page highlighting
- Logo and brand identity
- Call-to-action button

### Hero Section
- Eye-catching landing section
- Gradient background
- Compelling copy and imagery

### Filter Section
- Category-based vehicle filtering
- Interactive filter buttons
- Real-time filtering updates

### Car Grid
- Responsive grid layout
- Individual car cards with details
- Category-based filtering

## Pages

1. **Home (/)**: Landing page with hero section and featured vehicles
2. **Fleet (/fleet)**: Complete vehicle inventory with filtering
3. **About (/about)**: Company information and mission
4. **Contact (/contact)**: Contact form and information

## Data Structure

Vehicle data includes:
- Vehicle ID and name
- Category (economy, luxury, suv, sports)
- Pricing information
- Specifications
- Images and descriptions

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Umartrade/Carent.git
   cd Carent
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build application for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## Customization

### Adding New Vehicle Categories
1. Update the category filter options in `FilterSection.tsx`
2. Add new vehicle data to `carData.ts`
3. Ensure proper category filtering in `FeaturedCars.tsx`

### Styling Modifications
- Tailwind CSS classes can be modified throughout components
- Global styles are in `src/index.css`
- Component-specific styles use Tailwind utility classes

### Adding New Pages
1. Create new page component in `src/pages/`
2. Add route to `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

## Deployment

### Lovable Platform
- Click the "Publish" button in the Lovable editor
- Your app will be deployed automatically

### Custom Domain
- Navigate to Project > Settings > Domains in Lovable
- Connect your custom domain (requires paid plan)

### Self-Hosting
- Build the project: `npm run build`
- Deploy the `dist` folder to your hosting provider
- Configure your web server to handle client-side routing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, please visit our [Contact Page](./src/pages/Contact.tsx) or reach out through the application.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
