import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="block mb-6 md:flex">
      <div className="w-full max-w-150 border">
        <Link href="/">
          <Image
            src="/mb.svg"
            alt="Michael Birsak"
            className="transform w-24 transition-all duration-150 hover:scale-105 invert"
            width={32}
            height={32}
            priority
          />
        </Link>
      </div>
      <div className="flex-none pt-6 md:pt-1 md:flex-1 md:pl-20">
        <h1 className="text-5xl text-gray-300 font-bold leading-tight hover:text-gray-500">
          Michael Birsak
        </h1>
        <p className="text-gray-100">Software Engineer & Manager</p>
        <ul className="mt-5 uppercase tracking-wider">
          <li className="inline list-none pr-4">
            <a
              href="/"
              className="inline-block py-2 font-semibold text-xs text-gray-300 hover:text-gray-500"
            >
              Link 1
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
