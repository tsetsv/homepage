import React from 'react';
import './detail-rigth.css';

interface DetailRightProps {
  bannerImg: string;
  iconImg: string;
  heading: string;
  description: string;
  isImageLeft?: boolean;
}

const DetailRight: React.FC<DetailRightProps> = ({
  bannerImg,
  iconImg,
  heading,
  description,
  isImageLeft = true,
}) => {
  return (
    <section className="detail-right-section">
      <div className={`detail-right-container ${isImageLeft ? 'image-left' : 'image-right'}`}>
        {isImageLeft && (
          <img src={bannerImg} alt="Banner" className="banner-img" loading="lazy" />
        )}
        <div className="details-content">
          <img src={iconImg} alt="Icon" className="icon-img" loading="lazy" />
          <h4>{heading}</h4>
          <p>{description}</p>
        </div>
        {!isImageLeft && (
          <img src={bannerImg} alt="Banner" className="banner-img" loading="lazy" />
        )}
      </div>
    </section>
  );
};

export default DetailRight;