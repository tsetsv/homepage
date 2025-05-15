import React from 'react';
import './detail-section.css';

interface DetailProps {
  bannerImg: string;
  iconImg: string;
  heading: string;
  description: string;
  isImageRight?: boolean; // Энэ нь зураг баруун эсвэл зүүн талд байхыг сонгоно.
}

const DetailSection: React.FC<DetailProps> = ({
  bannerImg,
  iconImg,
  heading,
  description,
  isImageRight = true, // Зураг баруун талд байхыг үндсэн тохиргоо болгоно.
}) => {
  return (
    <section className="detail-section">
      <div className={`detail-container ${isImageRight ? 'image-right' : 'image-left'}`}>
        {!isImageRight && (
          <img src={bannerImg} alt="Banner" className="banner-img" loading="lazy" />
        )}
        <div className="details-right">
          <img src={iconImg} alt="Icon" className="icon-img" loading="lazy" />
          <h4>{heading}</h4>
          <p>{description}</p>
        </div>
        {isImageRight && (
          <img src={bannerImg} alt="Banner" className="banner-img" loading="lazy" />
        )}
      </div>
    </section>
  );
};

export default DetailSection;