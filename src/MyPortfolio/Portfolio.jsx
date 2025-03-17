

import { useState } from "react"
import React from "react";
import "./Portfolio.css";
import { Code, Home, Cpu, ExternalLink, Info, Coffee, FileJson, Atom, Blocks, Database } from "lucide-react"

const PortfolioPage = () => {
    const skills = [
        {
            title: "Java",
            image: "/src/image/java1.png",
        },
        {
            title: "JavaScript",
            image: "/src/image/javascrip1.png"
        },
        {
            title: "HTML & CSS",
            image: "/src/image/htmlandcss1.svg",
        },
        {
            title: "React",
            image: "/src/image/react1.png",
        },
        {
            title: "Scratch",
            image: "/src/image/Scratch1.png",
        },
        {
            title: "MySQL",
            image: "/src/image/mysql1.png",
        }
    ];

    const projects = [
        {
            image: "/src/image/ArrayList.png",
            title: "ArrayList",
            demoLink: "https://github.com/Mekala74/ArrayList",
            tech: "java"
        },
        {
            image: "/src/image/SchoolManagementSystem.png",
            title: "SchoolManagementSystem",
            demoLink: "https://github.com/Mekala74/SchoolManagement",
            tech: "java,mysal"
        },
        {
            image: "/src/image/projectCodeFusion.png",
            title: "CodeFusion",
            demoLink: "https://example.com/codefusion",
            tech: "java,node js,react Js"
        },
        {
            image: "/src/image/dairy.jpg",
            title: "Cadbury",
            demoLink: "https://manimekalaj-4950-8443.zcodeusers.in/project/page.html",
            tech: "Html,css"

        }
        ,
        {
            image: "/src/image/projectJs.png",
            title: "Food Sharing",
            demoLink: "https://manimekalaj-4950-8443.zcodeusers.in/jsProject/",
            tech: "java script"

        },
        {
            image: "/src/image/ScratchProejct.png",
            title: "Fruit Ninja",
            demoLink: "https://scratch.mit.edu/projects/1040640763",
            tech: "Scratch"
        }
    ]



    return (
        <>
            <div className="portfolio-container">
                <div className="portfolio-header">
                    <div className="user-menu">
                        <div className="name-div">Portfolio</div>
                        <div className="menu-div">
                            <a href="#home" className="nav-link">
                                <Home size={18} className="nav-icon" />
                                Home
                            </a>
                            <a href="#skills" className="nav-link">
                                <Cpu size={18} className="nav-icon" />
                                Skills
                            </a>
                            <a href="#projects" className="nav-link">
                                <Code size={18} className="nav-icon" />
                                Projects
                            </a>
                        </div>
                    </div>
                </div>
                <div className="content-container" id="home">
                    <div className="content">
                        <div className="text-container">
                            <div className="text">
                                <h1>Manimekala</h1>
                                <p className="title">Backend Developer</p>
                                <p className="description">
                                    Passionate about learning new technologies and building projects.
                                </p>
                            </div>
                            <div className="circles-container">
                                <div className="floating-circle circle-1"></div>
                                <div className="floating-circle circle-3"></div>
                                <div className="floating-circle circle-5"></div>
                                <div className="floating-circle circle-2"></div>
                                <div className="floating-circle circle-4"></div>
                                <div className="floating-circle circle-6"></div>
                            </div>
                        </div>
                        <div className="text-container">
                            <div className="image-container"></div>
                        </div>
                    </div>
                </div>

                <div className="skill-container" id="skills">
                    <div className="skill-content">
                        <h2>Skills</h2>
                        <div className="skill-line"></div>
                        <div className="line"></div>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-card">

                                    <div className="skill-icon-wrapper">
                                        <img src={skill.image} alt={skill.title} className="skill-image" />
                                        <div className="skill-icon-overlay">
                                            {skill.icon}
                                        </div>
                                    </div>
                                    <h3>{skill.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="project-container" id="projects">
                    <div className="project-content">
                        <h2>Projects</h2>
                        <div className="project-line"></div>
                        <div className="projects-grid">
                            {projects.map((project, index) => (
                                <div key={index} className="project-card">
                                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                                        <img src={project.image} alt={project.title} className="project-image" />
                                        <h3 className="project-title">{project.title}</h3>
                                    <div className="project-overlay">
                                        <h4>Tech Stack</h4>
                                        <div className="tech-icons">
                                            {project.tech.split(",").map((tech, i) => (
                                                <span key={i} className="tech-badge">{tech.trim()}</span>
                                            ))}
                                        </div>
                                    </div>
                                    </a>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer">
                <p className="style"> ZSTTK398 | manimekala.j@zohocorp.com</p>
            </div>
        </>
    );
}
export default PortfolioPage;