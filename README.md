# Canmax - Agriculture Products Website

A modern, responsive React website for Canmax, an agriculture-based company that showcases agricultural products, blog content, and educational resources for farmers.

## Features

- Responsive design optimized for all devices (mobile, tablet, desktop)
- Product catalog with filtering and search capabilities
- Detailed product pages with specifications and usage instructions
- About us section highlighting company values and team
- Contact form with validation
- Modern UI with smooth animations using Framer Motion

## Tech Stack

- **Frontend:** React.js with TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router v7
- **Animation:** Framer Motion
- **UI Components:** Headless UI and Heroicons
- **Build Tool:** Vite

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/canmax.git
cd canmax
```

2. Install dependencies

```bash
npm install
# or
yarn
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
# or
yarn build
```

The build files will be available in the `dist` directory.

## Project Structure

```
canmax/
├── public/          # Static files
├── src/
│   ├── assets/      # Images, fonts, etc.
│   ├── components/  # Reusable components
│   ├── context/     # React Context providers
│   ├── data/        # Mock data and API interfaces
│   ├── pages/       # Page components
│   ├── App.tsx      # Main App component
│   ├── main.tsx     # Entry point
│   └── index.css    # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Future Enhancements

- Backend integration for product data
- User authentication and accounts
- Admin dashboard for content management
- Blog functionality
- Newsletter subscription
- Product reviews and ratings
- E-commerce capabilities with shopping cart

## License

This project is licensed under the ISC License.

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Headless UI](https://headlessui.dev)
- [Heroicons](https://heroicons.com)
