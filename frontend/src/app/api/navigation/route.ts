import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const fallbackData = [
  {
    "id": 1,
    "title": "Trending",
    "slug": "/pages/trending-books",
    "categories": [],
    "last_scraped_at": "6:38 PM"
  },
  {
    "id": 2,
    "title": "Fiction Books",
    "slug": "/pages/fiction",
    "categories": [
      {
        "id": 1,
        "title": "By Category",
        "subcategories": [
          {
            "name": "All Fiction Books",
            "slug": "/collections/fiction-books",
            "product_count": 0
          },
          {
            "name": "Crime & Mystery",
            "slug": "/collections/crime-and-mystery-books",
            "product_count": 0
          },
          {
            "name": "Fantasy",
            "slug": "/collections/fantasy-fiction-books",
            "product_count": 0
          },
          {
            "name": "Modern Fiction",
            "slug": "/collections/modern-fiction-books",
            "product_count": 0
          },
          {
            "name": "Romance",
            "slug": "/collections/romance-books",
            "product_count": 0
          },
          {
            "name": "Adventure",
            "slug": "/collections/adventure-books",
            "product_count": 0
          },
          {
            "name": "Thriller & Suspense",
            "slug": "/collections/thriller-and-suspense-books",
            "product_count": 0
          },
          {
            "name": "Classic Fiction",
            "slug": "/collections/classic-fiction-books",
            "product_count": 0
          },
          {
            "name": "Erotic Fiction",
            "slug": "/collections/erotic-fiction-books",
            "product_count": 0
          },
          {
            "name": "Fiction-Related Items",
            "slug": "/collections/fiction-related-items-books",
            "product_count": 0
          },
          {
            "name": "Anthologies & Short Stories",
            "slug": "/collections/fiction-special-features-books",
            "product_count": 0
          },
          {
            "name": "Graphic Novels",
            "slug": "/collections/graphic-novels-and-comic-books",
            "product_count": 0
          },
          {
            "name": "Historical Fiction",
            "slug": "/collections/historical-fiction-books",
            "product_count": 0
          },
          {
            "name": "Horror & Ghost Stories",
            "slug": "/collections/horror-books",
            "product_count": 0
          },
          {
            "name": "Religious & Spiritual Fiction",
            "slug": "/collections/religious-and-spiritual-fiction-books",
            "product_count": 0
          },
          {
            "name": "Sagas",
            "slug": "/collections/sagas-books",
            "product_count": 0
          },
          {
            "name": "Science Fiction",
            "slug": "/collections/science-fiction-books",
            "product_count": 0
          }
        ]
      },
      {
        "id": 2,
        "title": "Special Features",
        "subcategories": [
          {
            "name": "Trending Now",
            "slug": "https://www.worldofbooks.com/pages/trending-books",
            "product_count": 0
          },
          {
            "name": "New Fiction Books",
            "slug": "/pages/new-in",
            "product_count": 0
          },
          {
            "name": "LGBTQ+ Shelf",
            "slug": "/pages/pride-month",
            "product_count": 0
          },
          {
            "name": "Black Voices",
            "slug": "/pages/celebrating-black-authors",
            "product_count": 0
          },
          {
            "name": "Read our Impact Report!",
            "slug": "https://www.worldofbooks.com/en-gb/pages/impact-report",
            "product_count": 0
          }
        ]
      },
      {
        "id": 3,
        "title": "Top Authors",
        "subcategories": [
          {
            "name": "Stephen King",
            "slug": "/collections/author-books-by-stephen-king",
            "product_count": 0
          },
          {
            "name": "Agatha Christie",
            "slug": "/collections/author-books-by-agatha-christie",
            "product_count": 0
          },
          {
            "name": "Sarah J Maas",
            "slug": "/collections/author-books-by-sarah-j-maas",
            "product_count": 0
          },
          {
            "name": "Colleen Hoover",
            "slug": "/collections/author-books-by-colleen-hoover",
            "product_count": 0
          }
        ]
      }
    ],
    "last_scraped_at": "6:38 PM"
  },
  {
    "id": 3,
    "title": "Non-Fiction Books",
    "slug": "/pages/non-fiction",
    "categories": [
      {
        "id": 4,
        "title": "By Category",
        "subcategories": [
          {
            "name": "All Non-Fiction Books",
            "slug": "/collections/non-fiction-books",
            "product_count": 0
          },
          {
            "name": "Biography & True Stories",
            "slug": "/collections/biography-and-true-story-books",
            "product_count": 0
          },
          {
            "name": "English Language Teaching",
            "slug": "/collections/english-language-teaching-books",
            "product_count": 0
          },
          {
            "name": "Health & Personal Development",
            "slug": "/collections/health-and-personal-development-books",
            "product_count": 0
          },
          {
            "name": "Lifestyle, Cooking & Leisure",
            "slug": "/collections/lifestyle-cooking-and-leisure-books",
            "product_count": 0
          },
          {
            "name": "Reference Books",
            "slug": "/collections/reference-books",
            "product_count": 0
          },
          {
            "name": "Arts Books",
            "slug": "/collections/arts-books",
            "product_count": 0
          },
          {
            "name": "Computing & IT",
            "slug": "/collections/computing-and-it-books",
            "product_count": 0
          },
          {
            "name": "Earth Sciences",
            "slug": "/collections/all-earth-sciences-books",
            "product_count": 0
          },
          {
            "name": "Economics & Finance",
            "slug": "/collections/economics-and-finance-books",
            "product_count": 0
          },
          {
            "name": "Humanities Books",
            "slug": "/collections/humanities-books",
            "product_count": 0
          },
          {
            "name": "Language",
            "slug": "/collections/language-books",
            "product_count": 0
          },
          {
            "name": "Law",
            "slug": "/collections/law-books",
            "product_count": 0
          },
          {
            "name": "Literature & Literary Studies",
            "slug": "/collections/literature-and-literary-studies-books",
            "product_count": 0
          },
          {
            "name": "Mathematics & Science",
            "slug": "/collections/mathematics-and-science-books",
            "product_count": 0
          },
          {
            "name": "Medicine",
            "slug": "/collections/medical-books",
            "product_count": 0
          },
          {
            "name": "Social Sciences",
            "slug": "/collections/social-science-books",
            "product_count": 0
          },
          {
            "name": "Technology",
            "slug": "/collections/technology-books",
            "product_count": 0
          }
        ]
      },
      {
        "id": 5,
        "title": "Special Features",
        "subcategories": [
          {
            "name": "Trending Now",
            "slug": "/pages/trending-books",
            "product_count": 0
          },
          {
            "name": "New Non-Fiction",
            "slug": "/pages/new-in",
            "product_count": 0
          },
          {
            "name": "Black Voices",
            "slug": "/pages/celebrating-black-authors",
            "product_count": 0
          },
          {
            "name": "LGBTQ+ Shelf",
            "slug": "/pages/pride-month",
            "product_count": 0
          },
          {
            "name": "Read our Impact Report!",
            "slug": "https://www.worldofbooks.com/en-gb/pages/impact-report",
            "product_count": 0
          }
        ]
      },
      {
        "id": 6,
        "title": "Broaden Your Knowledge",
        "subcategories": [
          {
            "name": "Music",
            "slug": "/collections/music-books",
            "product_count": 0
          },
          {
            "name": "Arts & Crafts",
            "slug": "/collections/arts-and-crafts-books",
            "product_count": 0
          },
          {
            "name": "Learn A Language",
            "slug": "/collections/teaching-and-learning-books",
            "product_count": 0
          }
        ]
      },
      {
        "id": 7,
        "title": "Noteworthy",
        "subcategories": [
          {
            "name": "Sustainability",
            "slug": "/collections/all?q=sustainability",
            "product_count": 0
          },
          {
            "name": "Veggie cookbooks",
            "slug": "/collections/all?q=vegetarian",
            "product_count": 0
          },
          {
            "name": "Mind, Body & Spirit",
            "slug": "/collections/mind-body-and-spirit-books",
            "product_count": 0
          },
          {
            "name": "Travel",
            "slug": "/collections/travel-and-holiday-books",
            "product_count": 0
          },
          {
            "name": "Quizzes & Games",
            "slug": "/collections/hobby-quiz-and-game-books",
            "product_count": 0
          },
          {
            "name": "Politics & Governance",
            "slug": "/collections/politics-books",
            "product_count": 0
          }
        ]
      }
    ],
    "last_scraped_at": "6:38 PM"
  },
  {
    "id": 4,
    "title": "Children's Books",
    "slug": "/pages/childrens",
    "categories": [
      {
        "id": 8,
        "title": "By Category",
        "subcategories": [
          {
            "name": "All Children's Books",
            "slug": "/collections/childrens-books",
            "product_count": 0
          },
          {
            "name": "Children's Fiction & True Stories",
            "slug": "/collections/childrens-fiction-books",
            "product_count": 0
          },
          {
            "name": "Children's Non-Fiction",
            "slug": "/collections/childrens-non-fiction-books",
            "product_count": 0
          },
          {
            "name": "Activity, Early Learning & Picture Books",
            "slug": "/collections/childrens-picture-and-activity-books",
            "product_count": 0
          },
          {
            "name": "Children's Reference Books",
            "slug": "/collections/childrens-reference-books",
            "product_count": 0
          },
          {
            "name": "Children's Education & Learning",
            "slug": "/collections/educational-material-books",
            "product_count": 0
          },
          {
            "name": "Children's Poetry & Anthologies",
            "slug": "/collections/childrens-poetry-books",
            "product_count": 0
          },
          {
            "name": "Children's Personal & Social Issues",
            "slug": "/collections/childrens-personal-and-social-issues-books",
            "product_count": 0
          },
          {
            "name": "Stationary & Miscellaneous Items",
            "slug": "/collections/stationery-and-miscellaneous-items",
            "product_count": 0
          }
        ]
      },
      {
        "id": 9,
        "title": "Special Features",
        "subcategories": [
          {
            "name": "New Children's Books",
            "slug": "/pages/new-in",
            "product_count": 0
          },
          {
            "name": "Textbooks",
            "slug": "/pages/textbooks",
            "product_count": 0
          },
          {
            "name": "Kids' Favorite Characters",
            "slug": "/pages/childrens-favourite-characters",
            "product_count": 0
          },
          {
            "name": "Kids' Favorite Series",
            "slug": "/pages/childrens-favourite-series",
            "product_count": 0
          }
        ]
      },
      {
        "id": 10,
        "title": "Top Authors",
        "subcategories": [
          {
            "name": "David Walliams",
            "slug": "/collections/author-books-by-david-walliams",
            "product_count": 0
          },
          {
            "name": "Julia Donaldson",
            "slug": "/collections/author-books-by-julia-donaldson",
            "product_count": 0
          },
          {
            "name": "Tom Fletcher",
            "slug": "/collections/author-books-by-tom-fletcher",
            "product_count": 0
          },
          {
            "name": "Roald Dahl",
            "slug": "/collections/author-books-by-roald-dahl",
            "product_count": 0
          }
        ]
      },
      {
        "id": 11,
        "title": "YA Authors",
        "subcategories": [
          {
            "name": "Alice Oseman",
            "slug": "/collections/author-books-by-alice-oseman",
            "product_count": 0
          },
          {
            "name": "Holly Jackson",
            "slug": "/collections/author-books-by-holly-jackson",
            "product_count": 0
          },
          {
            "name": "Karen M. McManus",
            "slug": "/collections/author-books-by-karen-m-mcmanus",
            "product_count": 0
          },
          {
            "name": "Jennifer Lynn Barnes",
            "slug": "/collections/author-books-by-jennifer-lynn-barnes",
            "product_count": 0
          }
        ]
      }
    ],
    "last_scraped_at": "6:38 PM"
  },
  {
    "id": 5,
    "title": "Rare Books",
    "slug": "/collections/rarebooks",
    "categories": [
      {
        "id": 12,
        "title": "Rare Fiction Books",
        "subcategories": [
          {
            "name": "All Rare Fiction Books",
            "slug": "/collections/rare-fiction-books",
            "product_count": 0
          },
          {
            "name": "Foreign Language Books",
            "slug": "/collections/rare-foreign-language-books",
            "product_count": 0
          },
          {
            "name": "Crime Books",
            "slug": "/collections/rare-crime-books",
            "product_count": 0
          },
          {
            "name": "Thriller Books",
            "slug": "/collections/rare-thriller-books",
            "product_count": 0
          },
          {
            "name": "Sci-Fi Books",
            "slug": "/collections/rare-sci-fi-books",
            "product_count": 0
          },
          {
            "name": "Romance Books",
            "slug": "/collections/rare-romance-books",
            "product_count": 0
          },
          {
            "name": "Horror Books",
            "slug": "/collections/rare-horror-books",
            "product_count": 0
          },
          {
            "name": "Fantasy Books",
            "slug": "/collections/rare-fantasy-books",
            "product_count": 0
          },
          {
            "name": "Adult & Erotic Books",
            "slug": "/collections/rare-adult-and-erotic-books",
            "product_count": 0
          }
        ]
      },
      {
        "id": 13,
        "title": "Rare Non-Fiction Books",
        "subcategories": [
          {
            "name": "All Rare Non-Fiction Books",
            "slug": "/collections/rare-non-fiction-books",
            "product_count": 0
          },
          {
            "name": "General Non-Fiction Books",
            "slug": "/collections/general-non-fiction",
            "product_count": 0
          },
          {
            "name": "Biography & True Story Books",
            "slug": "/collections/rare-biography-true-story-books",
            "product_count": 0
          },
          {
            "name": "Lifestyle, Sport & Leisure Books",
            "slug": "/collections/rare-lifestyle-sport-leisure-books",
            "product_count": 0
          },
          {
            "name": "Humanities Books",
            "slug": "/collections/rare-humanities-books",
            "product_count": 0
          },
          {
            "name": "Religion & Spirituality Books",
            "slug": "/collections/rare-religion-spirituality-books",
            "product_count": 0
          },
          {
            "name": "Social Sciences Books",
            "slug": "/collections/rare-social-sciences-books",
            "product_count": 0
          },
          {
            "name": "Science Books",
            "slug": "/collections/rare-science-books",
            "product_count": 0
          },
          {
            "name": "Art, Fashion & Photography Books",
            "slug": "/collections/rare-art-fashion-photography-books",
            "product_count": 0
          },
          {
            "name": "Technology, Engineering & Agriculture Books",
            "slug": "/collections/rare-technology-engineering-agriculture-books",
            "product_count": 0
          },
          {
            "name": "Children's Books",
            "slug": "/collections/rare-childrens-books",
            "product_count": 0
          },
          {
            "name": "Medicine Books",
            "slug": "/collections/rare-medicine-books",
            "product_count": 0
          },
          {
            "name": "Economics Books",
            "slug": "/collections/rare-economics-books",
            "product_count": 0
          },
          {
            "name": "Law Books",
            "slug": "/collections/rare-law-books",
            "product_count": 0
          },
          {
            "name": "Myths, Legends & Supernatural Books",
            "slug": "/collections/rare-myths-legends-supernatural-books",
            "product_count": 0
          },
          {
            "name": "Antiques & Collectables Books",
            "slug": "/collections/rare-antiques-collectables-books",
            "product_count": 0
          },
          {
            "name": "Journals, Periodicals and Magazines",
            "slug": "/collections/rare-journals-periodicals-and-magazines",
            "product_count": 0
          },
          {
            "name": "Ephemera & Heritage",
            "slug": "/collections/rare-ephemera",
            "product_count": 0
          },
          {
            "name": "Non-Fiction General",
            "slug": "/collections/rare-non-fiction-general-books",
            "product_count": 0
          }
        ]
      }
    ],
    "last_scraped_at": "6:38 PM"
  },
  {
    "id": 6,
    "title": "Sell Your Books",
    "slug": "https://ziffit.onelink.me/d0Z3/nav",
    "categories": [],
    "last_scraped_at": "6:38 PM"
  }
];

export async function GET() {
  try {
    const res = await axios.get(`${process.env.SERVER_URL}/scrapeNavigationData`);
    const navigationData = res.data;
    return NextResponse.json({ data: navigationData, isFallback: false });
  } catch (error) {
    return NextResponse.json({ data: fallbackData, isFallback: true });
  }
}