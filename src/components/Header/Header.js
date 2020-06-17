import React from "react";
import { Link } from "react-scroll";
import "./Header.scss";

export default function Header(resumeData) {
  const data = resumeData.resumeData;

  return (
    <section className="container-fluid" id="headerSection">
      <div className="jumbotron h-auto">
        <br />
        <h1>I'm</h1>
        <h1>{data.name}</h1>
        <h1>
          {data.surname}
          <span>.</span>
        </h1>
        <p>{data.jobTitle}</p>
        <ul className="social p-0">
          {data.socialLinks.map((social) => {
            return (
              <li key={social.name}>
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  <i className={social.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="container-fluid text-center">
        <button className="btn chevron">
          <Link
            className="link"
            activeClass="active"
            to="aboutSection"
            spy={true}
            smooth={true}
            offset={-54}
            duration={1000}
          >
            <i className="fas fa-chevron-down"></i>
          </Link>
        </button>
      </div>
    </section>
  );
}
