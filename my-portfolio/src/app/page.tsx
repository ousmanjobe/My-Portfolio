'use client';
import Link from 'next/link';

import Card from "@/components/pageCard";

import imgProjects from "/public/images/projects.webp";

import imgMe2 from "/public/images/me2.webp";

import ScrambleText from '@/components/ScrambleText';

import Inner from '@/components/transitionCurve';

export default function TitlePage(){
  
  const texts = [
    'Ousman Jobe',
  ];

  const aboutMeDescription = "A brief summary of my background and interests";
  const projectsDescription = "A collection of my work and projects"
    return (
      <Inner>
        <div className="flex flex-col items-center justify-center min-h-screen">
          
          
          <section className="flex items-center justify-center min-h-screen">
            <ScrambleText texts={texts} />
          </section>

          <section className="flex flex-col lg:flex-row items-center lg:space-x-14 space-y-20 lg:space-y-0 justify-between min-h-screen">
            <Link href="/homepage/aboutMe">
                <Card imageSrc={imgMe2} description={aboutMeDescription} cardLabel="About Me" />
            </Link>
          
            <Link href="/homepage/projects">
                <Card imageSrc={imgProjects} description={projectsDescription} cardLabel="Projects" />
            </Link>
          </section>
          
        </div>
        </Inner>
      );
};