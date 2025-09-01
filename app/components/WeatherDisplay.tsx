import WeatherIcon from './WeatherIcon'
import ClothingIcon from './ClothingIcon'
import AirQualityIndicator from './AirQualityIndicator'
import Image from 'next/image'
import { Droplets, Wind, Gauge } from 'lucide-react'

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
  const getClothingRecommendation = (temp: number, weather: string) => {
    if (temp >= 25) return 't-shirt'
    if (temp >= 20) return 'light-jacket'
    if (temp >= 15) return 'jacket'
    if (temp >= 10) return 'sweater'
    if (temp >= 7) return 'coat'
    if (weather.toLowerCase().includes('rain')) return 'raincoat'
    if (weather.toLowerCase().includes('snow')) return 'winter-coat'
    return 'winter-coat'
  }

  const clothingType = getClothingRecommendation(data.current.temperature, data.current.main)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left: What to Wear */}
      <div className="rounded-3xl bg-white shadow-[0_2px_30px_rgba(0,0,0,0.06)] p-6">
        <div className="flex items-center gap-2 text-neutral-900 font-semibold mb-4">
          <span className="text-blue-600">💡</span>
          What to Wear
        </div>
        <div className="rounded-2xl overflow-hidden bg-neutral-100 mb-5 aspect-[4/3] relative">
          <Image src="/outfit.jpg" alt="Recommended outfit" fill className="object-cover" />
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold text-neutral-900 mb-1">
            {clothingType === 't-shirt' ? 'T‑shirt' : clothingType.replace('-', ' ')}
          </div>
          <p className="text-neutral-500">
            {data.current.temperature <= 10 ? 'Layer up' : data.current.temperature >= 25 ? 'Dress light' : 'Light sweater or jacket recommended'}
          </p>
        </div>
      </div>

      {/* Right: Current Temperature */}
      <div className="rounded-3xl bg-white shadow-[0_2px_30px_rgba(0,0,0,0.06)] p-6">
        <div className="flex items-center gap-2 text-neutral-900 font-semibold mb-4">
          <span className="text-blue-600">🌡️</span>
          Current Temperature
        </div>
        <div className="flex flex-col items-center justify-center py-6">
          <div className="text-6xl md:text-7xl font-extrabold text-neutral-900">
            {data.current.temperature}°C
          </div>
          <div className="mt-2 text-neutral-500 capitalize">{data.current.description}</div>
          <div className="mt-2 text-neutral-400 text-sm">Feels like {data.current.feels_like}°C</div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="rounded-3xl bg-white shadow-[0_2px_30px_rgba(0,0,0,0.06)] p-6">
        <div className="flex items-center gap-3 text-blue-600"><Droplets />
          <div>
            <div className="text-2xl font-bold text-neutral-900">{data.current.humidity}%</div>
            <div className="text-neutral-500 text-sm">Humidity</div>
          </div>
        </div>
      </div>
      <div className="rounded-3xl bg-white shadow-[0_2px_30px_rgba(0,0,0,0.06)] p-6">
        <div className="flex items-center gap-3 text-blue-600"><Wind />
          <div>
            <div className="text-2xl font-bold text-neutral-900">{data.current.wind_speed} km/h</div>
            <div className="text-neutral-500 text-sm">Wind Speed</div>
          </div>
        </div>
      </div>
      <div className="rounded-3xl bg-white shadow-[0_2px_30px_rgba(0,0,0,0.06)] p-6">
        {data.air_quality ? (
          <div className="flex items-center gap-3 text-blue-600"><Gauge />
            <div>
              <div className="text-2xl font-bold text-neutral-900">{data.air_quality.aqi}</div>
              <div className="text-green-600 text-sm font-medium">
                <AirQualityIndicator aqi={data.air_quality.aqi} />
              </div>
              <div className="text-neutral-500 text-sm">Air Quality</div>
            </div>
          </div>
        ) : (
          <div className="text-neutral-500">Air quality data unavailable</div>
        )}
      </div>
    </div>
  )
}
