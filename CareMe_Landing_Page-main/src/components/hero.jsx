import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { Link } from 'react-scroll';
import '../assets/styles/hero.css';
import doctor from '../assets/images/newFrame.png';
import macbookImage from '../assets/images/MacbookPro.png'; 
import ScrollIndicator from './scroll';




const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container" id="home" data-aos="fade-up">
    
          <h1>
            <br/>
            Professional Nurses, Caregivers<br/>
            & Bystanders for Your<br/>
            <span style={{
              color:"rgb(46,125,92)"
            }}>Loved Ones</span>
          </h1>

          <p>Certified nurses, experienced caregivers, and compassionate <br/>
             bystanders providing hospital and home care<br/>
             services tailored to your needs.</p>

             <a
              href=""
                style={{
                fontSize: "17px", // Corrected "fontsize" → "fontSize"
                fontWeight: "800", // Corrected "fontweight" → "fontWeight"
                color: "rgb(46,125,92)",
                fontFamily: "'Inter', sans-serif", // Corrected "fontfamily" → "fontFamily"
                textDecoration: "none",
                }}
             >
             Learn more...
             </a>

          <div
                        style={{
                          display: "flex",
                          
                          
                          gap: "6%",
                        }}
          >
          <div data-aos="fade-up" data-aos-delay="200">
            <Link
              to="about"
             
              
              className="hero-button"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              Book a Nurse
            </Link>

          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <Link
              to="about"
             
              
              className="hero-button-3"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              Book a Caregiver
            </Link>

          </div>
          </div>
        </div>

        {/* Hero Background */}
        <div
          className="hero-background"
          style={{ backgroundImage: `url(${doctor})` }}
          data-aos="fade-in"
        ></div>

        {/* Scroll Indicator */}
        <ScrollIndicator />
      </section>

      <div
        className="hero-robot-icon"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        
      </div>

      <div className="mainpagefooter">
        <p>Compassionate Care, Anytime, Anywhere</p>
      </div>

      {/* About Section */}
      <section id="about" className="about-section">
        <div
          className="about-container"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h3>About Us</h3>
          <h2>
          Compassionate & Professional Healthcare
          <br />Services at Your Doorstep
          </h2>
          <div className="about-content">
            <img
              src={macbookImage}
              alt="Macbook displaying the platform"
              data-aos="zoom-in"
              data-aos-delay="600"
            />
            <div
              className="about-text"
              data-aos="fade-left"
              data-aos-delay="700"
            >
              
              <p style={{ marginBottom: "80px" }}>
              At CareMe Health, we specialize in providing qualified nurses, trained caregivers, and
              professional bystanders to assist patients in hospitals and at home. Whether your loved
              one requires medical support, personal care, or companionship, our dedicated
              team ensures the highest level of care and comfort. We aim to offer trustworthy,
              reliable, and affordable patient-centered care when you need it the most</p>

            <button className="joinwithusbuttons">Join With Us</button>  
            </div>


            
          </div>
        </div>
      </section>

    </>
  );
};

export default HeroSection;
