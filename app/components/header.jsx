import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/images/michael-birsak-2025.jpg";
import flagAt from "../../public/images/flag-at.svg";
import Navbar from "./navbar";
import { GithubIcon, LinkedInIcon, TwitterIcon, BlueskyIcon } from "./icons";

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
              className="rounded-full border-zinc-800 border-5"
              priority
            />
          </Link>
        </div>
        <div className="md:flex md:flex-col md:pl-12 justify-center">
          <h1 className="text-5xl leading-tight font-bold">Michael Birsak</h1>
          <p className="text-zinc-600">
            Software Engineer & Architect – based in Vienna, Austria{" "}
            <Image
              src={flagAt}
              alt="Flag Austria"
              style={{ display: "inline", marginTop: "-4px" }}
              unoptimized
            />
          </p>
          <div className="flex mt-5 gap-4 md:justify-start">
            <a
              href="https://github.com/birsi"
              target="_blank"
              className="fill-zinc-500 hover:fill-white transition-all"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/michaelbirsak/"
              target="_blank"
              className="fill-zinc-500 hover:fill-white transition-all"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://bsky.app/profile/birsi.bsky.social"
              target="_blank"
              className="fill-zinc-500 hover:fill-white transition-all"
            >
              <BlueskyIcon />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
