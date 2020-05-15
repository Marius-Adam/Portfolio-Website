import React, { Component } from "react";
import "./About.scss";

class About extends Component {
  state = {};
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section className="container-fluid p-5 text-center" id="aboutSection">
        <h3 className="sectionName">
          About<span>.</span>
        </h3>
        <div className="row">
          <div className="col-md-5 text-center">
            <img src={resumeData.avatar} width="250" height="250" alt=""></img>
            <p>
              {" "}
              <a
                href={resumeData.cvLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary"> Download CV</button>
              </a>
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Hello, my name is <span>Marius Adam</span>. I am a self-taught
              <span> Front-End Developer</span>. I was introduced to programming
              by a close friend and from the moment I produced
              <span>"Hello World"</span> in the console of my first application
              I knew I was hooked into the world of
              <span>Web Development.</span> My journey so far has offered me
              engaging challenges that made me continually learn and improve my
              skills. I focus on writing clean, elegant and efficient code. I am
              proficient in <span>HTML</span>, <span>CSS</span> and
              <span> JavaScript</span> plus modern <span>libraries</span> and
              <span>frameworks.</span>
            </p>
          </div>
        </div>
        <ul className="skill-list">
          <li>
            <i className="fab fa-html5"></i>
          </li>
          <li>
            <i className="fab fa-css3-alt"></i>
          </li>
          <li>
            <i className="fab fa-js-square"></i>
          </li>
          <li>
            <i className="fab fa-bootstrap"></i>
          </li>
          <li>
            <i className="fab fa-sass"></i>
          </li>
          <li>
            <i className="fab fa-react"></i>
          </li>
          <li>
            <i className="fab fa-git-alt"></i>
          </li>
        </ul>
      </section>
    );
  }
}

export default About;
