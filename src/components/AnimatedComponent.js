import React, { useEffect } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedComponent = () => {
  useEffect(() => {
    const cards = gsap.utils.toArray('.card');

    cards.forEach((card, index) => {
      const animation = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
      });

      animation.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: 'power1.inOut',
      });
    });
  }, []);

  return (
    <div>
      <Controller>
        <Scene duration="100%" triggerHook="onEnter">
          {(progress) => (
            <div className="header" style={{ opacity: progress }}>
              <h1>Title</h1>
              <p>Description</p>
            </div>
          )}
        </Scene>

        <Scene duration="100%" triggerHook="onEnter">
          {(progress) => (
            <div className="cards">
              <div className="card">
                <h2>Title 1</h2>
                <img src="image1.jpg" alt="Image 1" />
                <p>Text 1</p>
              </div>
              <div className="card">
                <h2>Title 2</h2>
                <img src="image2.jpg" alt="Image 2" />
                <p>Text 2</p>
              </div>
              <div className="card">
                <h2>Title 3</h2>
                <img src="image3.jpg" alt="Image 3" />
                <p>Text 3</p>
              </div>
              <div className="card">
                <h2>Title 4</h2>
                <img src="image4.jpg" alt="Image 4" />
                <p>Text 4</p>
              </div>
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  );
};

export default AnimatedComponent;