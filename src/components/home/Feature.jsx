import React from 'react';

const Feature = () => {
    return (
         <section className="py-20">
        <div className="w-11/12 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg bg-secondary text-primary">
              <h3 className="text-xl font-semibold mb-2">Browse Books</h3>
              <p className="text-white">
                View a list of books fetched from the server.
              </p>
            </div>
            <div className="p-6 border rounded-lg bg-secondary text-primary">
              <h3 className="text-xl font-semibold mb-2">Book Details</h3>
              <p className="text-white">
                See full details of each book on a separate page.
              </p>
            </div>
            <div className="p-6 border rounded-lg bg-secondary text-primary">
              <h3 className="text-xl font-semibold mb-2">Admin Access</h3>
              <p className="text-white">
                Logged-in users can add new books securely.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Feature;