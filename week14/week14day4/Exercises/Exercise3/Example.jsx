import React from 'react';
import jsonData from './complexData.json';

class Example1 extends React.Component {
  render() {
    return (
      <div>
        <h2>Social Media:</h2>
        {jsonData.SocialMedias.map((socialMedia) => (
          <div key={socialMedia.id}>
            <p>Name: {socialMedia.name}</p>
            <p>URL: {socialMedia.url}</p>
          </div>
        ))}
      </div>
    );
  }
}

class Example2 extends React.Component {
  render() {
    return (
      <div>
        <h2>Skills:</h2>
        {jsonData.Skills.map((skill) => (
          <div key={skill.id}>
            <p>Name: {skill.name}</p>
            <p>Level: {skill.level}</p>
          </div>
        ))}
      </div>
    );
  }
}

class Example3 extends React.Component {
  render() {
    return (
      <div>
        <h2>Experiences:</h2>
        {jsonData.Experiences.map((experience) => (
          <div key={experience.id}>
            <p>Position: {experience.position}</p>
            <p>Company: {experience.company}</p>
          </div>
        ))}
      </div>
    );
  }
}

export { Example1, Example2, Example3 };