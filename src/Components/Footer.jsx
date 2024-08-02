import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-column">
          <a href="#contact">Questions? Contact us.</a>
          <a href="#contact">Prising Plane.</a>
          <a href="#contact">Benifits.</a>
          <button className="language-btn">English</button>
        </div>
        <div className="footer-column">
          <a href="#faq">FAQ</a>
          <a href="#investor-relations">Investor Relations</a>
          <a href="#privacy">Privacy</a>
          <a href="#speed-test">Speed Test</a>
        </div>
        <div className="footer-column">
          <a href="#help-center">Help Center</a>
          <a href="#jobs">Jobs</a>
          <a href="#cookie-preferences">Cookie Preferences</a>
          <a href="#legal-notices">Legal Notices</a>
        </div>
        <div className="footer-column">
          <a href="#account">Account</a>
          <a href="#ways-to-watch">Ways to Watch</a>
          <a href="#corporate-information">Corporate Information</a>
          <a href="#only-on-.CineHaven">Only on .CineHaven</a>
        </div>
        <div className="footer-column">
          <a href="#media-center">Media Center</a>
          <a href="#terms-of-use">Terms of Use</a>
          <a href="#contact-us">Contact Us</a>
        </div>
      </div>
      <div className="footer-bottom">
        {/* <button className="language-btn">English</button> */}
        <p>.CineHaven Pakistan</p>
      </div>
    </footer>
  );
}

export default Footer;
