import React from 'react';

import Image from "next/image"

import logo from "../public/lifecatchlogo.png"
import heroImage from "../public/heroImage.png"
import backgroundVid from "../public/backgroundvid.gif"

import { Button } from '@/components/ui/button';

export default function Home() {
  return (<>
    <div className="mainHome">
      <div className="navBar">
        <div className="appLogo">
          <Image unoptimized src={logo} alt=""/>
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
          <Image src={backgroundVid} alt=""/>
        </div>
        <div className='heroImage'>
          <Image src={heroImage} alt=""/>
        </div>
        <Button className='subscribeBtn'>Subscribe</Button>

        
      </div>
      <div className="teamLifeCatchSection">
        aaaa
      </div>
    </div>
  </>)
}
