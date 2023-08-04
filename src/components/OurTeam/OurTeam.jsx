import React from 'react';
import imgTeam1 from "../../assets/team1.png";
import imgTeam2 from "../../assets/team2.png";
import imgTeam3 from "../../assets/team3.png";
import OurTeamCard from './components/OurTeamCard';
import {motion} from "framer-motion";
import { containerVariant } from '../../App';

const OurTeam = () => {

    const ourTeamMembers = [
        {
            id:1,
            image: imgTeam1,
            name: "Avie Beaton",
            degree: "CO Founder",
            socials : {
                instagram: null,
                twitter: "https://twitter.com",
                linkedin: "https://linkedin.com",
            }
        },
        {
            id:2,
            image: imgTeam2,
            name: "Ben Jonson",
            degree: "Consultant",
            socials : {
                instagram: "https://instagram.com",
                twitter: null,
                linkedin: "https://linkedin.com",
            }
        },
        {
            id:3,
            image: imgTeam3,
            name: "Ashley Fletcher",
            degree: "CEO",
            socials : {
                instagram: "https://instagram.com",
                twitter: "https://twitter.com",
                linkedin: "https://linkedin.com",
            }
        },
    ]

  return (
    <div className='our-team'>
        <div className="our-team-row container">
            <div className="our-team-header">
                <h5 className="our-team-header-title">Meet Our Team</h5>
                <p className="our-team-header-text">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
                </p>
            </div>
            <motion.div initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
       variants={containerVariant} className="our-team-content">
                {ourTeamMembers.map(member => (
                    <OurTeamCard key={member.id} member={member} />
                ) )}
            </motion.div>
        </div>
    </div>
  )
}

export default OurTeam