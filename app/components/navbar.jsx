"use client";

import clsx from "clsx";
import { LayoutGroup, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/about": {
    name: "about",
  },
  "/blog": {
    name: "blog",
  },
  "/guestbook": {
    name: "guestbook",
  },
};

export default function Navbar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <LayoutGroup>
      <nav className="mt-8 ml-[-10px] text-zinc-800 uppercase font-semibold text-xs tracking-wider">
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = path === pathname;
          return (
            <Link
              key={path}
              href={path}
              className={clsx("transition-all hover:text-zinc-300", {
                "text-zinc-600": !isActive,
                "text-zinc-300": isActive,
              })}
            >
              <span className="relative py-[5px] px-[10px]">
                {name}
                {path === pathname ? (
                  <motion.div
                    className="absolute inset-0 bg-zinc-800 rounded-md z-[-1]"
                    layoutId="sidebar"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  />
                ) : null}
              </span>
            </Link>
          );
        })}
      </nav>
    </LayoutGroup>
  );
}
