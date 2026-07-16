import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white border-b z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="transition  duration-300 hover:underline hover:text-amber-500 hover:-translate-y-1">
          Home
        </Link>

        <nav>
          <ul className="flex gap-6 text-sm">

            <Link href="/about" className="transition  duration-300 hover:underline hover:text-amber-500 hover:-translate-y-1" >about</Link>



            <Link href="/works" className="transition  duration-300 hover:underline hover:text-amber-500 hover:-translate-y-1">works</Link>



            <Link href="/news" className="transition  duration-300 hover:underline hover:text-amber-500 hover:-translate-y-1">news</Link>



            <Link href="/contact" className="transition  duration-300 hover:underline hover:text-amber-500 hover:-translate-y-1">contact</Link>

          </ul >
        </nav >
      </div >
    </header >
  );
}
