import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faGitSquare
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div>
       <a
    href="https://www.linkedin.com/in/heatherhaylett"
    className="linkedin social"
 >
    <FontAwesomeIcon icon={faLinkedin} size="2x" />
 </a>
 <a
    href="https://www.github.com/HeatherHaylett"
    className="github social"
 >
    <FontAwesomeIcon icon={faGitSquare} size="2x" />
 </a>
    </div>
  );
}