import React from 'react';
import "./Hero.css"
import blocks from "../assets/Illustration.png"

function Hero(){
  return (
    <div className="in-event-hero">
      <div className="colored-bars-2">
        <img src={blocks} alt="Colored Bars" />
      </div>

      <div className="event-details">
        <div className="event-name">
          <span>
            Ready
            <br />
          </span>
          <span>
            Set
            <br />
          </span>
          <span>Grow.</span>
        </div>

        <p className="date-of-event">November 22 - November 26, 2021</p>

        <p className="tagline">
          <nobr>
            Embracing Diversity and Transforms Community Through Technology
          </nobr>
        </p>

        <div className="btn-container">
          <a className="register-btn" href="">
            Register Now
          </a>
          <a className="learn-more-btn" href="">
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
