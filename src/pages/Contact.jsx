import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container page-transition">
            <div className="contact-header-center">
                <h2>Get In <span className="highlight">Touch</span></h2>
                <p>I am currently open to opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <div className="info-card">
                        <div className="info-icon">
                            <Mail size={24} color="#00e5ff" />
                        </div>
                        <div className="info-details">
                            <h3>Email</h3>
                            <p>RicRebullWork@gmail.com</p>
                        </div>
                    </div>

                    <div className="info-card">
                        <div className="info-icon">
                            <Phone size={24} color="#00e5ff" />
                        </div>
                        <div className="info-details">
                            <h3>Phone</h3>
                            <p>786-300-9501</p>
                        </div>
                    </div>

                    <div className="info-card">
                        <div className="info-icon">
                            <MapPin size={24} color="#00e5ff" />
                        </div>
                        <div className="info-details">
                            <h3>Location</h3>
                            <p>Miami, FL / Orlando, FL</p>
                        </div>
                    </div>

                    <a href="#" className="social-btn">
                        <Linkedin size={20} /> LinkedIn
                    </a>
                </div>

                <div className="contact-form-wrapper">
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="John Doe" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="john@example.com" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Hello! I'd like to discuss..."></textarea>
                        </div>

                        <button type="submit" className="submit-btn">
                            Send Message <Send size={18} style={{ marginLeft: '8px' }} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
