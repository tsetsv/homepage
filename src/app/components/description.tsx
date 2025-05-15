import React from 'react';
import './description.css';

interface Feature {
    imgSrc: string;
    imgAlt: string;
    heading: string;
    description: string;
}

interface DescriptionProps {
    features: Feature[];
}

const Description: React.FC<DescriptionProps> = ({ features }) => {
    return (
        <div className="description">
            {features.map((feature, index) => (
                <article className="desc-text" key={index}>
                    <img src={feature.imgSrc} alt={feature.imgAlt} loading="lazy" />
                    <div>
                        <h3>{feature.heading}</h3>
                        <p>{feature.description}</p>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default Description;