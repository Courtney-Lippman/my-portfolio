import './Navbar.css'

const Navbar = () => {
    return(
    <nav
    className="h-1/3"
    >
        <div className="grid grid-cols-2 gap-x-8 w-screen">
        <p className="logo flex justify-center items-end text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">c. lippman</p>
        <div className="nav-wrapper justify-center items-end hidden md:flex">
            <p className="px-8 md:text-2xl lg:text-3xl xl:text-4xl ">Work</p>
            <p className="px-8  md:text-2xl lg:text-3xl xl:text-4xl">About</p>
            <p className="px-8 md:text-2xl lg:text-3xl xl:text-4xl">Contact</p>
        </div>
        {/* <!-- Mobile menu button --> */}
        <div className="md:hidden flex items-center justify-end px-8">
            <button className="outline-none mobile-menu-button">
                <svg
                    className="w-12 h-12 text-black-500"
                    x-show="!showMenu"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
        </div>
        {/* Mobile Menu */}
        <div className="hidden mobile-menu md:hidden flex items-center justify-end px-8">
				<ul className="">
					<li className="active"><a href="index.html" className="block text-md px-2 py-4 text-white bg-slate-400 font-semibold rounded">Work</a></li>
					<li><a href="#services" className="block text-md px-2 py-4 hover:bg-green-500 transition duration-300 rounded">About</a></li>
					<li><a href="#contact" className="block text-md px-2 py-4 hover:bg-green-500 transition duration-300 rounded">Contact Us</a></li>
				</ul>
			</div>
    </nav>
    )
}

export default Navbar