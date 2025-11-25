import React from 'react';
import { Download, GraduationCap, Users } from 'lucide-react';
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
                            I am an Information Technology student at the <strong>University of Central Florida</strong> with a passion for secure infrastructure and systems engineering. My experience spans from hands-on network implementation to enterprise-level system administration in defense sectors.
                        </p>
                        <br />
                        <p>
                            Currently holding an <strong>Active Secret Clearance</strong>, I have practical experience ensuring compliance with rigorous DoD standards (STIGs, RMF) while maintaining mission-critical test equipment. I thrive in environments where reliability, security, and technical precision are paramount.
                        </p>
                        <br />
                        <p>
                            Beyond the terminal, I am a leader in my community, having co-founded a fraternity chapter and organized large-scale philanthropy events. I believe in using technology to build stronger, more secure, and more connected systems.
                        </p>
                    </div>

                    <div className="education-section">
                        <h3 className="section-subtitle"><GraduationCap size={24} /> Education</h3>
                        <div className="education-card">
                            <div className="edu-header">
                                <h4>University of Central Florida</h4>
                                <span className="edu-date">Expected May 2026</span>
                            </div>
                            <p className="edu-degree">Bachelor of Science, Information Technology</p>
                            <div className="edu-badges">
                                <span className="edu-badge">3.81 GPA</span>
                                <span className="edu-badge">2x President's Honor Roll</span>
                                <span className="edu-badge">4x Dean's List</span>
                            </div>
                        </div>
                    </div>

                    <div className="leadership-section">
                        <h3 className="section-subtitle"><Users size={24} /> Leadership</h3>

                        <div className="leadership-item">
                            <div className="leadership-header">
                                <h4>Founding Father</h4>
                                <span className="leadership-date">Oct 2023 - Current</span>
                            </div>
                            <p className="leadership-org">Beta Theta Pi UCF</p>
                            <ul className="leadership-list">
                                <li>Co-Founded the Beta Theta Pi Fraternity chapter at UCF.</li>
                                <li>Advanced organization's web presence through website development and management.</li>
                                <li>Raised thousands of dollars for charities through philanthropy efforts.</li>
                            </ul>
                        </div>

                        <div className="leadership-item">
                            <div className="leadership-header">
                                <h4>Web Development Chair</h4>
                                <span className="leadership-date">Oct 2023 - Current</span>
                            </div>
                            <p className="leadership-org">Beta Theta Pi UCF</p>
                            <ul className="leadership-list">
                                <li>Led the design and development of the chapter's official website.</li>
                                <li>Managed web hosting, domain administration, and ongoing site maintenance.</li>
                                <li>Integrated charitable giving platforms to support philanthropy initiatives.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="about-sidebar">
                    <div className="profile-card">
                        <div className="profile-image-container">
                            <img src={profileImg} alt="Ric Rebull" className="profile-image" />
                        </div>
                    </div>

                    <div className="skills-section">
                        <h3 className="skills-title">Technical Skills</h3>

                        <div className="skill-category">
                            <h4>SYSTEMS & OPERATIONS</h4>
                            <div className="skill-tags">
                                <span className="skill-tag">Active Directory</span>
                                <span className="skill-tag">Windows Server/10</span>
                                <span className="skill-tag">Linux (Configuration)</span>
                                <span className="skill-tag">DNS Configuration</span>
                                <span className="skill-tag">Group Policy</span>
                                <span className="skill-tag">Computer Imaging</span>
                                <span className="skill-tag">System Hardening</span>
                            </div>
                        </div>

                        <div className="skill-category">
                            <h4>CYBERSECURITY</h4>
                            <div className="skill-tags">
                                <span className="skill-tag">RMF Standards</span>
                                <span className="skill-tag">STIG / SCAP</span>
                                <span className="skill-tag">Purdue Model (OT/ICS)</span>
                                <span className="skill-tag">Access Controls</span>
                            </div>
                        </div>

                        <div className="skill-category">
                            <h4>TOOLS & LANGUAGES</h4>
                            <div className="skill-tags">
                                <span className="skill-tag">Python</span>
                                <span className="skill-tag">PowerShell</span>
                                <span className="skill-tag">Git</span>
                                <span className="skill-tag">Clonezilla</span>
                                <span className="skill-tag">Wireshark</span>
                            </div>
                        </div>
                        <div className="skill-category">
                            <h4>SOFT SKILLS</h4>
                            <div className="skill-tags">
                                <span className="skill-tag">Technical Writing</span>
                                <span className="skill-tag">Team Leadership</span>
                                <span className="skill-tag">Conflict Resolution</span>
                                <span className="skill-tag">Documentation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
