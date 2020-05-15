import React, { Component } from "react";
import "./Contact.scss";

class Contact extends Component {
  state = {};
  render() {
    return (
      <>
        <section className="container-fluid text-center" id="contactSection">
          <h3 className="sectionName">
            Contact<span>.</span>
          </h3>
          <form method="post" action="mailto:marius.c.adam@gmail.com">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Phone Number"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Your Message"
                    style={{ width: "100%", height: 150 }}
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <button className="btn btn-primary text-center">Submit</button>
            </div>
          </form>
        </section>
      </>
    );
  }
}

export default Contact;
