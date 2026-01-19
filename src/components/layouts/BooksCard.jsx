import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BooksCard = () => {
    return (
         <div
              
                className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300"
              >
                <figure className="px-6 pt-6">
                  <Image
                    src={image}
                    alt={title}
                    width={200}
                    height={280}
                    className="rounded-lg object-cover h-60 mx-auto"
                  />
                </figure>

                <div className="card-body text-left">
                  <h2 className="card-title">{title}</h2>
                  <p className="text-sm text-gray-500">by {author}</p>

                  <p className="text-sm line-clamp-3">{description}</p>

                  <div className="card-actions justify-between items-center mt-4">
                    <span className="font-semibold text-primary">
                      ${price}
                    </span>

                    <Link
                      href={`/items/${id}`}
                      className="btn btn-sm btn-primary"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
    );
};

export default BooksCard;