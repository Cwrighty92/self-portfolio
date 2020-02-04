import React from "react";
import profileImage from "./profile.jpeg";

const About = () => (
  <div className="app-home">
    <img className={"Profile-pic"} src={profileImage} alt={""} />
    <div className="body-text">
      <h3>Hello, my name is Christopher Wright</h3>
      <p>I am a Front end developer, writing javaScript</p>
    </div>
  </div>
);

export default About;
