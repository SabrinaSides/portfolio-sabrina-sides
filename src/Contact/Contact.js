import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <h3>I'd love to hear from you!</h3>
      <br />
      <div className="group links">
        <div className="contact-links">
          <a href="mailto:sabrinasides91@gmail.com">Email Me</a>
          <a href="https://www.linkedin.com/in/sabrina-sides-181279206/">
            LinkedIn
          </a>
          <a href="https://github.com/SabrinaSides">GitHub</a>
        </div>
        <br />
        <div className="item contact-form">
          <form action="https://formspree.io/f/mvovnpog" method="post">
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" name="name" required />

            <label htmlFor="email">Email:</label>
            <input id="email" type="text" name="email" required />

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
