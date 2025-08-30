#!/bin/bash

echo "🌤️  Weather Forecast - Lyon Setup Script"
echo "=========================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "⚠️  .env.local file not found. Creating template..."
    echo "OPENWEATHER_API_KEY=your_api_key_here" > .env.local
    echo "📝 Please edit .env.local and add your OpenWeatherMap API key"
    echo "   Get your API key from: https://openweathermap.org/api"
else
    echo "✅ .env.local file found"
fi

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🚀 To start the development server:"
    echo "   npm run dev"
    echo ""
    echo "🌐 Open http://localhost:3000 in your browser"
    echo ""
    echo "📚 For deployment instructions, see DEPLOYMENT.md"
else
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi
