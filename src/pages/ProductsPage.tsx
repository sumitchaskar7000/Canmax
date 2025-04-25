import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

interface Product {
  id: number
  name: string
  englishName: string
  description: string
  image: string
  category: string
  price: string
  rating: number
  details: string
  specifications: {
    cellCount: string
    availableIn: string
    composition: string
    base: string
  }
  applications: string[]
  dosage: {
    spray: string
    seedTreatment: string
    soilApplication: string
  }
  benefits: string[]
  usage: string
}

// Sample product data
const productData: Product[] = [
  {
    id: 1,
    name: 'TRICOMAX Tricoderma',
    englishName: 'TRICOMAX Tricoderma (Effective Fungal Control)',
    description: 'Tricomax is a dextrose based water soluble formulation containing high potential strains of Trichoderma species.',
    image: '/images/Tricomax.png',
    category: 'biofungicides',
    price: 'Contact for Price',
    rating: 4.8,
    details: 'Tricomax is a dextrose based water soluble formulation containing high potential strains of Trichoderma species. Application of Tricomax helps to increase plant immunity against diseases, improve plant health and also imparts plant growth promotion.',
    specifications: {
      cellCount: '5x10',
      availableIn: '200gm',
      composition: 'High potential strains of Trichoderma species',
      base: 'Dextrose based water soluble formulation'
    },
    applications: [
      'Seed Treatment',
      'Foliar Spray',
      'Drip',
      'Drenching'
    ],
    dosage: {
      spray: '200g/acre, 1g/L',
      seedTreatment: '200g/seed sufficient for 1acre',
      soilApplication: '200g/acre'
    },
    benefits: [
      'Increases plant immunity against diseases',
      'Improves plant health',
      'Promotes plant growth',
      'Effective fungal control',
      'Water soluble formulation for easy application'
    ],
    usage: 'For best results:\n1. Spray: Mix 200g per acre or 1g per liter of water\n2. Seed Treatment: Use 200g per seed quantity sufficient for 1 acre\n3. Soil Application: Apply 200g per acre'
  },
  {
    id: 2,
    name: 'SUDOMAX Pseudomonas',
    englishName: 'SUDOMAX Pseudomonas (Effective Fungal Control)',
    description: 'Sudomax is a dextrose based formulation containing Pseudomonas strains, used for pre-sowing bacterization and surface treatment of seeds.',
    image: '/images/Sudomax.png',
    category: 'biofungicides',
    price: 'Contact for Price',
    rating: 4.7,
    details: 'Sudomax is a dextrose based formulation containing Pseudomonas strains, used for pre-sowing bacterization and surface treatment of seeds and also used for foliar and soil application. It helps for prevention of attack of fungal pathogens thereby increasing overall growth of plants and increases the productivity.',
    specifications: {
      cellCount: '5x10',
      availableIn: '200gm',
      composition: 'Pseudomonas strains',
      base: 'Dextrose based formulation'
    },
    applications: [
      'Seed Treatment',
      'Foliar Spray',
      'Drip',
      'Drenching'
    ],
    dosage: {
      spray: '200g/acre, 1g/L',
      seedTreatment: '200g/seed sufficient for 1acre',
      soilApplication: '200g/acre'
    },
    benefits: [
      'Prevents fungal pathogen attacks',
      'Increases overall plant growth',
      'Enhances productivity',
      'Improves plant health'
    ],
    usage: 'For best results:\n1. Spray: Mix 200g per acre or 1g per liter of water\n2. Seed Treatment: Use 200g per seed quantity sufficient for 1 acre\n3. Soil Application: Apply 200g per acre'
  },
  {
    id: 3,
    name: 'CAN PLUS KMB',
    englishName: 'CAN PLUS KMB Potash Mobilizing Bacteria',
    description: 'Canplus-KMB is a formulation comprising consortium of highly effective Potash Mobil Bacteria. It increases the availability of unavailable K+ in the soil.',
    image: '/images/KMB.png',
    category: 'biofertilizers',
    price: 'Contact for Price',
    rating: 4.6,
    details: 'Canplus-KMB is a formulation comprising consortium of highly effective Potash Mobil Bacteria and it increases the availability of unavailable K+ in the soil and thereby increases mineral uptake by the plant.',
    specifications: {
      cellCount: '10x10',
      availableIn: '200gm',
      composition: 'Potash Mobilizing Bacteria',
      base: 'Bacterial consortium'
    },
    applications: [
      'Soil Application'
    ],
    dosage: {
      spray: 'N/A',
      seedTreatment: 'N/A',
      soilApplication: '200gm per acre'
    },
    benefits: [
      'Mobilizes Potash in the soil',
      'Increases disease resistance and drought tolerance',
      'Helps in photosynthesis process',
      'Translocates carbohydrates to roots and fruits',
      'Increases crop yield',
      'Regulates stomata opening and closing',
      'Enhances fruit size and color',
      'Improves shelf life of produce'
    ],
    usage: 'Apply 200gm per acre through soil application for best results.'
  },
  {
    id: 4,
    name: 'MICROZIL VAM',
    englishName: 'MICROZIL Vesicular Arbuscular Mycorrhiza',
    description: 'Microzil is a symbiotic mutualistic relationship between special soil fungi and fine plant roots. The fungus acts as an extension of the root system.',
    image: '/images/Microzil.png',
    category: 'biofertilizers',
    price: 'Contact for Price',
    rating: 4.5,
    details: 'Microzil (Mycorrhiza) is a symbiotic mutualistic relationship between special soil fungi and fine plant roots. The fungus takes over the role of the plant\'s root hair and acts as an extension of the root system. Microzil provides all necessary nutrients from soil.',
    specifications: {
      cellCount: '1 lac IP/200gm',
      availableIn: '200gm Powder',
      composition: 'Vesicular Arbuscular Mycorrhiza',
      base: 'Natural fungal culture'
    },
    applications: [
      'Dip',
      'Drenching'
    ],
    dosage: {
      spray: 'N/A',
      seedTreatment: 'N/A',
      soilApplication: '200g/acre'
    },
    benefits: [
      'Enhances nutrient uptake',
      'Improves root system development',
      'Increases plant growth',
      'Provides essential nutrients'
    ],
    usage: 'Apply 200g per acre through soil application for optimal results.'
  },
  {
    id: 5,
    name: 'CAN PLUS PSB',
    englishName: 'CAN PLUS PSB Phosphate Solubilizing Bacteria',
    description: 'Canplus PSB is a formulation containing consortium of highly effective Phosphate Solubilizing Bacteria.',
    image: '/images/PSB.png',
    category: 'biofertilizers',
    price: 'Contact for Price',
    rating: 4.7,
    details: 'Canplus PSB is a formulation containing consortium of highly effective Phosphate Solubilizing Bacteria (PSB) and it enhances the bioavailability of phosphates by solubilizing insoluble phosphates by producing organic acids and different enzymes.',
    specifications: {
      cellCount: '10x10',
      availableIn: '200gm',
      composition: 'Phosphate Solubilizing Bacteria',
      base: 'Bacterial consortium'
    },
    applications: [
      'Soil Application'
    ],
    dosage: {
      spray: 'N/A',
      seedTreatment: 'N/A',
      soilApplication: '200gm per acre'
    },
    benefits: [
      'Enhances bioavailability of phosphorus',
      'Facilitates cell division and DNA formation',
      'Enhances root development',
      'Increases flower development and fruit set',
      'Fastens crop maturity',
      'Helps in ATP formation',
      'Increases crop yield'
    ],
    usage: 'Apply 200gm per acre through soil application for best results.'
  },
  {
    id: 6,
    name: 'FULVIMAX',
    englishName: 'FULVIMAX Fulvic Acid 60%',
    description: 'FulviMax is a high-quality fulvic acid formulation for enhanced plant growth.',
    image: '/images/FulviMax Box.png',
    category: 'organic_fertilizers',
    price: 'Contact for Price',
    rating: 4.8,
    details: 'FulviMax is a premium fulvic acid formulation that enhances plant growth and soil health.',
    specifications: {
      cellCount: 'N/A',
      availableIn: '500gm, 1Kg',
      composition: 'Organic Fulvic Acid 60% w/w, Biological K 12% w/w',
      base: 'Organic formulation'
    },
    applications: [
      'Soil Application',
      'Foliar Spray'
    ],
    dosage: {
      spray: 'As recommended',
      seedTreatment: 'N/A',
      soilApplication: 'As recommended'
    },
    benefits: [
      'Activates and improves soil structure',
      'Improves fertilizer usage',
      'Stimulates microbial activity',
      'Increases water exploitation',
      'Enhances photosynthesis',
      'Improves ventilation'
    ],
    usage: 'Apply as per recommended dosage for soil application or foliar spray.'
  },
  {
    id: 7,
    name: 'HUMIMAX',
    englishName: 'HUMIMAX Humic Acid 98%',
    description: 'HumiMax is a high-concentration humic acid formulation for soil improvement.',
    image: '/images/Humimax Box.png',
    category: 'organic_fertilizers',
    price: 'Contact for Price',
    rating: 4.9,
    details: 'HumiMax is a premium humic acid formulation that enhances soil fertility and plant growth.',
    specifications: {
      cellCount: 'N/A',
      availableIn: '500gm, 1Kg',
      composition: 'Potassium Humate 98% w/w',
      base: 'Organic formulation'
    },
    applications: [
      'Soil Application'
    ],
    dosage: {
      spray: 'N/A',
      seedTreatment: 'N/A',
      soilApplication: 'As recommended'
    },
    benefits: [
      'Adds organic matter to soil',
      'Increases root development',
      'Improves nutrient uptake',
      'Enhances seed germination',
      'Increases chlorophyll synthesis',
      'Stimulates microbial activity',
      'Improves fertilizer availability',
      'Increases crop yield and quality'
    ],
    usage: 'Apply as per recommended dosage for soil application.'
  },
  {
    id: 8,
    name: 'BIO 21',
    englishName: 'BIO 21 Flowering And Fruiting Enhancer',
    description: 'Bio 21 is a liquid fertilizer for enhanced flowering and fruiting.',
    image: '/images/Bio 21.png',
    category: 'fertilizers',
    price: 'Contact for Price',
    rating: 4.7,
    details: 'Bio 21 is a liquid fertilizer, source of phosphorus, potassium & micronutrients that provide better filling of grains and fruits.',
    specifications: {
      cellCount: 'N/A',
      availableIn: '250ml, 500ml, 1kg',
      composition: 'N: 2.20%, P: 6.00%, K: 8.30%, Zn: 0.70%, Fe: 0.50%, Ca: 1.22%, B: 0.15%, Alginic Acids: 9.00%, Vitamins: 3.50%, Polysaccharides: 9.50%',
      base: 'Liquid formulation'
    },
    applications: [
      'Foliar Spray',
      'Soil Application'
    ],
    dosage: {
      spray: 'As recommended',
      seedTreatment: 'N/A',
      soilApplication: 'As recommended'
    },
    benefits: [
      'Enhances flowering and fruiting',
      'Improves disease resistance',
      'Corrects micronutrient deficiencies',
      'Increases chlorophyll content',
      'Promotes overall growth',
      'Enhances leaf size',
      'Improves bud and shoot formation'
    ],
    usage: 'Apply as per recommended dosage for foliar spray or soil application.'
  },
  {
    id: 9,
    name: 'BIO SAMSUDHI',
    englishName: 'BIO SAMSUDHI Plant Growth Promoter',
    description: 'Bio Samrudhi is a Concentrated Mixture of Enzyme, Super Potassium Humate, Amino, Fulvic.',
    image: '/images/Bio Samrudhi.png',
    category: 'organic_fertilizers',
    price: 'Contact for Price',
    rating: 4.6,
    details: 'Bio Samrudhi is a Concentrated Mixture of Enzyme, Super Potassium Humate, Amino, Fulvic that is Suitable for Soil.',
    specifications: {
      cellCount: 'N/A',
      availableIn: '250ml, 500ml, 1 Ltr',
      composition: 'Enzyme, Super Potassium Humate, Amino, Fulvic',
      base: 'Liquid organic formulation'
    },
    applications: [
      'Soil Application',
      'Foliar Spray'
    ],
    dosage: {
      spray: 'As recommended',
      seedTreatment: 'N/A',
      soilApplication: 'As recommended'
    },
    benefits: [
      'Improves flower induction and fruit setting',
      'Enhances crop size and weight',
      'Improves flavor and taste',
      'Increases disease resistance',
      'Improves soil aeration',
      'Encourages soil microbes',
      'Promotes root development',
      'Reduces chemical fertilizer usage',
      'Accelerates seed germination'
    ],
    usage: 'Apply as per recommended dosage for soil application or foliar spray.'
  },
  {
    id: 10,
    name: 'TEERAFERT',
    englishName: 'TEERAFERT 00:42:47 + 2.8% Fe',
    description: 'TeeraFert is a water-soluble fertilizer rich in phosphorus and potash.',
    image: '/images/TeeraFert 0_42_47.png',
    category: 'fertilizers',
    price: 'Contact for Price',
    rating: 4.8,
    details: 'TeeraFert 00:42:47 is rich in water soluble phosphorus & potash, suitable for pre-bloom and post-bloom applications.',
    specifications: {
      cellCount: 'N/A',
      availableIn: '2.5kg, 5kg',
      composition: 'P₂O₅: 42.0% min, K₂O: 47.0% min, Fe: 2.8% min',
      base: 'Water-soluble formulation'
    },
    applications: [
      'Foliar Spray',
      'Soil Application'
    ],
    dosage: {
      spray: 'As recommended',
      seedTreatment: 'N/A',
      soilApplication: 'As recommended'
    },
    benefits: [
      'Rich in water-soluble phosphorus & potash',
      'Suitable for pre-bloom and post-bloom applications',
      'Improves fruit ripening and color',
      'Enhances fruit lustre and taste',
      'Promotes uniform color development'
    ],
    usage: 'Apply as per recommended dosage for foliar spray or soil application.'
  },
  {
    id: 11,
    name: 'KADU PLUS',
    englishName: 'KADU PLUS Sucking Pest Controller',
    description: 'Kadu Plus is a unique botanical extract for pest control.',
    image: '/images/Kadu Plus.png',
    category: 'pesticides',
    price: 'Contact for Price',
    rating: 4.5,
    details: 'Kadu Plus is a unique botanical extract that acts as a contact poison and repellent, protecting crops from pests.',
    specifications: {
      cellCount: 'N/A',
      availableIn: '250ml, 500ml, 1 Ltr',
      composition: 'Herbal Extracts 20%',
      base: 'Botanical formulation'
    },
    applications: [
      'Foliar Spray'
    ],
    dosage: {
      spray: 'As recommended',
      seedTreatment: 'N/A',
      soilApplication: 'N/A'
    },
    benefits: [
      'Controls red spider mite',
      'Controls yellow mites',
      'Controls thrips',
      'Controls leaf miners',
      'Controls white fly',
      'Acts as repellent',
      'Safe for crops'
    ],
    usage: 'Apply as per recommended dosage for foliar spray.'
  },
  {
    id: 12,
    name: 'ORTHOMAX',
    englishName: 'ORTHOMAX Orthosilicic Acid (OSA) 2.0% WSL',
    description: 'OrthoMax is a silicon-based plant nutrient for enhanced growth.',
    image: '/images/Orthomax.png',
    category: 'fertilizers',
    price: 'Contact for Price',
    rating: 4.7,
    details: 'OrthoMax contains Orthosilicic Acid (OSA) 2.0% for improved plant growth and stress resistance.',
    specifications: {
      cellCount: 'N/A',
      availableIn: '250ml, 500ml, 1 Ltr',
      composition: 'Orthosilicic Acid (Si(OH)4) 2.0% Min',
      base: 'Water-soluble formulation'
    },
    applications: [
      'Foliar Spray',
      'Soil Application'
    ],
    dosage: {
      spray: 'As recommended',
      seedTreatment: 'N/A',
      soilApplication: 'As recommended'
    },
    benefits: [
      'Improves nutrient absorption',
      'Increases plant yields',
      'Enhances stress tolerance',
      'Improves fruit quality',
      'Reduces water consumption',
      'Decreases fertilizer and pesticide needs'
    ],
    usage: 'Apply as per recommended dosage for foliar spray or soil application.'
  },
  {
    id: 13,
    name: 'CALBION',
    englishName: 'CALBION Flowering And Fruiting Enhancer',
    description: 'Calbion is an amino acid-based plant growth promoter.',
    image: '/images/Calbion.png',
    category: 'fertilizers',
    price: 'Contact for Price',
    rating: 4.6,
    details: 'Calbion contains enzymatically hydrolyzed protein with balanced amino acids for enhanced plant growth.',
    specifications: {
      cellCount: 'N/A',
      availableIn: '250ml, 500ml, 1 Ltr',
      composition: 'Enzymatically hydrolyzed protein 75% (HPLC)',
      base: 'Amino acid formulation'
    },
    applications: [
      'Foliar Spray'
    ],
    dosage: {
      spray: 'As recommended',
      seedTreatment: 'N/A',
      soilApplication: 'N/A'
    },
    benefits: [
      'Enhances protein synthesis',
      'Improves stress resistance',
      'Promotes chlorophyll synthesis',
      'Enhances phytohormone production',
      'Increases pollen germination',
      'Improves pollinic tube length'
    ],
    usage: 'Apply as per recommended dosage for foliar spray.'
  },
  {
    id: 14,
    name: 'BIOGREEN',
    englishName: 'BIOGREEN Flowering And Fruiting Enhancer',
    description: 'BioGreen is a natural seaweed extract for plant growth enhancement.',
    image: '/images/Bio Green.png',
    category: 'organic_fertilizers',
    price: 'Contact for Price',
    rating: 4.8,
    details: 'BioGreen is an ideal organic product for better growth and productivity, suitable for all types of plants.',
    specifications: {
      cellCount: 'N/A',
      availableIn: '250ml, 500ml, 1 Ltr',
      composition: 'Natural Sea Weed extract 20.00% min',
      base: 'Seaweed extract'
    },
    applications: [
      'Foliar Spray',
      'Soil Application'
    ],
    dosage: {
      spray: 'As recommended',
      seedTreatment: 'N/A',
      soilApplication: 'As recommended'
    },
    benefits: [
      'Enhances chlorophyll content',
      'Improves water and mineral uptake',
      'Promotes root and shoot elongation',
      'Increases crop yield',
      'Suitable for all plant types'
    ],
    usage: 'Apply as per recommended dosage for foliar spray or soil application.'
  },
  {
    id: 15,
    name: 'NANO SHIELD',
    englishName: 'NANO SHIELD Hydrogen Peroxide With Nano Silver',
    description: 'Nano Shield is a broad spectrum biocide containing Nano Silver and Hydrogen Peroxide.',
    image: '/images/Nano Shield.png',
    category: 'pesticides',
    price: 'Contact for Price',
    rating: 4.8,
    details: 'Nano Shield is a broad spectrum biocide containing Nano Silver and Hydrogen Peroxide. It is effective against bacterial, fungal, and viral infections while being non-toxic to humans.',
    specifications: {
      cellCount: 'N/A',
      availableIn: '250ml, 500ml, 1Ltr',
      composition: 'Nano Silver, H2O2 50%, 500 ppm',
      base: 'Nano Silver formulation'
    },
    applications: [
      'Foliar Spray',
      'Post-Harvest Treatment'
    ],
    dosage: {
      spray: 'As recommended',
      seedTreatment: 'N/A',
      soilApplication: 'N/A'
    },
    benefits: [
      'Broad spectrum biocide',
      'Non-toxic to humans',
      'Active in wide pH and temperature range',
      'Inhibits microbial growth',
      'Effective against bacteria, fungi, and viruses',
      'Effective at low concentrations',
      'Acts as preventive and curative agent',
      'Extends shelf life of fruits and vegetables'
    ],
    usage: 'Apply as per recommended dosage for foliar spray or post-harvest treatment.'
  },
  {
    id: 16,
    name: 'TEERAFERT BORON',
    englishName: 'TEERAFERT BORON Boron Ethanolamine 10%',
    description: 'TeeraFert Boron is a liquid boron formulation for effective plant nutrition.',
    image: '/images/Boron.png',
    category: 'fertilizers',
    price: 'Contact for Price',
    rating: 4.7,
    details: 'TeeraFert Boron is a liquid boron formulation that is readily absorbed by plants through leaves, helping in cell wall formation and metabolic pathways.',
    specifications: {
      cellCount: 'N/A',
      availableIn: '250ml, 500ml, 1Ltr',
      composition: 'Boron Ethanolamine 10% w/v, Boron (as B)',
      base: 'Liquid formulation'
    },
    applications: [
      'Foliar Spray'
    ],
    dosage: {
      spray: 'As recommended',
      seedTreatment: 'N/A',
      soilApplication: 'N/A'
    },
    benefits: [
      'Readily absorbed through leaves',
      'Fast acting formula',
      'Helps in cell wall formation',
      'Assists in metabolic pathways',
      'Promotes flower initiation',
      'Improves fruit set'
    ],
    usage: 'Apply as per recommended dosage for foliar spray.'
  },
  {
    id: 17,
    name: 'TEERAFERT K',
    englishName: 'TEERAFERT K Potash',
    description: 'TeeraFert K is a liquid potassium formulation for enhanced plant growth.',
    image: '/images/K.png',
    category: 'fertilizers',
    price: 'Contact for Price',
    rating: 4.6,
    details: 'TeeraFert K is a liquid potassium formulation that helps in fruit ripening, firmness, and overall plant health.',
    specifications: {
      cellCount: 'N/A',
      availableIn: '250ml, 500ml, 1Ltr',
      composition: 'Total Potassium (as K2O) 46.5% w/w, Nitrogen (as N) 31% w/w',
      base: 'Liquid formulation'
    },
    applications: [
      'Foliar Spray',
      'Soil Application'
    ],
    dosage: {
      spray: 'As recommended',
      seedTreatment: 'N/A',
      soilApplication: 'As recommended'
    },
    benefits: [
      'More than 30% liquid potassium',
      'Converts to carbohydrates for fruit ripening',
      'Firms fruits and vegetables',
      'Regulates electrolytes and turgidity',
      'Essential in respiration and transpiration',
      'Assists in cell division',
      'Helps in protein & carbohydrate formation',
      'Improves disease resistance'
    ],
    usage: 'Apply as per recommended dosage for foliar spray or soil application.'
  },
  {
    id: 18,
    name: 'TEERAFERT ZnO',
    englishName: 'TEERAFERT ZnO Zinc Oxide 39.5%',
    description: 'TeeraFert ZnO is a highly concentrated zinc formulation for plant nutrition.',
    image: '/images/Zno.png',
    category: 'fertilizers',
    price: 'Contact for Price',
    rating: 4.8,
    details: 'TeeraFert ZnO is a highly concentrated flowable zinc formulation containing 39.5% zinc, effective in preventing and treating zinc deficiency.',
    specifications: {
      cellCount: 'N/A',
      availableIn: '250ml, 500ml, 1Ltr',
      composition: 'Zinc (as Zn) 38.5%, pH 9.0±1%',
      base: 'Flowable formulation'
    },
    applications: [
      'Foliar Spray',
      'Soil Application'
    ],
    dosage: {
      spray: 'As recommended',
      seedTreatment: 'N/A',
      soilApplication: 'As recommended'
    },
    benefits: [
      'Good mobility within plants',
      'Prevents and treats zinc deficiency',
      'Activates enzymes for protein synthesis',
      'Essential for chlorophyll formation',
      'Helps in carbohydrate metabolism',
      'Regulates growth and stem elongation',
      'Highly concentrated formulation',
      'Lower application rates required'
    ],
    usage: 'Apply as per recommended dosage for foliar spray or soil application.'
  },
  {
    id: 19,
    name: 'TEERAFERT 00:48:47 +TE',
    englishName: 'TEERAFERT 00:48:47 +TE Water Soluble Fertilizer',
    description: 'TEERAFERT 00:48:47 +TE is a high phosphorus and potassium fertilizer for enhanced crop growth.',
    image: '/images/TeeraFert 0_48_47.png',
    category: 'fertilizers',
    price: 'Contact for Price',
    rating: 4.8,
    details: 'TEERAFERT 00:48:47 +TE is a water-soluble fertilizer with high phosphorus and potassium content, ideal for flowering and fruiting stages.',
    specifications: {
      cellCount: 'N/A',
      availableIn: '2.5kg, 5kg',
      composition: 'Water Soluble Phosphate (as P2O5) 48.0% w/w min, Total Soluble Potassium (as K2O) 47.0% w/w min',
      base: 'Water-soluble formulation'
    },
    applications: [
      'Foliar Spray',
      'Soil Application'
    ],
    dosage: {
      spray: 'As recommended',
      seedTreatment: 'N/A',
      soilApplication: 'As recommended'
    },
    benefits: [
      'Promotes crop growth by stimulating new root development',
      'Reduces flower drop',
      'Increases fruit setting',
      'Improves yield and quality of produce',
      'Ideal for early flowering stage',
      'Suitable for early fruit formation',
      'Effective during fruit development',
      'High phosphorus content for better growth'
    ],
    usage: 'Apply as per recommended dosage for foliar spray or soil application, especially during flowering and fruiting stages.'
  },
  {
    id: 20,
    name: 'TEERAFERT CALMAX',
    englishName: 'TEERAFERT CALMAX Liquid Calcium 26%',
    description: 'TEERAFERT CALMAX is a liquid calcium formulation for enhanced plant growth and fruit quality.',
    image: '/images/Calmax.png',
    category: 'fertilizers',
    price: 'Contact for Price',
    rating: 4.7,
    details: 'TEERAFERT CALMAX is a liquid calcium formulation that strengthens cell walls, improves fruit quality, and enhances plant health.',
    specifications: {
      cellCount: 'N/A',
      availableIn: '250ml, 500ml, 1Ltr',
      composition: 'Calcium (as Ca) 26% min',
      base: 'Liquid formulation'
    },
    applications: [
      'Foliar Spray',
      'Soil Application'
    ],
    dosage: {
      spray: 'As recommended',
      seedTreatment: 'N/A',
      soilApplication: 'As recommended'
    },
    benefits: [
      'Strengthens cell walls',
      'Increases resistance to pests and diseases',
      'Improves oxygen levels in soil',
      'Enhances root growth',
      'Improves drainage',
      'Promotes beneficial soil bacteria',
      'Main transporter of nutrients',
      'Improves fruit firmness',
      'Enhances storability',
      'Improves color and skin finish',
      'Increases fruit market value',
      'Promotes fruit set',
      'Increases fruit yields'
    ],
    usage: 'Apply as per recommended dosage for foliar spray or soil application, especially during flowering stage.'
  },
  {
    id: 21,
    name: 'TEERAFERT CBZ',
    englishName: 'TEERAFERT CBZ Complexed Calcium, Boron & Zinc',
    description: 'TEERAFERT CBZ is a unique formulation containing Calcium, Boron, and Zinc for comprehensive plant nutrition.',
    image: '/images/CBZ.png',
    category: 'fertilizers',
    price: 'Contact for Price',
    rating: 4.8,
    details: 'TEERAFERT CBZ is a complexed formulation of Calcium, Boron, and Zinc with organic nitrogen and amino acids for better nutrient absorption.',
    specifications: {
      cellCount: 'N/A',
      availableIn: '250ml, 500ml, 1Ltr',
      composition: 'Calcium Peptide 4.5%, Boron 8%, Zinc Peptide 5%',
      base: 'Complexed formulation'
    },
    applications: [
      'Foliar Spray'
    ],
    dosage: {
      spray: 'As recommended',
      seedTreatment: 'N/A',
      soilApplication: 'N/A'
    },
    benefits: [
      'Corrects Zinc, Boron & Calcium deficiency',
      'Promotes chlorophyll formation',
      'Stimulates auxin and growth hormones',
      'Increases photosynthesis',
      'Activates protein synthesis enzymes',
      'Improves pollination',
      'Enhances seed formation',
      'Promotes flower and fruit setting',
      'Improves root development',
      'Enhances nutrient absorption',
      'Improves respiration and transpiration',
      'Facilitates translocation'
    ],
    usage: 'Apply as per recommended dosage for foliar spray to correct nutrient deficiencies and optimize yield.'
  }
]

