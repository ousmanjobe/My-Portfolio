'use client';

import styles from './page.module.scss';
import { AnimatePresence, useScroll, useTransform, motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';

import Lenis from 'lenis';

import FloatingImageGallery from './floatingImageGallerySection/page';

import Inner from '@/components/transitionCurve';

export default function AmoutMePage(){

    /////  Framer Motion Scroll  ///// 

    useEffect( () => {
        const lenis = new Lenis()
    
        function raf(time: number) {
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

    const y = useTransform(scrollYProgress, [0, 1], ['0vh', '200vh']);


    return (
      <Inner>
        <div className="flex flex-col items-center justify-center min-h-screen max-w-screen">
            
            <div ref={container1} className="h-screen w-screen overflow-hidden">
                <motion.div style={{ y }} className="relative h-full">
                  <img
                    src="/images/OusmanLakePic1.png"
                    alt="image"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </motion.div>
            </div>

            <section className="flex items-center justify-center min-h-screen max-w-screen">
            <main className={styles.main}>

              <div className={styles.body}>
              <p>
              I&apos;m a Designer & Developer, passionate about creating unique digital experiences with the promise of beauty, simplicity, and efficiency. My pursuit began in middle school when I made a fun personal website for the shows and movies I watched.
                <br />
                <br />
                I strive to further explore the harmony of design, code, and interaction to craft exceptional web solutions.
              </p>
              </div>

              <div className={styles.imageContainer}>
                <img
                  src="/images/MeGradPic1.jpg" /* Replace with the correct image path */
                  alt="Me Grad Pic"
                />
              </div>
            </main>
            </section>

          
                <FloatingImageGallery />
                
        </div>
        </Inner>
    );
}