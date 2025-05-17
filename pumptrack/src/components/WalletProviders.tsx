"use client";

import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl, Cluster } from "@solana/web3.js";
import { useMemo } from "react";
require("@solana/wallet-adapter-react-ui/styles.css");

export default function WalletProviders({ children }: { children: React.ReactNode }) {
  const network = "devnet" as Cluster;
  const endpoint = useMemo(() => process.env.NEXT_PUBLIC_RPC_ENDPOINT || clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}