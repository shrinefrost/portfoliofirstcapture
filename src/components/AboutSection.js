import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="hide">
        <h1> we work to make</h1>
      </div>
      <div className="hide">
        <h1>
          your<span> dreams</span>
        </h1>
      </div>
      <div className="hide">
        <h1>come true.</h1>
      </div>
      <div className="description">
        <p>
          contact us for any photography or videography ideas we will provide
          you an extraordinary work
        </p>
      </div>
      <div className="contactus-button">
        <button> Contact Us</button>
      </div>
      <img src={home1} alt="a guy with a camera" />
    </div>
  );
};

export default AboutSection;
