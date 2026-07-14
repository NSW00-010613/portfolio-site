import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section
        className="
          relative
          min-h-screen
          flex
          items-center
          bg-[url('/images/background_1.png')]
          bg-cover
          bg-center
        "
      >
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative max-w-6xl mx-auto px-6">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none text-white ">
            KENJI
            <br />
            OKUDA
            <br />
            PORTFOLIO

          </h1>

          <div className="flex flex-wrap gap-16 mt-16">
            <Link href="/about" className=" menu-link"
            >
              about
            </Link>
            <Link href="/works" className=" menu-link"
            >
              works
            </Link>
            <Link href="/news" className=" menu-link"
            >
              news
            </Link>
            <Link href="/contact" className=" menu-link"
            >
              contact
            </Link>
          </div>
        </div>
      </section>
    </main >
  );
}
