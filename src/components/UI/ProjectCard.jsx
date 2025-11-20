import React from 'react';
import { ExternalLink, Folder, BarChart2, MessageSquare, Server } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ title, type, tags, description, highlights, iconType, date }) => {
    const getIcon = () => {
        switch (iconType) {
            case 'network': return <Folder size={40} color="#00e5ff" />;
            case 'chart': return <BarChart2 size={40} color="#00e5ff" />;
            case 'bot': return <MessageSquare size={40} color="#00e5ff" />;
            case 'server': return <Server size={40} color="#00e5ff" />;
            default: return <Folder size={40} color="#00e5ff" />;
        }
    };

    return (
        <div className="project-card">
            <div className="project-header">
                <div className="project-icon-wrapper">
                    {getIcon()}
                </div>
                <div className="project-meta">
                    {date && <span className="project-date">{date}</span>}
                    {type && <span className="project-type">{type}</span>}
                </div>
            </div>

            <h3 className="project-title">{title}</h3>

            <div className="project-tags">
                {tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                ))}
            </div>

            <p className="project-description">{description}</p>

            <ul className="project-highlights">
                {highlights.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <div className="project-footer">
                <button className="view-details-btn">
                    View Details <ExternalLink size={16} style={{ marginLeft: '8px' }} />
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
