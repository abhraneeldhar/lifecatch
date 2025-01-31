import React, { ReactNode } from 'react';

import Image, { StaticImageData } from "next/image"

import logo from "../public/lifecatchlogo.png"
import heroImage from "../public/heroImage.png"
import backgroundVid from "../public/backgroundvid.gif"
import kidModel from "../public/kidModel.png"
import adultModel from "../public/adultModel.png"
import blackBiker from "../public/blackBikerModel.png"
import oldModel from "../public/oldModel.png"
import blackJacket from "../public/blackJacket.png"
import greenJacket from "../public/greenJacket.png"
import teamPic from "../public/teamPic.jpg"

import abhra from "../public/profilePics/Abhra.jpg"
import sid from "../public/profilePics/Sid.jpg"
import tridip from "../public/profilePics/Tridip.jpg"
import arya from "../public/profilePics/Arya.png"
import risav from "../public/profilePics/Risav.jpg"

import { Button } from '@/components/ui/button';

import { ProfileCard } from './component/personCard';
import Link from 'next/link';
import { Globe, Instagram, Mail, Phone } from 'lucide-react';
// import { useRouter } from 'next/router';

export default function Home() {

  const teamMates: { src: StaticImageData, name: string, role: string, link: string }[] = [
    {
      src: arya,
      name: "Arya Jha",
      role: "SALES-FINANCE & DESIGN HEAD",
      link: "https://www.linkedin.com/in/arya-jha-259ba9290"
    },
    {
      src: abhra,
      name: "Abhraneel Dhar",
      role: "TECHNOLOGY & MANUFACTURING",
      link: "https://www.linkedin.com/in/abhraneeldhar/"
    },
    {
      src: tridip,
      name: "Tridip Debnath",
      role: "MARKETING & PROMOTION",
      link: "https://www.linkedin.com/in/tridip-dev-3bb294220"
    },
    {
      src: sid,
      name: "SIDDHARTHA DUTTA",
      role: "MANUFACTURING & PRODUCT IDEATION",
      link: "https://www.linkedin.com/in/siddhartha-dutta-a18993338/"
    },
    {
      src: risav,
      name: "Risav Chanda",
      role: "SOCIAL MEDIA PR &  MANAGER",
      link: ""
    }
  ]
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
          <p>We are LifeCatch, a team dedicated to redefining safety with innovative airbag technology. <br /> <br />Our mission is simple: to protect lives by minimizing the impact of falls, whether on the road or in everyday life. Designed for both high-speed bikers and individuals with slower reflexes, our airbag jacket deploys in an instant, acting as a personal safety net when you need it most.
            <br />
            At LifeCatch, we believe that safety should never be a compromise. Whether you're riding at full speed or navigating daily challenges, our technology is built to cushion falls, reduce injuries, and give you the confidence to move freely. With cutting-edge sensors and rapid deployment, our jacket ensures protection is always one step ahead.
            <br />
            Because every second counts, and every life matters.<br /><br /> Stay fast, stay safe—LifeCatch has you covered.</p>

          <div className='sectionImages'>
            <Image className='blackBikerImage ' src={blackBiker} alt="" />
            <Image className='adultModelImage' src={adultModel} alt="" />

          </div>
        </div>

        <div className='forTheQuickAndTheCautiousSection'>
          <h1 className='sectionHeading'>For the Quick and the Cautious</h1>
          <div className='sectionImages'>
            <Image className='kidModel' src={kidModel} alt="" />
            <Image className='blackBikerImage ' src={blackBiker} alt="" />
            <Image className='adultModelImage' src={adultModel} alt="" />
            <Image className='oldModel' src={oldModel} alt="" />
          </div>
        </div>

        <div className='getYoursNow'>
          <h1 className='sectionHeading'>Get yours now</h1>
          <div className="sectionContent">
            <div className="getYoursNowsectionImages">
              <div className='rotateBox'></div>
              <Image className='greenJacket' src={greenJacket} alt="" />
              <Image className='blackJacket' src={blackJacket} alt="" />
            </div>
            <Button className='subscribeBtn'>Subscribe</Button>
          </div>
        </div>

        <div className='ourteam'>
          <h1 className='sectionHeading'>Meet the creators</h1>
          <div className="sectionImages">
            <Image className='teamImage' src={teamPic} alt="" />
          </div>

          <div className='profileCardHolder'>
            {teamMates.map((person) => (
              <ProfileCard key={person.name} src={person.src} name={person.name} role={person.role} link={person.link} />
            ))}
          </div>
        </div>

  


      </div>
      <div className='contactUs'>
          <h1 className='sectionHeading'>Get in touch</h1>
          <div className='sectionContent'>
            <div className='links'>
              <a><Phone/>+91 9051589728</a>
              <a href=""><Globe/> Lifecatch.com</a>
              <a><Mail />LifeCatch@gmail.com</a>
              <a href="https://www.instagram.com/_life_catch/" target='_blank'><Instagram/>@_life_catch</a>
            </div>
          </div>
        </div>
    </div>
  </>)
}
