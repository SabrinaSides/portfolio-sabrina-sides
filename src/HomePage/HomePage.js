import React from 'react';
import SabrinaProfile from '../images/SabrinaProfile.jpeg';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-page">
      <div>
        <img
          src={SabrinaProfile}
          alt="Sabrina- causcasian woman, brown hair"
          className="profile-img"
        />
      </div>
      <div>
        <h1>Sabrina Sides</h1>
        <h3>Front-end Software Developer</h3>
        <h4>HTML, CSS, JavaScript, React</h4>
      </div>
    </div>
  );
}
