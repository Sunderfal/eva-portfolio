import type { Project } from "@interfaces/types";

interface ProjectInfoInterface {
    project: Project;
    onClick: (image: string | null) => void;
}

function ProjectInfo({ project, onClick }: ProjectInfoInterface) {

    return (
        <>
            <h1 className="text-5xl text-center md:text-start">{project?.title}</h1>
            {project?.info.description && <p className="font-bold my-15 text-xl text-justify">{project.info.description}</p>}
            <div className="flex flex-col gap-1">
                {project?.info.videos?.map((video, index) => (
                    <video className={`mt-${project?.info.description ? "0" : "25"}`} key={index} src={video} controls autoPlay></video>
                ))}
                {project?.info.images?.map((image, index) => (
                    <picture onClick={() =>  onClick(image)} className="cursor-pointer" key={index}>
                        <img src={image} className="w-full h-full" alt="Project image"/>
                    </picture>
                ))}
            </div>
        </>
    );

}

export default ProjectInfo;