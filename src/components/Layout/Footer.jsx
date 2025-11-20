import React from 'react';
import { Shield, Cpu } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="copyright">
                    &copy; {new Date().getFullYear()} Ric Rebull. Systems Engineer. <span style={{ opacity: 0.5, fontSize: '0.8em' }}>v1.1</span>
                </div>
                <div className="footer-status">
                    <div className="status-item">
                        <Shield size={16} color="#00e5ff" /> Secret Clearance Active
                    </div>
                    <div className="status-item">
                        <Cpu size={16} color="#00e5ff" /> UCF '26
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
