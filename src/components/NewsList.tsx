"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type News = {
  id: string;
  title: string;
  date: string;
  thumbnail?: string;
};

export default function NewsList({
  newsList,
}: {
  newsList: News[];
}) {
  const [visibleCount, setVisibleCount] =
    useState(10);

  return (
    <>
      <div className="grid grid-cols-1 gap-8">
        {newsList
          .slice(0, visibleCount)
          .map((news) => (
            <Link
              key={news.id}
              href={`/news/${news.id}`}
            >

              <article className="flex gap-6 border rounded-2xl p-4 hover:bg-gray-100 transition">
                <Image
                  src={news.thumbnail || "/images/noimage.jpeg"}
                  alt={news.title}
                  width={120}
                  height={120}
                  className="w-120x h-120px object-cover rounded-lg"
                />

                <div className="p-4">
                  <p className="text-sm text-gray-500">
                    {news.date}
                  </p>

                  <h2 className="text-xl mt-2">
                    {news.title}
                  </h2>
                </div>
              </article>
            </Link>
          ))}
      </div>

      {visibleCount < newsList.length && (
        <div className="mt-10 text-center">
          <button
            onClick={() =>
              setVisibleCount(
                (prev) => prev + 10
              )
            }
            className="
              px-6 py-3
              border
              rounded-xl
              hover:bg-gray-100
            "
          >
            もっと見る
          </button>
        </div>
      )}
    </>
  );
}

