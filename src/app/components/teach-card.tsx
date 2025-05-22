import React from 'react';
import './teach-card.css';

interface TeachCardProps {
  photo: string;
  name: string;
  subject: string;
  experience: string;
  rating: string;
  students: string;
  description: string;
  skills?: string[];
}

const TeachCard: React.FC<TeachCardProps> = ({ 
  photo, 
  name, 
  subject, 
  experience, 
  rating, 
  students, 
  description,
  skills = []
}) => {
  return (
    <div className="teach-card">
      <div className="teach-card-main">
        <div className="teach-card-image">
          <img src={photo} alt={`${name}`} className="teach-photo" />
        </div>
        <div className="teach-card-content">
          <h3 className="teach-name">{name}</h3>
          <p className="teach-subject">{subject}</p>
        </div>
      </div>
      
      <div className="teach-card-details">
        <div className="teach-stats">
          <div className="stat-item">
            <span className="stat-label">Туршлага</span>
            <span className="stat-value">{experience}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Үнэлгээ</span>
            <span className="stat-value">{rating}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Сурагчид</span>
            <span className="stat-value">{students}</span>
          </div>
        </div>
        
        <div className="teach-description">
          <h4>Заах арга барил</h4>
          <p>{description}</p>
        </div>
        
        {skills.length > 0 && (
          <div className="teach-skills">
            <h4>Чадвар</h4>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeachCard;