// src/components/PhantomProvider.tsx
"use client";

import React, { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

export default function PhantomProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const network = "mainnet-beta";
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(), // This should be available if Phantom is installed
    ],
    []
  );

  // 👇 Log wallets to debug
  console.log("Available wallets in provider:", wallets);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        {children}
      </WalletProvider>
    </ConnectionProvider>
  );
}