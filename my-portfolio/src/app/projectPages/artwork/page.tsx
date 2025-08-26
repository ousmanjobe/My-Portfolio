'use client';

import styles from './page.module.scss'

import React, { useEffect, useRef, useState } from 'react';
import { recProjects } from '@/dataRecArtwork';

import Image from 'next/image';
import Lenis from '@studio-freight/lenis';
import { useTransform, useScroll, motion, MotionValue } from 'framer-motion';

import DoubleImage from '@/components/mouse-scale-image-gallery';

import Inner from '@/components/transitionCurve';

interface Dimension {
    width: number;
    height: number;
  }
  
  interface ColumnProps {
    images: string[];
    y: MotionValue<number>;
  }
  

export default function ArtworkPage(){
    const images = [
        'Poster1.png',
        'Poster3.PNG',
        'CoverArt1.PNG',
        'CoverArt2.PNG',
        'CoverArt3.PNG',
        'Poster2.PNG',
        'CoverArt4.PNG',
        'CharacterDesign1.jpg',
        'CharacterDesign2.jpg',
        'CharacterDesign3.jpg',
        'CharacterDesign4.png',
        'Poster4.jpg',
        'PosterArt3v1.jpg'
      ];

    // Smooth Vertical Parallax Image Scroll Gallery

    const gallery = useRef<HTMLDivElement | null>(null);
  const [dimension, setDimension] = useState<Dimension>({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2.9]);
  const y2 = useTransform(scrollYProgress, [0, 1.08], [0, height * 5.05]);
  const y3 = useTransform(scrollYProgress, [0, 1.7], [0, height * 2.35]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
      
    return (
      <Inner>
        <div className="flex flex-col items-center justify-center min-h-screen max-w-screen">
            <section className="flex items-center justify-center min-h-screen">
                <h1 className="text-center text-[220px] aileronsFont">
                    ARTWORK
                </h1>
            </section>
            <section className={styles.main}>
                <section>
                    <h1 className='urbanistFont'>
                        Famous Artwork Recreations
                    </h1>

                    <h2 className='urbanistFont'>
                        Used a 2B pencil and 9x12 paper to draw pieces I found in Boston&apos;s Museum of Fine Arts, spending 30 minutes on each. My goal was to notice and account for as much detail as each artist included in order to acquire their lenses when depicting depth and texture.
                    </h2>
                    <div className={styles.margin}>
                        <DoubleImage projects={[recProjects[0], recProjects[1]]} />
                        <DoubleImage projects={[recProjects[2], recProjects[3]]} reversed={true} />
                    </div>
                </section>

                <section>
                    <h1 className='urbanistFont'>
                        Graphic Novel <br></br>Concept Art
                    </h1>

                    <div ref={gallery} className={styles.gallery}>
                        <Column images={[images[9], images[4], images[2]]} y={y} />
                        <Column images={[images[3], images[12], images[7]]} y={y2} />
                        <Column images={[images[6], images[5], images[11]]} y={y3} />
                        <Column images={[images[8], images[10], images[0]]} y={y4} />
                    </div>

                    <div className={styles.main}>
                    <h2 className='urbanistFont'>
                        I have been developing a graphic novel with a story focused on showcasing mental health struggles, addressing the crucial nature of having faith in yourself, and building the courage to rely on others during desperate times.
                        <br />
                        <br />
                        Using Procreate, Adobe Photoshop, and Adobe Illustrator, I created concept art pieces to visualize my characters, outfits, book cover art, and posters.
                    </h2>
                    </div>

                </section>
            </section>
        </div>
        </Inner>
    );
}

const Column: React.FC<ColumnProps> = ({ images, y }) => {
    return (
      <motion.div className={styles.column} style={{ y }}>
        {images.map((src, i) => (
          <div key={i} className={styles.imageContainer}>
            <Image src={`/images/${src}`} alt="image" fill />
          </div>
        ))}
      </motion.div>
    );
  };