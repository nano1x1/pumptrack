// src/hooks/usePumpTokens.ts
"use client";

import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

export interface TokenData {
  pubkey: string;
  mint: string;
  balance: number;
  symbol: string;
  name: string;
  image: string | null;
}

export const usePumpTokens = () => {
  const { publicKey } = useWallet();
  const [tokens, setTokens] = useState<TokenData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!publicKey) {
      setTokens([]);
      setLoading(false);
      return;
    }

    // Simulated delay
    const timer = setTimeout(() => {
      const mockTokens: TokenData[] = [
        {
          pubkey: "mockPubkey1",
          mint: "AQoKY8pQga6V7X1g8qQB5KYZ1z1wewF65Z7Dx17DTG1Z",
          balance: 1_000_000,
          symbol: "MOCK",
          name: "Mock Pump Token",
          image: null,
        },
        {
          pubkey: "mockPubkey2",
          mint: "HQaDn7QxjvjZ7Kp8Q1X1l9v7X1g8qQB5KYTxiXuwcW3E",
          balance: 500_000,
          symbol: "TEST",
          name: "Test Pump Token",
          image: null,
        },
      ];

      setTokens(mockTokens);
      setLoading(false);
    }, 1000);
  }, [publicKey]);

  return { tokens, loading };
};