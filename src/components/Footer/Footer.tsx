function Footer() {

    const handleClick = (): void => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="
            flex
            justify-center 
            items-center 
            bg-[var(--accent-color)] 
            mb-5
            px-3
            py-5 
            text-white
            text-xs
            md:justify-between 
            md:px-18 
            md:py-10
            md:text-sm
        ">
            <div className="flex flex-col gap-2 font-[space] text-center md:flex-row">
                <span>© 2025 by Eva Góngora.</span>
                <span>Developed by <a className="hover:underline" href="https://www.linkedin.com/in/sergio-gámez-ortega-53615a168/" target="_blank">Sergio Gámez Ortega</a></span>
            </div>
            <button onClick={handleClick} className="cursor-pointer hidden size-10 md:block" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"/>
                </svg>
            </button>
        </footer>
    );

}

export default Footer;