import { projects } from "@const/projects";
import ProjectItem from "@components/Portfolio/ProjectItem";

function Portfolio() {

    return (
        <main>
            <div className="
                bg-[var(--secondary-color)]/85
                font-[billie]
                mb-10
                mx-auto
                py-5
                rounded-xl
                shadow-[0px_0px_5px]
                shadow-gray-700
                text-[var(--font-active-color)] 
                text-center 
                text-5xl
                w-[90%] 
                md:mb-0
                md:w-1/3
                xl:w-1/5
            ">
                My portfolio
            </div>
            <div className="columns-1 p-10 md:columns-3 md:gap-40 md:p-20 w-full">
                {projects.map((project, index) => (
                    <ProjectItem key={index} project={project}/>
                ))}
            </div>
        </main>
    );

}

export default Portfolio;