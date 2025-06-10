import { Link } from "react-router-dom";
import { projects } from "@const/projects";
import { useJustifyClass } from "@hooks/useJustifyClass";
import type { Project } from "@interfaces/types";

interface ProjectLinksProps {
    currentIndex: number;
}

function ProjectLinks({ currentIndex }: ProjectLinksProps) {

    const prevProject: Project | null = currentIndex > 0 ? projects[currentIndex-1] : null;
    const nextProject: Project | null = currentIndex < projects.length-1 ? projects[currentIndex+1] : null;

    const justifyClass = useJustifyClass(currentIndex);

    return (
        <>
            <div className={`flex ${justifyClass} my-8 md:my-15`}>
                {prevProject && (
                    <Link to={`/project/${prevProject.idName}`}>
                        <div className="flex items-center gap-2 text-xl text-white transition-opacity hover:opacity-60">
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                            </svg>
                            <span>Previous project</span>
                        </div>
                    </Link>
                )}
                {nextProject && (
                    <Link to={`/project/${nextProject.idName}`}>
                        <div className="flex items-center gap-2 text-xl transition-opacity hover:opacity-60">
                            <span>Next project</span>
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                            </svg>
                        </div>
                    </Link>
                )}
            </div>
        </>
    );

}

export default ProjectLinks;