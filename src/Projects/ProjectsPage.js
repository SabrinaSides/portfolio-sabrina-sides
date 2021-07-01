import React from 'react';
import Project from './Project';
import NPProject from '../images/NPProject.jpg';
import Noteful from '../images/Noteful.jpeg';
import QuickReport from '../images/QuickReport.png'
import DinoQuiz from '../images/DinoQuiz.png'
import './ProjectsPage.css';

export default function Projects() {
  return (
    <div className='projects-container'>
      <h2>Projects</h2>
      <br />
      <div className='projects'>
        <Project
          title='QuickReport'
          src={QuickReport}
          description='QuickReport is a full-stack PERN app designed to help nurses and other healthcare professionals take report (gather details) on their patients.'
          skills='HTML, CSS, JavaScript, React, Express, Node, PostgreSQL'
          urlRepo='https://github.com/SabrinaSides/quick-report-client'
          urlServerRepo='https://github.com/SabrinaSides/quick-report-api'
          urlLive='https://quick-report-client.vercel.app/'
        />
        <hr />
        <Project
          title='Noteful'
          src={Noteful}
          description='Created in coordination with my Thinkful curriculum, this full-stack app allows users to create and organize notes.'
          skills='HTML, CSS, JavaScript, React, Express, Node, PostgreSQL'
          urlRepo='https://github.com/SabrinaSides/noteful-client'
          urlServerRepo='https://github.com/SabrinaSides/noteful-server'
          urlLive='https://noteful-client-lac-zeta.vercel.app/'
        />
        <hr />
        <Project
          title='National Parks Activity Search'
          src={NPProject}
          description='This app utilizes multiple APIs to help users find which national
          parks support their favorite outdoor activities.'
          skills='HTML, CSS, JavaScript, jQuery'
          urlRepo='https://github.com/SabrinaSides/NationalParksActivitySearch'
          urlLive='https://sabrinasides.github.io/NationalParksActivitySearch'
        />
        <hr />
        <Project
          title='Dino Quiz'
          src={DinoQuiz}
          description='This app tests if users have `dino-mite` knowledge about dinosaurs. As users progress through the quiz, they receive immediate feedback on their answer choice as well as a running total of their score.'
          skills='HTML, CSS, JavaScript, jQuery'
          urlRepo='https://github.com/SabrinaSides/dino-quiz-app'
          urlLive='https://sabrinasides.github.io/dino-quiz-app/'
        />
        <hr />
      </div>
    </div>
  );
}
