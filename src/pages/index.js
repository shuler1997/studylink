import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useState } from "react";
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Footer from "../components/Footer";

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>      
      <Sidebar isOpen ={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
      <Footer />
    </>
  )
}

export default Home
