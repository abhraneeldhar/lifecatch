import React from 'react';

import Image from "next/image"

import logo from "../public/lifecatchlogo.png"
import heroImage from "../public/heroImage.png"
import backgroundVid from "../public/backgroundvid.gif"
import kidModel from "../public/kidModel.png"
import adultModel from "../public/adultModel.png"
import blackBiker from "../public/blackBikerModel.png"


import { Button } from '@/components/ui/button';

export default function Home() {
  return (<>
    <div className="mainHome">
      <div className="navBar">
        <div className="appLogo">
          <Image unoptimized src={logo} alt="" />
        </div>
        <div className="tags">
          <div className="tagLinks">Life Catch</div>
          <div className="tagLinks">Target</div>
          <div className="tagLinks">Subscribe</div>
          <div className="tagLinks">Prototype</div>
          <div className="tagLinks">About Us</div>
        </div>
      </div>

      <div className='heroSection'>
        <div className='backgroundVid'>
          <Image src={backgroundVid} alt="" />
        </div>
        <div className='heroImage'>
          <Image src={heroImage} alt="" />
        </div>
        <h1>Life Catch</h1>
        <Button className='subscribeBtn'>Subscribe</Button>


      </div>
      <div className="teamLifeCatchSection">
        <h1 className='sectionHeading'>Who are we ?</h1>
        <div className='sectionContent'>
          <p>We are LifeCatch, a team dedicated to redefining safety with innovative airbag technology. Our mission is simple: to protect lives by minimizing the impact of falls, whether on the road or in everyday life. Designed for both high-speed bikers and individuals with slower reflexes, our airbag jacket deploys in an instant, acting as a personal safety net when you need it most.

            At LifeCatch, we believe that safety should never be a compromise. Whether you're riding at full speed or navigating daily challenges, our technology is built to cushion falls, reduce injuries, and give you the confidence to move freely. With cutting-edge sensors and rapid deployment, our jacket ensures protection is always one step ahead.

            Because every second counts, and every life matters.<br /> Stay fast, stay safe—LifeCatch has you covered.</p>

          <div className='sectionImages'>
            <Image className='blackBikerImage ' src={blackBiker} alt=""/>
            <Image className='adultModelImage' src={adultModel} alt=""/>

          </div>
        </div>
      </div>
    </div>
  </>)
}
