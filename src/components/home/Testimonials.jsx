import React from "react";

const Testimonials = () => {
  return (
    <section className="py-20 bg-[#f5e3c3]">
      <div className="w-11/12 max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#3b2f2f] mb-4">
          What Our Readers Say
        </h2>
        <p className="text-[#6b5b4b] mb-12 max-w-2xl mx-auto">
          Trusted by book lovers who enjoy discovering, tracking, and managing
          their reading journey with BookWorm.
        </p>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#3b2f2f] text-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <p className="text-sm mb-4 italic">
              “BookWorm completely changed my reading habits. I now track every
              book I read!”
            </p>
            <h4 className="font-semibold">Alice</h4>
            <span className="text-xs opacity-80">Student</span>
          </div>

          {/* Card 2 */}
          <div className="bg-[#3b2f2f] text-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <p className="text-sm mb-4 italic">
              “A clean and simple platform with amazing recommendations. Highly
              recommended.”
            </p>
            <h4 className="font-semibold">David</h4>
            <span className="text-xs opacity-80">Reader</span>
          </div>

          {/* Card 3 */}
          <div className="bg-[#3b2f2f] text-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <p className="text-sm mb-4 italic">
              “Tracking my reading progress has never been this easy. Love the
              design!”
            </p>
            <h4 className="font-semibold">Emma</h4>
            <span className="text-xs opacity-80">Book Enthusiast</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
