'use client';
import React, { useEffect, useRef } from 'react';

import FlipCard from '@/components/flipCard';
import { projects } from '@/dataUXUI';


import { useScroll } from 'motion/react';
import Lenis from '@studio-freight/lenis';

import Inner from '@/components/transitionCurve';

interface Project {
    title: string;
    description: string;
    src: string;
    url: string;
    color: string;
  }

export default function UXUIPage(){
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end'],
    });
  
    useEffect(() => {
      const lenis = new Lenis();
  
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
  
      requestAnimationFrame(raf);
  
      return () => {
        // Cleanup if necessary
      };
    }, []);
    
    return (
      <Inner>
        <div ref={container} className="flex flex-col items-center justify-center min-h-screen max-w-screen">
            <section className="flex items-center justify-center min-h-screen">
                <h1 className="text-center text-[220px] aileronsFont">
                    UX/UI
                </h1>
            </section>
            
            {projects.map((project: Project, i: number) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
                <FlipCard
                    key={`p_${i}`}
                    i={i}
                    {...project}
                    progress={scrollYProgress}
                    range={[i * 0.25, 1]}
                    targetScale={targetScale}
                />
        );
    })};
            
        </div>
        </Inner>
    );
};