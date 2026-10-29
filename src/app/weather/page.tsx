'use client';

import { useState } from 'react';
import Link from 'next/link';
import { sampleLocations, getLocationsByCountry, getMockWeatherData, WeatherData, Location } from '@/lib/weather';

export default function WeatherPage() {
  const [selectedCountry, setSelectedCountry] = useState<'nigeria' | 'kenya'>('nigeria');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location);
    const weather = getMockWeatherData(location);
    setWeatherData(weather);
  };

  const filteredLocations = getLocationsByCountry(selectedCountry);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl">🌾</span>
              <h1 className="text-2xl font-bold text-green-700 dark:text-green-400">
                agricSearchAI
              </h1>
            </Link>
            <nav className="flex space-x-4">
              <Link
                href="/crops"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Crops
              </Link>
              <Link
                href="/recommendations"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Recommendations
              </Link>
              <Link
                href="/diseases"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Diseases & Pests
              </Link>
              <Link
                href="/weather"
                className="text-green-600 dark:text-green-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Weather
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Weather Information
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Check current weather conditions in major Nigerian and Kenyan cities
          </p>
        </div>

        {/* Country Selection */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Select Country
          </h3>
          <div className="flex gap-4">
            <button
              onClick={() => {
                setSelectedCountry('nigeria');
                setSelectedLocation(null);
                setWeatherData(null);
              }}
              className={`flex-1 px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedCountry === 'nigeria'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              🇳🇬 Nigeria
            </button>
            <button
              onClick={() => {
                setSelectedCountry('kenya');
                setSelectedLocation(null);
                setWeatherData(null);
              }}
              className={`flex-1 px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedCountry === 'kenya'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              🇰🇪 Kenya
            </button>
          </div>
        </div>

        {/* Location Selection */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Select Location
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredLocations.map((location) => (
              <button
                key={location.name}
                onClick={() => handleLocationSelect(location)}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  selectedLocation?.name === location.name
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {location.name}
              </button>
            ))}
          </div>
        </div>

        {/* Weather Display */}
        {weatherData && selectedLocation && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{weatherData.location}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Current Weather Conditions</p>
              </div>
              <div className="text-right">
                <div className="text-6xl font-bold text-green-600 dark:text-green-400">
                  {weatherData.temperature}°C
                </div>
                <div className="text-xl text-gray-600 dark:text-gray-400 mt-1">{weatherData.conditions}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <WeatherCard
                icon="💧"
                label="Humidity"
                value={`${weatherData.humidity}%`}
                description="Current humidity level"
              />
              <WeatherCard
                icon="🌧️"
                label="Rainfall"
                value={`${weatherData.rainfall}mm`}
                description="Recent precipitation"
              />
              <WeatherCard
                icon="💨"
                label="Wind Speed"
                value={`${weatherData.windSpeed}m/s`}
                description="Current wind conditions"
              />
            </div>

            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">📝 Farming Recommendations</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                {weatherData.rainfall > 10 && (
                  <li>• Good conditions for planting - soil moisture is adequate</li>
                )}
                {weatherData.rainfall === 0 && weatherData.humidity < 50 && (
                  <li>• Dry conditions - consider irrigation for newly planted crops</li>
                )}
                {weatherData.temperature > 30 && (
                  <li>• High temperatures - ensure adequate irrigation and consider heat-tolerant varieties</li>
                )}
                {weatherData.temperature < 15 && (
                  <li>• Cool conditions - suitable for potatoes and cold-tolerant crops</li>
                )}
                {weatherData.windSpeed > 10 && (
                  <li>• Windy conditions - provide support for tall crops and consider windbreaks</li>
                )}
                {!weatherData.rainfall > 10 && !weatherData.rainfall === 0 && !weatherData.temperature > 30 && !weatherData.temperature < 15 && !weatherData.windSpeed > 10 && (
                  <li>• Conditions are favorable for most crops - good time for field activities</li>
                )}
              </ul>
            </div>

            <div className="mt-6 flex gap-4">
              <Link
                href="/recommendations"
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
              >
                Get Crop Recommendations →
              </Link>
            </div>
          </div>
        )}

        {/* Info Card */}
        <div className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">ℹ️ Note</h4>
          <p className="text-sm text-yellow-700 dark:text-yellow-300">
            This is a demo version using simulated weather data. In production, you can integrate with the OpenWeatherMap API
            (free tier: 1,000 calls/day) for real-time weather data. The mock data provides realistic values for demonstration purposes.
          </p>
        </div>
      </main>
    </div>
  );
}

function WeatherCard({ icon, label, value, description }: { icon: string; label: string; value: string; description: string }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center">
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
      <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">{label}</div>
      <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">{description}</div>
    </div>
  );
}
