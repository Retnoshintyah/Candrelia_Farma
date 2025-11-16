export interface Product {
  id: number;
  name: string;
  type: string;
  imageUrl: string;
  price: string;
  description: string;
}

export interface TeamMember {
  role: string;
  name: string;
  departments?: string[];
}

export interface Organization {
  leadership: TeamMember[];
  cSuite: TeamMember[];
}

export interface CommunityProgram {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
}