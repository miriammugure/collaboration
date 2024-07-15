import React from "react";
import "./Footer.css";
import Icons from "../SocialIcons/SocialIcons";

function Footer() {
  return (
    <div>
      <div className="footer-container">
        <Icons
          fbUrl={"facebook.com"}
          instaUrl={"instagram.com"}
          twitterUrl={"twitter.com"}
          linkedUrl={"linkedin.com"}
        
          
        />
        <p> copyright &copy; 2020 all rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;