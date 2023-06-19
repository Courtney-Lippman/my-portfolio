import './Navbar.css'

const Navbar = () => {
    return(
    <nav
    className="grid grid-cols-2 gap-x-8 w-screen h-1/3"
    >
        <p className="logo flex justify-center items-end sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">c. lippman</p>
        <div className="nav-wrapper flex justify-center items-end">
            <p className="px-8 sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl ">Work</p>
            <p className="px-8 sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl">About</p>
            <p className="px-8 sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl">Contact</p>
        </div>
    </nav>
    )
}

export default Navbar