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
    <main className="min-h-screen bg-neutral-50 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8 md:mb-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900">
            Weather in Lyon
          </h1>
          <p className="mt-3 text-neutral-500 text-lg">{today}</p>
        </header>

        {weatherData && <WeatherDisplay data={weatherData} />}

        <div className="text-center mt-8">
          <button
            onClick={fetchWeatherData}
            className="inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold py-2.5 px-6 rounded-xl shadow-sm hover:bg-neutral-800 transition-colors"
          >
            Refresh
          </button>
        </div>
      </div>
    </main>
  )
}
