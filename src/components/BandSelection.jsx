import React, { useState } from 'react';
import './BandSelection.css';
import bandOption1 from '../assets/images/band-options.png'; // Import the first image
import bandOption2 from '../assets/images/band-options-2.png'; // Import the second image

const bands = [
  { id: 1, type: 'Solo Loop', price: 49, image: bandOption1 },
  { id: 2, type: 'Braided Solo Loop', price: 99, image: bandOption2 },
  { id: 3, type: 'Sport Band', price: 49, image: bandOption1 },
];

const BandSelection = () => {
  const [selectedBand, setSelectedBand] = useState(bands[0]);

  return (
    <section className="band-selection">
      <h2>Select Your Band</h2>
      <div className="band-options">
        {bands.map((bandOption) => (
          <div
            key={bandOption.id}
            onClick={() => setSelectedBand(bandOption)}
            className={selectedBand.id === bandOption.id ? 'selected' : ''}
          >
            <img src={bandOption.image} alt={bandOption.type} className="band-image" />
            <p>{bandOption.type}</p>
          </div>
        ))}
      </div>
      <p>Selected Band: {selectedBand.type}</p>
      <p>Price: ${selectedBand.price}</p>
    </section>
  );
};

export default BandSelection;
