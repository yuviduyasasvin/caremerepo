import React, { useEffect, useState } from "react";
import "../assets/styles/services.css";
import g1 from "../assets/images/g1.svg";
import g2 from "../assets/images/g2.png";
import g3 from "../assets/images/g3.png";
import g4 from "../assets/images/g4.png";
import AOS from "aos"; // Import AOS for scroll animations
import "aos/dist/aos.css"; // Import AOS CSS for styles

function Services() {
  const services = [
    {
      title: "Consultation and Implementation",
      description:
        "Our experts work with you to integrate our solution seamlessly into your organization.",
      image: g1,
    },
    {
      title: "Technical Support and Training",
      description:
        "Comprehensive training and support ensure your team fully benefits from every tool and capability.",
      image: g2,
    },
    {
      title: "Performance Optimization",
      description:
        "Leverage AI-driven insights and analytics to continuously optimize team performance and productivity.",
      image: g3,
    },
    {
      title: "Customization Options",
      description:
        "Our experts work with you to tailor solutions seamlessly into your organization.",
      image: g4,
    },
  ];

  const [translateX, setTranslateX] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4); // Default: Show 4 items at once
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1200,  // Duration for animations
      once: true,      // Animation happens only once
    });

    // Handle screen resize
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setItemsPerView(1); // Show 1 item at a time on small screens
      } else if (window.innerWidth <= 768) {
        setItemsPerView(2); // Show 2 items at a time on medium screens
      } else if (window.innerWidth <= 1024) {
        setItemsPerView(3); // Show 3 items at a time on larger screens
      } else {
        setItemsPerView(4); // Show 4 items at a time on very large screens
      }
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize); // Add event listener for window resize

    const interval = setInterval(() => {
      setTranslateX((prev) => {
        const maxTranslate = (services.length * 100) / itemsPerView; // Adjust max translation based on itemsPerView
        return prev >= maxTranslate ? 0 : prev + (100 / itemsPerView); // Adjust the translation step for smoother looping
      });
      setCurrentIndex((prevIndex) => {
        const maxIndex = services.length - 0;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 5000); // Automatically scroll every 3 seconds

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize); // Cleanup on component unmount
    };
  }, [itemsPerView, services.length]); // Dependency on itemsPerView and services.length to ensure correct resizing

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setTranslateX(index * 100); // Update translate value for the selected slide
  };

  return (
    <section id="services" className="services-container">
      <div className="services-header" data-aos="fade-up">
        <h2 data-aos="fade-up" data-aos-delay="100">Services</h2>
        <p data-aos="fade-up" data-aos-delay="200">
          We Provide A Range Of Services Designed To Enhance <br />
          Your Remote Workforce Management
        </p>
      </div>
      <div className="slider-wrapper">
        <div className="ash-box">
          <div
            className="services-slider"
            style={{
              transform: `translateX(-${translateX}%)`, // Adjust the translation based on state
            }}
          >
            {services.concat(services).map((service, index) => (
              <div
                className="service-box"
                key={index}
                data-aos="zoom-in"
                data-aos-delay={`${index * 200}`} // Apply delay for each service box
              >
                <img src={service.image} alt={service.title} />
                <h3>{service.title}</h3>
                <p>
                  {service.description.split(" ").map((word, idx) => (
                <React.Fragment key={idx}>
                 {word}{" "}
                 {idx === Math.ceil(service.description.split(" ").length / 2) ? (
                 <span className="mobile-only-break">
                 <br />
                 </span>
                  ) : (
                   ""
                  )}
                 </React.Fragment>
                  ))}
                 </p>

              </div>
            ))}
          </div>
        </div>
        {/* Dots for navigation - only visible for mobile */}
        {itemsPerView === 1 && (
          <div className="slider-dots">
            {services.map((_, index) => (
              <div
                key={index}
                className={`slider-dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Services;
