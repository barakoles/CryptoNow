export interface Asset {
  id: string;
  name: string;
  profile: {
    background: string;
    category: string;
    consensus_algorithm: string;
    is_verifies: boolean;
  };
  overview: string;
  tagline: string;
  technology: string;
  slug: string;
  symbol: string;
}
