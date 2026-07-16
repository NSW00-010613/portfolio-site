
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation"

export default async function NewsDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    "test_news",
    `${id}.md`
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(
    filePath,
    "utf8"
  );

  const { data, content } = matter(fileContent);

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">

      <p className="text-gray-500">
        {data.date instanceof Date
          ? data.date.toISOString().split("T")[0]
          : data.date}
      </p>


      <h1 className="text-5xl font-bold mt-4 mb-8">
        {data.title}
      </h1>

      {data.thumbnail && (
        <img
          src={data.thumbnail}
          alt={data.title}
          className="w-full rounded-2xl mb-10"
        />
      )}

      <article>
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="text-4xl font-bold mt-10 mb-6">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-3xl font-bold mt-8 mb-4">
                {children}
              </h2>
            ),
            p: ({ children }) => (
              <p className="leading-8 mb-4">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc pl-6 mb-4">
                {children}
              </ul>
            ),
            li: ({ children }) => (
              <li className="mb-2">
                {children}
              </li>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </main>
  );
}
