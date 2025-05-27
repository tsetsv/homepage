import React from 'react';
import './hero.css';

interface HeroSectionProps {
  title: string;
  text: string;
  page: string; 
  buttonText: string;
  image: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, text, buttonText, page, image}) => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-container">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-text">{text}</p>
        <div className="hero-button">
          <a href={page} role="button" aria-label={buttonText}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;