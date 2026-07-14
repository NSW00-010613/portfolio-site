import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-10">



      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

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


      <div className="max-w-6xl mx-auto px-6 py-10 text-center text-sm text-gray-500">
        © 2026 Kenji Okuda Portfolio
      </div>
    </footer>
  );
}
``
