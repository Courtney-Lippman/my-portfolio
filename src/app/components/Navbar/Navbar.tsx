const Navbar = () => {
    return(
    <nav
    className="flex justify-center flex-row w-1/2"
    >
        <p className="text-2xl flex justify-left w-1/2">C. Lippman</p>
        <div className="nav-wrapper flex justify-right w-1/2">
        <p className="pl-8">Work</p>
        <p className="pl-8">About</p>
        <p className="pl-8">Contact</p>
        </div>
    </nav>
    )
}

export default Navbar