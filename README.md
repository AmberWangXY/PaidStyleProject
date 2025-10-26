# PaidStyle Project

A modern, responsive frontend website built with React and Chakra UI, featuring internationalization support.

## Features

- **Multi-language Support**: English, Spanish, and French with i18n
- **Responsive Design**: Mobile-first approach with Chakra UI
- **Modern UI**: Clean, professional design with smooth animations
- **Navigation**: Header with language switcher and mobile menu
- **Pages**: Homepage, Story, Collection, and Contact pages

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with language switcher
│   ├── Footer.js          # Footer with social links
│   └── Layout.js          # Shared layout wrapper
├── pages/
│   ├── HomePage.js        # Landing page with hero section
│   ├── StoryPage.js       # Company story and values
│   ├── CollectionPage.js  # Product showcase with filters
│   └── ContactPage.js     # Contact form and information
├── locales/
│   ├── en.json           # English translations
│   ├── es.json           # Spanish translations
│   └── fr.json           # French translations
├── i18n.js               # i18n configuration
├── App.js                # Main app with routing
└── index.js              # Entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Technologies Used

- **React 18** - Frontend library
- **Chakra UI** - Component library for styling
- **React Router** - Client-side routing
- **i18next** - Internationalization framework
- **React Icons** - Icon library
- **Framer Motion** - Animation library (via Chakra UI)

## Features Overview

### Homepage
- Hero section with call-to-action
- Feature highlights
- Responsive design

### Story Page
- Company timeline
- Mission and values
- Interactive elements

### Collection Page
- Product grid with filtering
- Search functionality
- Product cards with ratings

### Contact Page
- Contact form with validation
- Company information
- FAQ section

### Language Support
- English (default)
- Spanish
- French
- Easy language switching in header

## Customization

### Adding New Languages

1. Create a new translation file in `src/locales/` (e.g., `de.json` for German)
2. Add the language to the resources object in `src/i18n.js`
3. Add the language option to the Header component's language menu

### Styling

The project uses Chakra UI's theme system. You can customize colors, fonts, and other design tokens by creating a custom theme.

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route to `src/App.js`
3. Add navigation link to `src/components/Header.js`
4. Add translations to all language files in `src/locales/`

## Deployment

The project can be deployed to any static hosting service:

1. Run `npm run build`
2. Deploy the `build` folder to your hosting service

## License

This project is private and proprietary.
