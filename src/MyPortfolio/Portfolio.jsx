

import { useState } from "react"
import React from "react";
import "./Portfolio.css";
import { Code, Home, Cpu, ExternalLink, Info, Coffee, FileJson, Atom, Blocks, Database } from "lucide-react"

const PortfolioPage = () => {
    const skills = [
        {
            title: "Java",
            image: "https://res.cloudinary.com/dd4aje6hu/image/upload/v1742193862/java1_he94uh.png",
        },
        {
            title: "JavaScript",
            image: "https://res.cloudinary.com/dd4aje6hu/image/upload/v1742193862/javascrip1_rgx06z.png"
        },
        {
            title: "HTML & CSS",
            image: "https://res.cloudinary.com/dd4aje6hu/image/upload/v1742193861/htmlandcss_uem3gj.svg",
        },
        {
            title: "React",
            image: "https://res.cloudinary.com/dd4aje6hu/image/upload/v1742193864/react1_pavlu4.png",
        },
        {
            title: "Scratch",
            image: "https://res.cloudinary.com/dd4aje6hu/image/upload/v1742193860/Scratch1_deqw3h.png",
        },
        {
            title: "MySQL",
            image: "https://res.cloudinary.com/dd4aje6hu/image/upload/v1742193863/mysql1_l2qsbe.png",
        }
    ];

    const projects = [
        {
            image: "https://res.cloudinary.com/dd4aje6hu/image/upload/v1742193860/ArrayList_cdhk3v.png",
            title: "ArrayList",
            demoLink: "https://github.com/Mekala74/ArrayList",
            tech: "java"
        },
        {
            image: "https://res.cloudinary.com/dd4aje6hu/image/upload/v1742193864/SchoolManagementSystem_thitqj.png",
            title: "SchoolManagementSystem",
            demoLink: "https://github.com/Mekala74/SchoolManagement",
            tech: "java,mysql"
        },
        {
            image: "https://res.cloudinary.com/dd4aje6hu/image/upload/v1742213416/fusion_hhcitn.png",
            title: "CodeFusion",
            demoLink: "https://github.com/arul9976/CodeFusion",
            tech: "java,node js,react Js"
        },
        {
            image: "https://res.cloudinary.com/dd4aje6hu/image/upload/v1742193861/dairy_gwwazk.jpg",
            title: "Cadbury",
            demoLink: "https://manimekalaj-4950-8443.zcodeusers.in/project/page.html",
            tech: "Html,css"

        }
        ,
        {
            image: "https://res.cloudinary.com/dd4aje6hu/image/upload/v1742193864/projectJs_sz6ly5.png",
            title: "Food Sharing",
            demoLink: "https://manimekalaj-4950-8443.zcodeusers.in/jsProject/",
            tech: "java script"

        },
        {
            image: "https://res.cloudinary.com/dd4aje6hu/image/upload/v1742193861/ScratchProejct_bpf6r7.jpg",
            title: "Fruit Ninja",
            demoLink: "https://scratch.mit.edu/projects/1040640763",
            tech: "Scratch"
        },
        {
            image : "https://res.cloudinary.com/dd4aje6hu/image/upload/v1742195574/billJsProject_jiswxo.png",
            title : "Tip calculator", 
            demoLink : "https://manimekalaj-4950-8443.zcodeusers.in/jsassignment_024/",
            tech : "Html,css,java script"
        },
        {
            image : "https://res.cloudinary.com/dd4aje6hu/image/upload/v1742202586/HotPotato_ndpwyx.jpg",
            title : "Hot potato",
            demoLink : "https://github.com/Mekala74/HotPotato",
            tech : "java"
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
                                <p className="title">Backend Trainee</p>
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
                                    <h3 style={{ fontSize: "18px" }}>{skill.title}</h3>
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