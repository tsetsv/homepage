"use client";

import { useState, useEffect, useRef } from 'react';
import './images.css';

export default function ImageCarousel() {
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const images: string[] = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpeg",
    "/images/image5.jpg",
    "/images/image6.jpg",
    "/images/image7.jpg",
    "/images/image1.jpg",
    "/images/image2.jpg",
  ];

  const allImages = [...images, ...images];
  const topRowImages = allImages;
  const bottomRowImages = [...allImages].reverse();

  useEffect(() => {
    if (isHovered) return;

    let topAnimationId: number;
    let topPosition = 0;

    const animateTop = () => {
      topPosition += 0.8;
      if (topPosition >= images.length * 240) {
        topPosition = 0;
      }
      if (topRowRef.current) {
        topRowRef.current.scrollLeft = topPosition;
      }
      topAnimationId = requestAnimationFrame(animateTop);
    };

    topAnimationId = requestAnimationFrame(animateTop);

    let bottomAnimationId: number;
    let bottomPosition = images.length * 240 * 0.4;

    const animateBottom = () => {
      bottomPosition += 0.8;
      if (bottomPosition >= images.length * 240) {
        bottomPosition = 0;
      }
      if (bottomRowRef.current) {
        bottomRowRef.current.scrollLeft = bottomPosition;
      }
      bottomAnimationId = requestAnimationFrame(animateBottom);
    };

    bottomAnimationId = requestAnimationFrame(animateBottom);

    return () => {
      cancelAnimationFrame(topAnimationId);
      cancelAnimationFrame(bottomAnimationId);
    };
  }, [images.length, isHovered]);

  return (
    <div className="carousel-container">
      <h2 className="carousel-heading">
        💗
        <br />
        Манай хамт олон бол
        <br />
        бидний супер хүч
      </h2>

      <div
        className="carousel-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="carousel-rows">
          <div ref={topRowRef} className="carousel-row">
            {topRowImages.map((src, index) => (
              <div key={`top-${index}`} className="carousel-image-wrapper">
                <img
                  src={src}
                  alt={`Carousel image ${index % images.length + 1}`}
                  className="carousel-image"
                />
              </div>
            ))}
          </div>

          <div ref={bottomRowRef} className="carousel-row">
            {bottomRowImages.map((src, index) => (
              <div key={`bottom-${index}`} className="carousel-image-wrapper">
                <img
                  src={src}
                  alt={`Carousel image ${images.length - (index % images.length)}`}
                  className="carousel-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
