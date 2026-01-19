import books from "@/data/book.json";
import Image from "next/image";
import Link from "next/link";

export default async function BookDetail({ params }) {
  const { id } =await params;

  // find book by id
  const item = books.find((book) => book.id.toString() === id);

  if (!item) {
    return (
      <p className="text-center mt-20 text-red-500 text-lg">
        Item not found!
      </p>
    );
  }

  return (
    <section className="bg-[#f6e4c6] min-h-screen py-16">
      <div className="w-11/12 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Book Image */}
        <div className="flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition">
            <Image
              src={item.image}
              alt={item.title}
              width={320}
              height={450}
              className="object-cover"
            />
          </div>
        </div>

        {/* Book Info */}
        <div>
          <span className="inline-block mb-3 px-5 py-2 rounded-full bg-secondary text-primary text-sm">
            Category: {item.category}
          </span>

          <h1 className="text-4xl font-bold mb-3 text-secondary">
            {item.title}
          </h1>

          <p className="text-gray-700 mb-5 leading-relaxed">
            {item.description}
          </p>

          <span  className="text-2xl font-bold bg-secondary text-primary mb-6 py-3 px-5 rounded-lg">
            ${item.price}
          </span>

          {/* Buttons */}
          <div className="flex gap-4 mt-5">
            <button className="px-6 py-3 rounded-lg bg-accent text-black hover:bg-secondary hover:text-primary font-semibold hover:opacity-90 transition">
              Buy Now
            </button>

            <Link
              href="/books"
              className="px-6 py-3 rounded-lg border border-gray-400 hover:bg-black hover:text-white transition"
            >
              Back to Books
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
