import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const fallBackData = [
  {
    "id": 1,
    "title": "The Bhagavad Gita",
    "author": "Eknath Easwaran",
    "price": "£7.50",
    "image_url": "https://image-server.worldofbooks.com/images/9781586380199.jpg",
    "source_url": "https://www.worldofbooks.com/en-gb/products/bhagavad-gita-book-eknath-easwaran-9781586380199",
    "last_scraped_at": "7:17 PM"
  },
  {
    "id": 2,
    "title": "Bhagavad Gita as it is",
    "author": "Ac Bhaktivedanta Prabhupada",
    "price": "£8.40",
    "image_url": "https://image-server.worldofbooks.com/images/9789384564193.jpg",
    "source_url": "https://www.worldofbooks.com/en-gb/products/bhagavad-gita-as-it-is-book-ac-bhaktivedanta-prabhupada-9789384564193",
    "last_scraped_at": "7:17 PM"
  },
  {
    "id": 3,
    "title": "Bhagavad Gita (in English): The Authentic English Translation for Accurate and Unbiased Understanding (The Bhagavad Gita Series)",
    "author": "Hari Chetan",
    "price": "£7.90",
    "image_url": "https://image-server.worldofbooks.com/images/9798457203266.jpg",
    "source_url": "https://www.worldofbooks.com/en-gb/products/bhagavad-gita-in-english-the-authentic-english-translation-for-accurate-and-unbi-book-hari-chetan-9798457203266",
    "last_scraped_at": "7:17 PM"
  },
  {
    "id": 4,
    "title": "The Bhagavad Gita",
    "author": "W J Johnson",
    "price": "£6.80",
    "image_url": "https://image-server.worldofbooks.com/images/9780199538126.jpg",
    "source_url": "https://www.worldofbooks.com/en-gb/products/bhagavad-gita-book-w-j-johnson-9780199538126",
    "last_scraped_at": "7:17 PM"
  },
  {
    "id": 5,
    "title": "Bhagavad Gita",
    "author": "Jack Hawley",
    "price": "£11.60",
    "image_url": "https://image-server.worldofbooks.com/images/9781608680146.jpg",
    "source_url": "https://www.worldofbooks.com/en-gb/products/bhagavad-gita-book-jack-hawley-9781608680146",
    "last_scraped_at": "7:17 PM"
  },
  {
    "id": 6,
    "title": "The Bhagavad Gita",
    "author": "Laurie L Patton",
    "price": "£7.50",
    "image_url": "https://image-server.worldofbooks.com/images/9780140447903.jpg",
    "source_url": "https://www.worldofbooks.com/en-gb/products/bhagavad-gita-book-laurie-l-patton-9780140447903",
    "last_scraped_at": "7:17 PM"
  },
  {
    "id": 7,
    "title": "Mini Pocket Size Bhagavad Gita - Original Macmillan 1972 Edition",
    "author": "A C Bhaktivedanta Swami Prabhupada",
    "price": "£3.80",
    "image_url": "https://image-server.worldofbooks.com/images/9781602930124.jpg",
    "source_url": "https://www.worldofbooks.com/en-gb/products/mini-pocket-size-bhagavad-gita-original-macmillan-1972-edition-book-a-c-bhaktivedanta-swami-prabhu-9781602930124",
    "last_scraped_at": "7:17 PM"
  },
  {
    "id": 8,
    "title": "The Bhagavad Gita",
    "author": "Shri Purohit Swami",
    "price": "£4.80",
    "image_url": "https://image-server.worldofbooks.com/images/9781453894880.jpg",
    "source_url": "https://www.worldofbooks.com/en-gb/products/bhagavad-gita-book-shri-purohit-swami-9781453894880",
    "last_scraped_at": "7:17 PM"
  },
  {
    "id": 9,
    "title": "Bhagavad Gita as it is",
    "author": "Bhaktivedanta Swami A C Prabhupada",
    "price": "£3.75",
    "image_url": "https://image-server.worldofbooks.com/images/9781845990497.jpg",
    "source_url": "https://www.worldofbooks.com/en-gb/products/bhagavad-gita-as-it-is-book-bhaktivedanta-swami-a-c-prabhu-9781845990497",
    "last_scraped_at": "7:17 PM"
  },
  {
    "id": 10,
    "title": "The Bhagavad-Gita For Children",
    "author": "Ramananda Prasad Ph D",
    "price": "£3.90",
    "image_url": "https://image-server.worldofbooks.com/images/9781494268206.jpg",
    "source_url": "https://www.worldofbooks.com/en-gb/products/bhagavad-gita-for-children-book-ramananda-prasad-ph-d-9781494268206",
    "last_scraped_at": "7:17 PM"
  },
  {
    "id": 11,
    "title": "Show Your Art: How to Build an Art Career Without a Gallery",
    "author": "Gita Joshi",
    "price": "£9.50",
    "image_url": "https://image-server.worldofbooks.com/images/9798673719411.jpg",
    "source_url": "https://www.worldofbooks.com/en-gb/products/show-your-art-how-to-build-an-art-career-without-a-gallery-book-gita-joshi-9798673719411",
    "last_scraped_at": "7:17 PM"
  },
  {
    "id": 12,
    "title": "Gita3",
    "author": "Sb Keshava Swami",
    "price": "£5.70",
    "image_url": "https://image-server.worldofbooks.com/images/9781739468118.jpg",
    "source_url": "https://www.worldofbooks.com/en-gb/products/gita3-book-sb-keshava-swami-9781739468118",
    "last_scraped_at": "7:17 PM"
  },
  {
    "id": 13,
    "title": "The Bhagavad Gita 101",
    "author": "Matthew Barnes",
    "price": "£6.30",
    "image_url": "https://image-server.worldofbooks.com/images/9798639776946.jpg",
    "source_url": "https://www.worldofbooks.com/en-gb/products/bhagavad-gita-101-book-matthew-barnes-9798639776946",
    "last_scraped_at": "7:17 PM"
  },
  {
    "id": 14,
    "title": "Bhagavad Gita: Essentials",
    "author": "Vishwananda Paramahamsa",
    "price": "£3.50",
    "image_url": "https://image-server.worldofbooks.com/images/9783963430824.jpg",
    "source_url": "https://www.worldofbooks.com/en-gb/products/bhagavad-gita-essentials-book-vishwananda-paramahamsa-9783963430824",
    "last_scraped_at": "7:17 PM"
  },
  {
    "id": 15,
    "title": "The Perennial Psychology of the Bhagavad-Gita",
    "author": "Swami Rama",
    "price": "£5.10",
    "image_url": "https://image-server.worldofbooks.com/images/9780893890902.jpg",
    "source_url": "https://www.worldofbooks.com/en-gb/products/perennial-psychology-of-the-bhagavad-gita-book-swami-rama-9780893890902",
    "last_scraped_at": "7:17 PM"
  },
  {
    "id": 16,
    "title": "Bhagavad-Gita as it is [Telegu language]",
    "author": "Ac Bhaktivedanta Swami Prabhupada",
    "price": "£10.10",
    "image_url": "https://image-server.worldofbooks.com/images/9789383095100.jpg",
    "source_url": "https://www.worldofbooks.com/en-gb/products/bhagavad-gita-as-it-is-telegu-language-book-ac-bhaktivedanta-swami-prabhup-9789383095100",
    "last_scraped_at": "7:17 PM"
  }
]

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    const res = await axios.get(`${process.env.SERVER_URL}/scrapeSearchResults`, {
      params: { query },
    });

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
