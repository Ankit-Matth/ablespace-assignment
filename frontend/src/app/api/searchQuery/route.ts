import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    const res = await axios.get(`${process.env.SERVER_URL}/scrapeSearchResults`, {
      params: { query },
    });

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
