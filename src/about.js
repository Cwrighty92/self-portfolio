import React from "react";
import profileImage from "./profile.jpeg";

const About = () => (
  <div className="app-home">
    <img className={"Profile-pic"} src={profileImage} alt={""} />
    <div className="body-text">
      <h3>Hello, my name is Christopher Wright</h3>
      <p>
        I am a Front end developer, currently working for Barclays, I recently
        decided to get into software development because I wanted to challenge
        myself more on a day to day level. I'm a former Business graduate, that
        decided to take a detour once I began to teach myself to code, I
        couldn't stop I wanted to accelerate my knowledge and joined
        Northcoders, I wanted to change my career and do something that I
        enjoyed theres not many people that can say they enjoy their job because
        I hadn't untill I made the switch.
      </p>
    </div>
  </div>
);

export default About;
