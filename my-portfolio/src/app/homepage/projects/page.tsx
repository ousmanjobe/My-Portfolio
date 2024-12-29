import Card from "@/components/pageCard";

export default function ProjectsPage(){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen max-w-screen">
            <section className="flex items-center justify-center min-h-screen">
                <h1 className="text-center text-[220px]">
                    Projects
                </h1>
            </section>
            <section className=" ">
                <p>Test text</p>
                {/* Container for both grids */}
                <div className="flex gap-10  max-w-screen-lg">
                    {/* First grid with one column and one row */}
                    <div className="auto-cols-auto border border-gray-300" style={{ width: 'auto', height: '39.313rem' }}>
                        <div className="border border-gray-300">
                            <Card cardLetter="F" cardLabel="Featured" />
                        </div>
                    </div>
                    {/* Second grid with two columns and two rows */}
                    <div className="grid grid-cols-[auto,auto] gap-20 border border-gray-300" style={{ transform: 'scale(0.48)', transformOrigin: 'top left' }}>
                        <div className="border border-gray-300">
                            <Card cardLetter="U" cardLabel="UX/UI" />
                        </div>
                        <div className="border border-gray-300">
                            <Card cardLetter="3" cardLabel="3D Design" />
                        </div>
                        <div className="border border-gray-300">
                            <Card cardLetter="S" cardLabel="Software" />
                        </div>
                        <div className="border border-gray-300">
                            <Card cardLetter="A" cardLabel="Artwork" />
                        </div>
                    </div>
                </div>
                <p>Test text 2 huh</p>
            </section>
        </div>
    );
};