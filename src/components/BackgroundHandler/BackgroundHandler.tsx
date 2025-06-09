import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import background from "@assets/images/projects/projects-background.webp";

function BackgroundHandler() {

    const { pathname } = useLocation();

    useEffect(() => {

        if(pathname === "/projects") {
            document.body.style.backgroundImage = `url(${background})`;
        } else {
            document.body.style.backgroundImage = "none";
            document.body.style.backgroundColor = location.pathname === "/about-me" ? "#e5a5cf" : "#fbb7bd";
        }

    }, [pathname]);

    return null;

}

export default BackgroundHandler;