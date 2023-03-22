import React, { useState, useEffect } from 'react';
import '../css/Typing.css';

const names = [
  'Allnnovations.Ru',
  'SpaceExplorers.Ru',
  'FinanciallyFree.Ru',
  'FutureInvestment.Ru',
  'GreenInitiatives.Ru',
  'Allnnovations.Com',
  'SuccessfulStartup.Ru',
  'TopOnlineBusiness.Ru',
  'AllInnovations.Ru',
  'HealthyChoices.Ru',
  'PremiumProfit.Ru',
  'DigitaDynasty.Ru',
  'BoldBrand.Ru',
  'RenewableResources.Ru',
  'EliteEnterprise.Ru',
  'Vividventure.Ru',
  'CleanEnergyNow.Ru',
  'NextEdu.Ru',
  'FiniTech.Ru',
  'FitnessTrends.Ru',
  'TravelInnovation.Ru',
  'InnovateTech.Ru',
  'FitnessGoals.Ru',
  'TechUpdates.Ru',
  'FitnessEmpire.Ru',
  'FintechSpot.Net',
  'TechInnovatepro.Com',
  'AiIndustry.Ru',
  'BigDataAnalytics.Ru',
  'BlockchainMarket.Ru',
  'FintechMarket.Ru',
  'InnovateInvest.Ru',
  'SpaceIndustry.Ru',
  'WellnessZone.Ru'
];

const words = names.map(name => ({ text: name + "1", link: `https://example.com/${name} `}));

const Typing = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isWordComplete, setIsWordComplete] = useState(false);

  useEffect(() => {
    if (isWordComplete) {
      const timeoutId = setTimeout(() => {
        setCurrentLetterIndex(0);
        setIsWordComplete(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 2000);
      return () => clearTimeout(timeoutId);
    }

    const intervalId = setInterval(() => {
      setCurrentLetterIndex((currentIndex) => {
        if (currentIndex < words[currentWordIndex].text.length - 1) {
          return currentIndex + 1;
        } else {
          setIsWordComplete(true);
          return currentIndex;
        }
      });
    }, 200);

    return () => clearInterval(intervalId);
  }, [currentWordIndex, currentLetterIndex, isWordComplete]);

  const word = words[currentWordIndex];
  const text = word.text.slice(0, currentLetterIndex);
  const isCursorVisible = !isWordComplete || Date.now() % 1000 < 500;
  const textColor = isWordComplete ? '#0480fc' : 'black';

  return (
    <div className="word-printer">
      <div className="word-printer__container">
        <h2 className="word-printer__word" style={{ color: textColor }}>
          {text}
          {isCursorVisible && <span className="word-printer__cursor">|</span>}
        </h2>
        {/*<a
          href={word.link}
          target="_blank"
          rel="noopener noreferrer"
          className="word-printer__link"
        >
          Learn more
  </a>*/}
      </div>
    </div>
  );
};

export default Typing;