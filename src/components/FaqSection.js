import React from "react";

const FaqSection = () => {
  return (
    <div className="faq">
      <h2>
        Any question <span>FAQ</span>
      </h2>
      <div className="questions">
        <h4>How to I start? </h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <div className="questions">
        <h4>What product do you offer? </h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <div className="questions">
        <h4>Diffirent payment method </h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <div className="questions">
        <h4>Daily schedule </h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
