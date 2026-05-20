import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Terminal, Server, ArrowRight } from 'lucide-react';
import TerminalWindow from '../components/UI/TerminalWindow';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container page-transition">
            <section className="hero-section">
                <div className="hero-content">
                    <div className="status-badges-container">
                        <span className="status-badge clearance-badge">
                            <ShieldCheck size={14} className="badge-icon" /> U.S. Secret Clearance
                        </span>
                        <span className="status-badge cert-badge">
                            CompTIA Security+ (IAT Level II)
                        </span>
                    </div>

                    <h1 className="hero-title">
                        Ric <span className="highlight">Rebull</span>
                    </h1>

                    <h2 className="hero-subtitle">
                        Information Systems Engineer
                    </h2>

                    <p className="hero-description">
                        UCF Information Technology graduate specializing in <strong>Systems Administration</strong>, <strong>Network Infrastructure</strong>, and <strong>Cybersecurity Compliance</strong>. Experienced in DoD environments with active Secret Clearance.
                    </p>

                    <div className="hero-cta">
                        <Link to="/projects" className="btn btn-primary">
                            View Projects <ArrowRight size={18} className="arrow" />
                        </Link>
                        <Link to="/about" className="btn btn-secondary">
                            About Me
                        </Link>
                    </div>

                    <div className="hero-features">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <ShieldCheck size={24} color="var(--accent)" />
                            </div>
                            <div className="feature-text">
                                <h3>Security & RMF</h3>
                                <p>NIST SP 800-53, STIG/SCAP hardening, access controls.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <Terminal size={24} color="var(--accent)" />
                            </div>
                            <div className="feature-text">
                                <h3>Systems Engineering</h3>
                                <p>RHEL, Windows Server, Active Directory, GPOs.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <Server size={24} color="var(--accent)" />
                            </div>
                            <div className="feature-text">
                                <h3>Network Ops</h3>
                                <p>Multi-VLAN architectures, routing, DHCP, and virtualization.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <TerminalWindow />
                </div>
            </section>
        </div>
    );
};

export default Home;
