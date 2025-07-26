'use client';

import styles from './page.module.scss'

import React, { useEffect, useRef, useState } from 'react';
import { recProjects } from '@/dataRecArtwork';
import { conProjects } from '@/dataConceptArt';

import DoubleImage from '@/components/mouse-scale-image-gallery';

import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

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
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'; // Optional prop for object fit
}

export default function UXUIPage(){
    const images = [
        { src: '/images/Poster1.png', alt: 'Image 1' },
        { src: '/images/Poster3.PNG', alt: 'Image 3' },
        { src: '/images/CoverArt1.PNG', alt: 'Image 4' },
        { src: '/images/CoverArt2.PNG', alt: 'Image 5' },
        { src: '/images/CoverArt3.PNG', alt: 'Image 6' },
        { src: '/images/Poster2.PNG', alt: 'Image 2' },
      ];

    const [index, setIndex] = useState(-1);
    const photos = [
        { src: '/images/Poster1.png', title: 'Image 1', description: 'Description 1' },
        { src: '/images/Poster3.PNG', title: 'Image 3', description: 'Description 2' },
        { src: '/images/CoverArt1.PNG', title: 'Image 4', description: 'Description 3' },
        { src: '/images/CoverArt2.PNG', title: 'Image 5', description: 'Description 4' },
        { src: '/images/CoverArt3.PNG', title: 'Image 6', description: 'Description 5' },
        { src: '/images/Poster2.PNG', title: 'Image 2', description: 'Description 6' },
    ];

    const [open, setOpen] = useState(false);
      
    return (
        <div className="flex flex-col items-center justify-center min-h-screen max-w-screen">
            <section className="flex items-center justify-center min-h-screen">
                <h1 className="text-center text-[220px] dongporaFont">
                    ARTWORK
                </h1>
            </section>
            <section className={styles.main}>
                <h1 className='dongporaFont'>
                    Famous Artwork Recreation
                </h1>
                <h2 className='urbanistFont'>
                    Ideas and concepts are the seeds of everything around us. 
                </h2>
                <div>
                    <DoubleImage projects={[recProjects[0], recProjects[1]]} />
                    <DoubleImage projects={[recProjects[2], recProjects[3]]} reversed={true} />
                </div>
                <h1 className='dongporaFont'>
                    Graphic Novel Concept Art
                </h1>
                <Lightbox open={open} slides={photos} />
            </section>
        </div>
    );
}