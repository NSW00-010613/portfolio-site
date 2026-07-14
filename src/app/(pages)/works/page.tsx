import fs from "fs";
import path from "path";
import matter from "gray-matter";

import WorksList from "@/components/WorksList";

export default function WorksPage() {
  const worksDirectory = path.join(
    process.cwd(),
    "src",
    "content",
    "works"
  );

  const files = fs.readdirSync(worksDirectory);

  const worksList = files.map((file) => {
    const id = file.replace(".md", "");

    const fileContent = fs.readFileSync(
      path.join(worksDirectory, file),
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
  worksList.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );

  return (

    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-6xl font-bold mb-8">
        Works | 仕事
      </h1>
      <p>
        システムエンジニアとしての仕事をまとめたものです。
      </p>
      <div className="w-full h-px bg-gray-300 mb-12" />
      <WorksList worksList={worksList} />
    </main >
  );
}
