import { Link } from "react-router-dom";
import { useInView } from "@hooks/useInView";
import type { Project } from "@interfaces/types";

interface ProjectItemsProps {
    project: Project;
}

function ProjectItem({ project }: ProjectItemsProps) {

    const { ref, isVisible } = useInView();

    return (
        <div 
            ref={ref} 
            className={`
                mb-10 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} md:mb-50
            `}
        >
            <Link to={`/project/${project.idName}`}>
                <picture className="group relative">
                    <img className="object-cover w-full h-full" src={project.image} alt={project.title}/>
                    <span className="
                        flex
                        justify-center
                        items-center
                        absolute 
                        inset-0
                        bg-gradient-to-t
                        from-[#34167d]
                        to-transparent
                        cursor-pointer
                        font-[billie]
                        opacity-0
                        text-2xl
                        text-center
                        text-white
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                    ">
                        {project.title}
                    </span>
                </picture>
            </Link>
        </div>
    );

}

export default ProjectItem;