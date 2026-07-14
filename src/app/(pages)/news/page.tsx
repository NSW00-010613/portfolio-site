import fs from "fs";
import path from "path";
import matter from "gray-matter";

import NewsList from "@/components/NewsList";

export default function NewsPage() {
  const newsDirectory = path.join(
    process.cwd(),
    "src",
    "content",
    "news"
  );

  const files = fs.readdirSync(newsDirectory);

  const newsList = files.map((file) => {
    const id = file.replace(".md", "");

    const fileContent = fs.readFileSync(
      path.join(newsDirectory, file),
      "utf8"
    );

    const { data } = matter(fileContent);

    return {
      id,
      title: data.title,
      date:
        data.date instanceof Date
          ? data.date.toISOString().split("T")[0]
          : data.date,
      thumbnail: data.thumbnail,
    };
  });

  newsList.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-6xl font-bold mb-8">
        News | ニュース
      </h1>

      <p>
        日常の些細な出来事をまとめたものです。
      </p>

      <div className="w-full h-px bg-gray-300 mb-12" />

      <NewsList newsList={newsList} />

    </main>
  );
}
