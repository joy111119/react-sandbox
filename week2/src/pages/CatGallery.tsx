import React, { useState, useEffect } from 'react';

export function CatGallery() {
  // State to store the array of cat objects
  const [cats, setCats] = useState<any[]>([]);

  // Fetch 10 cat images once when component mounts
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then((response) => response.json())
      .then((data) => setCats(data)) // save array to state
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Cat Gallery</h2>

      {/* Tailwind grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cats.map((cat) => (
          <img
            key={cat.id}
            src={cat.url}
            alt="Cat"
            className="rounded-xl shadow-lg w-full h-64 object-cover"
          />
        ))}
      </div>
    </div>
  );
}