import React, { useState } from 'react';
import Modal from './Modal';

const DomainList = () => {

    // создаем состояние, в котором храним выбранный домен
    const [selectedDomain, setSelectedDomain] = useState(null);
  
    // список доменов
    const domains = [
      { name: 'example1.com', price: '$100' },
      { name: 'example2.com', price: '$200' },
      { name: 'example3.com', price: '$300' },
    ];
  
    // обработчик клика по домену
    const handleClick = (domain) => {
      setSelectedDomain(domain);
    };
  
    return (
      <div className="domain-list">
        {/* отображаем список доменов */}
        {domains.map((domain, index) => (
          <div key={index}>
            <a onClick={() => handleClick(domain)}>
              {domain.name} ({domain.price})
            </a>
          </div>
        ))}
  
        {/* если выбран домен, то отображаем модальное окно */}
        {selectedDomain && (
          <Modal onClose={() => setSelectedDomain(null)}>
            <h2>{selectedDomain.name}</h2>
            <p>{selectedDomain.price}</p>
          </Modal>
        )}
      </div>
    );
  };

  export default DomainList;