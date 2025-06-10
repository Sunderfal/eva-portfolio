import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function BackgroundHandler() {

    const { pathname } = useLocation();

    useEffect(() => {

        const body = document.body;

        body.classList.remove("projects-bg", "about-bg", "default-bg");

        if(pathname === "/projects") {
            body.classList.add("projects-bg");
        } else if(pathname === "/about-me") {
            body.classList.add("about-bg");
        } else {
            body.classList.add("default-bg");
        }

    }, [pathname]);

    return null;

}

export default BackgroundHandler;