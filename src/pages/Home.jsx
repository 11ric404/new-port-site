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
                    <div className="status-badge">
                        <span className="status-dot"></span> Available for Opportunities
                    </div>

                    <h1 className="hero-title">
                        Ric <span className="highlight">Rebull</span>
                    </h1>

                    <h2 className="hero-subtitle">
                        Information Technology Student specializing in
                    </h2>

                    <p className="hero-description">
                        <strong>Systems Administration</strong>, <strong>Network Infrastructure</strong>, and <strong>Automation</strong>.
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
                                <ShieldCheck size={24} color="#64ffda" />
                            </div>
                            <div className="feature-text">
                                <h3>U.S. Secret Clearance</h3>
                                <p>Active US Secret Clearance. RMF & NIST standards.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <Terminal size={24} color="#64ffda" />
                            </div>
                            <div className="feature-text">
                                <h3>System Admin</h3>
                                <p>RHEL, Windows Server, Active Directory.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <Server size={24} color="#64ffda" />
                            </div>
                            <div className="feature-text">
                                <h3>Infrastructure</h3>
                                <p>Network architecture, hardware deployment.</p>
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
