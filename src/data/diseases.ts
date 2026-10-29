export interface Disease {
  id: string;
  name: string;
  affectedCrops: string[];
  description: string;
  symptoms: string[];
  causes: string[];
  prevention: string[];
  treatment: string[];
  severity: 'low' | 'medium' | 'high';
}

export interface Pest {
  id: string;
  name: string;
  affectedCrops: string[];
  description: string;
  damageSymptoms: string[];
  lifecycle: string;
  prevention: string[];
  treatment: string[];
  severity: 'low' | 'medium' | 'high';
}

export const diseases: Disease[] = [
  {
    id: "maize-streak-virus",
    name: "Maize Streak Virus",
    affectedCrops: ["maize"],
    description: "A viral disease transmitted by leafhoppers that causes severe yield loss in maize.",
    symptoms: [
      "Chlorotic streaks on leaves",
      "Stunted plant growth",
      "Shortened internodes",
      "Poor ear development"
    ],
    causes: ["Infected leafhoppers", "Using infected seeds"],
    prevention: [
      "Use resistant varieties",
      "Control leafhopper populations",
      "Plant early to avoid peak leafhopper season",
      "Remove infected plants"
    ],
    treatment: [
      "No chemical cure for viral diseases",
      "Remove and destroy infected plants",
      "Control insect vectors"
    ],
    severity: "high"
  },
  {
    id: "early-blight",
    name: "Early Blight",
    affectedCrops: ["tomatoes", "potatoes"],
    description: "A fungal disease caused by Alternaria solani that affects leaves, stems, and fruits.",
    symptoms: [
      "Brown circular spots on older leaves",
      "Concentric rings in spots (target-like)",
      "Yellowing of leaves",
      "Fruit lesions near stem end"
    ],
    causes: [
      "Warm, humid conditions",
      "Poor air circulation",
      "Overhead irrigation",
      "Infected plant debris"
    ],
    prevention: [
      "Use resistant varieties",
      "Practice crop rotation",
      "Ensure good air circulation",
      "Avoid overhead irrigation",
      "Remove infected plant debris"
    ],
    treatment: [
      "Apply fungicides (chlorothalonil, copper-based)",
      "Remove infected leaves",
      "Improve air circulation"
    ],
    severity: "medium"
  },
  {
    id: "late-blight",
    name: "Late Blight",
    affectedCrops: ["tomatoes", "potatoes"],
    description: "A devastating fungal disease caused by Phytophthora infestans that can destroy entire crops.",
    symptoms: [
      "Water-soaked spots on leaves",
      "White fungal growth on leaf undersides",
      "Black/brown lesions on stems",
      "Firm, brown patches on fruits/tubers"
    ],
    causes: [
      "Cool, wet conditions",
      "High humidity",
      "Infected seed tubers",
      "Spores spread by wind and water"
    ],
    prevention: [
      "Use certified disease-free seeds/tubers",
      "Plant resistant varieties",
      "Avoid planting in low-lying areas",
      "Ensure good drainage",
      "Space plants properly"
    ],
    treatment: [
      "Apply fungicides preventatively",
      "Remove and destroy infected plants",
      "Avoid working with plants when wet"
    ],
    severity: "high"
  },
  {
    id: "bacterial-wilt",
    name: "Bacterial Wilt",
    affectedCrops: ["tomatoes", "potatoes"],
    description: "A soil-borne bacterial disease that causes wilting and plant death.",
    symptoms: [
      "Sudden wilting of plants",
      "Brown discoloration in stem vascular tissue",
      "Stunted growth",
      "Plant death"
    ],
    causes: [
      "Infected soil",
      "Contaminated water",
      "Infected planting material",
      "Soil-borne bacteria (Ralstonia solanacearum)"
    ],
    prevention: [
      "Use disease-free planting material",
      "Practice crop rotation (4-5 years)",
      "Avoid planting in infected fields",
      "Use raised beds",
      "Solarize soil before planting"
    ],
    treatment: [
      "No effective chemical treatment",
      "Remove and destroy infected plants",
      "Avoid replanting susceptible crops in same area"
    ],
    severity: "high"
  },
  {
    id: "angular-leaf-spot",
    name: "Angular Leaf Spot",
    affectedCrops: ["beans"],
    description: "A fungal disease causing angular spots on bean leaves, reducing photosynthesis and yield.",
    symptoms: [
      "Angular brown spots on leaves",
      "Yellow halos around spots",
      "Premature leaf drop",
      "Reduced pod development"
    ],
    causes: [
      "Wet, humid conditions",
      "Overcrowding",
      "Infected plant debris",
      "Rain splash"
    ],
    prevention: [
      "Use resistant varieties",
      "Space plants properly",
      "Avoid overhead irrigation",
      "Rotate crops",
      "Remove infected plant debris"
    ],
    treatment: [
      "Apply fungicides (mancozeb, chlorothalonil)",
      "Remove infected leaves",
      "Improve air circulation"
    ],
    severity: "medium"
  },
  {
    id: "anthracnose",
    name: "Anthracnose",
    affectedCrops: ["beans"],
    description: "A fungal disease affecting beans, causing dark lesions on pods, seeds, and leaves.",
    symptoms: [
      "Dark sunken lesions on pods",
      "Reddish-brown spots on leaves",
      "Discolored seeds",
      "Pod distortion"
    ],
    causes: [
      "Wet conditions",
      "Infected seeds",
      "Plant debris",
      "Warm temperatures"
    ],
    prevention: [
      "Use certified disease-free seeds",
      "Rotate crops",
      "Avoid working with plants when wet",
      "Remove plant debris"
    ],
    treatment: [
      "Apply fungicides",
      "Use disease-free seeds",
      "Remove infected plants"
    ],
    severity: "medium"
  }
];

