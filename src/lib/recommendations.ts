import { crops, Crop } from '@/data/crops';

export interface RecommendationInput {
  country: 'nigeria' | 'kenya';
  temperature?: number;
  rainfall?: number;
  soilType?: string;
  ph?: number;
  season?: string;
}

export interface RecommendationResult {
  crop: Crop;
  score: number;
  reasons: string[];
  warnings: string[];
}

export function getCropRecommendations(input: RecommendationInput): RecommendationResult[] {
  const results: RecommendationResult[] = [];

  for (const crop of crops) {
    let score = 0;
    const reasons: string[] = [];
    const warnings: string[] = [];

    // Temperature compatibility
    if (input.temperature !== undefined) {
      if (input.temperature >= crop.growingConditions.temperature.min &&
          input.temperature <= crop.growingConditions.temperature.max) {
        score += 30;
        reasons.push(`Temperature ${input.temperature}°C is suitable for ${crop.name}`);
      } else {
        warnings.push(`Temperature ${input.temperature}°C is outside optimal range (${crop.growingConditions.temperature.min}-${crop.growingConditions.temperature.max}°C)`);
      }
    }

    // Rainfall compatibility
    if (input.rainfall !== undefined) {
      if (input.rainfall >= crop.growingConditions.rainfall.min &&
          input.rainfall <= crop.growingConditions.rainfall.max) {
        score += 25;
        reasons.push(`Rainfall ${input.rainfall}mm is suitable for ${crop.name}`);
      } else {
        warnings.push(`Rainfall ${input.rainfall}mm is outside optimal range (${crop.growingConditions.rainfall.min}-${crop.growingConditions.rainfall.max}mm)`);
      }
    }

    // Soil type compatibility
    if (input.soilType) {
      const soilMatch = crop.growingConditions.soil.some(soil =>
        soil.toLowerCase().includes(input.soilType!.toLowerCase())
      );
      if (soilMatch) {
        score += 20;
        reasons.push(`${input.soilType} soil is suitable for ${crop.name}`);
      } else {
        warnings.push(`${input.soilType} may not be ideal for ${crop.name}`);
      }
    }

    // pH compatibility
    if (input.ph !== undefined) {
      if (input.ph >= crop.growingConditions.ph.min &&
          input.ph <= crop.growingConditions.ph.max) {
        score += 15;
        reasons.push(`pH ${input.ph} is within optimal range for ${crop.name}`);
      } else {
        warnings.push(`pH ${input.ph} is outside optimal range (${crop.growingConditions.ph.min}-${crop.growingConditions.ph.max})`);
      }
    }

    // Season compatibility
    if (input.season && input.country) {
      const seasons = input.country === 'nigeria' ? crop.seasons.nigeria : crop.seasons.kenya;
      const seasonMatch = seasons.some(s =>
        s.toLowerCase().includes(input.season!.toLowerCase())
      );
      if (seasonMatch) {
        score += 10;
        reasons.push(`${input.season} is a good season for ${crop.name} in ${input.country}`);
      } else {
        warnings.push(`${input.season} may not be ideal for ${crop.name} in ${input.country}`);
      }
    }

    // Always add baseline score for country relevance
    score += 10;

    results.push({
      crop,
      score,
      reasons,
      warnings
    });
  }

  // Sort by score descending
  return results.sort((a, b) => b.score - a.score);
}

export function getGeneralRecommendations(country: 'nigeria' | 'kenya'): RecommendationResult[] {
  return crops.map(crop => ({
    crop,
    score: 70, // Base score for being a recommended crop in the country
    reasons: [
      `${crop.name} is commonly grown in ${country}`,
      crop.seasons[country].length > 0
        ? `Recommended seasons: ${crop.seasons[country].join(', ')}`
        : 'Can be grown with proper management'
    ],
    warnings: []
  }));
}
