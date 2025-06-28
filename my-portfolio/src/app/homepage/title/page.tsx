import Link from 'next/link';

import Card from "@/components/pageCard";

//import imgProject from "@/images/projectCover.jpg";
//import imgAboutMe from "@/images/mePhoto1.png";
import imgLinkedIn from "/public/images/linkedinLogo.png";
//import imgGmail from "@/images/gmailLogo.png";
import imgOutlook from "/public/images/outlook.png";
import imgInstagram from "/public/images/instagramLogo.png";
import imgSketches from "/public/images/sketches.png";
import imgDesignCore from "/public/images/designCore.jpg";
import imgProjects from "/public/images/projects.jpg";

//import imgMe1 from "@/images/me1.jpg";
import imgMe2 from "/public/images/me2.jpg";

export default function TitlePage(){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <section className="flex items-center justify-center min-h-screen">
            <h1 className="text-center text-[220px]">
              Ousman Jobe
            </h1>
          </section>

          <section className="flex items-center justify-center min-h-screen">
            <Card imageSrc={imgMe2} cardLetter="A" cardLabel="About Me" />
          </section>

          <section className="flex items-center justify-center min-h-screen">
            <Link href="/homepage/projects">
                <Card imageSrc={imgProjects} cardLetter="P" cardLabel="Projects" />
            </Link>
          </section>
         
          <section className="flex items-center justify-center min-h-screen">
            <Card imageSrc={imgDesignCore} cardLetter="D" cardLabel="Design Core" />
          </section>

          <section className="flex items-center justify-center min-h-screen">
            <Card imageSrc={imgSketches} cardLetter="S" cardLabel="Sketches" />
          </section>

          <section className="flex flex-col lg:flex-row items-center space-x-8 justify-between min-h-screen">
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