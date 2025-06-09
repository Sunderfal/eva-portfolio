import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "@const/projects";
import type { Project } from "@interfaces/types";
import ProjectInfo from "@components/ProjectInfo/ProjectInfo";
import ProjectLinks from "@components/ProjectInfo/ProjectLinks";
import ImageModal from "@components/ProjectInfo/ImageModal";

function ProjectPage() {

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [expandedImage, setExpandedImage] = useState<string | null>(null);
    const { projectIdName } = useParams();
    
    const project: Project = projects[currentIndex];

    const handleClick = (image: string | null): void => setExpandedImage(image);

    useEffect(() => {
        const index: number = projects.findIndex(project => project.idName === projectIdName);
        setCurrentIndex(index);
    }, [projectIdName]);

    return (
        <main className="font-[billie] px-10 text-[var(--font-active-color)] w-full md:mx-auto md:p-0 md:w-[45%]">
            <ProjectInfo project={project} onClick={handleClick}/>
            <ProjectLinks currentIndex={currentIndex}/>
            {expandedImage && (
                <ImageModal image={expandedImage} onClick={handleClick}/>
            )}
        </main>
    );

}

export default ProjectPage;