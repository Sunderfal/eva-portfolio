import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import background from "@assets/images/projects/projects-background.webp";

function BackgroundHandler() {

    const { pathname } = useLocation();

    useEffect(() => {

        document.body.style.backgroundImage = `url(${background})`;

        if(pathname === "/projects" && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            document.body.style.backgroundAttachment = "fixed";
            document.body.style.backgroundPosition = "47% 40%";
        } else if(pathname === "/projects" && /iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundSize = "cover";
        } else {
            document.body.style.backgroundImage = "none";
            document.body.style.backgroundColor = location.pathname === "/about-me" ? "#e5a5cf" : "#fbb7bd";
        }

    }, [pathname]);

    return null;

}

export default BackgroundHandler;