import React from "react";
import "./SocialIcons.css";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { Link } from "react-router-dom";
const SocialIcons = ({ twitterUrl, fbUrl, instaUrl ,linkedUrl }) => {
  return (
    <div className="IconBox">

      
{fbUrl && (
        <Link to={fbUrl}>
          <FaFacebook />
        </Link>
      )}
      

      {instaUrl && (
        <Link to={instaUrl}>
          <FaInstagram />
        </Link>
      )}

      {twitterUrl && (
        <Link to={twitterUrl}>
          <FaTwitter />
        </Link>
      )}

  {linkedUrl && (
        <Link to={linkedUrl}>
          <FaLinkedin />
        </Link>
      )}
    </div>
  );
};

export default SocialIcons;