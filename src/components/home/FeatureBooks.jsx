import Image from "next/image";
import Link from "next/link";
import books from "@/data/book.json";

const FeatureBooks = () => {
  return (
    <section className="py-20">
      <div className="w-11/12 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Featured Books</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {books.map((book) => {
            const { id, title, author, description, price, image } = book;

            return (
              <div
                key={id}
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
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureBooks;
