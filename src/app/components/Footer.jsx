import React from "react";

const Footer = (props) => {
  const onPrivacyPolicyClick = (e) => {
    e.preventDefault();
    
    let privacyPolicy = document.getElementById("privacy-policy");
    privacyPolicy.classList.add("open-privacy-policy");
  };

  return (
    <footer className="footer">
      <p className="footer-text">
        This website is made for fun to make your day better, just take a look
        at some funny and cute cats :) Bla-bla-bla, some more words to improve
        SEO ranking of this website ¯\_( ͡° ͜ʖ ͡°)_/¯
      </p>
      <p className="footer-text">
        If you found a bug let us know by creating an issue in{" "}
        <a
          target="_blank"
          href="https://github.com/Yashmerino/random-cat-generator"
        >
          Git project
        </a>
        .
      </p>
      <p className="footer-text">
        <a target="_blank" href="#" onClick={(e) => onPrivacyPolicyClick(e)}>
          Privacy Policy
        </a>
      </p>
    </footer>
  );
};

export default Footer;
