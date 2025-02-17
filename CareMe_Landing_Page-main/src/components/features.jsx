import React, { useState, useRef, useEffect } from "react";
import "../assets/styles/features.css";
import m1 from "../assets/images/caregiver-taking-care-woman-wheelchair 1.png";
import m2 from "../assets/images/nurse-using-digital-tablet-hospital-corridor 1.png";
import m3 from "../assets/images/young-female-nurse-wearing-blue-uniform-talking-with-senior-woman-nursing-home 1.png";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS for styles

function Features() {
  const [activeIndex, setActiveIndex] = useState(0); // To track the active feature card
  const [isMobile, setIsMobile] = useState(false); // To track if the device is mobile
  const featureCardsRef = useRef([]);
  const intervalRef = useRef(null); // To store the interval reference

  // Array of feature cards
  const features = [
    {
      title: "Hospital Bystander Services",
      description:
        "Professional bystanders to assist patients in hospitals.",
      description22:
        "Help with meals, mobility, and patient comfort.",
      description33:
        "Coordination with hospital staff for better patient care.",
      icon: m1,
    },
    {
      title: "Home Caregiver Services",
      description:
        "Assistance with daily activities (bathing, dressing, feeding, etc.).",
      description22:
        "Mobility support and medication reminders.",
      description33:
        "Emotional companionship for elderly or bedridden patients.",
      description4:
        "Custom care plans based on patient needs.",
        
      icon: m2,
    },
    {
      title: "Professional Nursing Care (At Home & In-Hospital)",
      description:
        "Registered & Licensed Nurses for patient care.",
      description22:
        "Post-surgery & recovery nursing.",
      description33:
        "Chronic disease management (diabetes, hypertension, etc.).",
      description4:
        "Palliative and geriatric nursing support.",
      description55:
        "Wound care, injections, and medical procedures.",
      icon: m3,
    },

  ];

  // Handle dot click to change active index
  const handleDotClick = (index) => {
    setActiveIndex(index);
    const cardContainer = featureCardsRef.current;
    // Scroll to the selected card
    cardContainer.scrollTo({
      left: cardContainer.children[index].offsetLeft,
      behavior: "smooth",
    });

    // Reset interval when user interacts with dots
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Auto slide function for mobile only
  const autoSlide = () => {
    setActiveIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % features.length; // Loop back to first feature
      const cardContainer = featureCardsRef.current;
      cardContainer.scrollTo({
        left: cardContainer.children[nextIndex].offsetLeft,
        behavior: "smooth",
      });
      return nextIndex;
    });
  };

  // Check if the device is mobile
  const checkMobile = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // Set interval for auto sliding (only for mobile)
  useEffect(() => {
    // Check if it’s a mobile device
    checkMobile();
    window.addEventListener("resize", checkMobile); // Listen to window resize to update the screen size

    // If it's mobile, set the auto-slide interval
    if (isMobile) {
      intervalRef.current = setInterval(autoSlide, 3000); // Change slide every 3 seconds
    }

    // Initialize AOS for scroll animations
    AOS.init({
      duration: 1200,
      once: true,
    });

    // Cleanup interval and resize listener on component unmount or screen resize
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]); // Dependency on isMobile to restart interval on mobile device change

  return (
    <div id="features" className="features-container">
      <div className="features-header" data-aos="fade-up">
        <h2 className="maintopicservices">Our Services</h2>

      </div>
      <div className="features-grid" ref={featureCardsRef}>
        {features.map((feature, index) => (
        <div
      key={index}
      className="feature-card"
      style={{
        opacity: index === activeIndex ? 1 : 1,
        transition: "opacity 0.3s ease",
      }}
      data-aos="fade-up"
      data-aos-delay={`${index * 100}`}
      >
      <img
        src={feature.icon}
        alt={feature.title}
        className="feature-image"
        data-aos="zoom-in"
      />
      <div className="feature-content">
        <div className="feature-text" data-aos="fade-left">
          <h3>{feature.title}</h3>
          <div className="ourservicesdescription">
          <p className="ourservicesdescription" style={{fontSize:"15px", fontWeight:"500"}}><span className="green-dot"></span>{feature.description}</p>
          <p className="ourservicesdescription" style={{fontSize:"15px", fontWeight:"500"}}><span className="green-dot"></span>{feature.description22}</p>
          <p className="ourservicesdescription" style={{fontSize:"15px", fontWeight:"500"}}><span className="green-dot"></span>{feature.description33}</p>
          {feature.description4 && <p className="ourservicesdescription" style={{fontSize:"15px", fontWeight:"500"}}><span className="green-dot"></span>{feature.description4}</p>}
          {feature.description55 && <p className="ourservicesdescription" style={{fontSize:"15px", fontWeight:"500"}}><span className="green-dot"></span>{feature.description55}</p>}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


      {/* Dots for mobile */}
      <div className="feature-dots">
        {features.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Features;
