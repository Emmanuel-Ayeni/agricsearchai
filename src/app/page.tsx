import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-3xl">🌾</span>
              <h1 className="text-2xl font-bold text-green-700 dark:text-green-400">
                agricSearchAI
              </h1>
            </div>
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
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Weather
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white sm:text-6xl">
            Smart Agriculture for
            <span className="block text-green-600 dark:text-green-400">
              Nigeria & Kenya
            </span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your AI-powered companion for crop selection, disease identification, and farming decisions.
            Get personalized recommendations based on local conditions for Maize, Beans, Tomatoes, and Potatoes.
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="/recommendations"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
            >
              Get Recommendations
            </Link>
            <Link
              href="/crops"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
            >
              Explore Crops
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon="🌱"
            title="Crop Database"
            description="Detailed information about Maize, Beans, Tomatoes, and Potatoes including growing conditions and best practices."
            link="/crops"
          />
          <FeatureCard
            icon="🤖"
            title="AI Recommendations"
            description="Get personalized crop recommendations based on your location, soil type, and weather conditions."
            link="/recommendations"
          />
          <FeatureCard
            icon="🔬"
            title="Disease & Pest ID"
            description="Identify common diseases and pests affecting your crops with prevention and treatment guides."
            link="/diseases"
          />
          <FeatureCard
            icon="🌤️"
            title="Weather Integration"
            description="Check current weather conditions in major Nigerian and Kenyan cities for better farming decisions."
            link="/weather"
          />
        </div>

        {/* Crops Preview */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Featured Crops
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CropPreview
              name="Maize"
              emoji="🌽"
              description="Staple cereal crop, widely grown in both countries"
            />
            <CropPreview
              name="Beans"
              emoji="🫘"
              description="Vital protein source, fixes nitrogen in soil"
            />
            <CropPreview
              name="Tomatoes"
              emoji="🍅"
              description="High-value cash crop for local and export markets"
            />
            <CropPreview
              name="Potatoes"
              emoji="🥔"
              description="Important food crop, especially in highlands"
            />
          </div>
        </div>

        {/* Countries Info */}
        <div className="mt-20 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Supported Regions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CountryInfo
              name="Nigeria"
              flag="🇳🇬"
              cities={['Lagos', 'Abuja', 'Kano', 'Ibadan']}
              seasons={['Early Season (March-April)', 'Late Season (July-August)']}
            />
            <CountryInfo
              name="Kenya"
              flag="🇰🇪"
              cities={['Nairobi', 'Mombasa', 'Kisumu', 'Eldoret']}
              seasons={['Long Rains (March-May)', 'Short Rains (October-December)']}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © 2024 agricSearchAI. Built for learning AI development in agriculture.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, link }: { icon: string; title: string; description: string; link: string }) {
  return (
    <Link href={link} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow h-full">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </Link>
  );
}

function CropPreview({ name, emoji, description }: { name: string; emoji: string; description: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="text-5xl mb-4 text-center">{emoji}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">{name}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-center text-sm">{description}</p>
    </div>
  );
}

function CountryInfo({ name, flag, cities, seasons }: { name: string; flag: string; cities: string[]; seasons: string[] }) {
  return (
    <div>
      <div className="flex items-center space-x-3 mb-4">
        <span className="text-4xl">{flag}</span>
        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">{name}</h4>
      </div>
      <div className="space-y-3">
        <div>
          <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Major Cities:</h5>
          <p className="text-gray-600 dark:text-gray-400">{cities.join(', ')}</p>
        </div>
        <div>
          <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Planting Seasons:</h5>
          <ul className="text-gray-600 dark:text-gray-400 list-disc list-inside">
            {seasons.map((season, index) => (
              <li key={index}>{season}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
