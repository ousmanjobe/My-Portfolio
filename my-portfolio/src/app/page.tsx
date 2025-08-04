'use client';
import Link from 'next/link';

import Card from "@/components/pageCard";

import imgLinkedIn from "/public/images/linkedinLogo.png";
import imgOutlook from "/public/images/outlook.png";
import imgInstagram from "/public/images/instagramLogo.png";

import imgProjects from "/public/images/projects.jpg";

import imgMe2 from "/public/images/me2.jpg";

import ScrambleText from '@/components/ScrambleText';

import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

import Preloader from '@/components/preloaderCurve';

export default function TitlePage(){
  /*
  <h1 className="text-center text-[220px]">
              Ousman Jobe
            </h1>
  */
  const preloadWords: string[] = ["Welcome",];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
  
      // Initialize LocomotiveScroll
      //const locomotiveScroll = new LocomotiveScroll();
  
      setTimeout(() => {
        setIsLoading(false); // Ensure `setIsLoading` is properly typed in your component
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  
  const texts = [
    'Ousman Jobe',
  ];
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <AnimatePresence mode='wait'>
            {isLoading && <Preloader words={preloadWords} />}
          </AnimatePresence>
          
          <section className="flex items-center justify-center min-h-screen">
            <ScrambleText texts={texts} />
          </section>

          <section className="flex items-center justify-center min-h-screen">
            <Link href="/homepage/aboutMe">
                <Card imageSrc={imgMe2} cardLetter="A" cardLabel="About Me" />
            </Link>
          </section>

          <section className="flex items-center justify-center min-h-screen">
            <Link href="/homepage/projects">
                <Card imageSrc={imgProjects} cardLetter="P" cardLabel="Projects" />
            </Link>
          </section>
         
         {/*
          <section className="flex items-center justify-center min-h-screen">
            <Card imageSrc={imgDesignCore} cardLetter="D" cardLabel="Design Core" />
          </section>
          

          <section className="flex items-center justify-center min-h-screen">
          <Link href="/homepage/Creative404">
            <Card imageSrc={imgSketchesCover} cardLetter="S" cardLabel="Sketchbook" />
          </Link>
          </section>
         */} 

          <section className="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-20 lg:space-y-0 justify-between min-h-screen">
            <a href="mailto:jobe.o@northeastern.edu">
                <Card imageSrc={imgOutlook} cardLetter="E" cardLabel="Email" />
            </a>

            <a href="https://www.linkedin.com/in/jobe-ousman" target="_blank" rel="noopener noreferrer">
                <Card imageSrc={imgLinkedIn} cardLetter="L" cardLabel="LinkedIn" />
            </a>

            <a href="https://www.instagram.com/lounge_tales/profilecard/?igsh=NXl1cnl5M3RlaWRs" target="_blank" rel="noopener noreferrer">
            <Card imageSrc={imgInstagram} cardLetter="I" cardLabel="Instagram" />
            </a>
          </section>
          
        </div>
      );
};