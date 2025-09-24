import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { categorySlug } = body;

  try {
    const res = await axios.get(
      `${process.env.SERVER_URL}/scrapeProducts`,
      { params: { categorySlug } }
    );

    const products = res.data;

    return new NextResponse(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: error instanceof Error ? error.message : 'An unknown error occurred' }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}