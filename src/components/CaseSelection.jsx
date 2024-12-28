import React, { useState } from 'react';
import './CaseSelection.css';
import caseOption1 from '../assets/images/case-options.png'; // Import the first image
import caseOption2 from '../assets/images/case-options 2.png'; // Import the second image

const cases = [
  { id: 1, material: 'Aluminum', price: 429, image: caseOption1 },
  { id: 2, material: 'Titanium', price: 749, image: caseOption2 },
];

const CaseSelection = () => {
  const [selectedCase, setSelectedCase] = useState(cases[0]); // Default to the first case

  return (
    <section className="case-selection">
      <h2>Select Your Case</h2>
      <div className="case-options">
        {cases.map((caseOption) => (
          <div
            key={caseOption.id}
            onClick={() => setSelectedCase(caseOption)}
            className={selectedCase.id === caseOption.id ? 'selected' : ''}
          >
            <img src={caseOption.image} alt={caseOption.material} className="case-image" />
            <p>{caseOption.material}</p>
          </div>
        ))}
      </div>
      <div className="case-details">
        <p><strong>Selected Case:</strong> {selectedCase.material}</p>
        <p><strong>Price:</strong> ${selectedCase.price}</p>
      </div>
    </section>
  );
};

export default CaseSelection;
