import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const res = await axios.get(`${process.env.SERVER_URL}/scrapeNavigationData`)
  const navigationData = res.data;

  return NextResponse.json(navigationData);
}
