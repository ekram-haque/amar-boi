import Link from 'next/link';
import React from 'react';

const CTA = () => {
    return (
         <section className="p-6 border rounded-lg bg-secondary text-primary py-20">
        <div className="w-11/12 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Explore Books?
          </h2>
          <p className="mb-8 text-white">
            Start browsing our collection or login as admin to add new books.
          </p>
          <Link
            href="/items"
            className="inline-block bg-accent text-gray-900 px-8 py-3 rounded-md font-medium"
          >
            View All Books
          </Link>
        </div>
      </section>
    );
};

export default CTA;