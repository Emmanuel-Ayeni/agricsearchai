'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getCropRecommendations, RecommendationInput, RecommendationResult } from '@/lib/recommendations';
import { getLocationsByCountry } from '@/lib/weather';

export default function RecommendationsPage() {
  const [formData, setFormData] = useState<RecommendationInput>({
    country: 'nigeria',
    temperature: undefined,
    rainfall: undefined,
    soilType: '',
    ph: undefined,
    season: ''
  });
  const [results, setResults] = useState<RecommendationResult[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const recommendations = getCropRecommendations(formData);
    setResults(recommendations);
  };

  const handleQuickRecommend = (country: 'nigeria' | 'kenya') => {
    setFormData({ ...formData, country });
    const recommendations = getCropRecommendations({ country });
    setResults(recommendations);
  };

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
                className="text-green-600 dark:text-green-400 px-3 py-2 rounded-md text-sm font-medium"
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
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
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
            AI Crop Recommendations
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get personalized crop recommendations based on your farming conditions
          </p>
        </div>

        {/* Quick Country Selection */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Quick Recommendations by Country
          </h3>
          <div className="flex gap-4">
            <button
              onClick={() => handleQuickRecommend('nigeria')}
              className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
            >
              🇳🇬 Nigeria
            </button>
            <button
              onClick={() => handleQuickRecommend('kenya')}
              className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
            >
              🇰🇪 Kenya
            </button>
          </div>
        </div>

        {/* Detailed Form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Detailed Recommendations
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Country
                </label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value as 'nigeria' | 'kenya' })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="nigeria">Nigeria</option>
                  <option value="kenya">Kenya</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Temperature (°C)
                </label>
                <input
                  type="number"
                  value={formData.temperature || ''}
                  onChange={(e) => setFormData({ ...formData, temperature: e.target.value ? parseFloat(e.target.value) : undefined })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., 25"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Annual Rainfall (mm)
                </label>
                <input
                  type="number"
                  value={formData.rainfall || ''}
                  onChange={(e) => setFormData({ ...formData, rainfall: e.target.value ? parseFloat(e.target.value) : undefined })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., 800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Soil pH
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.ph || ''}
                  onChange={(e) => setFormData({ ...formData, ph: e.target.value ? parseFloat(e.target.value) : undefined })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., 6.5"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Soil Type
                </label>
                <select
                  value={formData.soilType}
                  onChange={(e) => setFormData({ ...formData, soilType: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select soil type</option>
                  <option value="loamy">Loamy Soil</option>
                  <option value="sandy loam">Sandy Loam</option>
                  <option value="clay loam">Clay Loam</option>
                  <option value="sandy">Sandy Soil</option>
                  <option value="clay">Clay Soil</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Season
                </label>
                <select
                  value={formData.season}
                  onChange={(e) => setFormData({ ...formData, season: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select season</option>
                  {formData.country === 'nigeria' ? (
                    <>
                      <option value="early">Early Season (March-April)</option>
                      <option value="late">Late Season (July-August)</option>
                    </>
                  ) : (
                    <>
                      <option value="long">Long Rains (March-May)</option>
                      <option value="short">Short Rains (October-December)</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
            >
              Get Recommendations
            </button>
          </form>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Recommended Crops
            </h3>
            {results.map((result, index) => (
              <RecommendationCard key={result.crop.id} result={result} rank={index + 1} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

function RecommendationCard({ result, rank }: { result: RecommendationResult; rank: number }) {
  const scoreColor = result.score >= 70 ? 'green' : result.score >= 50 ? 'yellow' : 'red';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold text-white bg-${scoreColor}-600`}>
            {rank}
          </div>
          <div>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">{result.crop.name}</h4>
            <p className="text-gray-600 dark:text-gray-400 italic">{result.crop.scientificName}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400">{result.score}%</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Match Score</div>
        </div>
      </div>

      {result.reasons.length > 0 && (
        <div className="mb-4">
          <h5 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Good Match Because:</h5>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            {result.reasons.map((reason, index) => (
              <li key={index}>• {reason}</li>
            ))}
          </ul>
        </div>
      )}

      {result.warnings.length > 0 && (
        <div className="mb-4">
          <h5 className="font-semibold text-yellow-600 dark:text-yellow-400 mb-2">⚠️ Considerations:</h5>
          <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
            {result.warnings.map((warning, index) => (
              <li key={index}>• {warning}</li>
            ))}
          </ul>
        </div>
      )}

      <Link
        href={`/crops#${result.crop.id}`}
        className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
      >
        View Full Details →
      </Link>
    </div>
  );
}
