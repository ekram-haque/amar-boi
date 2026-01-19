import book from "@/data/book.json";
import Link from "next/link";
import Image from "next/image";

export default function ItemsPage() {
  return (
    <div className="w-11/12  mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">All Books</h1>
      <div className="grid md:grid-cols-4 gap-6">
        {book.map(item => {
          const { id, title, author, description, price, image } = item;

          return (
            <div
                key={id}
                className="card bg-secondary shadow-md hover:shadow-xl transition duration-300"
              >
                <figure className="px-2 pt-3">
                  <Image
                    src={image}
                    alt={title}
                    width={200}
                    height={280}
                    className="rounded-lg object-cover h-70 shadow-lg mx-auto"
                  />
                </figure>

                <div className="card-body text-left">
                  <h2 className="card-title text-primary">{title}</h2>
                  <p className="text-sm text-gray-200">by {author}</p>

                  <p className="text-sm line-clamp-3 text-gray-400">{description}</p>

                  <div className="card-actions justify-between items-center mt-4">
                    <span className="font-semibold text-accent">
                      ${price}
                    </span>

                    <Link
                      href={`/books/${id}`}
                      className="btn btn-sm btn-accent"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
}
