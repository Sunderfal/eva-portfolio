import NavLinks from "@components/NavLinks/NavLinks";

function Header() {

    return (
        <header className="flex justify-center bg-transparent mb-25 p-10 md:justify-end md:mb-50">
            <NavLinks/>
        </header>
    );

}

export default Header;