const Categories = () => {
  return (
    <section className="py-24">
      <div className="w-11/12 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Categories</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {["Programming", "Fiction", "Business", "Self Development"].map(
            (cat) => (
              <button
                key={cat}
                className="px-6 py-2 rounded-full bg-accent text-gray-900 font-medium hover:bg-secondary hover:text-primary transition"
              >
                {cat}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Categories;
