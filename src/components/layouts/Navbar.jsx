"use client";

import NavLink from "../buttons/NavLink";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(document.cookie.includes("auth=true"));
  }, []);

  const handleLogout = () => {
    // remove cookie
    document.cookie = "auth=; Max-Age=0; path=/";

    // update state
    setIsLoggedIn(false);

    // redirect to home
    window.location.href = "/";
  };

  const nav = (
    <>
      <li><NavLink href="/">Home</NavLink></li>
      <li><NavLink href="/books">All-Books</NavLink></li>
      <li><NavLink href="/add-book">Add Books</NavLink></li>
 
    </>
  );

  return (
    <div className="navbar bg-secondary text-white">
      <div className="navbar w-11/12 mx-auto">

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              ☰
            </div>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {nav}
            </ul>
          </div>
          <Link href={'/'} className="text-xl font-semibold">
            Book <span className="text-primary">Worm</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
        </div>

        <div className="navbar-end">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-accent text-black px-4 py-2 rounded-md"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="bg-accent text-black px-4 py-2 rounded-md"
            >
              Login
            </Link>
          )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;
