import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'


const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrival</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Every Pot,</p>
            {/* <img src={hand_icon} alt="" /> */}
          </div>
          <p>make your</p>
          <p>home Beautiful</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Arrival</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
