import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function NavLinks() {

    const [showNav, setShowNav] = useState<boolean>(false);
    const [lastScrollY, setLastScrollY] = useState<number>(0);

    const handleScroll = (): void => {
            
        const currentScrollY: number = window.scrollY;

        setShowNav(currentScrollY < lastScrollY);
        setLastScrollY(currentScrollY);

    }

    useEffect(() => {

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, [lastScrollY]);

    useEffect(() => setShowNav(true), []);

    return (
        <nav className={`
            flex 
            fixed 
            bg-[var(--primary-color)]/85 
            font-[billie] 
            font-bold 
            ${showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}
            text-2xl 
            rounded-full 
            shadow-sm
            text-[var(--font-color)]
            transition-all
            duration-500
            ease-in-out
            z-100
        `}>
            <NavLink 
                to="/projects" 
                className={
                    ({ isActive }) => `
                        border-e 
                        border-[#edc5c8] 
                        text-[var(--font-${isActive ? "active-" : ""}color)] 
                        transition-colors
                        ease-in-out
                        px-8
                        py-5
                        hover:text-[var(--font-active-color)]
                    `
                }
            >
                Projects
            </NavLink>
            <NavLink 
                to="/about-me" 
                className={
                    ({ isActive }) => `
                        text-[var(--font-${isActive ? "active-" : ""}color)] 
                        transition-colors
                        ease-in-out
                        px-8
                        py-5
                        hover:text-[var(--font-active-color)]
                    `
                }
            >
                About me
            </NavLink>
        </nav>
    );

}

export default NavLinks;