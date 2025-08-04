'use client';
import Link from 'next/link';

import Card from "@/components/pageCard";

import imgSoftware from "/public/images/software.jpg";
import imgArtwork from "/public/images/artwork.jpg";
import imgUXUI1 from "/public/images/uxui.jpg";

import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

import Preloader from '@/components/preloaderCurve';

export default function ProjectsPage(){

    const preloadWords: string[] = ["Projects",];

    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      (async () => {
    
        setTimeout(() => {
          setIsLoading(false); // Ensure `setIsLoading` is properly typed in your component
          document.body.style.cursor = 'default';
          window.scrollTo(0, 0);
        }, 2000);
      })();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen max-w-screen">
            <AnimatePresence mode='wait'>
            {isLoading && <Preloader words={preloadWords} />}
          </AnimatePresence>
            
            <section className="flex items-center justify-center min-h-screen">
                {/* Container for both grids */}
                <div>
                    {/* First grid with one column and one row */}
                    {/*}
                    <div className="auto-cols-auto">
                        <div>
                            <Card imageSrc={imgFeatured2} cardLetter="F" cardLabel="Featured" />
                        </div>
                    </div>
                    */}
                    {/* Second grid with two columns and two rows */}
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-20 lg:space-y-0 justify-between min-h-screen">
                        <div>
                            <Link href="/projectPages/uxui">
                                <Card imageSrc={imgUXUI1} cardLetter="U" cardLabel="UX/UI" />
                            </Link>
                        </div>
                        <div>
                            <Link href="/projectPages/software">
                                <Card imageSrc={imgSoftware} cardLetter="S" cardLabel="Software"/>
                            </Link>
                        </div>
                        <div>
                            <Link href="/projectPages/artwork">
                                <Card imageSrc={imgArtwork} cardLetter="A" cardLabel="Artwork" />
                            </Link>
                        </div>
                        {/*}
                        <div>
                            <MiniCard imageSrc={imgPhotography1} cardLetter="P" cardLabel="Photography" />
                        </div>
                        */}
                    </div>
                </div>
            </section>
        </div>
    );
};