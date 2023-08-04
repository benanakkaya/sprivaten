import React from 'react'
import {FaPlay} from "react-icons/fa"

const ServiceVideo = () => {
  return (
    <div className='service-video'>
        <div className="service-video-row container">
            <div className="service-video-header">
                <h5 className="service-video-header-title">
                We are providing best business service.
                </h5>
                <p className="service-video-header-text">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
                </p>
            </div>
            <div className="service-video-content">
                <div className="service-video-content-cover">
                    <span className="service-video-content-cover-button">
                    <FaPlay />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceVideo