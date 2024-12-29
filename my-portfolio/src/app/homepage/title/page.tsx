import Card from "@/components/pageCard";
import imgProject from "@/images/projectCover.jpg";
import imgAboutMe from "@/images/mePhoto1.png";
import imgLinkedIn from "@/images/linkedinLogo.png";
import imgGmail from "@/images/gmailLogo.png";
import imgInstagram from "@/images/instagramLogo.png";
import imgSketches from "@/images/sketches.png";

export default function TitlePage(){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <section className="flex items-center justify-center min-h-screen">
            <h1 className="text-center text-[220px]">
              Ousman Jobe
            </h1>
          </section>
          <section className="flex items-center justify-center min-h-screen">
            <Card imageSrc={imgProject} cardLetter="P" cardLabel="Projects" />
          </section>
          <section className="flex items-center justify-center min-h-screen">
            <Card imageSrc={imgAboutMe} cardLetter="A" cardLabel="About Me" />
          </section>
          <section className="flex items-center justify-center min-h-screen">
            <Card cardLetter="D" cardLabel="Design Core" />
          </section>
          <section className="flex items-center justify-center min-h-screen">
            <Card imageSrc={imgSketches} cardLetter="S" cardLabel="Sketches" />
          </section>
          <section className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
            <Card imageSrc={imgGmail} cardLetter="E" cardLabel="Gmail" />
            <Card imageSrc={imgLinkedIn} cardLetter="L" cardLabel="LinkedIn" />
            <Card imageSrc={imgInstagram} cardLetter="I" cardLabel="Instagram" />
          </section>
          
        </div>
      );
};