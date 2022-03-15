import React, { useState, useEffect } from 'react';
import 'animate.css';
import './styles/home.css';
import './styles/about.css';
import './styles/work.css';

import WOW from 'wow.js';

const data = [1, 2, 3, 4, 5, 6, 7, 8];

export const Home = () => {
  useEffect(() => {
    new WOW({
      live: false,
    }).init();
  }, []);
  return (
    <>
      <div className="home-container animate__animated animate__fadeIn">
        <p className="heading capitalize-text animate__animated animate__zoomIn">
          watch out <br />
          the modern resposive
          <br /> website!
        </p>
        <div className="nav-button capitalize-text animate__animated animate__zoomIn">
          view out work
        </div>
      </div>
      <div style={{ minHeight: 700 }}>
        view out work 2
        <div
          id="float-diag-bg"
          className="wow bounceInUp diagonal-bg"
          style={{
            color: 'black',
            textAlign: 'center',
            fontSize: '40px',
            clear: 'both',
          }}
        ></div>
      </div>
      <div className="work-section">
        our Work
        <div class="horizontal-line" />
        <div className="images-section">
          {data.map((el) => (
            <div className="image-container">
              <img
                src="https://i.pinimg.com/564x/fd/00/98/fd00984025b813f8da694ca720b39111.jpg"
                alt=""
              ></img>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
