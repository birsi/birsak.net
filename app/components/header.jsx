import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/images/profile.jpg";
import Navbar from "./navbar";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./icons";

export default function Header() {
  return (
    <header className="block md:flex md:flex-col">
      <Navbar />
      <div className="block md:flex flex-row mt-10">
        <div className="w-36 flex-none">
          <Link href="/">
            <Image
              src={profileImage}
              alt="Michael Birsak"
              className="rounded-full"
              priority
            />
          </Link>
        </div>
        <div className="md:flex md:flex-col md:pl-12 justify-center">
          <h1 className="text-5xl leading-tight font-bold">Michael Birsak</h1>
          <p className="text-zinc-600">
            Software Engineer & Manager – based in Vienna, Austria 🇦🇹
          </p>
          <div className="flex mt-5 gap-4 md:justify-start">
            <a
              href=""
              className="fill-zinc-500 hover:fill-white transition-all"
            >
              <GithubIcon />
            </a>
            <a
              href=""
              className="fill-zinc-500 hover:fill-white transition-all"
            >
              <LinkedInIcon />
            </a>
            <a
              href=""
              className="fill-zinc-500 hover:fill-white transition-all"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
