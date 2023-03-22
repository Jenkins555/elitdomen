import React, { useState } from 'react';
import '../css/Questionnaire.css';

const Questionnaire = ({ industries }) => {
  const [industry, setIndustry] = useState(null);

  const handleIndustrySelect = (industryId) => {
    setIndustry(industryId);
  };

  return (
    <div className="questionnaire-container">
      <div className="questionnaire-header">
      <a name="question"></a>
        {industry === null ? (
          <div>
            <h2>Премиум консультации для вашего бизнеса</h2>
            <p>Выберите отрасль, в которой вы хотите получить консультацию</p>
          </div>
        ) : (
          <div>
            <h3>{industries.find((item) => item.id === industry).title}</h3>
            <p>{industries.find((item) => item.id === industry).description}</p>
          </div>
        )}
      </div>
      <ul className="questionnaire-list">
        {industries.map((item) => (
          <li key={item.id}>
            <button className="questionnaire-button" onClick={() => handleIndustrySelect(item.id)}>
              {item.title}
            </button>
          </li>
        ))}
      </ul>
      {industry !== null && (
        <div className="questionnaire-answer">
          <p></p>
        </div>
      )}
    </div>
  );
};

export default Questionnaire;