import React from 'react';
import OKC from '../images/OKC.jpeg';
import SabrinaBike from '../images/SabrinaBike.jpg';
import './About.css';

export default function About() {
  return (
    <div className='about-container'>
      <h2>Hello There!</h2>
      <br />
      <section>
      <img src={OKC} alt='OKC skyline' className='about-img-okc' />
        <h3>
          My name is Sabrina and I'm a software developer living in Oklahoma
          City, Oklahoma.
          </h3>
          <p>
          Formerly an ICU nurse, I am now learning how to make a difference in
          the world through web development. I am a software developer
          proficient in HTML, CSS, JavaScript, React, Node, Express and PostgreSQL. I have a strong
          interest in creating and contributing to web experiences that inspire
          health and happiness.
        </p>
        <img src={SabrinaBike} alt='Sabrina on bike' className='about-img-bike' />
        <p>
          In the summer of 2020, I rode my bike up 100,000 feet of elevation. I
          wish I could say I rode my bike up actual mountains, but it turns out
          Oklahoma is flat as a pancake. Two months of riding my bike on a
          trainer and up virtual mountains (thanks Zwift!) taught me a lot about
          myself. Mainly that I am capable of amazing feats when I have the
          courage to take the first step. I applied the same courage and grit to
          learning software development.
          </p>
          <p>I have developed projects using HTML, CSS, JavaScript, React, Node, Express and PostgreSQL.
          I am constantly working on adding more languages and skills to my
          repertoire. I can contribute to your company using my front-end
          expertise as I continue to develop my full-stack knowledge.
        </p>
      </section>
    </div>
  );
}
