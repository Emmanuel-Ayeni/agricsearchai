# agricSearchAI - Agent Notes

## Project Overview
- **Type**: AI-powered agricultural web application MVP
- **Purpose**: Learning AI development in agriculture context
- **Target**: Nigerian and Kenyan farmers
- **Scale**: MVP with 4 crops (Maize, Beans, Tomatoes, Potatoes)

## Tech Stack
- Next.js 14 with TypeScript
- Tailwind CSS for styling
- Local JSON data (no database)
- Rule-based AI recommendation system
- Mock weather data (demo mode)

## Key Files
- `src/data/crops.ts` - Crop database with 4 crops
- `src/data/diseases.ts` - Disease and pest database
- `src/lib/recommendations.ts` - Rule-based recommendation algorithm
- `src/lib/weather.ts` - Weather integration (mock + real API option)
- `src/app/page.tsx` - Home page
- `src/app/crops/page.tsx` - Crop database display
- `src/app/recommendations/page.tsx` - AI recommendation form
- `src/app/diseases/page.tsx` - Disease/pest database with search
- `src/app/weather/page.tsx` - Weather information display

## Development Commands
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run lint` - Run linter
- `npm start` - Start production server

## Architecture Notes
- Client-side rendering for interactive pages (use 'use client')
- All data is local (no external APIs except optional weather)
- Next.js App Router structure
- TypeScript interfaces for type safety

## Weather API Integration
- Currently using mock data for demo
- To use real data: Get OpenWeatherMap API key (free tier: 1,000 calls/day)
- Function `getRealWeatherData()` is ready to use with API key
- Update calls in weather/page.tsx to use real function

## Deployment Options
- Vercel (recommended for Next.js)
- Netlify
- Any Node.js hosting

## Future Improvements
- Add more crops
- Real weather API integration
- Image-based disease ID (computer vision)
- ML models for recommendations
- User authentication
- Multi-language support
