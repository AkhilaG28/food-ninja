import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1">
        <h1>
          <Link to="/" className="text-pink-700 text-3xl font-bold uppercase">
            Food Ninja
          </Link>
        </h1>
        <ul className="bg-purple-600 sm:bg-pink-500 md:bg-blue-500 lg:bg-green-900 rounded-xl text-white p-2 flex justify-evenly">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
