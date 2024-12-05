import React from 'react';
import Link from 'next/link'

const Project = () => {
  return (
    <div id="projects" className="projects-section">
      <section className="body-font">
        <div className="container">
          <div className="header">
            <h1 className="title">MY PROJECTS</h1>
            <p className="description">Here is my projects</p>
          </div>
          <div className="projects-wrapper">
            {/* Project 1 */}
            <div className="project-card">
              <div className="project-image-wrapper">
                <img
                  alt="project"
                  className="project-image"
                  src="project.jpeg"
                />
                <div className="project-overlay">
                  <h2 className="project-category">TODO LIST</h2>
                  <h1 className="project-title">TODO LIST</h1>
                  <p className="project-description">Projects</p>
                  <a
                    className="project-link"
                    href="https://github.com/kashaf0007/TODO-LIST.git"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-image-wrapper">
                <img
                  alt="project"
                  className="project-image"
                  src="project2.jpeg"
                />
                <div className="project-overlay">
                  <h2 className="project-category">Resume</h2>
                  <h1 className="project-title">Resume</h1>
                  <p className="project-description">Projects</p>
                  <a
                    className="project-link"
                    href="https://hackathone-milestone1and2.vercel.app/"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <div className="project-image-wrapper">
                <img
                  alt="project"
                  className="project-image"
                  src="project3.jpeg"
                />
                <div className="project-overlay">
                  <h2 className="project-category">ATM MACHINE</h2>
                  <h1 className="project-title">ATM MACHINE</h1>
                  <p className="project-description">Projects</p>
                  <a
                    className="project-link"
                    href="https://github.com/kashaf0007/atm-machine.git"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Project


