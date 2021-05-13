import React from 'react';
import Project from './Project';
import NPProject from '../images/NPProject.jpg';
import Noteful from '../images/Noteful.jpeg';
import './ProjectsPage.css';

export default function Projects() {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <br />
      <div className="projects">
        <Project
          title="National Parks Activity Search"
          src={NPProject}
          description="This app utilizes multiple APIs to help users find which national
          parks support their favorites outdoor activities."
          skills="HTML, CSS, JavaScript, jQuery"
          urlRepo="https://github.com/SabrinaSides/NationalParksActivitySearch"
          urlLive="https://sabrinasides.github.io/NationalParksActivitySearch"
        />
        <hr />
        <Project
          title="Noteful"
          src={Noteful}
          description="Created in coordination with the Thinkful curriculum, this app allows users to create and organize notes."
          skills="HTML, CSS, JavaScript, React"
          urlRepo="https://github.com/SabrinaSides/noteful-client"
        />
      </div>
    </div>
  );
}
