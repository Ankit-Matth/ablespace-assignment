import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const sourceUrl = searchParams.get("sourceUrl");

    if (!sourceUrl) {
      return NextResponse.json(
        { error: "The 'sourceUrl' query parameter is required." },
        { status: 400 }
      );
    }
    
    try {
      new URL(sourceUrl);
    } catch {
      return NextResponse.json(
        { error: "The provided 'sourceUrl' is not a valid URL." },
        { status: 400 }
      );
    }

    const response = await axios.get(`${process.env.SERVER_URL}/scrapeProductDetails`, {
      params: { sourceUrl },
    });

    return NextResponse.json(response.data, { status: 200 });

  } catch (error) {
    console.error("API route error:", error);

    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        {
          error: "Failed to fetch data from the scraper service.",
          details: error.response?.data,
        },
        { status: error.response?.status || 500 }
      );
    }

    return NextResponse.json(
      { error: "An unexpected internal server error occurred." },
      { status: 500 }
    );
  }
}