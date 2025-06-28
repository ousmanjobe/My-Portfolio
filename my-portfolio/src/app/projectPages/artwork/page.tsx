'use client';

import styles from './page.module.scss'
import React, { useEffect, useRef } from 'react';
import { projects } from '@/dataArtwork';

import DoubleImage from '@/components/mouse-scale-image-gallery';

interface Project {
    name: string;
    client: string;
    description: string;
    src: string;
    year: number;
  }
  
  interface DoubleProps {
    projects: [Project, Project]; // Expect exactly two projects
    reversed?: boolean; // Optional prop
  }

export default function UXUIPage(){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen max-w-screen">
            <section className="flex items-center justify-center min-h-screen">
                <h1 className="text-center text-[220px] dongporaFont">
                    ARTWORK
                </h1>
            </section>
            <section className={styles.main}>
                <h1 className='dongporaFont'>
                    We use design and technology to create brands and products that perform, delight, and scale.
                </h1>
                <h3 className='urbanistFont'>
                    Ideas and concepts are the seeds of everything around us. 
                </h3>
                <div className={styles.gallery}>
                    <DoubleImage projects={[projects[0], projects[1]]} />
                    <DoubleImage projects={[projects[2], projects[3]]} reversed={true} />
                    <DoubleImage projects={[projects[4], projects[5]]} />
                    <DoubleImage projects={[projects[6], projects[7]]} reversed={true} />
                </div>
            </section>
        </div>
    );
}