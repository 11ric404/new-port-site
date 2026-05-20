import React from 'react';
import { Download, GraduationCap, Users, ShieldCheck, Award } from 'lucide-react';
import SectionHeader from '../components/UI/SectionHeader';
import profileImg from '../assets/profile.png';
import resumePdf from '../assets/resume.pdf';
import './About.css';

const About = () => {
    return (
        <div className="about-container page-transition">
            <div className="about-content-wrapper">
                <div className="about-main">
                    <SectionHeader title="About" highlight="Me" />

                    <div className="bio-text">
                        <p>
                            I am a secure systems specialist and recent graduate with a Bachelor of Science in Information Technology from the <strong>University of Central Florida</strong>. My core expertise is in implementing secure infrastructure, network system deployment, and regulatory compliance.
                        </p>
                        <br />
                        <p>
                            I have hands-on experience hardening operating systems to meet strict DoD RMF standards (NIST SP 800-53, STIGs) from my engineering internship in defense sectors. I enjoy designing reliable architecture that balances robust security protocols with operational efficiency.
                        </p>
                        <br />
                        <p>
                            Beyond technical engineering, I serve as a leader in my collegiate and professional community. As a co-founder and the IT Chair of my fraternity chapter, I managed digital infrastructure and mentored fellow students in complex technical concepts.
                        </p>
                    </div>

                    <div className="education-section">
                        <h3 className="section-subtitle"><GraduationCap size={24} /> Education</h3>
                        <div className="education-card">
                            <div className="edu-header">
                                <h4>University of Central Florida</h4>
                                <span className="edu-date">Completed 2026</span>
                            </div>
                            <p className="edu-degree">Bachelor of Science in Information Technology</p>
                            <div className="edu-badges">
                                <span className="edu-badge">3.81 GPA</span>
                                <span className="edu-badge">2x President's Honor Roll</span>
                                <span className="edu-badge">4x Dean's List</span>
                            </div>
                            <div className="edu-coursework">
                                <h5>Key Coursework</h5>
                                <div className="course-tags">
                                    <span>Intro to Malware Analysis</span>
                                    <span>Topics in Cybersecurity</span>
                                    <span>Security in Computing</span>
                                    <span>Computer Network Concepts</span>
                                    <span>Design & Implementation of Computer Networks</span>
                                    <span>System Administration & Maintenance</span>
                                    <span>Enterprise Computing</span>
                                    <span>Operating System Concepts</span>
                                    <span>Computer Architecture Concepts</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="leadership-section">
                        <h3 className="section-subtitle"><Users size={24} /> Leadership</h3>

                        <div className="leadership-item">
                            <div className="leadership-header">
                                <h4>Founding Father & Information Technology Chair</h4>
                                <span className="leadership-date">10/2023 - Current</span>
                            </div>
                            <p className="leadership-org">Beta Theta Pi UCF – Orlando, FL</p>
                            <ul className="leadership-list">
                                <li>Served as a Founding Father of the UCF chapter, contributing to the establishment of organizational structure, bylaws, and operational standards from the ground up.</li>
                                <li>Provided one-on-one and group tutoring to fraternity members in IT and computer science coursework, reinforcing technical fundamentals across networking, programming, and systems concepts.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="about-sidebar">
                    <div className="profile-card">
                        <div className="profile-image-container">
                            <img src={profileImg} alt="Ric Rebull" className="profile-image" />
                        </div>
                        <a href={resumePdf} download="Ric_Rebull_Resume_2026.pdf" className="download-btn">
                            <Download size={18} style={{ marginRight: '8px' }} /> Download Resume
                        </a>
                    </div>

                    <div className="skills-section">
                        <h3 className="skills-title">Technical Skills</h3>

                        <div className="skill-category">
                            <h4>SYSTEMS & IT OPERATIONS</h4>
                            <div className="skill-tags">
                                <span className="skill-tag">Active Directory</span>
                                <span className="skill-tag">Group Policy (GPO)</span>
                                <span className="skill-tag">Windows Server/10</span>
                                <span className="skill-tag">RHEL Installation</span>
                                <span className="skill-tag">Domain Joins</span>
                                <span className="skill-tag">DNS Configuration</span>
                                <span className="skill-tag">Remote Desktop (RDP)</span>
                                <span className="skill-tag">Computer Imaging/Deployment</span>
                                <span className="skill-tag">Python</span>
                                <span className="skill-tag">AWS Experience</span>
                            </div>
                        </div>

                        <div className="skill-category">
                            <h4>CYBERSECURITY & COMPLIANCE</h4>
                            <div className="skill-tags">
                                <span className="skill-tag">RMF Framework</span>
                                <span className="skill-tag">STIG / SCAP Hardening</span>
                                <span className="skill-tag">NIST SP 800-53</span>
                                <span className="skill-tag">Access Controls</span>
                                <span className="skill-tag">Purdue Model (OT/ICS)</span>
                                <span className="skill-tag">ISSO/ISSE/ISSM Roles</span>
                            </div>
                        </div>

                        <div className="skill-category">
                            <h4>TOOLS & LANGUAGES</h4>
                            <div className="skill-tags">
                                <span className="skill-tag">Python</span>
                                <span className="skill-tag">PowerShell</span>
                                <span className="skill-tag">SQL</span>
                                <span className="skill-tag">Git</span>
                                <span className="skill-tag">CMD</span>
                                <span className="skill-tag">Clonezilla</span>
                                <span className="skill-tag">VMware</span>
                            </div>
                        </div>
                        <div className="skill-category">
                            <h4>SOFT SKILLS</h4>
                            <div className="skill-tags">
                                <span className="skill-tag">Leadership</span>
                                <span className="skill-tag">Public Speaking</span>
                                <span className="skill-tag">Technical Communication</span>
                                <span className="skill-tag">Cross-Functional Collaboration</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
