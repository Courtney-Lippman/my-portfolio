import './Navbar.css'

const Navbar = () => {
    return(
    <nav
    className="grid grid-cols-2 gap-x-8 w-screen h-1/3"
    >
        <p className="logo flex justify-center">C. Lippman</p>
        <div className="nav-wrapper flex justify-center">
            <p className="p-8 text-5xl">Work</p>
            <p className="p-8 text-5xl">About</p>
            <p className="p-8 text-5xl">Contact</p>
        </div>
    </nav>
    )
}

export default Navbar