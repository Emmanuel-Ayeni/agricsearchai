// Weather API integration using OpenWeatherMap
// Free tier: 1,000 calls/day, 60 calls/minute

export interface WeatherData {
  location: string;
  temperature: number;
  humidity: number;
  rainfall: number;
  description: string;
  windSpeed: number;
  conditions: string;
}

export interface Location {
  name: string;
  country: string;
  lat: number;
  lon: number;
}

// Sample locations in Nigeria and Kenya
export const sampleLocations: Location[] = [
  // Nigeria
  { name: "Lagos", country: "nigeria", lat: 6.5244, lon: 3.3792 },
  { name: "Abuja", country: "nigeria", lat: 9.0765, lon: 7.3986 },
  { name: "Kano", country: "nigeria", lat: 12.0022, lon: 8.5919 },
  { name: "Ibadan", country: "nigeria", lat: 7.3775, lon: 3.9470 },
  // Kenya
  { name: "Nairobi", country: "kenya", lat: -1.2921, lon: 36.8219 },
  { name: "Mombasa", country: "kenya", lat: -4.0435, lon: 39.6682 },
  { name: "Kisumu", country: "kenya", lat: -0.0917, lon: 34.7679 },
  { name: "Eldoret", country: "kenya", lat: 0.5143, lon: 35.2698 }
];

// Mock weather data for development (no API key required)
// In production, replace with actual OpenWeatherMap API calls
export function getMockWeatherData(location: Location): WeatherData {
  // Generate realistic mock data based on location
  const isNigeria = location.country === 'nigeria';
  const baseTemp = isNigeria ? 28 : 22;
  const tempVariation = Math.random() * 8 - 4;
  const humidity = 60 + Math.random() * 30;
  const rainfall = Math.random() > 0.6 ? Math.random() * 50 : 0;

  return {
    location: `${location.name}, ${location.country.charAt(0).toUpperCase() + location.country.slice(1)}`,
    temperature: Math.round((baseTemp + tempVariation) * 10) / 10,
    humidity: Math.round(humidity),
    rainfall: Math.round(rainfall * 10) / 10,
    description: rainfall > 0 ? "Rainy" : (humidity > 75 ? "Cloudy" : "Sunny"),
    windSpeed: Math.round((5 + Math.random() * 15) * 10) / 10,
    conditions: rainfall > 10 ? "Heavy Rain" : (rainfall > 0 ? "Light Rain" : (humidity > 75 ? "Overcast" : "Clear Sky"))
  };
}

// Function to get real weather data (requires API key)
export async function getRealWeatherData(
  location: Location,
  apiKey: string
): Promise<WeatherData> {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error('Weather API request failed');
    }

    const data = await response.json();

    return {
      location: `${location.name}, ${location.country.charAt(0).toUpperCase() + location.country.slice(1)}`,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      rainfall: data.rain?.['1h'] || data.rain?.['3h'] || 0,
      description: data.weather[0].description,
      windSpeed: data.wind.speed,
      conditions: data.weather[0].main
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    // Fallback to mock data
    return getMockWeatherData(location);
  }
}

export function getLocationsByCountry(country: 'nigeria' | 'kenya'): Location[] {
  return sampleLocations.filter(loc => loc.country === country);
}

export function getLocationByName(name: string): Location | undefined {
  return sampleLocations.find(loc =>
    loc.name.toLowerCase() === name.toLowerCase()
  );
}
