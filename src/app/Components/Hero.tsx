import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="heroSection">
      <div className="container">
        <div className="imageWrapper">
          <img
            className="heroImage"
            alt="hero"
            width={250}
            height={200}
            src="/img.jpeg"
          />
        </div>
        <div className="textContent">
          <h1 className="title">
            Hi, I'm
            <br className="lineBreak" />
            Kashaf Aman
          </h1>
          <p className="description">
            I'm a web developer passionate about building impactful web applications.
            My tools include HTML, CSS, JavaScript, TypeScript, and I keep learning new technologies.
          </p>
          <div className="buttonGroup">
            <Link href="#Contact">
              <button className="button" >
                Contact
                </button>
            </Link>
            <button className="button2">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
