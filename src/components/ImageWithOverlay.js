import React from 'react';
import '../css/ImageWithOverlay.css';
import  business  from '../img/business2.png';

const ImageWithOverlay = ({ imageUrl, title }) => {
  const handleClick = () => {
    window.location.href = '#category'; // переходим на страницу списка доменов
  };
    return (
      <div className="image-with-header">
       <div className="content">
          <h2>
Выберите идеальное имя для своего успеха.</h2>
          
        </div>
        <div className="content_ul">
        
          <ul>
            <li><a href="#herosection">Домены для бизнесса</a></li>
            <li><a href="#seo">SEO-преимущества</a></li>
            <li><a href="#category">Домены по категориям</a></li>
            <li><a href="#hello">Как правильно выбрать домен</a></li>
            <li><a href="#question">Премиум консультация</a></li>
          </ul>
        </div>
        <img src={business} alt={title} />
        
        <div className="image-overlay">
          <button className="btn" onClick={handleClick}>Выбрать премиум домен</button>
        </div>
      </div>
    );
  };
  

export default ImageWithOverlay;