import React, { Component } from "react";
import "./Projects.scss";

class Projects extends Component {
  state = {};
  render() {
    let resumeData = this.props.resumeData;
    return (
      <>
        <section className="container-fluid " id="projectSection">
          <h3 className="sectionName">
            Projects<span>.</span>
          </h3>
          <div className="row">
            {resumeData.projects.map((data, index) => {
              return (
                <div key={index} className="col-md-4">
                  <div className="project-item">
                    <a
                      className="project-link"
                      data-toggle="modal"
                      href={data.modalLink}
                    >
                      <div className="project-hover">
                        <div className="project-hover-content">
                          <i className="fas fa-code fa-3x" />
                        </div>
                      </div>
                      <img
                        className="img-fluid"
                        src={data.projectCover}
                        alt=""
                      />
                    </a>
                    <div className="project-caption">
                      <div className="project-heading">
                        {data.captionHeading}
                      </div>
                      <div className="project-subheading text-muted">
                        {data.captionSub}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <div>
          {/* Portfolio Modals */}

          {resumeData.projectModals.map((data, index) => {
            return (
              <div
                key={index}
                className="project-modal modal fade p-0"
                id={data.modalId}
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal">
                      <i className="fas fa-times" />
                    </div>
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-md-8">
                          <div className="modal-body">
                            <h2 className="pb-4">
                              {data.projectTitle}
                              <span>.</span>
                            </h2>
                            <img
                              className="img-fluid d-block mx-auto"
                              src={data.projectImg}
                              alt=""
                            />
                            <p>{data.projectDetails}</p>
                            <a href={data.liveDemo}>
                              <button className="btn btn-primary" type="button">
                                <i className="fas fa-eye mr-1" />
                                Live Demo
                              </button>
                            </a>
                            <a href={data.code}>
                              <button
                                className="btn btn-primary m-2"
                                type="button"
                              >
                                <i className="fas fa-code mr-1" />
                                Source
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Projects;
