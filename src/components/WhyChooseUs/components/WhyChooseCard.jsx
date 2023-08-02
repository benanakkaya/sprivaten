import React from 'react'

const WhyChooseCard = ({card}) => {
  return (
    <div className='why-choose-cards-card'>
        <div className="why-choose-cards-card-header">
            <span className='why-choose-cards-card-header-icon'>
                {card.icon}
            </span> {card.title}
        </div>
        <ul className="why-choose-cards-card-list">
            {card.listItems.map(item => (
                <li className='why-choose-cards-card-list-item' key={item.id}>{item.text}</li>
            ))}
            <li className='why-choose-cards-card-list-item more'>
                <a href='/'>
                Learn More</a></li>
        </ul>
    </div>
  )
}

export default WhyChooseCard