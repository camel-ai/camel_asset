#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npx gh-pages -d out

echo "Deployment complete!"
echo "Your site should be available at: https://camel-ai.github.io/camel_asset/" 