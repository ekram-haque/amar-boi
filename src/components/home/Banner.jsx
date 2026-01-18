import Link from 'next/link';
import React from 'react';

const banner = () => {
    return (
<section className=" bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-24">
        <div className="w-11/12 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Discover & Manage <br />
              <span className="text-yellow-300">Your Favorite Books</span>
            </h1>
            <p className="text-white/90 mb-8 max-w-xl">
              ItemHub is a simple book listing platform built with Next.js where
              users can browse books, view details, and admins can add new items.
            </p>
            <div className="flex gap-4">
              <Link
                href="/items"
                className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium"
              >
                Browse Books
              </Link>
              <Link
                href="/login"
                className="border border-white px-6 py-3 rounded-md font-medium"
              >
                Admin Login
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800"
              alt="Books"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

    );
};

export default banner;