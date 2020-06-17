import React from "react";
import { Link } from "react-scroll";
import "./Footer.scss";

export default function Footer(resumeData) {
  const data = resumeData.resumeData;

  return (
    <section>
      <footer className="footer">
        <iframe
          src="https://snazzymaps.com/embed/234608"
          width="100%"
          height="350px"
          style={{ border: "none" }}
          title="blueMap"
        ></iframe>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <button className="btn chevron">
                <Link
                  className="link"
                  activeClass="active"
                  to="headerSection"
                  spy={true}
                  smooth={true}
                  offset={-54}
                  duration={1000}
                >
                  <i className="fas fa-chevron-up"></i>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="container-fluid text-center">
          <ul className="social p-0">
            {data.socialLinks.map((social) => {
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
          <p>© Copyright 2020 Marius Adam</p>
        </div>
      </footer>
    </section>
  );
}
