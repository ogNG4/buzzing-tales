"use client";

import Link from "next/link";
import { ThemeSwitcher } from "../UI/ThemeSwitcher";

export default function Navigation() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 px-5  py-2 mb-10  ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          <span className="self-center text-4xl lg:text-5xl font-extrabold whitespace-nowrap dark:text-white">
            <span className="">🐝</span>buzzing.
            <span className="text-amber-400">tales</span>
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/blog"
            className="block py-2 pl-3 pr-4 text-zinc-900 text-3xl rounded md:bg-transparent md:p-0 dark:text-white"
            aria-current="page"
          >
            blog
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
