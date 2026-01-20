import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#3b2f2f] text-[#f5e3c3]">
      <div className="w-11/12 max-w-6xl mx-auto py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand Section */}
        <div>
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h10v2H4z" />
            </svg>
            Book<span className="text-primary">Worm</span>
          </Link>
          <p className="text-sm mt-4 text-[#e6d3b1] leading-relaxed">
            BookWorm helps you discover books, track your reading progress, and
            build a consistent reading habit with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li><Link href="/books" className="hover:text-primary">All Books</Link></li>
            <li><Link href="/library" className="hover:text-primary">My Library</Link></li>
            <li><Link href="/dashboard" className="hover:text-primary">Dashboard</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a className="hover:text-primary transition">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775..." />
              </svg>
            </a>
            <a className="hover:text-primary transition">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246..." />
              </svg>
            </a>
            <a className="hover:text-primary transition">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5..." />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#5a4a4a] text-center py-4 text-sm text-[#d8c4a3]">
        © {new Date().getFullYear()} BookWorm. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
