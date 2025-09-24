import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const fallBackData = {
  "id": 1,
  "title": "Never Split the Difference\nby Chris Voss",
  "author": "N/A",
  "price": "£60.00",
  "image_url": "https://www.worldofbooks.com/cdn/shop/files/0062407805.jpg?v=1751426867&width=493",
  "source_url": "https://www.worldofbooks.com/en-gb/products/never-split-the-difference-book-chris-voss-9780062407801",
  "description": "At World of Books, you’ll find millions of preloved reads at great prices, from bestsellers to hidden gems. Every book you buy saves money and helps reduce waste, so you can read more for less while giving stories a second life.",
  "specs": {
    "sku": "GOR007962748",
    "isbn_13": "9780062407801",
    "isbn_10": "0062407805",
    "title": "Never Split the Difference",
    "author": "Chris Voss",
    "condition": "Very Good",
    "binding_type": "Hardback",
    "publisher": "Harper Business",
    "year_published": "2016-05-17",
    "number_of_pages": "288",
    "cover_note": "Book picture is for illustrative purposes only, actual binding, cover or edition may vary.",
    "note": "This is a used book - there is no escaping the fact it has been read by someone else and it will show signs of wear and previous use. Overall we expect it to be in very good condition, but if you are not entirely satisfied please get in touch with us"
  },
  "last_scraped_at": "7:15 PM",
  "recommendedProducts": [
    {
      "id": 1,
      "title": "The 4-Hour Work Week",
      "author": "Timothy Ferriss",
      "price": "£3.90",
      "image_url": "https://image-server.worldofbooks.com/images/9780091929114.jpg",
      "source_url": "https://www.worldofbooks.com/en-gb/products/4-hour-work-week-book-timothy-ferriss-9780091929114"
    },
    {
      "id": 2,
      "title": "Start With Why",
      "author": "Simon Sinek",
      "price": "£4.80",
      "image_url": "https://image-server.worldofbooks.com/images/9780241958223.jpg",
      "source_url": "https://www.worldofbooks.com/en-gb/products/start-with-why-book-simon-sinek-9780241958223"
    },
    {
      "id": 3,
      "title": "Zero to One",
      "author": "Blake Masters",
      "price": "£13.60",
      "image_url": "https://image-server.worldofbooks.com/images/9780753555187.jpg",
      "source_url": "https://www.worldofbooks.com/en-gb/products/zero-to-one-book-blake-masters-9780753555187"
    },
    {
      "id": 4,
      "title": "The Psychology of Money",
      "author": "Morgan Housel",
      "price": "£11.60",
      "image_url": "https://image-server.worldofbooks.com/images/9780857197689.jpg",
      "source_url": "https://www.worldofbooks.com/en-gb/products/psychology-of-money-book-morgan-housel-9780857197689"
    },
    {
      "id": 5,
      "title": "The Diary of a CEO",
      "author": "Steven Bartlett",
      "price": "£8.90",
      "image_url": "https://image-server.worldofbooks.com/images/9781529146509.jpg",
      "source_url": "https://www.worldofbooks.com/en-gb/products/diary-of-a-ceo-book-steven-bartlett-9781529146509"
    },
    {
      "id": 6,
      "title": "Principles",
      "author": "Ray Dalio",
      "price": "£17.80",
      "image_url": "https://image-server.worldofbooks.com/images/9781501124020.jpg",
      "source_url": "https://www.worldofbooks.com/en-gb/products/principles-book-ray-dalio-9781501124020"
    },
    {
      "id": 7,
      "title": "How to Win Friends and Influence People: The classic multi-million-copy bestseller",
      "author": "Dale Carnegie",
      "price": "£8.30",
      "image_url": "https://image-server.worldofbooks.com/images/9780091906351.jpg",
      "source_url": "https://www.worldofbooks.com/en-gb/products/how-to-win-friends-and-influence-people-the-classic-multi-million-copy-bestselle-book-dale-carnegie-9780091906351"
    },
    {
      "id": 8,
      "title": "What They Teach You at Harvard Business School",
      "author": "Philip Delves Broughton",
      "price": "£4.60",
      "image_url": "https://image-server.worldofbooks.com/images/9780670918492.jpg",
      "source_url": "https://www.worldofbooks.com/en-gb/products/what-they-teach-you-at-harvard-business-school-book-philip-delves-broughton-9780670918492"
    },
    {
      "id": 9,
      "title": "Grassroots Football Match Day Planner : For Managers and Coaches of Saturday and Sunday Football Clubs Within Amateur Leagues and Youth Soccer",
      "author": "Johnsons Journals",
      "price": "£6.30",
      "image_url": "https://image-server.worldofbooks.com/images/9798467557335.jpg",
      "source_url": "https://www.worldofbooks.com/en-gb/products/grassroots-football-match-day-planner-for-managers-and-coaches-of-saturday-and-s-book-johnsons-journals-9798467557335"
    },
    {
      "id": 10,
      "title": "The Truth About Melody Browne: the gripping mystery from the #1 Sunday Times bestselling author",
      "author": "Jewell Lisa",
      "price": "£3.50",
      "image_url": "https://image-server.worldofbooks.com/images/9780099564249.jpg",
      "source_url": "https://www.worldofbooks.com/en-gb/products/the-truth-about-melody-browne-the-gripping-mystery-from-the-1-sunday-times-bests-book-jewell-lisa-9780099564249"
    },
    {
      "id": 11,
      "title": "Word Search for Kids Ages 6-8: 100 Themed Puzzles with Pictures for Language Development and Fun",
      "author": "Logickids Publishing",
      "price": "£4.70",
      "image_url": "https://image-server.worldofbooks.com/images/9798873946181.jpg",
      "source_url": "https://www.worldofbooks.com/en-gb/products/word-search-for-kids-ages-6-8-100-themed-puzzles-with-pictures-for-language-deve-book-logickids-publishing-9798873946181"
    },
    {
      "id": 12,
      "title": "BTEC National Applied Law student book + Active book",
      "author": "Ann Summerscales",
      "price": "£10.80",
      "image_url": "https://image-server.worldofbooks.com/images/9781292193533.jpg",
      "source_url": "https://www.worldofbooks.com/en-gb/products/btec-national-applied-law-student-book-active-book-book-ann-summerscales-9781292193533"
    }
  ]
}

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

    return NextResponse.json({ data: response.data, isFallback: false }, { status: 200 });

  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json({ data: fallBackData, isFallback: true }, { status: 200 });
  }
}