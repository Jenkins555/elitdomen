import React from 'react';
import '../css/PremiumButton.css'; // импортируем стили

const PremiumButton = () => {
  const handleClick = () => {
    window.location.href = '#category'; // переходим на страницу списка доменов
  };

  return (
    <button className="premium-button" onClick={handleClick}>
      Все премиум домены
    </button>
  );
};

export default PremiumButton;