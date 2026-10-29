# agricSearchAI

An AI-powered agricultural web application for Nigerian and Kenyan farmers. Built as an MVP for learning AI development.

## Features

- 🌱 **Crop Database**: Detailed information about 4 major crops (Maize, Beans, Tomatoes, Potatoes)
- 🤖 **AI Recommendations**: Rule-based crop recommendations based on farming conditions
- 🔬 **Disease & Pest Identification**: Database of common diseases and pests with prevention/treatment guides
- 🌤️ **Weather Integration**: Weather information for major cities in Nigeria and Kenya (demo mode with mock data)

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Local development (ready for Vercel/Netlify deployment)
- **Data**: Local JSON files (no database required for MVP)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd agricsearchai
```

2. Install dependencies (already done):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## Project Structure

```
agricsearchai/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── page.tsx      # Home page
│   │   ├── crops/        # Crop database page
│   │   ├── recommendations/ # AI recommendations page
│   │   ├── diseases/     # Diseases & pests page
│   │   ├── weather/      # Weather information page
│   │   └── layout.tsx    # Root layout
│   ├── data/             # Data models
│   │   ├── crops.ts      # Crop data and functions
│   │   └── diseases.ts   # Disease and pest data
│   └── lib/              # Utility functions
│       ├── recommendations.ts # Crop recommendation algorithm
│       └── weather.ts     # Weather API integration
├── public/               # Static assets
└── package.json          # Dependencies
```

## Available Pages

### Home Page (`/`)
- Overview of the application
- Feature highlights
- Quick navigation to all sections

### Crops Page (`/crops`)
- Detailed information about all 4 crops
- Growing conditions (temperature, rainfall, soil, pH)
- Planting seasons for Nigeria and Kenya
- Uses and farming tips

### Recommendations Page (`/recommendations`)
- Quick recommendations by country
- Detailed form with multiple parameters:
  - Country (Nigeria/Kenya)
  - Temperature
  - Annual rainfall
  - Soil pH
  - Soil type
  - Planting season
- AI-powered scoring system with reasons and warnings

### Diseases & Pests Page (`/diseases`)
- Filter by crop
- Search functionality
- Disease cards with:
  - Symptoms
  - Causes
  - Prevention methods
  - Treatment options
- Pest cards with:
  - Damage symptoms
  - Lifecycle information
  - Prevention and treatment

### Weather Page (`/weather`)
- Select country (Nigeria/Kenya)
- Select major cities
- View current weather conditions
- Farming recommendations based on weather

## Data Models

### Crops
Each crop includes:
- Basic information (name, scientific name, description)
- Growing conditions (temperature, rainfall, soil, pH)
- Planting seasons for both countries
- Planting depth, spacing, maturity period, yield
- Uses and farming tips
- Associated diseases and pests

### Diseases & Pests
Each entry includes:
- Name and description
- Affected crops
- Symptoms/causes/damage symptoms
- Prevention methods
- Treatment options
- Severity level (low/medium/high)

## AI Recommendation System

The recommendation system uses a rule-based algorithm that:
1. Evaluates crop compatibility with provided conditions
2. Assigns scores based on:
   - Temperature match (30 points)
   - Rainfall match (25 points)
   - Soil type match (20 points)
   - pH match (15 points)
   - Season match (10 points)
3. Provides reasons for good matches
4. Highlights warnings for suboptimal conditions
5. Ranks crops by score

## Weather Integration

Currently uses mock data for demonstration. To integrate real weather data:

1. Sign up for OpenWeatherMap free tier (1,000 calls/day)
2. Get your API key
3. Update `src/lib/weather.ts` to use `getRealWeatherData()` instead of `getMockWeatherData()`
4. Pass your API key when calling the function

## Future Enhancements

- Add more crops
- Integrate real-time weather API
- Add image-based disease identification (computer vision)
- Implement machine learning models for better recommendations
- Add user authentication and saved farms
- Multi-language support
- Mobile app version

## Development

### Build for Production

```bash
npm run build
npm start
```

### Lint Code

```bash
npm run lint
```

## Deployment

The app is ready for deployment to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- Any Node.js hosting platform

For Vercel:
1. Push code to GitHub
2. Import project in Vercel
3. Deploy with default settings

## Learning Resources

This project demonstrates:
- Next.js 14 App Router
- TypeScript for type safety
- Client-side state management with React hooks
- Responsive design with Tailwind CSS
- Rule-based AI systems
- API integration patterns
- Data modeling and relationships

## License

This is a learning project. Feel free to use it for educational purposes.

## Support

For issues or questions, refer to the Next.js documentation or contact the development team.
