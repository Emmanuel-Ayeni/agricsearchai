'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { crops } from '@/data/crops';
import { diseases, pests, getDiseasesByCrop, getPestsByCrop, searchDiseases, searchPests, Disease, Pest } from '@/data/diseases';

export default function DiseasesPage() {
  const [selectedCrop, setSelectedCrop] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'diseases' | 'pests'>('diseases');

  const filteredDiseases = selectedCrop
    ? getDiseasesByCrop(selectedCrop)
    : searchQuery
    ? searchDiseases(searchQuery)
    : diseases;

  const filteredPests = selectedCrop
    ? getPestsByCrop(selectedCrop)
    : searchQuery
    ? searchPests(searchQuery)
    : pests;

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
                className="text-green-600 dark:text-green-400 px-3 py-2 rounded-md text-sm font-medium"
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
            Diseases & Pests Database
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Identify and manage common crop diseases and pests
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Filter by Crop
              </label>
              <select
                value={selectedCrop}
                onChange={(e) => setSelectedCrop(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">All Crops</option>
                {crops.map((crop) => (
                  <option key={crop.id} value={crop.id}>
                    {crop.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Search
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search diseases or pests..."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-end">
              <button
                onClick={() => {
                  setSelectedCrop('');
                  setSearchQuery('');
                }}
                className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-medium transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('diseases')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'diseases'
                  ? 'bg-green-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Diseases ({filteredDiseases.length})
            </button>
            <button
              onClick={() => setActiveTab('pests')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'pests'
                  ? 'bg-green-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Pests ({filteredPests.length})
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'diseases' ? (
          <div className="grid grid-cols-1 gap-6">
            {filteredDiseases.length === 0 ? (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
                <p className="text-gray-600 dark:text-gray-400">No diseases found matching your criteria.</p>
              </div>
            ) : (
              filteredDiseases.map((disease) => <DiseaseCard key={disease.id} disease={disease} />)
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {filteredPests.length === 0 ? (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
                <p className="text-gray-600 dark:text-gray-400">No pests found matching your criteria.</p>
              </div>
            ) : (
              filteredPests.map((pest) => <PestCard key={pest.id} pest={pest} />)
            )}
          </div>
        )}
      </main>
    </div>
  );
}

function DiseaseCard({ disease }: { disease: Disease }) {
  const severityColors = {
    low: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    high: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{disease.name}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {disease.affectedCrops.map((crop) => (
              <span
                key={crop}
                className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm"
              >
                {crop}
              </span>
            ))}
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${severityColors[disease.severity]}`}>
          {disease.severity.toUpperCase()} SEVERITY
        </span>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-4">{disease.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🔴 Symptoms</h4>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            {disease.symptoms.map((symptom, index) => (
              <li key={index}>• {symptom}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🔍 Causes</h4>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            {disease.causes.map((cause, index) => (
              <li key={index}>• {cause}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🛡️ Prevention</h4>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            {disease.prevention.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">💊 Treatment</h4>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            {disease.treatment.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function PestCard({ pest }: { pest: Pest }) {
  const severityColors = {
    low: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    high: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{pest.name}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {pest.affectedCrops.map((crop) => (
              <span
                key={crop}
                className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm"
              >
                {crop}
              </span>
            ))}
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${severityColors[pest.severity]}`}>
          {pest.severity.toUpperCase()} SEVERITY
        </span>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-4">{pest.description}</p>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🔄 Lifecycle</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{pest.lifecycle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">💥 Damage Symptoms</h4>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            {pest.damageSymptoms.map((symptom, index) => (
              <li key={index}>• {symptom}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🛡️ Prevention</h4>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            {pest.prevention.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">💊 Treatment</h4>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            {pest.treatment.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
