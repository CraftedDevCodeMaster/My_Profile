/**
 * This script helps set up the project for local development
 * It modifies the necessary environment variables to ensure the app runs locally
 */

const fs = require('fs');
const { execSync } = require('child_process');

console.log('Setting up portfolio website for local development...');

// Check Node.js version
const nodeVersion = process.version;
console.log(`Node.js version: ${nodeVersion}`);
const versionNumber = nodeVersion.replace('v', '').split('.')[0];

if (parseInt(versionNumber) < 16) {
  console.error('Error: Node.js version 16 or higher is required.');
  console.error('Please upgrade Node.js and try again.');
  process.exit(1);
}

// Install dependencies
console.log('\nInstalling dependencies...');
try {
  execSync('npm install', { stdio: 'inherit' });
  console.log('Dependencies installed successfully!');
} catch (error) {
  console.error('Error installing dependencies:', error.message);
  process.exit(1);
}

// Handle specific Replit dependencies
console.log('\nHandling Replit-specific dependencies...');
try {
  // Create an optional dependency resolution for Replit packages
  execSync('npm install --save-dev cross-env', { stdio: 'inherit' });
  console.log('cross-env installed successfully!');
} catch (error) {
  console.error('Error installing cross-env:', error.message);
}

// Set up instructions for running the app
console.log('\n========================================================');
console.log('Setup completed successfully!');
console.log('To run the application in development mode, use:');
console.log('npx cross-env NODE_ENV=development PORT=3000 tsx server/index.ts');
console.log('\nOr use the npm script with PORT environment variable:');
console.log('npx cross-env PORT=3000 npm run dev');
console.log('\nIf port 3000 is already in use, you can specify a different port:');
console.log('npx cross-env NODE_ENV=development PORT=8080 tsx server/index.ts');
console.log('========================================================');

console.log('\nReady to go! Happy coding!');