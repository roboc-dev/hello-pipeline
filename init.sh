#!/bin/bash
echo "Installing dependencies..."
npm install

echo "Starting local server..."
npm run dev &

echo "Waiting for server to be ready..."
npx wait-on http://localhost:3000 --timeout 30000

echo "Environment ready."