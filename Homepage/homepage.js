
import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import './homepage.css';

import FruitsUI from '../Projects/FruitsPage/FruitsUI';
import BulbProject from '../Projects/BulbProject/BulbProject';
import TableUI from '../Projects/Table/TableUI';
import ActorsUI from '../Projects/ActorsUI/ActorsUI';
import CricketUI from '../Projects/CricketUI/CricketUI';
import New from '../Projects/AmazonPage/New';
import DashBoard from '../Projects/CoinsUI/DashBoard';
import MoviesUI from '../Projects/Movies UI/MoviesUI';

const HomePage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { title: "Fruits Page", component: <FruitsUI /> },
    { title: "Bulb On/Off", component: <BulbProject /> },
    { title: "Table", component: <TableUI /> },
    { title: "Actors UI", component: <ActorsUI /> },
    { title: "Cricket UI", component: <CricketUI /> },
    { title: "Coins UI", component: <DashBoard /> },
    { title: "Amazon Page", component: <New /> },
    { title: "Movies Adder", component: <MoviesUI />}
  ];

  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="user-info">
          <h1>Samiksha Patil</h1>
          <p>Full Stack Developer</p>
        </div>
        <a
          href="https://samikshapatil04.github.io/Resume/" 
          target="_blank"
          rel="noopener noreferrer"
          className="home-icon"
        >
          <FaHome size={24} />
        </a>
      </div>

      {/* Dashboard */}
      <div className="dashboard-container">
        <h1 className="dashboard-title">My React Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <button onClick={() => setSelectedProject(project.component)}>
                View Project
              </button>
            </div>
          ))}
        </div>

        <div className="project-display-area">
          {selectedProject && (
            <>
              <hr />
              <h2>Project Preview:</h2>
              {selectedProject}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
