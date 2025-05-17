// src/lib/jupiter.ts
import axios from "axios";

export async function getJupiterPrice(tokenMint: string): Promise<{ price: number | null, error?: string }> {
  try {
    const response = await axios.get(`/api/jupiter?mint=${tokenMint}`);
    const { price } = response.data;

    return {
      price: price ? parseFloat(price) : null,
    };
  } catch (error: any) {
    console.error("Failed to fetch price:", error);
    return {
      price: null,
      error: error.message || "Failed to fetch price",
    };
  }
}