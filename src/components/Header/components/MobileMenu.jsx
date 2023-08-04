import { AnimatePresence,motion } from 'framer-motion'
import React from 'react'

const MobileMenu = ({items}) => {
  return (
    <motion.div  initial={{opacity:0,maxHeight:0}} animate={{opacity:1,maxHeight:429}} exit={{opacity:0,translateY:-20}}  className='header-mobile-menu container'>
        <ul className="header-mobile-menu-list">
            {items.map(item => (
            <li key={item.id} className="header-mobile-menu-list-item">
                <a className='header-mobile-menu-list-item-link' href={item.path}>
                    {item.name}
                </a>
            </li>
            ))}
        </ul>
    </motion.div>
  )
}

export default MobileMenu
