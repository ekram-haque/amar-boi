import React from "react";

const Categories = () => {
  return (
    <section className=" py-20">
      <div className="w-11/12 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Categories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Programming", "Fiction", "Business", "Self Development"].map(
            (cat) => (
              <span
                key={cat}
                className="px-5 py-2 border rounded-lg text-black bg-accent  hover:bg-secondary hover:text-primary"
              >
                {cat}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Categories;
