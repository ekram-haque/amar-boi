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
                className="px-5 py-2 border rounded-full text-gray-700 bg-white hover:text-white hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
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
