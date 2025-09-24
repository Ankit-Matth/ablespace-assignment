import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await axios.get(`${process.env.SERVER_URL}/scrapeCategories`);
    const categories = res.data;

    return NextResponse.json(categories);

  } catch (error) {
    console.error('API Error fetching categories:', error);
    
    return NextResponse.json(
      { message: 'Failed to fetch category data' },
      { status: 500 }
    );
  }
}