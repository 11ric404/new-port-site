import React from 'react';
import SectionHeader from '../components/UI/SectionHeader';
import ExperienceCard from '../components/UI/ExperienceCard';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            title: "Information Systems Engineer Intern",
            company: "Raytheon",
            date: "May 2025 - Aug 2025",
            location: "Andover, Massachusetts",
            description: [
                "Administered and supported a fleet of test systems, including account management, server maintenance, and OS troubleshooting.",
                "Enforced cybersecurity and access controls through Active Directory and Group Policy to meet RMF standards.",
                "Configured Linux environments on required systems following standard hardening procedures.",
                "Collaborated with cross-functional teams to ensure secure and reliable IT infrastructure for test data integrity.",
                "Provided infrastructure and endpoint support, assisting with patching, backups, and application upgrades."
            ]
        },
        {
            title: "Volunteer: Food Donation",
            company: "Iglesia Adventista Los Peregrinos",
            date: "Feb 2019 - Mar 2022",
            location: "Miami, Florida",
            description: [
                "Led group discussions and activities to meet different community needs.",
                "Handed out food to the less fortunate, feeding 800 families.",
                "Organized the flow of traffic for food donation events, improving critical thinking and logistics management."
            ]
        }
    ];

    return (
        <div className="experience-container page-transition">
            <SectionHeader title="Professional" highlight="Experience" />

            <div className="timeline-container">
                {experiences.map((exp, index) => (
                    <ExperienceCard
                        key={index}
                        {...exp}
                        isLast={index === experiences.length - 1}
                    />
                ))}
            </div>
        </div>
    );
};

export default Experience;
