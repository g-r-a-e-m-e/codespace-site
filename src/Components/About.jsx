/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/max-mckinnon-c9OCWLka764-unsplash.jpg";

const imageAltText = "An image of the Milky Way galaxy.";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a data scientist and am currently studying Astrophysics at Old Dominion University. Thank you for visiting my site.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Machine learning",
  "Cloud computing",
  "Python programming",
  "Data visualization",
];

const educationList = [
  "B.S. Astrophysics, Old Dominion University, 2025 (exp.)",
  "M.S. Business Analytics, College of William and Mary, 2021",
  "B.S. Business Analytics/Economics, Old Dominion University, 2019",
];
/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I aim to use data to solve problems and make the world a better place for all. I am working to earn a degree in Astrophysics and hope to one day work as a research scientist in this field.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "transparent",
          width: "70%",
          textAlign: "left",
        }}
      >
        <h2>About Me</h2>
        <p>{description}</p>
        <p>{detailOrQuote}</p>
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
