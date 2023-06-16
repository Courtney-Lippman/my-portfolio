import './Navbar.css'

const Navbar = () => {
    return(
    <nav
    className="grid grid-cols-2 gap-x-8 w-screen h-1/3"
    >
        <p className="logo flex justify-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">C. Lippman</p>
        <div className="nav-wrapper flex justify-center">
            <p className="p-8 sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl ">Work</p>
            <p className="p-8 sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl">About</p>
            <p className="p-8 sm:text-1xl md:text-2xl lg:text-4xl xl:text-5xl">Contact</p>
        </div>
    </nav>
    )
}

export default Navbar