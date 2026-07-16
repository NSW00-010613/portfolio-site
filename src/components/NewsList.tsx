"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/components/ui/Pagenation";


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
  const PAGE_SIZE = 10;


  const [pageSize, setPageSize] =
    useState(10)


  const [currentPage, setCurrentPage] =
    useState(1);


  const totalPages = Math.ceil(
    newsList.length / pageSize
  );

  const displayedNews = newsList.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <div className="mt-10 mb-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={newsList.length}
          pageSize={pageSize}
          onPageChange={setCurrentPage}
          onPageSizeChange={(newPageSize) => {
            setPageSize(newPageSize);
            setCurrentPage(1);
          }}
        />
      </div>
      <div className="grid grid-cols-1 gap-8">
        {displayedNews.map((news) => (
          <Link
            key={news.id}
            href={`/news/${news.id}`}
          >
            <article className="flex gap-6 border rounded-2xl p-4 hover:bg-amber-200 transition">
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




    </>
  );
}
