import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {motion} from "framer-motion"
import { itemVariant } from "../../../App";

const ClientsSayCard = ({ item }) => {
    
  const postiveRatingElements = Array.from({ length: item.rating }, (_, i) => (
    <AiFillStar key={i} />
  ));

  const negativeRatingElements = Array.from(
    { length: 5 - item.rating },
    (_, i) => <AiOutlineStar key={i} />
  );

  return (
    <motion.div variants={itemVariant} className="clients-say-content-card">
      <div className="clients-say-content-card-rating">
        {postiveRatingElements}
        {negativeRatingElements}
      </div>
      <p className="clients-say-content-card-comment">{item.comment}</p>
      <div className="clients-say-content-card-profile">
        <img
          src={item.client.image}
          alt={item.client.name}
          className="clients-say-content-card-profile-img"
        />
        <div className="clients-say-content-card-profile-info">
          <strong className="clients-say-content-card-profile-info-name">
            {item.client.name}
          </strong>
          <small className="clients-say-content-card-profile-info-degree">
            {item.client.degree}
          </small>
        </div>
      </div>
    </motion.div>
  );
};

export default ClientsSayCard;
