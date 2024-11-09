import Card from "@/components/pageCard";
import imgProject from "@/images/projectCover.jpg";
import imgAboutMe from "@/images/mePhoto1.png";

export default function TitlePage(){
    return (
        <div>
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
            <Card cardLetter="S" cardLabel="Sketches" />
          </section>
          <section className="flex items-center justify-center min-h-screen">
            <Card cardLetter="L" cardLabel="LinkedIn" />
          </section>
          
        </div>
      );
};