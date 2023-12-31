import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import img1 from "./image/run3.gif";
import img2 from "./image/website.gif";
import img3 from "./image/run1.gif";
import img4 from "./image/run2.gif";

const Section2 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section className="about-me" id="about">
        <div className="container">
          <div className="about-me-container" data-aos="fade-up">
            <div className="about-me-img">
              <img src={img4} alt="Ladipo Matthew" />
            </div>
            <div className="about-me-content">
              <h1>About me</h1>
              <p>
                Hellow World! I'm Ladipo Matthew,a Front-end Web Developer Based
                Out Of Lagos Nigeria.I Love Combining The Worlds Of Logic And
                CreativeDesign To Make Eye-catching, And User-friendly Website.
                I look forward to make to make an impact and continue refining
                my skills with the rigth company. I Focus on writing accessible
                HTML, busing modern CSS practices and writing clean
                JavaScript.When writing JavaScript code,I mostly use React, but
                i can adapt to Whatever tools are required.
              </p>
              <div className="about-me-links">
                <ul>
                  <li>
                    <a
                      href="https://docs.google.com/file/d/1TXrD9irdRJI4rXoCuQ2MX8VzzPCEGnSZ/edit?usp=docslist_api&filetype=msword"
                      target="_blank"
                      className="btn grid-btn"
                    >
                      Profile
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div href="#" className="Services" data-aos="fade-up">
        Services
      </div>
      <div className="work" id="Services">
        <div className="testi">
          <div className="testimotionals">
            <div className="card" data-aos="fade-up">
              <div className="content">
                <p>
                  Social media Dashboard with theme switcher (light/dark).This
                  is a front-end mentor challenge.
                </p>
                <div className="image">
                  <img src={img1} alt="" />
                </div>
                <div className="details">
                  <a href="#">e-commerce Dashboard</a>
                </div>
              </div>
            </div>
          </div>

          <div className="testimotionals">
            <div className="card" data-aos="fade-up">
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  iusto ea tenetur
                </p>

                <div className="image">
                  <img src={img2} alt="" />
                </div>
                <div className="details">
                  <a href="#"> Business Website</a>
                </div>
              </div>
            </div>
          </div>

          <div className="testimotionals">
            <div className="card" data-aos="fade-up">
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  iusto ea tenetu
                </p>
                <div className="image">
                  <img src={img3} alt="" />
                </div>
                <div className="details">
                  <a href="#"> Various landing page</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="contact" id="contact" data-aos="fade-up">
        <div className="container">
          <div className="contact-container">
            <div className="contact-heading">
              <h1>Contact Us</h1>
              <h3>Let's work together</h3>
            </div>
            <form
              action="https://formspree.io/maypyjwz"
              method="POST"
              id="form"
              className="form"
            >
              <div className="form-control">
                <label for="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="Name"
                  placeholder="Enter your name..."
                />
                <small>Error message</small>
              </div>
              <div className="form-control">
                <label for="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="_replyto"
                  placeholder="Enter your email..."
                />
                <small>Error message</small>
              </div>
              <div className="form-control">
                <label for="msg">Message:</label>
                <textarea
                  name="Message"
                  id="msg"
                  cols="10"
                  rows="10"
                ></textarea>
                <small>Error message</small>
              </div>
              <button className="btn form-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
