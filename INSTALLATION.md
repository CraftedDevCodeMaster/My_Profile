# Detailed Installation Guide

This guide will help you set up and run the portfolio website on your local machine after downloading it as a zip file.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- Node.js (version 16 or higher)
- npm (comes with Node.js)

## Step-by-Step Installation

### 1. Extract the Zip File

Extract the downloaded zip file to a directory of your choice.

### 2. Run the Setup Script

Open a terminal/command prompt, navigate to the project directory, and run:

```bash
node local-setup.js
```

This script will:
- Check if you have the correct Node.js version
- Install all required dependencies
- Set up the local environment

### 3. Start the Development Server

After the setup is complete, start the development server:

```bash
npx cross-env NODE_ENV=development PORT=3000 tsx server/index.ts
```

Or use the npm script with PORT environment variable:

```bash
npx cross-env PORT=3000 npm run dev
```

### 4. Access the Website

Open your browser and navigate to:

```
http://localhost:3000
```

### 5. Verify All Features

After launching the website, verify that all features are working correctly:

- Check that the animations work properly
- Test the contact form functionality
- Verify the responsive layout on different screen sizes
- Make sure dark/light mode toggle works

## Troubleshooting

### Issue: Missing Modules or Dependencies

If you encounter errors about missing modules, try:

```bash
npm install
```

### Issue: Port Already in Use

If port 3000 is already in use, you can change the port by setting the PORT environment variable:

```bash
npx cross-env NODE_ENV=development PORT=8000 tsx server/index.ts
```

Then access the site at `http://localhost:8000`

### Issue: TypeScript Errors

If you encounter TypeScript errors, try:

```bash
npm run check
```

### Build for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npx cross-env NODE_ENV=production node dist/index.js
```

## Additional Information

- The site uses Tailwind CSS for styling
- Animations are handled by Framer Motion
- UI components are from shadcn/ui library

For any other issues or questions, refer to the README.md file or contact me directly at praveenkumarr200025@gmail.com.