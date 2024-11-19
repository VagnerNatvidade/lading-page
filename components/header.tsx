import Link from "next/link";
import React from "react";
import Button from "./button";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b-zinc-600 border-b-[1px]">
      <h1 className="text-4xl font-bold">Logo</h1>

      <nav>
        <ul className="flex items-center gap-3">
          <li>
            <Link className="hover:text-zinc-400 transition-all" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-zinc-400 transition-all" href="/">
              O que fazemos
            </Link>
          </li>
          <li>
            <Link className="hover:text-zinc-400 transition-all" href="/">
              Cases
            </Link>
          </li>
        </ul>
      </nav>

      <div className="bg-button rounded-sm hover:opacity-90 transition-all cursor-pointer">
        <Button title="Fale conosco" />
      </div>
    </header>
  );
};

export default Header;
