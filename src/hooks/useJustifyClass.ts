import { projects } from "@const/projects";

export function useJustifyClass(currentIndex: number): string {

    if(currentIndex > 0 && currentIndex < projects.length - 1) {
        return "justify-between";
    } else if(currentIndex === projects.length-1) {
        return "justify-start";
    }

    return "justify-end";

}