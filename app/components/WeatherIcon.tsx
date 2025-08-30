interface WeatherIconProps {
  icon: string
  description: string
  size?: 'small' | 'medium' | 'large'
}

export default function WeatherIcon({ icon, description, size = 'medium' }: WeatherIconProps) {
  const getIconEmoji = (iconCode: string) => {
    // Map OpenWeatherMap icon codes to emojis
    const iconMap: { [key: string]: string } = {
      '01d': '☀️', // clear sky day
      '01n': '🌙', // clear sky night
      '02d': '⛅', // few clouds day
      '02n': '☁️', // few clouds night
      '03d': '☁️', // scattered clouds
      '03n': '☁️', // scattered clouds
      '04d': '☁️', // broken clouds
      '04n': '☁️', // broken clouds
      '09d': '🌧️', // shower rain
      '09n': '🌧️', // shower rain
      '10d': '🌦️', // rain day
      '10n': '🌧️', // rain night
      '11d': '⛈️', // thunderstorm
      '11n': '⛈️', // thunderstorm
      '13d': '❄️', // snow
      '13n': '❄️', // snow
      '50d': '🌫️', // mist
      '50n': '🌫️', // mist
    }
    
    return iconMap[iconCode] || '🌤️'
  }

  const sizeClasses = {
    small: 'text-2xl',
    medium: 'text-4xl',
    large: 'text-6xl'
  }

  return (
    <div className={`${sizeClasses[size]} text-center`} title={description}>
      {getIconEmoji(icon)}
    </div>
  )
}
