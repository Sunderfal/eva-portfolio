import { projects } from "@const/projects";
import type { Project } from "@interfaces/types";

export function useJustifyClass(currentIndex: number, prevProject: Project | null): string {

    let justifyClass: string = "start";

    if(currentIndex > 0 && currentIndex < projects.length-1) {
        justifyClass = "between";
    } else if(!prevProject) {
        justifyClass = "end";
    }

    return justifyClass;

}