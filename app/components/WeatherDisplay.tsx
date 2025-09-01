import { Card } from './ui/card'
import { CloudDrizzle, Thermometer, Droplets, Wind, Eye, Gauge } from 'lucide-react'
import OutfitDisplay from './OutfitDisplay'

interface WeatherData {
  location: {
    city: string
    country: string
  }
  current: {
    temperature: number
    feels_like: number
    humidity: number
    pressure: number
    wind_speed: number
    wind_direction: number
    description: string
    icon: string
    main: string
  }
  air_quality: {
    aqi: number
    components: any
  } | null
  timestamp: string
}

interface WeatherDisplayProps {
  data: WeatherData
}

export default function WeatherDisplay({ data }: WeatherDisplayProps) {
  const getClothingRecommendation = (temp: number) => {
    if (temp < 10) {
      return {
        image: '/polaire.webp',
        recommendation: 'Dress warmly',
        description: 'Wear a thick coat, scarf, and warm boots'
      };
    } else if (temp > 25) {
      return {
        image: '/polaire.webp',
        recommendation: 'Dress lightly',
        description: 'Perfect weather for t-shirt and shorts'
      };
    } else {
      return {
        image: '/polaire.webp',
        recommendation: 'Layer up',
        description: 'Light sweater or jacket recommended'
      };
    }
  };

  const getAirQualityLabel = (aqi: number) => {
    if (aqi <= 50) return { label: 'Good', color: 'text-green-600' };
    if (aqi <= 100) return { label: 'Moderate', color: 'text-yellow-600' };
    if (aqi <= 150) return { label: 'Unhealthy for Sensitive', color: 'text-orange-600' };
    return { label: 'Unhealthy', color: 'text-red-600' };
  };

  const clothing = getClothingRecommendation(data.current.temperature);
  const airQuality = data.air_quality ? getAirQualityLabel(data.air_quality.aqi) : { label: 'Unknown', color: 'text-muted-foreground' };

  return (
    <div>
      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8 w-full">
        {/* Clothing Recommendation */}
        <Card className="bg-card border overflow-hidden" style={{ boxShadow: 'var(--shadow-weather)' }}>
          <div className="p-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CloudDrizzle className="h-6 w-6" style={{ color: 'hsl(var(--weather-sky))' }} />
              <h2 className="text-xl font-semibold text-foreground">What to Wear</h2>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 mx-auto max-w-xs">
              <OutfitDisplay className="w-full h-full" />
            </div>
            <h3 className="text-lg font-medium text-foreground mb-1">
              {clothing.recommendation}
            </h3>
            <p className="text-muted-foreground">
              {clothing.description}
            </p>
          </div>
        </Card>

        {/* Current Temperature */}
        <Card className="bg-card border" style={{ boxShadow: 'var(--shadow-weather)' }}>
          <div className="p-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Thermometer className="h-8 w-8" style={{ color: 'hsl(var(--weather-sky))' }} />
              <h2 className="text-xl font-semibold text-foreground">Current Temperature</h2>
            </div>
            <div className="text-5xl md:text-6xl font-bold text-foreground mb-2">
              {data.current.temperature}°C
            </div>
            <p className="text-muted-foreground text-lg mb-4 capitalize">
              {data.current.description}
            </p>
            <div className="flex items-center justify-center gap-2" style={{ color: 'hsl(var(--weather-text-light))' }}>
              <Eye className="h-4 w-4" />
              <span>Feels like {data.current.feels_like}°C</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Weather Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <Card className="bg-card border" style={{ boxShadow: 'var(--shadow-card)' }}>
          <div className="p-6 text-center">
            <Droplets className="h-8 w-8 mx-auto mb-3" style={{ color: 'hsl(var(--weather-sky))' }} />
            <div className="text-2xl font-bold text-foreground mb-1">
              {data.current.humidity}%
            </div>
            <p className="text-muted-foreground">Humidity</p>
          </div>
        </Card>

        <Card className="bg-card border" style={{ boxShadow: 'var(--shadow-card)' }}>
          <div className="p-6 text-center">
            <Wind className="h-8 w-8 mx-auto mb-3" style={{ color: 'hsl(var(--weather-sky))' }} />
            <div className="text-2xl font-bold text-foreground mb-1">
              {data.current.wind_speed} km/h
            </div>
            <p className="text-muted-foreground">Wind Speed</p>
          </div>
        </Card>

        <Card className="bg-card border" style={{ boxShadow: 'var(--shadow-card)' }}>
          <div className="p-6 text-center">
            <Gauge className="h-8 w-8 mx-auto mb-3" style={{ color: 'hsl(var(--weather-sky))' }} />
            <div className="text-2xl font-bold text-foreground mb-1">
              {data.air_quality?.aqi || 'N/A'}
            </div>
            <p className={`text-sm ${airQuality.color}`}>
              {airQuality.label}
            </p>
            <p className="text-muted-foreground text-xs">Air Quality</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
