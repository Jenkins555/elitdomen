import React from 'react';
import '../css/SeoBlock.css';
import world from '../img/world2.png'
import brand from '../img/brand.png'
import chart from '../img/chart2.png'
import arrow from '../img/arrow.png'
import domenName from '../img/domenName.png'

const SeoBlock = () => {
  return (
    <div className="my-component">
      <a name="seo"></a>
      <h2 className="my-component__title">5 SEO-преимуществ, которые вы получите с нашими премиальными доменами</h2>
      <p className="my-component__block-text">Если вы стремитесь к тому, чтобы ваш сайт был успешным в поисковой оптимизации, правильный выбор доменного имени может быть решающим фактором. Наши премиальные домены предоставляют не только высокое качество, но и уникальные SEO-преимущества, которые помогут вашему бизнесу достичь высоких позиций в поисковых результатах.</p>
      <div className="my-component__flex-container">
        <div className="my-component__block">
          <h3 className="my-component__block-title">Ключевые слова в доменном имени</h3>
          <p className="my-component__block-text">Наши премиальные домены содержат ключевые слова, связанные с отраслями, которые они представляют. Это позволяет улучшить релевантность вашего сайта для поисковых запросов и увеличить шансы на высокие позиции в поисковой выдаче.</p>
          <img className="my-component__block-img" src={domenName} alt="Изображение 1" />
        </div>
        <div className="my-component__block">
          <h3 className="my-component__block-title">Запоминаемость</h3>
          <p className="my-component__block-text">Наши домены легко запоминаются и узнаваемы благодаря простой и легко произносимой структуре. Это помогает вашему бренду выделиться среди конкурентов и повысить узнаваемость.</p>
          <img className="my-component__block-img" src={arrow} alt="Изображение 2" />
        </div>
        <div className="my-component__block">
          <h3 className="my-component__block-title">Конкурентные преимущества</h3>
          <p className="my-component__block-text">Хороший доменный адрес может стать ключевым конкурентным преимуществом в вашей отрасли. Если вы используете один из наших доменов, вы можете обойти конкурентов в поисковых результатах и привлечь больше клиентов.</p>
          <img className="my-component__block-img" src={chart} alt="Изображение 3" />
        </div>
        <div className="my-component__block">
          <h3 className="my-component__block-title">Брендинг</h3>
          <p className="my-component__block-text">Уникальное доменное имя может стать вашим брендом, узнаваемым среди клиентов. Наша коллекция доменных имен обладает неповторимым и привлекательным звучанием, которое может помочь вам выделиться среди других брендов.</p>
          <img className="my-component__block-img" src={brand} alt="Изображение 4" />
        </div>
        <div className="my-component__block">
          <h3 className="my-component__block-title">Международный потенциал</h3>
          <p className="my-component__block-text">Многие из наших доменов имеют международное звучание и могут быть использованы для расширения бизнеса за пределами России. Это может открыть новые рынки и клиентов, что может помочь вам увеличить доходы и расширить свой бизнес.</p>
          <img className="my-component__block-img" src={world} alt="Изображение 5" />
        </div>
      </div>
    </div>
  );
};

export default SeoBlock;