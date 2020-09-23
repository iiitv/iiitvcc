import React, { Component } from "react";
import "./Cover.css";

class Cover extends Component {
  render() {
    return (
      <div>
        <section id="cover-display">
          <div id="flex-container">
            <div className="display-head">
              <h1 className="display-heading">
                Technical blogging  
                website for posting 
                Technical blogs
              </h1>
              <div className ="manage-goodline">
              <p className="good-line">
                A random good line for the good work
                 of coding club and this website
              </p>
              </div>
              <div className="inf-btn">
                <button className="trans-btn">Know us</button>
                <button className="trans-btn">Contact Us</button>
              </div>
            </div>
            <img
              className="coder-image"
              src="./media/coder.png"
              alt="coder"
            ></img>
          </div>
        </section>
      </div>
    );
  }
}

export default Cover;
