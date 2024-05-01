"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeSwitcher } from "../UI/ThemeSwitcher";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-white border-gray-200 dark:bg-gray-900 px-5  py-2 mb-10 fixed top-0 left-0 w-full z-30">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <Link href="/">
          <span className="self-center text-2xl  font-extrabold whitespace-nowrap dark:text-white">
            <span className="">🐝</span>buzzing.
            <span className="text-amber-400">tales</span>
          </span>
        </Link>
        <div className="flex items-center">
          <div className="md:hidden">
            <ThemeSwitcher />
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-2xl text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <IoMdClose className=" text-zinc-800 dark:text-white" />
            ) : (
              <GiHamburgerMenu className="  text-zinc-800 dark:text-white" />
            )}
          </button>
        </div>

        <div
          className={`w-full md:block md:w-auto ${isOpen ? "" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="hidden md:block">
              <ThemeSwitcher />
            </li>
            <li>
              <Link
                href="/blog"
                className="block py-2 pl-3 pr-4 text-zinc-900 text-xl rounded md:bg-transparent md:p-0 dark:text-white"
                aria-current="page"
                onClick={() => setIsOpen(false)}
              >
                blog
              </Link>
            </li>
            <li>
              <Link
                href="/creators"
                className="block py-2 pl-3 pr-4 text-zinc-900  text-xl rounded md:bg-transparent md:p-0 dark:text-white"
                aria-current="page"
                onClick={() => setIsOpen(false)}
              >
                creators
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
