import { NextRequest, NextResponse } from "next/server";
import axios from "axios";


const fallBackData = [
  {
    "id": 1,
    "title": "Leaders Eat Last",
    "author": "Simon Sinek",
    "price": "$5.38",
    "image_url": "https://image-server.worldofbooks.com/images/9781591848011.jpg",
    "source_url": "https://www.worldofbooks.com/products/leaders-eat-last-book-simon-sinek-9781591848011",
    "last_scraped_at": "7:11 PM"
  },
  {
    "id": 2,
    "title": "The Millionaire Next Door",
    "author": "Thomas J Stanley Phd",
    "price": "$4.47",
    "image_url": "https://image-server.worldofbooks.com/images/9781589795471.jpg",
    "source_url": "https://www.worldofbooks.com/products/millionaire-next-door-book-thomas-j-stanley-phd-9781589795471",
    "last_scraped_at": "7:11 PM"
  },
  {
    "id": 3,
    "title": "The Tipping Point",
    "author": "Malcolm Gladwell",
    "price": "$3.49",
    "image_url": "https://image-server.worldofbooks.com/images/9780316346627.jpg",
    "source_url": "https://www.worldofbooks.com/products/tipping-point-book-malcolm-gladwell-9780316346627",
    "last_scraped_at": "7:11 PM"
  },
  {
    "id": 4,
    "title": "Surrounded by Idiots",
    "author": "Thomas Erikson",
    "price": "$9.31",
    "image_url": "https://image-server.worldofbooks.com/images/9781250179937.jpg",
    "source_url": "https://www.worldofbooks.com/products/surrounded-by-idiots-book-thomas-erikson-9781250179937",
    "last_scraped_at": "7:11 PM"
  },
  {
    "id": 5,
    "title": "The ChatGPT Millionaire",
    "author": "Neil Dagger",
    "price": "$12.72",
    "image_url": "https://image-server.worldofbooks.com/images/9798374102581.jpg",
    "source_url": "https://www.worldofbooks.com/products/chatgpt-millionaire-book-neil-dagger-9798374102581",
    "last_scraped_at": "7:11 PM"
  },
  {
    "id": 6,
    "title": "Crucial Conversations: Tools for Talking When Stakes are High, Third Edition",
    "author": "Joseph Grenny",
    "price": "$5.86",
    "image_url": "https://image-server.worldofbooks.com/images/9781260474183.jpg",
    "source_url": "https://www.worldofbooks.com/products/crucial-conversations-tools-for-talking-when-stakes-are-high-third-edition-book-joseph-grenny-9781260474183",
    "last_scraped_at": "7:11 PM"
  },
  {
    "id": 7,
    "title": "Unreasonable Hospitality",
    "author": "Will Guidara",
    "price": "$9.84",
    "image_url": "https://image-server.worldofbooks.com/images/9780593418574.jpg",
    "source_url": "https://www.worldofbooks.com/products/unreasonable-hospitality-book-will-guidara-9780593418574",
    "last_scraped_at": "7:11 PM"
  },
  {
    "id": 8,
    "title": "Never Split the Difference",
    "author": "Chris Voss",
    "price": "$11.82",
    "image_url": "https://image-server.worldofbooks.com/images/9780062407801.jpg",
    "source_url": "https://www.worldofbooks.com/products/never-split-the-difference-book-chris-voss-9780062407801",
    "last_scraped_at": "7:11 PM"
  },
  {
    "id": 9,
    "title": "The Five Dysfunctions of a Team",
    "author": "Patrick M Lencioni",
    "price": "$4.08",
    "image_url": "https://image-server.worldofbooks.com/images/9780787960759.jpg",
    "source_url": "https://www.worldofbooks.com/products/five-dysfunctions-of-a-team-book-patrick-m-lencioni-9780787960759",
    "last_scraped_at": "7:11 PM"
  },
  {
    "id": 10,
    "title": "The Daily Stoic",
    "author": "Ryan Holiday",
    "price": "$7.71",
    "image_url": "https://image-server.worldofbooks.com/images/9780735211735.jpg",
    "source_url": "https://www.worldofbooks.com/products/daily-stoic-book-ryan-holiday-9780735211735",
    "last_scraped_at": "7:11 PM"
  },
  {
    "id": 11,
    "title": "The Coaching Habit",
    "author": "Michael Bungay Stanier",
    "price": "$3.95",
    "image_url": "https://image-server.worldofbooks.com/images/9780978440749.jpg",
    "source_url": "https://www.worldofbooks.com/products/coaching-habit-book-michael-bungay-stanier-9780978440749",
    "last_scraped_at": "7:11 PM"
  },
  {
    "id": 12,
    "title": "Basic Economics",
    "author": "Thomas Sowell",
    "price": "$36.99",
    "image_url": "https://image-server.worldofbooks.com/images/9780465060733.jpg",
    "source_url": "https://www.worldofbooks.com/products/basic-economics-book-thomas-sowell-9780465060733",
    "last_scraped_at": "7:11 PM"
  },
  {
    "id": 13,
    "title": "Traction",
    "author": "Gino Wickman",
    "price": "$3.88",
    "image_url": "https://image-server.worldofbooks.com/images/9781936661831.jpg",
    "source_url": "https://www.worldofbooks.com/products/traction-book-gino-wickman-9781936661831",
    "last_scraped_at": "7:11 PM"
  },
  {
    "id": 14,
    "title": "Dare to Lead",
    "author": "Bren Brown",
    "price": "$4.66",
    "image_url": "https://image-server.worldofbooks.com/images/9780399592522.jpg",
    "source_url": "https://www.worldofbooks.com/products/dare-to-lead-book-bren-brown-9780399592522",
    "last_scraped_at": "7:11 PM"
  },
  {
    "id": 15,
    "title": "Extreme Ownership",
    "author": "Jocko Willink",
    "price": "$5.27",
    "image_url": "https://image-server.worldofbooks.com/images/9781250183866.jpg",
    "source_url": "https://www.worldofbooks.com/products/extreme-ownership-book-jocko-willink-9781250183866",
    "last_scraped_at": "7:11 PM"
  },
  {
    "id": 16,
    "title": "The Glass Castle",
    "author": "Jeannette Walls",
    "price": "$3.88",
    "image_url": "https://image-server.worldofbooks.com/images/9780743247542.jpg",
    "source_url": "https://www.worldofbooks.com/products/glass-castle-book-jeannette-walls-9780743247542",
    "last_scraped_at": "7:11 PM"
  }
]

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { categorySlug } = body;

  try {
    const res = await axios.get(
      `${process.env.SERVER_URL}/scrapeProducts`,
      { params: { categorySlug } }
    );

    const products = res.data;

    return new NextResponse(JSON.stringify({ data: products, isFallback: false }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error(error);
    return new NextResponse(JSON.stringify({ data: fallBackData, isFallback: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}