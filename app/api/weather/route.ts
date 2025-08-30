import { NextResponse } from 'next/server'

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY
const CITY = 'Lyon'
const COUNTRY_CODE = 'FR'

export async function GET() {
  if (!OPENWEATHER_API_KEY) {
    return NextResponse.json(
      { error: 'OpenWeather API key not configured' },
      { status: 500 }
    )
  }

  try {
    // Fetch current weather
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY_CODE}&appid=${OPENWEATHER_API_KEY}&units=metric`
    )

    if (!weatherResponse.ok) {
      throw new Error('Failed to fetch weather data')
    }

    const weatherData = await weatherResponse.json()

    // Fetch air quality data
    const airQualityResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&appid=${OPENWEATHER_API_KEY}`
    )

    let airQualityData = null
    if (airQualityResponse.ok) {
      airQualityData = await airQualityResponse.json()
    }

    // Process and format the data
    const processedData = {
      location: {
        city: weatherData.name,
        country: weatherData.sys.country,
        coordinates: {
          lat: weatherData.coord.lat,
          lon: weatherData.coord.lon
        }
      },
      current: {
        temperature: Math.round(weatherData.main.temp),
        feels_like: Math.round(weatherData.main.feels_like),
        humidity: weatherData.main.humidity,
        pressure: weatherData.main.pressure,
        wind_speed: Math.round(weatherData.wind.speed * 3.6), // Convert m/s to km/h
        wind_direction: weatherData.wind.deg,
        description: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
        main: weatherData.weather[0].main
      },
      air_quality: airQualityData ? {
        aqi: airQualityData.list[0].main.aqi,
        components: airQualityData.list[0].components
      } : null,
      timestamp: new Date().toISOString()
    }

    return NextResponse.json(processedData)
  } catch (error) {
    console.error('Error fetching weather data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch weather data' },
      { status: 500 }
    )
  }
}
