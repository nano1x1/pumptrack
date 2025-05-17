// src/app/layout.tsx
import WalletProviders from "@/components/WalletProviders";
import "./globals.css";

export const metadata = {
  title: 'Pumptrack',
  description: 'Track your Solana tokens',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 text-white">
        <WalletProviders>{children}</WalletProviders>
      </body>
    </html>
  );
}