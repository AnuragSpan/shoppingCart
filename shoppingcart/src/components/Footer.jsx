import React from "react";

const Footer = () => {
  const topButton = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };
  return (
    <>
      <div className="top-page">
        <button onClick={topButton}>Back To Top</button>
      </div>
      <div className="footer-page">
        <div className="f-col">
          <h3>Get To Know Us</h3>
          <p>About Online</p>
          <p>Careers</p>
          <p>Press Realeses</p>
          <p>Online Science</p>
        </div>
        <div className="f-col">
          <h3>Connect With Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>LinkdIn</p>
        </div>
        <div className="f-col">
          <h3>Make Money With Us</h3>
          <p>Sell Online</p>
          <p>Supply Online</p>
          <p>Become an Affiliate</p>
          <p>Advertise Your Product</p>
        </div>
        <div className="f-col">
          <h3>Let Us Help You</h3>
          <p>Your Account</p>
          <p>Return Centre</p>
          <p>App Download</p>
          <p>Help</p>
        </div>
      </div>
      <div className="contact-us">
        <button>Contact Us</button>
      </div>
    </>
  );
};

export default Footer;
