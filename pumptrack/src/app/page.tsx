// src/app/page.tsx
"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import CustomWalletButton from "@/components/CustomWalletButton";
import { usePumpTokens } from "../hooks/usePumpTokens";
import TokenCard from "../components/TokenCard";
import { useEffect, useState } from "react";
import { TokenData } from "@/hooks/usePumpTokens";
import { getJupiterPrice } from "@/lib/jupiter";

export default function Home() {
  const { publicKey } = useWallet();
  const { tokens, loading: tokensLoading } = usePumpTokens();
  const [prices, setPrices] = useState<Record<string, { price: number | null; roi: number | null; loading: boolean; error?: string }>>({});
  const [tokenListLoading, setTokenListLoading] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center p-8 gap-8">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">Pumptrack</h1>
        <CustomWalletButton />
      </div>

      {publicKey && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
          {/* Token cards will go here */}
        </div>
      )}
    </main>
  );
}