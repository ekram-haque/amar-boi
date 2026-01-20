const HowWorks = () => {
  return (
    <section className="py-24 bg-[#f5e3c3]">
      <div className="w-11/12 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-14 text-[#3b2f2f]">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Browse books from the public collection.",
            "View detailed information about each book.",
            "Admins can add new books securely.",
          ].map((text, i) => (
            <div
              key={i}
              className="bg-[#3b2f2f] text-white p-6 rounded-xl"
            >
              <div className="text-3xl font-bold text-accent mb-3">
                {i + 1}
              </div>
              <p className="text-sm text-white/80">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
