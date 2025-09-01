'use client'

import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import WeatherDisplay from './components/WeatherDisplay'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorMessage from './components/ErrorMessage'

export default function Home() {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchWeatherData()
  }, [])

  const fetchWeatherData = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch('/api/weather')
      if (!response.ok) {
        throw new Error('Failed to fetch weather data')
      }
      
      const data = await response.json()
      setWeatherData(data)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred'
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={fetchWeatherData} />
  }

  const today = format(new Date(), 'EEEE, MMMM d, yyyy')

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-3">
            Weather in Lyon
          </h1>
          <p className="text-muted-foreground text-xl">
            {today}
          </p>
        </div>

        {weatherData && <WeatherDisplay data={weatherData} />}

        <div className="text-center mt-12">
          <button
            onClick={fetchWeatherData}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-primary/90 transition-colors"
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  )
}
