"use client";
import Link from "next/link";
import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const NavBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

  return (
    <nav className="p-4 py-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold px-3 py-1.5 rounded border border-green-500"
        >
          Product Data Explorer
        </Link>

        <form
          onSubmit={handleSearch}
          className="flex items-center border-2 border-green-600 rounded-lg overflow-hidden w-[500px] max-w-full"
        >
          <div className="flex items-center px-3 text-gray-500">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search by title, brand"
            className="flex-1 px-2 py-2 outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-5 py-2 font-semibold hover:bg-green-700 hover:cursor-pointer transition"
          >
            Search
          </button>
        </form>

        <div className="flex gap-6 text-gray-700">
          <Link href="/about" className="hover:text-green-600">
            About
          </Link>
          <Link href="/contact" className="hover:text-green-600">
            Contact
          </Link>
          <Link href="/categories" className="hover:text-green-600">
            Categories
          </Link>
        </div>
      </div>
    </nav>
  );
};
