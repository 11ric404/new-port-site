import React from 'react';
import SectionHeader from '../components/UI/SectionHeader';
import ExperienceCard from '../components/UI/ExperienceCard';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            title: "Information Systems Engineer Intern",
            company: "Raytheon",
            date: "05/2025 - 08/2025",
            location: "Andover, MA",
            description: [
                "Administered and supported a large fleet of test systems, including account management, server maintenance, OS troubleshooting, and joining systems to the domain.",
                "Enforced cybersecurity and access controls through Active Directory, Group Policy, and hardening (STIG / SCAP) to meet RMF standards outlined in NIST SP 800-53.",
                "Installed and configured Enterprise Linux on required systems following DoD STIGs, ensuring compliance with hardening/RMF standards.",
                "Collaborated with cross-functional teams to ensure secure, compliant, and reliable IT infrastructure for test data integrity and mission-critical test equipment.",
                "Provided infrastructure and endpoint support through RDP and Microsoft 365 tools, assisting with patching, backups, application upgrades, and field test readiness."
            ]
        },
        {
            title: "Founding Father & Information Technology Chair",
            company: "Beta Theta Pi UCF",
            date: "10/2023 - Current",
            location: "Orlando, FL",
            description: [
                "Served as a Founding Father of the UCF chapter, contributing to the establishment of organizational structure, bylaws, and operational standards from the ground up.",
                "Provided one-on-one and group tutoring to fraternity members in IT and computer science coursework, reinforcing technical fundamentals across networking, programming, and systems concepts."
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
