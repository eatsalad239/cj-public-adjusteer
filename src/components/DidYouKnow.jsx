import React, { useState, useEffect } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const DidYouKnow = () => {
  const facts = [
    "Did you know cleaning up before photos can erase claim evidence?",
    "An adjuster's first report is not the final word. You can submit additional documentation.",
    "Denied doesn't always mean done. Many claims can be supplemented within set timelines.",
    "Itemized estimates and dated photo logs often change how a loss is evaluated.",
    "Louisiana restricts roofers from assisting with claims. A licensed public adjuster can assist you with documentation and communications."
  ];

  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % facts.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-amber-50 to-yellow-50 border-y border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-1">
            <InformationCircleIcon className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-gray-900 font-medium">
                {facts[currentFactIndex]}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                See if this applies to your loss. 
                <Link to="/book-appointment" className="text-cj-red hover:text-cj-dark font-semibold ml-1">
                  Request a no-cost inspection.
                </Link>
              </p>
            </div>
          </div>
          <div className="flex space-x-1 ml-4">
            {facts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFactIndex(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentFactIndex ? 'bg-amber-600' : 'bg-amber-300'
                }`}
                aria-label={`Go to fact ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DidYouKnow;