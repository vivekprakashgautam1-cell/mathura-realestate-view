// Mirrors the field whitelist returned by mathura-crm's public API
// (PUBLIC_PROPERTY_FIELDS in lib/mongodb.js) — never add owner/commission/
// internal-CRM fields here, the backend won't send them anyway.
export type PropertyStatus = "Available" | "Reserved" | "Sold" | "Under Construction";

export interface PropertyDocument {
  category: string;
  name: string;
  url: string;
}

export interface PublicProperty {
  id: string;
  name: string;
  projectName?: string;
  type?: string;
  category?: string;
  status: PropertyStatus;
  city?: string;
  area?: string;
  locality?: string;
  landmark?: string;
  address?: string;
  pincode?: string;
  latitude?: number;
  longitude?: number;
  mapPin?: string;
  builder?: string;
  price: number;
  sqft?: number;
  bedrooms?: number;
  bathrooms?: number;
  balconies?: number;
  possession?: string;
  availability?: string;
  reraNumber?: string;
  highlight?: string;
  description?: string;
  tags?: string[];
  seoTitle?: string;
  seoDescription?: string;
  imageUrl?: string;
  images?: string[];
  images360?: string[];
  virtualTourUrl?: string;
  droneVideoUrl?: string;
  youtubeVideoUrl?: string;
  featured?: boolean;
  amenities?: string[];
  plotArea?: number;
  builtUpArea?: number;
  superArea?: number;
  carpetArea?: number;
  facing?: string;
  floor?: number;
  totalFloors?: number;
  parking?: string;
  furnishing?: string;
  ageOfProperty?: string;
  documents?: PropertyDocument[];
  created_at?: string;
}
