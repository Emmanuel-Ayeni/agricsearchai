import Link from 'next/link';
import { crops, getCropById } from '@/data/crops';

export default function CropsPage() {
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
                className="text-green-600 dark:text-green-400 px-3 py-2 rounded-md text-sm font-medium"
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
            Crop Database
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Detailed information about crops grown in Nigeria and Kenya
          </p>
        </div>

        {/* Crops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {crops.map((crop) => (
            <CropCard key={crop.id} crop={crop} />
          ))}
        </div>
      </main>
    </div>
  );
}

function CropCard({ crop }: { crop: ReturnType<typeof getCropById> }) {
  if (!crop) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-green-600 dark:bg-green-700 px-6 py-4">
        <h3 className="text-2xl font-bold text-white">{crop.name}</h3>
        <p className="text-green-100 text-sm italic">{crop.scientificName}</p>
      </div>
      <div className="p-6 space-y-4">
        <p className="text-gray-700 dark:text-gray-300">{crop.description}</p>

        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Growing Conditions</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-gray-600 dark:text-gray-400">Temperature:</span>
              <span className="ml-2 text-gray-900 dark:text-white">{crop.growingConditions.temperature.optimal}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Rainfall:</span>
              <span className="ml-2 text-gray-900 dark:text-white">{crop.growingConditions.rainfall.optimal}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Soil pH:</span>
              <span className="ml-2 text-gray-900 dark:text-white">{crop.growingConditions.ph.min}-{crop.growingConditions.ph.max}</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Soil Types</h4>
          <div className="flex flex-wrap gap-2">
            {crop.growingConditions.soil.map((soil, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm"
              >
                {soil}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Nigeria Seasons</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              {crop.seasons.nigeria.map((season, index) => (
                <li key={index}>• {season}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Kenya Seasons</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              {crop.seasons.kenya.map((season, index) => (
                <li key={index}>• {season}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600 dark:text-gray-400">Planting Depth:</span>
            <span className="ml-2 text-gray-900 dark:text-white">{crop.plantingDepth}</span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">Spacing:</span>
            <span className="ml-2 text-gray-900 dark:text-white">{crop.spacing}</span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">Maturity:</span>
            <span className="ml-2 text-gray-900 dark:text-white">{crop.maturityPeriod}</span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">Yield:</span>
            <span className="ml-2 text-gray-900 dark:text-white">{crop.yield}</span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Uses</h4>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            {crop.uses.map((use, index) => (
              <li key={index}>• {use}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Farming Tips</h4>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            {crop.tips.map((tip, index) => (
              <li key={index}>• {tip}</li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <Link
            href={`/diseases?crop=${crop.id}`}
            className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
          >
            View Diseases & Pests →
          </Link>
        </div>
      </div>
    </div>
  );
}
