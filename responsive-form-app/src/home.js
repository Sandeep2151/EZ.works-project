import React from 'react';
import Form from './Form';
import logo from "./image/logo.jpeg";
import audio from"./image/audio.png";
import data from "./image/data.png";
import graphic from "./image/graphic.png";
import presentation from "./image/presentation.png";
import research from "./image/research.png";
import transaction from"./image/transaction.png";

import "./home.css";
import"./Form.css";

function home() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="EZ Works Logo"></img>
          
        </div>
        <h2>Suite Of Business Support Services</h2>
      </div>
      <div className="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
        <div className="services">
          <div className="service">
            <img src={presentation}alt="Presentation Design Icon" />
            <h3>Presentation Design</h3>
            <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
          </div>
          <div className="service">
            <img src={graphic} alt="Graphic Design Icon" />
            <h3>Graphic Design</h3>
            <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
          </div>
          <div className="service">
            <img src={audio} alt="Audio - Visual Production Icon" />
            <h3>Audio - Visual Production</h3>
            <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
          </div>
          <div className="service">
            <img src={research} alt="Research & Analytics Icon" />
            <h3>Research & Analytics</h3>
            <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
          </div>
          <div className="service">
            <img src={transaction} alt="Translation Services Icon" />
            <h3>Translation Services</h3>
            <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
          </div>
          <div className="service">
            <img src={data} alt="Data Processing Icon" />
            <h3>Data Processing</h3>
            <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
     <Form/>
    </div>
  );
}

export default home;