import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#2d1f1f] to-[#3a2a2a] text-white rounded-2xl">
      <div className="w-11/12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Explore Great Books?
        </h2>
        <p className="text-white/80 mb-8">
          Start browsing now and discover your next favorite read.
        </p>
        <Link
          href="/books"
          className="inline-block bg-accent text-gray-900 px-10 py-3 rounded-md font-semibold hover:scale-105 transition"
        >
          View All Books
        </Link>
      </div>
    </section>
  );
};

export default CTA;
