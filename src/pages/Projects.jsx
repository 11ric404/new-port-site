import React from 'react';
import SectionHeader from '../components/UI/SectionHeader';
import ProjectCard from '../components/UI/ProjectCard';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Cisco Enterprise Networking Lab",
            type: "Lab Project",
            iconType: "network",
            tags: ["Cisco Packet Tracer", "VLANs", "OSPF/RIP", "IPv4/IPv6", "DHCP", "NAT/PAT"],
            description: "Designed and implemented a simulation of a real-world multi-VLAN enterprise network. Configured end-to-end connectivity with inter-VLAN routing, trunking, and security best practices.",
            highlights: [
                "Configured VLAN segmentation and 802.1Q trunking.",
                "Implemented Inter-VLAN routing and DHCP pools.",
                "Validated network with rigorous troubleshooting (ping, traceroute, show commands)."
            ]
        },
        {
            title: "Virtualization Cost Analysis",
            type: "Financial Modeling",
            iconType: "chart",
            tags: ["Excel Automation", "ROI Modeling", "Cost-Benefit Analysis", "Systems Engineering"],
            description: "Developed an automated financial model comparing physical vs. virtualized infrastructure costs. Provided data-driven recommendations on CAPEX/OPEX savings and scalability.",
            highlights: [
                "Modeled 5-year CAPEX/OPEX projections for hardware vs. VMs.",
                "Automated 'what-if' scaling scenarios with advanced Excel formulas.",
                "Quantified long-term efficiency gains of virtualization."
            ]
        },
        {
            title: "JobCord: Employment Bot",
            date: "Jan 2024 - Mar 2024",
            iconType: "bot",
            tags: ["Discord API", "Python", "Automation", "Bot Development"],
            description: "Developed a comprehensive Discord bot to automate job search alerts based on user-defined criteria. The system implements real-time notifications to improve user engagement.",
            highlights: [
                "Implemented real-time notifications for job alerts.",
                "Led a development team, gaining leadership experience.",
                "Facilitated conflict resolution to maintain project momentum."
            ]
        },
        {
            title: "Home Networking Infrastructure",
            date: "Sep 2025",
            iconType: "server",
            tags: ["Network Design", "Hardware Implementation", "Switch Configuration", "CAT6 Cabling"],
            description: "Designed and implemented a complete wired home network infrastructure from the ground up, ensuring high-speed, reliable connectivity throughout the premises.",
            highlights: [
                "Crimped and tested CAT6 Ethernet cables.",
                "Configured switches for optimal traffic flow.",
                "Ensured reliable connectivity across all endpoints."
            ]
        }
    ];

    return (
        <div className="projects-container page-transition">
            <div className="projects-header-center">
                <h2>Featured <span className="highlight">Projects</span></h2>
                <p>A selection of technical projects demonstrating proficiency in automation, network infrastructure, and financial analysis.</p>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
