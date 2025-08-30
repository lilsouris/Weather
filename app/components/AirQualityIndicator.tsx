interface AirQualityIndicatorProps {
  aqi: number
}

export default function AirQualityIndicator({ aqi }: AirQualityIndicatorProps) {
  const getAQIInfo = (aqiValue: number) => {
    if (aqiValue <= 1) {
      return {
        level: 'Good',
        color: 'text-green-600',
        bgColor: 'bg-green-100',
        description: 'Air quality is good'
      }
    } else if (aqiValue <= 2) {
      return {
        level: 'Fair',
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-100',
        description: 'Air quality is fair'
      }
    } else if (aqiValue <= 3) {
      return {
        level: 'Moderate',
        color: 'text-orange-600',
        bgColor: 'bg-orange-100',
        description: 'Air quality is moderate'
      }
    } else if (aqiValue <= 4) {
      return {
        level: 'Poor',
        color: 'text-red-600',
        bgColor: 'bg-red-100',
        description: 'Air quality is poor'
      }
    } else {
      return {
        level: 'Very Poor',
        color: 'text-purple-600',
        bgColor: 'bg-purple-100',
        description: 'Air quality is very poor'
      }
    }
  }

  const aqiInfo = getAQIInfo(aqi)

  return (
    <div className={`inline-flex items-center px-4 py-2 rounded-full ${aqiInfo.bgColor}`}>
      <div className={`text-2xl font-bold ${aqiInfo.color} mr-3`}>
        {aqi}
      </div>
      <div>
        <div className={`font-semibold ${aqiInfo.color}`}>
          {aqiInfo.level}
        </div>
        <div className="text-xs text-gray-600">
          {aqiInfo.description}
        </div>
      </div>
    </div>
  )
}
