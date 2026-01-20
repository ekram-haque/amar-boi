import Image from "next/image";
import Link from "next/link";
import books from "@/data/book.json";

const FeatureBooks = () => {
  return (
    <section className="py-24">
      <div className="w-11/12 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-14">Featured Books</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {books.slice(0, 4).map((book) => (
            <div
              key={book.id}
              className="bg-secondary rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition"
            >
              <figure className="pt-5">
                <Image
                  src={book.image}
                  alt={book.title}
                  width={200}
                  height={280}
                  className="rounded-lg mx-auto shadow-lg"
                />
              </figure>

              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-primary">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-300 mb-2">
                  by {book.author}
                </p>

                <p className="text-sm text-gray-400 line-clamp-3">
                  {book.description}
                </p>

                <div className="flex justify-between items-center mt-5">
                  <span className="font-bold text-accent">
                    ${book.price}
                  </span>
                  <Link
                    href={`/books/${book.id}`}
                    className="text-sm font-medium text-accent hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBooks;
