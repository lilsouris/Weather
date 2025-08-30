interface ErrorMessageProps {
  message: string
  onRetry: () => void
}

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="weather-card p-8 text-center max-w-md">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Oops! Something went wrong
        </h2>
        <p className="text-gray-600 mb-6">
          {message}
        </p>
        <button
          onClick={onRetry}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
