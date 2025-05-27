// teach-card.tsx
import React from 'react';
import './pre-card.css';

interface TeachCardProps {
  name: string;
  category: string;
  location: string;
  loclink: string;
  students: string;
  teachers: string;
  experience: string;
  rating: number;
  price?: number;
  duration: string;
  imageUrl: string;
  introduction: string;
  email: string;
}

const TeachCard = ({ 
  name, 
  category, 
  location,
  loclink, 
  students,
  teachers, 
  experience, 
  rating, 
  price = 0, 
  duration, 
  imageUrl, 
  introduction,
  email 
}: TeachCardProps) => {

  return (
    <div className="card">
      {/* Зураг хэсэг */}
      <div className="image-section">
        <img src={imageUrl} alt="Classroom"/>
      </div>

      {/* Танилцуулга хэсэг */}
      <div className="info-section">
        <h2>
          {name} <span className="category">{category}</span>
        </h2>

        <div className="info-item">
          <img src="../loc.svg" alt="icon" className="icon-svg" />
          <a
            href={loclink}
            target="_blank"
            rel="noopener noreferrer"
            className="location-link"
          >
            {location}
          </a>
        </div>


        <div className="info-item">
          <img src='../person.svg' alt="icon" className="icon-svg" />
          <span>{students} сурагчтай</span>
        </div>

        <div className="info-item">
          <img src='../teach.svg' alt="icon" className="icon-svg" />
          <span>{teachers}</span>
        </div>

        <div className="info-item">
          <img src='../time.svg' alt="icon" className="icon-svg" />
          <span>{experience}</span>
        </div>

        <div className="introduction">
          <p>{introduction}</p>
        </div>
      </div>

      {/* Холбогдох хэсэг */}
      <div className="contact-section">
        <div className="rating">
          <div className="rating-number">{rating}</div>
          <div className="rating-label">Үнэлгээ</div>
        </div>

        <div className="price">
          <div className="amount">{price.toLocaleString()}₮</div>
          <div className="duration">{duration}</div>
        </div>

        <a
          href={`https://mail.google.com/mail/?view=cm&to=${email}&su=Сургалтын%20тухай%20PreScool&body=Сайн%20байна%20уу%20${name}%2C`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          Мэйл илгээх
        </a>


      </div>
    </div>
  );
};

export default TeachCard;