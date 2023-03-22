import React, { useState } from 'react';
import CategoryMenu from './CategoryMenu';
import DomainList from './DomainList';
import Modal from './Modal';

const DomainSelector = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDomain, setSelectedDomain] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedDomain(null);
  };

  const handleDomainClick = (domain) => {
    setSelectedDomain(domain);
  };

  return (
    <div>
      <CategoryMenu
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      {selectedCategory && (
        <DomainList
          selectedCategory={selectedCategory}
          selectedDomain={selectedDomain}
          onDomainClick={handleDomainClick}
        />
      )}
      {selectedDomain && (
        <Modal onClose={() => setSelectedDomain(null)}>
          <h2>{selectedDomain.name}</h2>
          <p>{selectedDomain.price}</p>
        </Modal>
      )}
    </div>
  );
};

export default DomainSelector;