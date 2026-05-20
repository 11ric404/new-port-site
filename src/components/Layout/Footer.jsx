import React from 'react';
import { Shield, Cpu } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="copyright">
                    &copy; {new Date().getFullYear()} Ric Rebull. Information Systems Engineer. <span style={{ opacity: 0.5, fontSize: '0.8em' }}>v1.2</span>
                </div>
                <div className="footer-status">

                    <div className="status-item">
                        <Cpu size={16} color="var(--accent)" /> UCF '26
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
