export interface Asset {
  id: string;
  name: string;
  metrics: {
    all_time_high: {
      price: number;
      percent_down: number;
    };
    market_data: {
      percent_change_btc_last_24_hours: number;
      percent_change_eth_last_24_hours: number;
      price_btc: number;
      price_eth: number;
      price_usd: number;
    };
  };
  profile: {
    background: string;
    category: string;
    consensus_algorithm: string;
    is_verifies: boolean;
    tagline: string;
  };
  overview: string;
  tagline: string;
  technology: string;
  slug: string;
  symbol: string;
}
