import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import {motion} from "framer-motion"
import { itemVariant } from "../../../App";

const OurTeamCard = ({ member }) => {
  return (
    <motion.div variants={itemVariant} className="our-team-content-card">
      <img
        src={member.image}
        alt={member.name}
        className="our-team-content-card-image"
      />
      <div className="our-team-content-card-profile">
        <strong className="our-team-content-card-profile-name">
          {member.name}
        </strong>
        <small className="our-team-content-card-profile-degree">
          {member.degree}
        </small>
        <div className="our-team-content-card-profile-socials">
          {member.socials.instagram && (
            <a
              href={member.socials.instagram}
              className="our-team-content-card-profile-socials-item"
            >
              <AiOutlineInstagram />
            </a>
          )}
          {member.socials.twitter && (
            <a
              href={member.socials.twitter}
              className="our-team-content-card-profile-socials-item"
            >
              <AiOutlineTwitter />
            </a>
          )}
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              className="our-team-content-card-profile-socials-item"
            >
              <AiOutlineLinkedin />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default OurTeamCard;
