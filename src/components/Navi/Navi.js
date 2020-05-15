import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navi.scss";

class Navi extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    let resumeData = this.props.resumeData;

    return (
      <nav className="navbar navbar-expand-lg fixed-top ">
        <a className="navbar-brand" href="#home" onClick={this.scrollToTop}>
          <img src={resumeData.logo} width={60} height={30} alt="" />
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item p-2">
              <Link
                activeClass="active"
                to="headerSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Home
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link
                activeClass="active"
                to="aboutSection"
                spy={true}
                smooth={true}
                offset={-57}
                duration={1000}
              >
                About
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link
                activeClass="active"
                to="projectSection"
                spy={true}
                smooth={true}
                offset={-53}
                duration={1000}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link
                activeClass="active"
                to="contactSection"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navi;
