import React, { useState } from 'react';
import './SizeSelection.css';
import sizeOption1 from '../assets/images/size-options.png'; // Import the first image
import sizeOption2 from '../assets/images/size-options 2.png'; // Import the second image

// Define the available sizes with prices and images
const sizes = [
  { id: 1, size: '42mm', price: 429, image: sizeOption1 },
  { id: 2, size: '46mm', price: 459, image: sizeOption2 },
];

const SizeSelection = () => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]); // Default to the first size

  return (
    <section className="size-selection">
      <h2>Select Your Size</h2>
      <div className="size-options">
        {sizes.map((sizeOption) => (
          <div
            key={sizeOption.id}
            onClick={() => setSelectedSize(sizeOption)} // Update selected size on click
            className={selectedSize.id === sizeOption.id ? 'selected' : ''}
          >
            <img src={sizeOption.image} alt={sizeOption.size} className="size-image" />
            <p>{sizeOption.size}</p>
          </div>
        ))}
      </div>
      <div className="size-details">
        <p><strong>Selected Size:</strong> {selectedSize.size}</p>
        <p><strong>Price:</strong> ${selectedSize.price}</p>
      </div>
    </section>
  );
};

export default SizeSelection;
