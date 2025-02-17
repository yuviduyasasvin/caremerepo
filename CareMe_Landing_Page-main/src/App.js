import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Header from "./components/header";
import HeroSection from "./components/hero";
import AboutSection from "./components/about";
import NewsSection from "./components/news";
import Features from "./components/features";
import Services from "./components/services";
import Footer from "./components/footer";
import "animate.css";
import Testimonials from "./components/testimonial";
import Whychooses from "./components/whychooses.";
import Contactpge from "./components/contactus";

function App() {
  const [activeLink, setActiveLink] = useState("home");

  // Hero Section (Home)
  const { ref: homeRef, inView: homeInView } = useInView({
    threshold: 0.1, // Trigger when at least 10% of Home is visible
    onChange: (inView) => {
      if (inView) setActiveLink("home");
    },
  });

  // About Section
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.5, // Trigger when at least 50% of About is visible
    onChange: (inView) => {
      if (inView) setActiveLink("about");
    },
  });

  // Features Section
  const { ref: featuresRef, inView: featuresInView } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveLink("features");
    },
  });

  // News Section
  const { ref: newsRef, inView: newsInView } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveLink("news");
    },
  });

  // Services Section
  const { ref: servicesRef, inView: servicesInView } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveLink("services");
    },
  });

  // Footer Section
  const { ref: footerRef, inView: footerInView } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveLink("footer");
    },
  });

  // Detect when the user scrolls to the very top of the page
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveLink("home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header activeLink={activeLink} setActiveLink={setActiveLink} />

      {/* Attach refs to actual DOM elements */}
      <section ref={homeRef} id="home">
        <HeroSection />
      </section>
      <section ref={aboutRef} id="about">
        <AboutSection />
      </section>
      <section ref={featuresRef} id="features">
        <Features />
      </section>
      <section ref={newsRef} id="news">
        <NewsSection />
      </section>
      <section ref={servicesRef} id="services">
        <Testimonials />
      </section>      
      <section ref={servicesRef} id="services">
        <Whychooses />
      </section>
      <section ref={servicesRef} id="services">
        <Contactpge />
      </section>
      <section ref={footerRef} id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
