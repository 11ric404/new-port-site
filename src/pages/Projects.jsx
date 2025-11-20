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
            title: "Space Arcade Shooter",
            date: "2024",
            iconType: "game",
            tags: ["Python", "Pygame", "OOP", "Game Physics", "UI/UX Design"],
            description: "A space-themed arcade shooter game where players defend against waves of asteroid enemies while collecting power-ups and avoiding cosmic hazards. Built with professional game loop architecture and sprite-based rendering.",
            highlights: [
                "Wave-based progression with increasing difficulty.",
                "Dynamic game events including supernovas and black holes.",
                "Particle systems, physics simulations, and high score persistence."
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
