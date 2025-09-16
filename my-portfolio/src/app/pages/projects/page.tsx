'use client';
import Link from 'next/link';

import Card from "@/components/pageCard";

import imgSoftware from "/public/images/githubLogo2.webp";
import imgArtwork from "/public/images/artwork1.webp";
import imgUXUI1 from "/public/images/uxui.webp";

import Inner from '@/components/transitionCurve';

export default function ProjectsPage(){

    const uxuiDescription = "Access several of my UX/UI projects over recent years";
    const softwareDescription = "Access several of my software projects over recent years";
    const artworkDescription = "Access several of my art projects over recent years";

    return (
        <Inner>
        <div className="flex flex-col items-center justify-center min-h-screen max-w-screen">

            <section className="flex items-center justify-center min-h-screen">
                <div>
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-20 lg:space-y-0 justify-between min-h-screen">
                        <div>
                            <Link href="/projectPages/uxui">
                                <Card imageSrc={imgUXUI1} description={uxuiDescription} cardLabel="UX/UI" />
                            </Link>
                        </div>
                        <div>
                            <Link href="/projectPages/software">
                                <Card imageSrc={imgSoftware} description={softwareDescription} cardLabel="Software"/>
                            </Link>
                        </div>
                        <div>
                            <Link href="/projectPages/artwork">
                                <Card imageSrc={imgArtwork} description={artworkDescription} cardLabel="Artwork" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </Inner>
    );
};