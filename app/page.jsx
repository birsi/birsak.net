import { OpenInNewTabIcon } from "./components/icons";

export default function Home() {
  return (
    <main className="pt-8 max-w-3xl">
      <h2>Hello!</h2>
      <p className="pb-5">
        I&apos;m Michael and I&apos;m a Software Engineer at heart. I&apos;m{" "}
        <span className="font-semibold">Director of Engineering</span> at{" "}
        <a
          href="https://www.bitpanda.com/en"
          target="_blank"
          className="text-[#27d17f] fill-[#27d17f] font-semibold hover:text-white hover:fill-white transition-all"
        >
          Bitpanda <OpenInNewTabIcon />
        </a>
        , where my teams build business critical applications and services for
        our Operations & Financial Crime Prevention departments. I love to build
        teams, get high-quality products to market and build companies up for
        success! Though people say I seem happiest when I can get my hands
        dirty, build and create things and simply get things done.
      </p>
      <h2>Latest Blog Posts</h2>
      <ul className="list-disc list-inside">
        <li>Service ownership in different company sizes</li>
        <li>How I passed my AWS certifications</li>
      </ul>
    </main>
  );
}
