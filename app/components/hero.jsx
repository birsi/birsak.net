import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex items-center gap-4">
      <Link href="/">
        <Image
          priority
          src="/images/profile.jpg"
          height={108}
          width={108}
          className="rounded-full"
          alt=""
        />
      </Link>
      <Image
        src="/mb.svg"
        alt="Michael Birsak"
        className="invert"
        width={90}
        height={24}
        priority
      />
      <div>
        <div className="text-2xl font-bold">Michael Birsak</div>
        <span className="text-gray-400">Software Engineer & Manager</span>
      </div>
    </div>
  );
}
