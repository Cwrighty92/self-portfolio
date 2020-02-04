import React from "react";
import SocialMediaIcons from "./social-media-icons";

const Contact = () => (
  <div className="app-home">
    <SocialMediaIcons />
    <div className="container">
      <h2 id="talk"> Want to talk?</h2>
      <form>
        <label>Name</label>
        <input></input>
        <label>Email</label>
        <input></input>
        <label>Message</label>
        <textarea></textarea>
        <input type="button" value="Send" />
        <input type="button" value="Reset" />
      </form>
    </div>
  </div>
);

export default Contact;
