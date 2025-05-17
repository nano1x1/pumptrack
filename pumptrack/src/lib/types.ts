// src/lib/types.ts
export interface TokenData {
  pubkey: string;
  mint: string;
  balance: number;
  symbol: string;
  name: string;
  image: string | null;
}

export interface TokenPriceState {
  [mintAddress: string]: {
    price: number | null;
    roi: number | null;
    loading: boolean;
    error?: string;
  };
}