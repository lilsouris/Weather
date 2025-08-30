export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
        <div className="text-white text-xl font-semibold">
          Loading weather data...
        </div>
        <div className="text-blue-100 text-sm mt-2">
          Fetching current conditions for Lyon
        </div>
      </div>
    </div>
  )
}
