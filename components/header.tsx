import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b-zinc-400 border-b-[1px]">
      <h1 className="text-4xl font-bold">Logo</h1>

      <nav>
        <ul className="flex items-center gap-3">
          <li>
            <Link className="hover:text-zinc-400 transition-all" href="/">Home</Link>
          </li>
          <li>
            <Link className="hover:text-zinc-400 transition-all" href="/">O que fazemos</Link>
          </li>
          <li>
            <Link className="hover:text-zinc-400 transition-all" href="/">Cases</Link>
          </li>
        </ul>
      </nav>

      <button className="w-52 py-2 rounded-sm bg-green-500 hover:bg-green-400 transition-all">
        Fale conosco
      </button>
    </header>
  );
};

export default Header;
