"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Works = {
  id: string;
  title: string;
  date: string;
  thumbnail?: string;
};

export default function WorksList({
  worksList,
}: {
  worksList: Works[];
}) {
  const [visibleCount, setVisibleCount] =
    useState(10);

  return (
    <>
      <div className="grid grid-cols-1 gap-8">
        {worksList
          .slice(0, visibleCount)
          .map((works) => (
            <Link
              key={works.id}
              href={`/works/${works.id}`}
            >

              <article className="flex gap-6 border rounded-2xl p-4 hover:bg-gray-100 transition">
                <Image
                  src={works.thumbnail || "/images/noimage.jpeg"}
                  alt={works.title}
                  width={120}
                  height={120}
                  className="w-120x h-120px object-cover rounded-lg"
                />

                <div className="p-4">
                  <p className="text-sm text-gray-500">
                    {works.date}
                  </p>

                  <h2 className="text-xl mt-2">
                    {works.title}
                  </h2>
                </div>
              </article>
            </Link>
          ))}
      </div>

      {visibleCount < worksList.length && (
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

