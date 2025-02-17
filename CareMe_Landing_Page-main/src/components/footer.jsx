import React from "react";
import "../assets/styles/footer.css"; // CSS file for styling
import s1 from "../assets/images/s1.png";
import s2 from "../assets/images/s2.png";
import s3 from "../assets/images/s3.png";
import s4 from "../assets/images/s4.png";

function Footer() {
  return (
    <footer id="footer" className="footer-container" style={{ backgroundColor: "rgb(247, 247, 247)" }}>
      {/* Horizontal line at the top */}
      <hr style={{ border: "0.5px solid rgb(0, 0, 0)", marginBottom: "5rem" }} />





      <div className="copyright">
        <p>Copyright © CareMe. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