export const pests: Pest[] = [
  {
    id: "fall-armyworm",
    name: "Fall Armyworm",
    affectedCrops: ["maize"],
    description: "A destructive pest that feeds on maize leaves, whorls, and ears, causing significant yield loss.",
    damageSymptoms: [
      "Irregular holes in leaves",
      "Frass (insect waste) in whorl",
      "Damage to tassels and ears",
      "Stunted plant growth"
    ],
    lifecycle: "Egg → Larva (6 instars) → Pupa → Adult. Complete cycle in 30-40 days.",
    prevention: [
      "Early planting",
      "Push-pull technology",
      "Use resistant varieties",
      "Monitor fields regularly",
      "Maintain field hygiene"
    ],
    treatment: [
      "Handpick larvae when found",
      "Apply biopesticides (Bt, neem)",
      "Use chemical insecticides when infestation is high",
      "Destroy crop residues after harvest"
    ],
    severity: "high"
  },
  {
    id: "stem-borer",
    name: "Stem Borer",
    affectedCrops: ["maize"],
    description: "Larvae bore into maize stems, causing plants to break and reducing yield.",
    damageSymptoms: [
      "Holes in stems",
      "Dead hearts (central leaves die)",
      "Broken stems",
      "Frass near entry holes"
    ],
    lifecycle: "Egg → Larva → Pupa → Adult. Larvae feed inside stems for 3-4 weeks.",
    prevention: [
      "Push-pull technology",
      "Destroy crop residues",
      "Use resistant varieties",
      "Early planting"
    ],
    treatment: [
      "Apply insecticides to whorl early",
      "Use biological control (parasitoids)",
      "Sand and ash mixture in whorls"
    ],
    severity: "high"
  },
  {
    id: "tuta-absoluta",
    name: "Tuta Absoluta (Tomato Leaf Miner)",
    affectedCrops: ["tomatoes"],
    description: "A highly destructive pest that mines leaves and bores into fruits, causing up to 100% yield loss.",
    damageSymptoms: [
      "Serpentine mines on leaves",
      "Holes in fruits",
      "Frass on leaves and fruits",
      "Premature fruit drop"
    ],
    lifecycle: "Egg → Larva (4 instars) → Pupa → Adult. Can complete cycle in 30 days.",
    prevention: [
      "Use pheromone traps",
      "Install insect nets",
      "Crop rotation",
      "Remove infested plant material",
      "Avoid planting near infested fields"
    ],
    treatment: [
      "Apply biological insecticides (Bt, spinosad)",
      "Use pheromone traps for monitoring",
      "Remove infested leaves and fruits",
      "Selective chemical insecticides"
    ],
    severity: "high"
  },
  {
    id: "aphids",
    name: "Aphids",
    affectedCrops: ["beans", "tomatoes", "potatoes"],
    description: "Small sap-sucking insects that cause direct damage and transmit viral diseases.",
    damageSymptoms: [
      "Curled, distorted leaves",
      "Sticky honeydew on leaves",
      "Sooty mold growth",
      "Stunted plant growth",
      "Yellowing leaves"
    ],
    lifecycle: "Live birth, can reproduce rapidly. Multiple generations per season.",
    prevention: [
      "Remove weeds that host aphids",
      "Encourage natural enemies (ladybugs)",
      "Avoid over-fertilizing with nitrogen",
      "Reflective mulches"
    ],
    treatment: [
      "Spray with water to dislodge",
      "Apply insecticidal soap",
      "Use neem oil",
      "Introduce natural predators",
      "Chemical insecticides for severe infestations"
    ],
    severity: "medium"
  },
  {
    id: "bean-fly",
    name: "Bean Fly",
    affectedCrops: ["beans"],
    description: "Small flies whose larvae feed on bean stems, causing wilting and plant death.",
    damageSymptoms: [
      "Wilting of seedlings",
      "Reddish-brown lesions on stems",
      "Stunted growth",
      "Plant breakage at soil level"
    ],
    lifecycle: "Egg → Larva → Pupa → Adult. Complete cycle in 3-4 weeks.",
    prevention: [
      "Early planting",
      "Seed treatment with insecticides",
      "Avoid planting during peak fly season",
      "Use resistant varieties"
    ],
    treatment: [
      "Apply soil insecticides at planting",
      "Use systemic insecticides",
      "Remove and destroy infested plants"
    ],
    severity: "high"
  },
  {
    id: "potato-tuber-moth",
    name: "Potato Tuber Moth",
    affectedCrops: ["potatoes"],
    description: "Larvae mine leaves and tubers, causing damage both in field and storage.",
    damageSymptoms: [
      "Mines in leaves",
      "Tunnels in tubers",
      "Frass on tuber surface",
      "Rotting of infested tubers"
    ],
    lifecycle: "Egg → Larva → Pupa → Adult. Multiple generations per season.",
    prevention: [
      "Hill up soil around plants",
      "Harvest at proper maturity",
      "Ensure good storage conditions",
      "Remove crop debris"
    ],
    treatment: [
      "Apply insecticides during field season",
      "Use pheromone traps",
      "Proper storage management",
      "Biological control agents"
    ],
    severity: "medium"
  }
];

export function getDiseasesByCrop(cropId: string): Disease[] {
  return diseases.filter(d => d.affectedCrops.includes(cropId));
}

export function getPestsByCrop(cropId: string): Pest[] {
  return pests.filter(p => p.affectedCrops.includes(cropId));
}

export function searchDiseases(query: string): Disease[] {
  const lowerQuery = query.toLowerCase();
  return diseases.filter(d =>
    d.name.toLowerCase().includes(lowerQuery) ||
    d.description.toLowerCase().includes(lowerQuery) ||
    d.symptoms.some(s => s.toLowerCase().includes(lowerQuery))
  );
}

export function searchPests(query: string): Pest[] {
  const lowerQuery = query.toLowerCase();
  return pests.filter(p =>
    p.name.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.damageSymptoms.some(s => s.toLowerCase().includes(lowerQuery))
  );
}
