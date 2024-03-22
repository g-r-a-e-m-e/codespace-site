/**
 * About
 */

import React from "react";

/**
 * Background image
 */
import image from "../images/max-mckinnon-c9OCWLka764-unsplash.jpg";

const imageAltText = "An image of the Milky Way galaxy.";

/**
 * Description
 */
const description =
  "I am a data scientist and am currently studying Astrophysics at Old Dominion University. Thank you for visiting my site.";

/**
 * Skills
 */
const skillsList = [
  "Machine learning",
  "Cloud computing",
  "Python programming",
  "Data visualization",
];

/**
 * Education
 */
const educationList = [
  "B.S. Astrophysics, Old Dominion University, 2025 (exp.)",
  "M.S. Business Analytics, College of William and Mary, 2021",
  "B.S. Business Analytics/Economics, Old Dominion University, 2019",
];

/**
 * Detail
 */
const detail =
  "I aim to use data to solve problems and make the world a better place for all. I am working to earn a degree in Astrophysics and hope to one day work as a research scientist in this field.";

/**
 * Build About section
 */
const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "transparent",
          width: "70%",
          textAlign: "left",
          padding: "1rem",
          margin: "2rem auto",
        }}
      >
        <h2>About Me</h2>
        <p>{description}</p>
        <p>{detail}</p>
        <hr />
        <h2>Skills</h2>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <h2>Education</h2>
        <ul
          style={{
            textAlign: "left",
            columns: 1,
            fontSize: "1rem",
          }}
        >
          {educationList.map((education) => (
            <li key={education}>{education}</li>
          ))}
        </ul>
        <hr />
      </div>
    </section>
  );
};

export default About;
