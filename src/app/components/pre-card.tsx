import React from 'react';
import './pre-card.css';

interface PreCardProps {
  title: string;
  image: string;
  details: string[];
}

const PreCard: React.FC<PreCardProps> = ({ title, image, details }) => {
  return (
    <div className="pre-card">
      <div className="pre-card-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="pre-card-title">{title}</div>
      </div>
      <div className="pre-card-details">
        {details.map((detail, index) => (
          <div className="pre-card-detail" key={index}>
            {detail}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreCard;