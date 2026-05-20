import React from 'react';
import SectionHeader from '../components/UI/SectionHeader';
import ProjectCard from '../components/UI/ProjectCard';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Cisco Enterprise Networking Lab",
            type: "Network Simulation",
            iconType: "network",
            tags: ["Cisco Packet Tracer", "VLANs", "OSPF", "802.1Q Trunking", "DHCP Pools", "Troubleshooting"],
            description: "Designed and implemented a simulation of a real-world multi-VLAN enterprise network. Configured end-to-end connectivity with inter-VLAN routing, trunking, and security best practices.",
            highlights: [
                "Configured VLAN segmentation and 802.1Q trunking for efficient domain isolation.",
                "Implemented Inter-VLAN routing and custom DHCP pools across subnet boundaries.",
                "Validated network integrity using rigorous troubleshooting methods (ping, traceroute, show commands)."
            ]
        },
        {
            title: "Virtualization Cost Analysis",
            type: "Financial Modeling",
            iconType: "chart",
            tags: ["Excel Automation", "CAPEX / OPEX", "Cost-Benefit Analysis", "Virtualization", "ROI Modeling"],
            description: "Developed an automated financial model in Excel to conduct a comprehensive cost-benefit analysis comparing physical versus virtualized IT infrastructure.",
            highlights: [
                "Modeled 5-year CAPEX/OPEX projections for physical hardware versus virtual machines.",
                "Automated 'what-if' scaling scenarios with advanced Excel formulas to dynamic model growth.",
                "Quantified long-term efficiency gains and provided data-driven recommendations on cost savings."
            ]
        },
        {
            title: "Enterprise Linux Hardening & Virtualized Network Lab",
            type: "Systems Hardening",
            iconType: "server",
            tags: ["Ubuntu Server", "STIG Hardening", "Type-2 Hypervisor", "SSH Key Auth", "Firewall Rules", "SysAdmin"],
            description: "Designed and deployed an isolated virtualized lab environment simulating an enterprise Linux server network using a Type-2 hypervisor.",
            highlights: [
                "Hardened Ubuntu Server by enforcing key-based SSH authentication and disabling insecure access methods.",
                "Implemented host-based firewall rules and strict access controls to reduce the attack surface.",
                "Applied enterprise system administration including user privilege separation and static network configurations."
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
