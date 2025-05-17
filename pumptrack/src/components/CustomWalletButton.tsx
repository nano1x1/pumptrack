// src/components/CustomWalletButton.tsx
"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useEffect, useState } from "react";

export default function CustomWalletButton() {
  const { publicKey } = useWallet();

  if (!publicKey) {
    return (
      <WalletMultiButton className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded transition" />
    );
  }

  return (
    <div className="flex flex-col items-center">
      <WalletMultiButton className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded transition">
        {publicKey.toBase58().slice(0, 4)}...{publicKey.toBase58().slice(-4)}
      </WalletMultiButton>
    </div>
  );
}