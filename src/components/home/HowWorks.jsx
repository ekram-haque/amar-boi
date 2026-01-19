import React from 'react';

const HowWorks = () => {
    return (
       <section className="py-20">
        <div className="w-11/12 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className='p-6 border rounded-lg bg-secondary text-primary'>
              <h4 className="font-semibold text-lg mb-2">1. Browse</h4>
              <p className="text-white">
                Explore books from the public item list.
              </p>
            </div>
            <div className='p-6 border rounded-lg bg-secondary text-primary '> 
              <h4 className="font-semibold text-lg mb-2">2. View Details</h4>
              <p className="text-white">
                Click any book to see its full information.
              </p>
            </div>
            <div className='p-6 border rounded-lg bg-secondary text-primary'>
              <h4 className="font-semibold text-lg mb-2">3. Add Books</h4>
              <p className="text-white">
                Admin users can add new books after login.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default HowWorks;