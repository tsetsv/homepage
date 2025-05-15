import React from 'react';
import './teach-card.css';

interface TeachCardProps {
  photo: string;
  name: string;
  subject: string;
  stats: string[];
  description: string;
}

const TeachCard: React.FC<TeachCardProps> = ({ photo, name, subject, stats, description }) => {
  return (
    <div className="teach-card">
      <div className="teach-card-header">
        <div className="teach-card-profile">
          <img src={photo} alt={`${name}`} className="teach-card-photo" />
          <div className="teach-card-info">
            <h3>{name}</h3>
            <h4>{subject}</h4>
          </div>
        </div>
        <div className="teach-card-stats">
          {stats.map((stat, index) => (
            <div className="teach-card-stat" key={index}>
              {stat}
            </div>
          ))}
        </div>
      </div>
      <div className="teach-card-footer">
        <h3>Заах арга барил</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TeachCard;