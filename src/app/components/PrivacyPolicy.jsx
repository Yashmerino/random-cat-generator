import React from "react";

const PrivacyPolicy = () => {
  const onCloseClick = () => {
    let privacyPolicy = document.getElementById("privacy-policy");
    privacyPolicy.classList.remove("open-privacy-policy");
  };

  return (
    <div className="privacy-policy" id="privacy-policy">
      <h2>Privacy Policy</h2>
      <p>
        We do not collect any personal information, you're safe on this website!
        Just take a look at a cat and smile :)
      </p>
      <button onClick={() => onCloseClick()}>Close</button>
    </div>
  );
};

export default PrivacyPolicy;
