import Link from 'next/link';

import Card from "@/components/pageCard";
import MiniCard from "@/components/miniCard";

import imgSoftware from "/public/images/software.jpg";
import imgPhotography1 from "/public/images/photography1.jpg";
import imgPhotography2 from "/public/images/photography2.jpg";
import imgFeatured from "/public/images/featured.jpg";
import imgFeatured2 from "/public/images/featured2.jpg";
import imgArtwork from "/public/images/artwork.jpg";
import imgUXUI1 from "/public/images/uxui.jpg";
import imgUXUI2 from "/public/images/uxui2.jpg";

export default function ProjectsPage(){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen max-w-screen">
            <section className="flex items-center justify-center min-h-screen">
                <h1 className="text-center text-[220px]">
                    Projects
                </h1>
            </section>
            <section className="flex items-center justify-center min-h-screen">
                {/* Container for both grids */}
                <div className="flex gap-9  max-w-screen-lg">
                    {/* First grid with one column and one row */}
                    <div className="auto-cols-auto">
                        <div>
                            <Card imageSrc={imgFeatured2} cardLetter="F" cardLabel="Featured" />
                        </div>
                    </div>
                    {/* Second grid with two columns and two rows */}
                    <div className="grid grid-cols-[auto,auto] gap-9">
                        <div>
                            <Link href="/projectPages/uxui">
                                <MiniCard imageSrc={imgUXUI1} cardLetter="U" cardLabel="UX/UI" />
                            </Link>
                        </div>
                        <div>
                            <Link href="/projectPages/software">
                                <MiniCard imageSrc={imgSoftware} cardLetter="S" cardLabel="Software" />
                            </Link>
                        </div>
                        <div>
                            <Link href="/projectPages/artwork">
                                <MiniCard imageSrc={imgArtwork} cardLetter="A" cardLabel="Artwork" />
                            </Link>
                        </div>
                        <div>
                            <MiniCard imageSrc={imgPhotography1} cardLetter="P" cardLabel="Photography" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};