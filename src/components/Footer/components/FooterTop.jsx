import React from 'react';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai'
import Logo from '../../shared/Logo';

import SocialLink from './SocialLink'

const FooterTop = () => {

    const socialLinks = [
        {
            id:1,
            platform: "Facebook",
            icon: <AiOutlineFacebook />,
            path: "/"
        },
        {
            id:2,
            platform: "Instagram",
            icon: <AiOutlineInstagram />,
            path: "/"
        },
        {
            id:3,
            platform: "Twitter",
            icon: <AiOutlineTwitter/>,
            path: "/"
        },
        {
            id:4,
            platform: "Youtube",
            icon: <AiOutlineYoutube />,
            path: "/"
        },
    ]



  return (
<div className="footer-row-top">
                <Logo />
                <div className="footer-row-top-socials">
                    {socialLinks.map(platform => (
                        <SocialLink key={platform.id} platform={platform} />
                    ))}
                </div>
            </div>
  )
}

export default FooterTop
