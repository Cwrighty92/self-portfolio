import React from "react";

const Work = () => (
  <div className="app-home">
    <div className="social-icon-header">
      <img
        width="250"
        height="20"
        viewBox="0 0 300 20"
        src="https://www.codewars.com/users/Cwrighy92/badges/small"
        alt={""}
      />
    </div>
    <div className="body-text">
      <h3>My Work</h3>
      <h4>Experience</h4>
      <p>I've currently been working as a front end developer at Barlcays, a global bank mainly operating within the UK. 
      
      At Barclays, I have been involved in a major rebuild of their customer service platform which is used by both their call centre and branch staff to service customers day to day banking. The system that was being used before was upgraded to use a more modern tech stack, using Typescript, React and Redux in the front end. This was built from scratch against the requirements of the older system that was being used, and was formed by a team of around 20 developers working in small agile squads. 

      Whilst working on this project I have grown into a confident front end developer that is able to take any challenge put before me. Some of my major acomplishments in this role are: 

      1. Integrating a telephony micro application into the web application, passing and listening to events in order to update the UI and the state of the phone call. I worked on this independently as the only UI resource after a more senior developer left the company. This allowed me to build relationships with various teams in the bank in order to understand how the application would work. I acomplished this using redux sagas and passing events to an avaya back end system to update the call status whilst also firing actions in order to update the UI. I also added alot of functionaility when answering call handing the routes the UI would take depending on what call data was received so that the caller ringing would be taken to the screen on the UI they needed depending how they have interacted with the IVR.

      2. Added key functionality to add a padlocked version of the application if the customer had not verified themselves to a certain level restricting the agent from acessing certain services for the customer encase the person who was calling wasn't who they said they were. I also added functionaility to reauthorise in order to unlock this functionaility if the caller/customer was able to do so.

      During my time at northcoders I learnt alot of javascript concepts, I spent a month learning the back end side of javascript using express I was able to build a server to retreive data from both SQL and Mongo databases in order to serve to the UI using restful endpoints. I then learnt React and created various small mini applications and a reddit style web app which used the server that I had created before to show various articles, comments and users. 

      Before that I worked in business improvement within a financial advice company maininly operating in delivering strategic change across the business and looking after their main outsources which included their IT department and printing company.
      </p>
    </div>
  </div>
);

export default Work;
