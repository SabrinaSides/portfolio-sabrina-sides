import React from 'react';

export default function Project(props) {
  return (
    <div className="project">
      <h3>{props.title}</h3>
      <br />
      <img src={props.src} alt="Project screenshot" className="img-project" />
      <p>{props.description}</p>
      <p>Skills used: {props.skills}</p>
      <a href={props.urlRepo} target="_blank" rel="noreferrer">
        GitHub Repo
      </a>
      <br />
      <br />
      <a href={props.urlLive} target="_blank" rel="noreferrer">
        Live project
      </a>
    </div>
  );
}
