import React, { Component } from "react";
import { Link } from "react-scroll";
import "./Header.scss";

class Header extends Component {
  state = {};
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section className="container-fluid" id="headerSection">
        <div className="jumbotron h-auto">
          <br />
          <h1>I'm</h1>
          <h1>{resumeData.name}</h1>
          <h1>
            {resumeData.surname}
            <span>.</span>
          </h1>
          <p>{resumeData.jobTitle}</p>
          <ul className="social p-0">
            {resumeData.socialLinks.map((social) => {
              return (
                <li key={social.name}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
}

export default Header;