// Categories for filtering
const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'biofungicides', name: 'Biofungicides' },
  { id: 'seeds', name: 'Seeds' },
  { id: 'pesticides', name: 'Pest Control' },
  { id: 'equipment', name: 'Equipment' },
]

// Export product data for use in ProductDetailPage
export const products: Product[] = productData

export default function ProductsPage() {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const categoryParam = queryParams.get('category')

  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Handle category filter change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="py-10">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-accent mb-4">Our Products</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Discover our wide range of high-quality agricultural products designed to maximize your farm's productivity and sustainability.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0 mb-8">
          <div className="w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full md:w-64 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="h-48 bg-gray-50 flex items-center justify-center relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-2"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.txt';
                      target.onerror = null;
                    }}
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-sm font-medium text-secondary capitalize">{product.category}</span>
                  <h3 className="text-xl font-semibold my-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm flex-grow">{product.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-xl">{product.price}</span>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <span>★</span>
                      <span className="text-sm text-gray-700">{product.rating}</span>
                    </div>
                  </div>
                  <Link
                    to={`/products/${product.id}`}
                    className="block w-full text-center btn-primary"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">No products found</h3>
            <p className="mt-2 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
            <button
              onClick={() => {
                setSelectedCategory('all')
                setSearchQuery('')
              }}
              className="mt-4 btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
} 