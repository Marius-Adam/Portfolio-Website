import React from "react";
import "./About.scss";

export default function About(resumeData) {
  const data = resumeData.resumeData;

  return (
    <section className="container-fluid p-5 text-center" id="aboutSection">
      <h3 className="sectionName">
        About<span>.</span>
      </h3>
      <div className="row">
        <div className="col-md-5 text-center">
          <img src={data.avatar} width="250" height="250" alt=""></img>
          <p>
            <a href={data.cvLink} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary"> Download CV</button>
            </a>
          </p>
        </div>
        <div className="col-md-6">
          <p>
            Hello, my name is <span>Marius Adam</span>. I am a self-taught
            <span> Web Developer</span>. My journey so far has offered me
            engaging challenges that made me constantly learn and improve my
            skills. I focus on writing clean, efficient code and I am
            experienced in <span>HTML5</span>, <span>CSS3</span> and
            <span> JavaScript</span>. I have knowledge of current
            <span> UI/UX</span> trends and I am proficient in
            <span> Git Version Control</span> plus other popular libraries and
            frameworks. Currently working on solidifying my
            <span> JavaScript</span> and <span>React</span> fundamentals by
            contributing to open source projects on <span>GitHub</span>.
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
