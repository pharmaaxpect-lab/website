# Axpect Pharma Website

This is the front-end repository for the official Axpect Pharma website, showcasing our ethical pharmaceutical operations, product catalogue, and corporate certifications.

## Tech Stack
- React 19
- React Router v7
- Tailwind CSS v4
- Vite
- TypeScript

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser.

## Routing Information
This application uses client-side routing. If deployed to an Apache server, ensure the `public/.htaccess` file is served to redirect routes correctly. For Nginx, use `try_files $uri $uri/ /index.html;`.
