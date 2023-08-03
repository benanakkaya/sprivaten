import React from 'react'

const SocialLink = ({platform}) => {
  return (
    <a className='footer-row-top-socials-item' href={platform.path}>
        {platform.icon}
    </a>
  )
}

export default SocialLink
