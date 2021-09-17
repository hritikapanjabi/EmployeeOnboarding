import React from 'react'
import onboarding from './onboarding.png'
import './TopImage.css'
// import Image from 'react-bootstrap/Image'

function TopImage() {
    return (
        <div>
           
           <img className="onboarding  img-fluid center" src={onboarding} /> 
           
        </div>
    )
}

export default TopImage
