# Weather Forecast - Lyon

A beautiful weather forecast website for Lyon, France that displays current weather conditions, air quality, and clothing recommendations.

## Features

- 🌤️ **Current Weather**: Real-time temperature, humidity, wind speed, and weather description
- 🎯 **Air Quality**: Air quality index with detailed pollutant information
- 👕 **Clothing Recommendations**: Smart suggestions based on temperature and weather conditions
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Beautiful gradient backgrounds with glassmorphism cards
- ⚡ **Fast Loading**: Optimized for performance with Next.js 14

## Weather Icons

The website displays appropriate weather icons for:
- ☀️ Sunny/Clear sky
- ⛅ Partly cloudy
- ☁️ Cloudy
- 🌧️ Rainy
- ⛈️ Thunderstorm
- ❄️ Snowy
- 🌫️ Misty/Foggy

## Clothing Recommendations

Smart clothing suggestions based on temperature and weather:
- **25°C+**: T-shirt 👕
- **20-24°C**: Light jacket 🧥
- **15-19°C**: Jacket 🧥
- **10-14°C**: Sweater 🧶
- **7-9°C**: Coat 🧥
- **Below 7°C**: Winter coat 🧥
- **Rain**: Raincoat 🌂
- **Snow**: Winter coat 🧥

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **API**: OpenWeatherMap API
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd weather-forecast-lyon
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```env
OPENWEATHER_API_KEY=your_openweather_api_key_here
```

**Important**: Replace `your_openweather_api_key_here` with your actual OpenWeatherMap API key.

### 4. Get OpenWeatherMap API Key

1. Go to [OpenWeatherMap](https://openweathermap.org/)
2. Sign up for a free account
3. Navigate to "My API keys" section
4. Copy your API key
5. Paste it in the `.env.local` file

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Build for Production

```bash
npm run build
npm start
```

## API Endpoints

- `GET /api/weather` - Fetches current weather and air quality data for Lyon

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENWEATHER_API_KEY` | Your OpenWeatherMap API key | Yes |

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Add environment variables in Netlify dashboard
4. Deploy automatically

### Custom Domain

To use `weather.thomasjay.fr`:

1. Configure your domain's DNS settings
2. Point to your hosting provider
3. Add SSL certificate
4. Update environment variables if needed

## Project Structure

```
├── app/
│   ├── api/
│   │   └── weather/
│   │       └── route.ts          # Weather API endpoint
│   ├── components/
│   │   ├── AirQualityIndicator.tsx
│   │   ├── ClothingIcon.tsx
│   │   ├── ErrorMessage.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── WeatherDisplay.tsx
│   │   └── WeatherIcon.tsx
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main page
├── .env.local                    # Environment variables (create this)
├── .gitignore                    # Git ignore rules
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies and scripts
├── README.md                     # This file
├── tailwind.config.js            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues:

1. Check the console for error messages
2. Verify your API key is correct
3. Ensure all dependencies are installed
4. Check the OpenWeatherMap API status

## Weather Data Source

This application uses the [OpenWeatherMap API](https://openweathermap.org/api) to provide accurate weather information for Lyon, France.

---

**Note**: Make sure to keep your API key secure and never commit it to version control. The `.env.local` file is already included in `.gitignore`.
