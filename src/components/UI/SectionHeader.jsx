import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ title, highlight }) => {
    return (
        <div className="section-header">
            <h2>
                {title} <span className="highlight">{highlight}</span>
            </h2>
            <div className="header-line"></div>
        </div>
    );
};

export default SectionHeader;
