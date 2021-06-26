import React from 'react';
import SabrinaProfile from '../images/SabrinaProfile.jpeg';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className='home-page'>
        <img
          src={SabrinaProfile}
          alt='Sabrina- caucasian woman, brown hair'
          className='profile-img'
        />
      <div className='titles'>
        <h1>Sabrina Sides</h1>
        <h3>Front-end Software Developer</h3>
        <h4>HTML, CSS, JavaScript, React</h4>
      </div>
    </div>
  );
}
