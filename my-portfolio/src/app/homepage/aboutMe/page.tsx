'use client';

import styles from './page.module.scss';
import { AnimatePresence, useScroll, useTransform, motion, useInView } from 'framer-motion';
import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import { slideUp, opacity } from './animation';
import Image from 'next/image';
import Lenis from 'lenis';

import Background from "/public/images/OusmanLakePic1.png";
import Preloader from '@/components/preloaderCurve';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

import useMousePosition from './utils/useMousePosition'


export default function AmoutMePage(){

    
    /////   Preloader   ///// 
    const preloadWords: string[] = ["About Me",];
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      (async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
    
        // Initialize LocomotiveScroll
        const locomotiveScroll = new LocomotiveScroll();
    
        setTimeout(() => {
          setIsLoading(false); // Ensure `setIsLoading` is properly typed in your component
          document.body.style.cursor = 'default';
          window.scrollTo(0, 0);
        }, 2000);
      })();
    }, []);

    /////  Framer Motion Scroll  ///// 

    useEffect( () => {
        const lenis = new Lenis()
    
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
    
        requestAnimationFrame(raf)
      }, [])

    const container1 = useRef<HTMLDivElement | null>(null); // Add type annotation for the ref
    const { scrollYProgress } = useScroll({
        target: container1,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh']);

    /////  Description Section  /////
    /*
    const phrase: string =
        "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
    const description = useRef<HTMLDivElement | null>(null); // Add type annotation for the ref
    const isInView: boolean = useInView(description);
    */


    /////  Opacity on Scroll Text  /////
    const phrase: string =
  "I'm a Designer & Developer, passionate about creating unique digital experiences with the promise of beauty, simplicity, and efficiency. My pursuit began in middle school when I made a fun personal website for the shows and movies I watched.";

  const phrase1: string = "I strive to further explore the harmony of design, code, and interaction to craft exceptional web solutions.";
// I strive to make better stuff than what people are settling for with templates and AI.
// I think I can do better than some of the stuff I see out there.
// I strive to further explore the harmony of design, code, and interaction to craft exceptional web solutions.
  const refs = useRef<HTMLSpanElement[]>([]); // Array of span element refs
  const body = useRef<HTMLDivElement | null>(null); // Ref for the body container
  const container = useRef<HTMLDivElement | null>(null); // Ref for the main container

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top`,
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: 'none',
      stagger: 0.1,
    });
  };

  const splitWords = (phrase: string): JSX.Element[] => {
    const body: JSX.Element[] = [];
    phrase.split(' ').forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(
        <p key={`${word}_${i}`}>
          {letters}
        </p>
      );
    });
    return body;
  };

  const splitLetters = (word: string): JSX.Element[] => {
    const letters: JSX.Element[] = [];
    word.split('').forEach((letter, i) => {
      letters.push(
        <span
          key={`${letter}_${i}`}
          ref={(el) => {
            if (el) refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  /////  Cursor Hover Mask  /////
  const [isHovered, setIsHovered] = useState(false); // State for hover effect
  const { x, y1 } = useMousePosition(); // Get mouse position
  const size = isHovered ? 400 : 40; // Mask size changes on hover


    return (
        <div className="flex flex-col items-center justify-center min-h-screen max-w-screen">
            <AnimatePresence mode='wait'>
                {isLoading && <Preloader words={preloadWords} />}
            </AnimatePresence>

            <div ref={container1} className="h-screen overflow-hidden">
                <motion.div style={{ y }} className="relative w-full">
                  <img
                    src="/images/OusmanLakePic1.png"
                    alt="image"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </motion.div>
            </div>

            <main ref={container} className={styles.main}>
              <div ref={body} className={styles.body}>
                {splitWords(phrase)}

                <div ref={body} className={styles.body}>
                  {splitWords(phrase1)}
                </div>

                <motion.div
                  className={styles.mask}
                  animate={{
                    WebkitMaskPosition: `${x - size / 2}px ${y1 - size / 2}px`,
                    WebkitMaskSize: `${size}px`,
                  }}
                  transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
                >
                <p
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  I strive to make better stuff than what people are settling for with templates and AI.
                </p>
                </motion.div>
              </div>
            </main>

            <section className="flex items-center justify-center min-h-screen">
                <h1 className="text-center text-[220px]">
                    About Me
                </h1>
            </section>
        </div>
    );
}