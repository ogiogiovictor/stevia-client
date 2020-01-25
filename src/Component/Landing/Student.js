import React, { Component } from "react";

class Student extends Component {
  render() {
    return (
      <div>
        <div className="flex_c_j_between sideMenu_div">
          <div className="flex_r_j_between_align_center">
            <div className="site_logo_div ">
              <img
                src={process.env.PUBLIC_URL + "assets/images/15.png"}
                alt=""
              />
            </div>
            <div className="close_btn">
              <i className="far fa-times-circle"></i>
            </div>
          </div>

          <div className="flex_c top_nav_links top_nav_links_mobile">
            <div>
              <a href="views/courses.html"> Courses </a>
            </div>
            <div>
              <a href="views/coaches.html"> Coaches </a>
            </div>
            <div>
              <a href="views/jobs.html"> Jobs </a>
            </div>
            <div>
              <a href="views/contact.html"> Contact Us </a>
            </div>
            <div>
              <a href="views/post_a_job.html"> Post a Job </a>
            </div>
          </div>

          <div className="flex_r nav_link_buttons">
            <button className="mr-1 red_btn">Login</button>
            <button className="black_btn">Become a coach</button>
          </div>
        </div>

        <section className="whole_page_wrapper">
          <header className="full_row site_header">
            <nav>
              <div className="site_center1 top_nav_div">
                <div className="flex_r_j_between_align_center">
                  <div className="site_logo_div">
                    <a href="index.html">
                      <img src={process.env.PUBLIC_URL + "assets/utils/images/15.png"} alt="" />
                    </a>
                  </div>

                  <div className="flex_r_j_between_align_center top_nav_right">
                    <div className="flex_r top_nav_links">
                      <div>
                        <a href="views/courses.html"> Courses </a>
                      </div>
                      <div>
                        <a href="views/coaches.html"> Coaches </a>
                      </div>
                      <div>
                        <a href="views/jobs.html"> Jobs </a>
                      </div>
                      <div>
                        <a href="views/contact.html"> Contact Us </a>
                      </div>
                      <div>
                        <a href="views/post_a_job.html"> Post a Job </a>
                      </div>
                    </div>
                    <div className="flex_r nav_link_buttons">
                      <button className="mr-3 red_btn">Login</button>
                      <button className="black_btn">Become a coach</button>
                    </div>
                  </div>

                  <div className="mobile_nav_toggler">
                    <div className="bars bars_index"></div>
                    <div className="bars bars_index"></div>
                    <div className="bars bars_index"></div>
                  </div>
                </div>
              </div>
            </nav>

            <div className="full_row header_desc_wrapper">
              <div className="flex_r_j_between_align_center header_desc_div">
                <div className="header_desc_left">
                  <h4>
                    Connect to success leaders and turn <br />
                    your ambition into action.
                  </h4>
                  <p>
                    Have someone in your corner to help you master new skills,
                    job <br />
                    search, job loss, leadership and more.
                  </p>
                  <button className="red_btn">get started</button>
                </div>

                <div className="header_desc_right header_desc_right_index">
                  <img src={process.env.PUBLIC_URL + "assets/utils/images/12.png"} alt="" />
                </div>
              </div>
            </div>
          </header>
        </section>
      </div>
    );
  }
}

export default Student;
