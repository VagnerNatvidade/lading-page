import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="text-4xl font-bold">Logo</h1>

      <nav>
        <ul className="flex items-center gap-3">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">O que fazemos</a>
          </li>
          <li>
            <a href="">Cases</a>
          </li>
        </ul>
      </nav>

      <button className="w-52 py-2 rounded-sm bg-[#0DC74F]">Fale conosco</button>
    </header>
  );
};

export default Header;
