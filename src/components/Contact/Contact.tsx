function Contact() {

    return (
        <div className="bg-[var(--accent-color)] py-8 mb-3 md:py-16">
                
            <div className="bg-[var(--secondary-color)] border border-white p-5 md:p-10 shadow-lg w-full xl:mx-auto xl:w-1/2">
            
                <div className="grid grid-cols-3 justify-items-center gap-3 text-center text-xs md:p-8 md:text-lg">

                    <span className="flex items-center font-[lulo] text-[var(--font-active-color)]">
                        PHONE NUMBER
                    </span>
                    <span className="flex items-center font-[lulo] text-[var(--font-active-color)]">
                        EMAIL
                    </span>
                    <span className="flex items-center size-8 md:size-10">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="white" d="M19 5.6c-1.4-.7-2.8-1.1-4.2-1.3l-.5 1c-1.5-.2-3-.2-4.6 0l-.5-1c-1.4.2-2.8.6-4.1 1.3a17.4 17.4 0 0 0-3 11.6a18 18 0 0 0 5 2.5c.5-.5.8-1.1 1.1-1.7l-1.7-1c.2 0 .3-.2.4-.3a11.7 11.7 0 0 0 10.2 0l.4.3l-1.7.9l1 1.7c1.9-.5 3.6-1.4 5.1-2.6c.4-4-.6-8.2-3-11.5ZM8.6 14.8a2 2 0 0 1-1.8-2a2 2 0 0 1 1.8-2a2 2 0 0 1 1.8 2a2 2 0 0 1-1.8 2m6.6 0a2 2 0 0 1-1.8-2a2 2 0 0 1 1.8-2a2 2 0 0 1 1.8 2a2 2 0 0 1-1.8 2"/>
                        </svg>
                    </span>

                    <span className="flex items-center font-[bodoni] text-[var(--font-active-color)]">
                        616 466 343
                    </span>
                    <span className="flex items-center font-[bodoni] text-[var(--font-active-color)]">
                        evagfvdg@gmail.com
                    </span>
                    <span className="flex items-center font-[bodoni] text-[var(--font-active-color)]">
                        moonoka
                    </span>

                </div>

            </div>
            
        </div>
    );

}

export default Contact;