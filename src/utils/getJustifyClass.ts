import { projects } from "@const/projects";

/**
 * Gets the correct justify class depending on the index received.
 * @param currentIndex number 
 * @returns string
 */
export function getJustifyClass(currentIndex: number): string {

    let justifyClass: string = "justify-end";

    if(currentIndex > 0 && currentIndex < projects.length - 1) {
        justifyClass = "justify-between";
    } else if(currentIndex === projects.length-1) {
        justifyClass = "justify-start";
    }

    return justifyClass;

}