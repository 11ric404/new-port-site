import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ title, company, date, location, description, isLast }) => {
    return (
        <div className="experience-card-wrapper">
            <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {!isLast && <div className="timeline-line"></div>}
            </div>
            <div className="experience-content">
                <div className="experience-header">
                    <div>
                        <h3 className="exp-title">{title}</h3>
                        <h4 className="exp-company">{company}</h4>
                    </div>
                    <div className="exp-meta">
                        <div className="exp-date">📅 {date}</div>
                        <div className="exp-location">📍 {location}</div>
                    </div>
                </div>
                <ul className="exp-description">
                    {description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceCard;
