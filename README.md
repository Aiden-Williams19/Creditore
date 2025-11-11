<<<<<<< HEAD
# Creditore
=======
# Creditoré - Debt Review Website

A modern, professional website for Creditoré, a South African Debt Review company. Built with React and designed to communicate trust, empathy, and professionalism while guiding users through the Debt Review process.

## Features

- **Home Page**: Hero section with call-to-action, callback form, about preview, core values, and testimonials
- **How It Works**: Step-by-step guide to the Debt Review process
- **FAQ Page**: Frequently asked questions with accordion interface
- **Contact Page**: Contact form with company details and Google Maps integration
- **Responsive Design**: Fully responsive and mobile-friendly
- **Modern UI**: Clean, professional design with calming color palette

## Tech Stack

- React 18
- React Router DOM
- Vite
- CSS3 (Custom CSS with CSS Variables)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
Creditore/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── CallbackForm.jsx
│   │   ├── CallbackForm.css
│   │   ├── TestimonialCarousel.jsx
│   │   └── TestimonialCarousel.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── HowItWorks.jsx
│   │   ├── HowItWorks.css
│   │   ├── FAQ.jsx
│   │   ├── FAQ.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Colors

The color scheme is defined in `src/index.css` using CSS variables:

- `--primary-blue`: Main brand color
- `--primary-blue-light`: Lighter shade for accents
- `--primary-blue-dark`: Darker shade for hover states
- `--secondary-grey`: Secondary text color
- `--light-grey`: Background color
- `--dark-grey`: Footer background

### Contact Information

Update contact details in:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

### Google Maps

Update the Google Maps embed URL in `src/pages/Contact.jsx` with the actual coordinates for Punters Way, Kenilworth.

### Forms

Currently, forms log to the console. To connect to a backend:
1. Update form submission handlers in `CallbackForm.jsx` and `Contact.jsx`
2. Add API endpoints for form submissions
3. Implement proper error handling and validation

## License

This project is proprietary and confidential.

## Contact

Creditoré
- Phone: 021 569 6571
- Email: info@creditore.co.za
- Address: Punters Way, Kenilworth

>>>>>>> 805708c (Add Creditoré website first draft)
