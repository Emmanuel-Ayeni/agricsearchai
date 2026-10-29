export interface Crop {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  growingConditions: {
    temperature: { min: number; max: number; optimal: string };
    rainfall: { min: number; max: number; optimal: string };
    soil: string[];
    ph: { min: number; max: number };
  };
  seasons: {
    nigeria: string[];
    kenya: string[];
  };
  plantingDepth: string;
  spacing: string;
  maturityPeriod: string;
  yield: string;
  uses: string[];
  diseases: string[];
  pests: string[];
  tips: string[];
}

export const crops: Crop[] = [
  {
    id: "maize",
    name: "Maize (Corn)",
    scientificName: "Zea mays",
    description: "Maize is a staple cereal crop widely grown in both Nigeria and Kenya. It's used for food, animal feed, and industrial purposes.",
    growingConditions: {
      temperature: { min: 15, max: 35, optimal: "25-30°C" },
      rainfall: { min: 500, max: 1200, optimal: "600-900mm" },
      soil: ["Well-drained loamy soil", "Sandy loam", "Clay loam"],
      ph: { min: 5.5, max: 7.5 }
    },
    seasons: {
      nigeria: ["Early season (March-April)", "Late season (July-August)"],
      kenya: ["Long rains (March-May)", "Short rains (October-December)"]
    },
    plantingDepth: "3-5 cm",
    spacing: "75cm between rows, 25-30cm between plants",
    maturityPeriod: "90-120 days",
    yield: "2-5 tons per hectare",
    uses: [
      "Human consumption (pap, porridge, flour)",
      "Animal feed",
      "Industrial use (starch, oil, ethanol)",
      "Fresh market (sweet corn)"
    ],
    diseases: [
      "Maize streak virus",
      "Northern corn leaf blight",
      "Gray leaf spot",
      "Ear rot"
    ],
    pests: [
      "Fall armyworm",
      "Stem borer",
      "African armyworm",
      "Cutworms"
    ],
    tips: [
      "Plant at the onset of rains for best germination",
      "Apply nitrogen fertilizer at planting and 4-6 weeks after planting",
      "Practice crop rotation to reduce pest and disease buildup",
      "Use certified seeds for better yields"
    ]
  },
  {
    id: "beans",
    name: "Beans (Common Beans)",
    scientificName: "Phaseolus vulgaris",
    description: "Beans are a vital protein source in both Nigeria and Kenya. They fix nitrogen in the soil, making them excellent for crop rotation.",
    growingConditions: {
      temperature: { min: 15, max: 28, optimal: "18-24°C" },
      rainfall: { min: 300, max: 600, optimal: "400-500mm" },
      soil: ["Well-drained loamy soil", "Sandy loam"],
      ph: { min: 6.0, max: 7.5 }
    },
    seasons: {
      nigeria: ["Early season (March-April)", "Late season (August-September)"],
      kenya: ["Long rains (March-May)", "Short rains (October-December)"]
    },
    plantingDepth: "3-5 cm",
    spacing: "30-40cm between rows, 10-15cm between plants",
    maturityPeriod: "60-90 days",
    yield: "0.8-2 tons per hectare",
    uses: [
      "Human consumption (githeri, boiled beans)",
      "Protein source in diets",
      "Soil fertility improvement (nitrogen fixation)",
      "Inter cropping with maize"
    ],
    diseases: [
      "Angular leaf spot",
      "Anthracnose",
      "Bean rust",
      "Bacterial blight"
    ],
    pests: [
      "Bean fly",
      "Aphids",
      "Bean weevil",
      "Thrips"
    ],
    tips: [
      "Inoculate seeds with rhizobia bacteria before planting",
      "Avoid waterlogged areas as beans are sensitive to waterlogging",
      "Support climbing varieties with stakes",
      "Harvest when pods are dry and mature"
    ]
  },
  {
    id: "tomatoes",
    name: "Tomatoes",
    scientificName: "Solanum lycopersicum",
    description: "Tomatoes are high-value cash crops grown for local markets and export. They require careful management for optimal yields.",
    growingConditions: {
      temperature: { min: 18, max: 32, optimal: "21-24°C" },
      rainfall: { min: 400, max: 800, optimal: "500-600mm" },
      soil: ["Well-drained sandy loam", "Loamy soil rich in organic matter"],
      ph: { min: 6.0, max: 7.0 }
    },
    seasons: {
      nigeria: ["Dry season (irrigation)", "Early rainy season (March-April)"],
      kenya: ["Throughout the year with irrigation", "Long rains (March-May)"]
    },
    plantingDepth: "0.5-1 cm (nursery), transplant after 4-6 weeks",
    spacing: "60-90cm between rows, 45-60cm between plants",
    maturityPeriod: "90-120 days",
    yield: "15-40 tons per hectare",
    uses: [
      "Fresh market consumption",
      "Processing (paste, sauce, ketchup)",
      "Export market",
      "Home cooking"
    ],
    diseases: [
      "Early blight",
      "Late blight",
      "Bacterial wilt",
      "Tomato mosaic virus"
    ],
    pests: [
      "Tuta absoluta (tomato leaf miner)",
      "Aphids",
      "Whiteflies",
      "Nematodes"
    ],
    tips: [
      "Use disease-resistant varieties",
      "Practice crop rotation (avoid solanaceous crops)",
      "Stake plants to improve air circulation and reduce disease",
      "Mulch to conserve moisture and suppress weeds"
    ]
  },
  {
    id: "potatoes",
    name: "Potatoes",
    scientificName: "Solanum tuberosum",
    description: "Potatoes are important food crops, especially in Kenya's highlands. They grow well in cooler regions and provide good returns.",
    growingConditions: {
      temperature: { min: 15, max: 25, optimal: "16-20°C" },
      rainfall: { min: 400, max: 800, optimal: "500-700mm" },
      soil: ["Well-drained sandy loam", "Volcanic soils (in Kenya)"],
      ph: { min: 5.0, max: 6.5 }
    },
    seasons: {
      nigeria: ["Dry season (irrigation in cooler regions)", "Early rainy season in highlands"],
      kenya: ["Long rains (March-May)", "Short rains (October-December)"]
    },
    plantingDepth: "10-15 cm",
    spacing: "75cm between rows, 30cm between plants",
    maturityPeriod: "90-120 days",
    yield: "10-25 tons per hectare",
    uses: [
      "Human consumption (boiled, fried, mashed)",
      "Industrial processing (chips, crisps)",
      "Starch production",
      "Animal feed"
    ],
    diseases: [
      "Late blight",
      "Early blight",
      "Bacterial wilt",
      "Potato virus Y"
    ],
    pests: [
      "Potato tuber moth",
      "Aphids",
      "Cutworms",
      "Nematodes"
    ],
    tips: [
      "Use certified disease-free seed potatoes",
      "Hill up soil around plants as they grow",
      "Avoid planting in fields with history of bacterial wilt",
      "Store in cool, dark, well-ventilated conditions"
    ]
  }
];

export function getCropById(id: string): Crop | undefined {
  return crops.find(crop => crop.id === id);
}

export function getCropsByCountry(country: 'nigeria' | 'kenya'): Crop[] {
  return crops; // All crops are relevant to both countries
}

export function searchCrops(query: string): Crop[] {
  const lowerQuery = query.toLowerCase();
  return crops.filter(crop =>
    crop.name.toLowerCase().includes(lowerQuery) ||
    crop.scientificName.toLowerCase().includes(lowerQuery) ||
    crop.description.toLowerCase().includes(lowerQuery) ||
    crop.uses.some(use => use.toLowerCase().includes(lowerQuery))
  );
}
