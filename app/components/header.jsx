import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/images/profile.jpg";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="block mb-6 md:flex">
      <div className="w-36">
        <Link href="/">
          <Image
            src={profileImage}
            alt="Michael Birsak"
            className="rounded-full transform transition-all duration-150 hover:scale-105"
            priority
          />
        </Link>
      </div>
      <div className="flex-none pt-6 md:pt-1 md:flex-1 md:pl-16">
        <h1 className="text-5xl text-zinc-300 leading-tight font-bold">
          Michael Birsak
        </h1>
        <p className="text-zinc-600">
          Software Engineer & Manager – based in Vienna, Austria 🇦🇹
        </p>
        <Navbar />
      </div>
    </header>
  );
}
