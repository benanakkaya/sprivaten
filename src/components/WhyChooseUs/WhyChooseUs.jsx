import React from 'react';
import {MdWeb} from "react-icons/md";
import {FaAward} from "react-icons/fa";
import {CgShoppingBag} from "react-icons/cg";
import WhyChooseCard from './components/WhyChooseCard';

const WhyChooseUs = () => {

  const cards = [
    {
      id:1,
      title: "Web Development",
      icon: <MdWeb />,
      listItems: [
        {
          id:1,
          text: "-  The best products start with Figma",
        },
        {
          id:2,
          text: "- Design with real data",
        },
        {
          id:3,
          text: "- Lightning fast prototyping",
        },
        {
          id:4,
          text: "- Fastest way to organize",
        },
        {
          id:5,
          text: "- Work at the speed of thought",
        },
      ]
    },
    {
      id:2,
      title: "National top 50 firms",
      icon: <FaAward />,
      listItems: [
        {
          id:1,
          text: "-  The best products start with Figma",
        },
        {
          id:2,
          text: "- Design with real data",
        },
        {
          id:3,
          text: "- Lightning fast prototyping",
        },
        {
          id:4,
          text: "- Fastest way to organize",
        },
        {
          id:5,
          text: "- Work at the speed of thought",
        },
      ]
    },
    {
      id:3,
      title: "Digital Marketing",
      icon: <CgShoppingBag />,
      listItems: [
        {
          id:1,
          text: "-  The best products start with Figma",
        },
        {
          id:2,
          text: "- Design with real data",
        },
        {
          id:3,
          text: "- Lightning fast prototyping",
        },
        {
          id:4,
          text: "- Fastest way to organize",
        },
        {
          id:5,
          text: "- Work at the speed of thought",
        },
      ]
    },

  ]



  return (
    <div className='why-choose'>
      <div className="container why-choose-row">
        <div className='why-choose-head'>
          <h3 className="why-choose-head-title">WHY CHOOSE US</h3>
          <p className="why-choose-head-desc">
          Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics 
          </p>
        </div>
        <div className='why-choose-cards'>
          {cards.map(card => (
            <WhyChooseCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs