import WeatherIcon from './WeatherIcon'
import ClothingIcon from './ClothingIcon'
import AirQualityIndicator from './AirQualityIndicator'

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
      {/* Main Weather Card */}
      <div className="weather-card p-6 text-center">
        <div className="mb-4">
          <WeatherIcon 
            icon={data.current.icon} 
            description={data.current.description}
            size="large"
          />
        </div>
        
        <div className="mb-4">
          <div className="text-6xl font-bold text-gray-800 mb-2">
            {data.current.temperature}°C
          </div>
          <div className="text-xl text-gray-600 mb-1">
            Feels like {data.current.feels_like}°C
          </div>
          <div className="text-lg text-gray-700 capitalize">
            {data.current.description}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-gray-500">Humidity</div>
            <div className="font-semibold">{data.current.humidity}%</div>
          </div>
          <div>
            <div className="text-gray-500">Wind</div>
            <div className="font-semibold">{data.current.wind_speed} km/h</div>
          </div>
        </div>
      </div>

      {/* Clothing Recommendation Card */}
      <div className="weather-card p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          What to Wear
        </h3>
        
        <div className="mb-4">
          <ClothingIcon type={clothingType} size="large" />
        </div>
        
        <div className="text-lg font-medium text-gray-700 capitalize">
          {clothingType.replace('-', ' ')}
        </div>
        
        <div className="mt-4 text-sm text-gray-600">
          <p>Temperature: {data.current.temperature}°C</p>
          <p>Weather: {data.current.main}</p>
        </div>
      </div>

      {/* Air Quality Card */}
      {data.air_quality && (
        <div className="weather-card p-6 md:col-span-2">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Air Quality
          </h3>
          
          <div className="flex items-center justify-center mb-4">
            <AirQualityIndicator aqi={data.air_quality.aqi} />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="text-gray-500">PM2.5</div>
              <div className="font-semibold">{data.air_quality.components.pm2_5} µg/m³</div>
            </div>
            <div className="text-center">
              <div className="text-gray-500">PM10</div>
              <div className="font-semibold">{data.air_quality.components.pm10} µg/m³</div>
            </div>
            <div className="text-center">
              <div className="text-gray-500">NO₂</div>
              <div className="font-semibold">{data.air_quality.components.no2} µg/m³</div>
            </div>
            <div className="text-center">
              <div className="text-gray-500">O₃</div>
              <div className="font-semibold">{data.air_quality.components.o3} µg/m³</div>
            </div>
          </div>
        </div>
      )}

      {/* Additional Weather Details */}
      <div className="weather-card p-6 md:col-span-2">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Additional Details
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="text-center">
            <div className="text-gray-500">Pressure</div>
            <div className="font-semibold">{data.current.pressure} hPa</div>
          </div>
          <div className="text-center">
            <div className="text-gray-500">Wind Direction</div>
            <div className="font-semibold">{data.current.wind_direction}°</div>
          </div>
          <div className="text-center">
            <div className="text-gray-500">Last Updated</div>
            <div className="font-semibold">
              {new Date(data.timestamp).toLocaleTimeString()}
            </div>
          </div>
          <div className="text-center">
            <div className="text-gray-500">Location</div>
            <div className="font-semibold">{data.location.city}, {data.location.country}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
