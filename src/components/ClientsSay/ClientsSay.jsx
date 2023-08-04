import React from 'react';
import imgClient1 from "../../assets/client1.png"
import imgClient2 from "../../assets/client2.png"
import imgClient3 from "../../assets/client3.png"
import ClientsSayCard from './components/ClientsSayCard';
import {motion} from "framer-motion"
import { containerVariant } from '../../App';

const ClientsSay = () => {

    const clientSaylist = [
        {
            id:1,
            client: {
                image: imgClient3,
                name: "Mike Miller",
                degree: "Engineer"
            },
            rating: 4,
            comment: "Slate helps you see how many more days you need to work to reach your financial goal."
        },
        {
            id:2,
            client: {
                image: imgClient2,
                name: "Diana Spencer",
                degree: "Designer"
            },
            rating: 5,
            comment: "Slate helps you see how many more days you need to work to reach your financial goal."
        },
        {
            id:3,
            client: {
                image: imgClient1,
                name: "Regina Miles",
                degree: "Designer"
            },
            rating: 4,
            comment: "Slate helps you see how many more days you need to work to reach your financial goal."
        },
    ]

  return (
    <div className='clients-say'>
        <div className="clients-say-row container">
            <div className="clients-say-header">
                <h5 className="clients-say-header-title">
                What Clients Say
                </h5>
                <p className="clients-say-header-text">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
                </p>
            </div>
            <motion.div initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
       variants={containerVariant}  className="clients-say-content">
                {clientSaylist.map((item) => (
                    <ClientsSayCard key={item.id} item={item} />
                ))}
            </motion.div>
        </div>
    </div>
  )
}

export default ClientsSay