import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white border-b z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="hover:underline">
          Home
        </Link>

        <nav>
          <ul className="flex gap-6 text-sm">
            <li>
              <Link href="/about" className="hover:underline">about</Link>
            </li>

            <li>
              <Link href="/works" className="hover:underline">works</Link>
            </li>

            <li>
              <Link href="/news" className="hover:underline">news</Link>
            </li>

            <li>
              <Link href="/contact" className="hover:underline">contact</Link>
            </li >
          </ul >
        </nav >
      </div >
    </header >
  );
}
