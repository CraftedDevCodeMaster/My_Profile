# Praveen Kumar R - Portfolio Website

A responsive portfolio website built with React, TypeScript, and Tailwind CSS showcasing my experience as a software engineer specializing in payments, mandates, and bank API integration.

## Features

- Clean, minimalist design with smooth animations
- Dark/light mode toggle
- Responsive layout for all device sizes
- Interactive elements and modern UI components
- Contact form to get in touch

## Run Locally

Follow these steps to run the project on your local machine after downloading the zip file:

### Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)

### Installation

1. Extract the zip file to a directory of your choice
2. Open a terminal/command prompt and navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Development Server

To start the development server:

```bash
npx cross-env NODE_ENV=development PORT=3000 tsx server/index.ts
```

Or you can use the npm script with the PORT environment variable:

```bash
npx cross-env PORT=3000 npm run dev
```

The application should now be running at [http://localhost:3000](http://localhost:3000)

**Note:** If port 3000 is already in use on your system, you can choose a different port:

```bash
npx cross-env NODE_ENV=development PORT=8080 tsx server/index.ts
```

Then access the site at http://localhost:8080

### Building for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npx cross-env NODE_ENV=production node dist/index.js
```

Or you can use the npm script:

```bash
npm run start
```

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
- **UI Components**: ShadcnUI
- **Backend**: Express.js
- **Build Tools**: Vite, ESBuild

## Contact

For any questions or inquiries, please reach out to me at:

- Email: praveenkumarr200025@gmail.com
- LinkedIn: [linkedin.com/in/praveenkumar-r123](https://linkedin.com/in/praveenkumar-r123)
- GitHub: [github.com/CraftedDevCodeMaster](https://github.com/CraftedDevCodeMaster)