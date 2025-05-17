// src/app/api/jupiter/route.ts
import { NextRequest } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const mint = searchParams.get("mint");

  if (!mint) {
    return Response.json({ error: "Missing mint address" }, { status: 400 });
  }

  try {
    const res = await axios.get(`https://price.jup.ag/v6/price?ids= ${mint}`);
    const price = res.data.data[mint]?.price;

    if (!price) {
      return Response.json({ error: "Token price not found" }, { status: 404 });
    }

    return Response.json({ price });
  } catch (error) {
    console.error("Failed to fetch price:", error);
    return Response.json({ error: "Failed to fetch price" }, { status: 500 });
  }
}