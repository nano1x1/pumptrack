// src/components/TokenCard.tsx
"use client";

import { TokenData } from "@/hooks/usePumpTokens";
import React from "react";

interface TokenCardProps {
  token: TokenData;
  price: number | null;
  roi: number | null;
  loading: boolean;
  error?: string;
}

export default function TokenCard({ token, price, roi, loading, error }: TokenCardProps) {
  const usdValue = price ? (token.balance / 1e9) * price : null;

  return (
    <div className="bg-gray-800 p-4 rounded shadow border border-gray-700 hover:border-purple-500 transition">
      <h2 className="text-xl font-semibold">{token.symbol} ({token.name})</h2>
      <p>Balance: {(token.balance / 1e9).toLocaleString()} {token.symbol}</p>

      {loading && <p className="text-yellow-400 mt-2">Fetching price...</p>}

      {error && <p className="text-red-400 mt-2">{error}</p>}

      {!loading && !error && (
        <>
          {price && <p>Price: ${(price).toFixed(6)}</p>}
          {usdValue && <p>Value: ${usdValue.toFixed(2)}</p>}
          {roi !== null && (
            <p className={roi >= 0 ? "text-green-400" : "text-red-400"}>
              ROI: {roi >= 0 ? "+" : ""}{roi.toFixed(2)}%
            </p>
          )}
        </>
      )}
    </div>
  );
}