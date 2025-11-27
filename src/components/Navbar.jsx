import style from "./Navbar.module.css"

function Navbar() {

    const NavbarLinks = [
        { name: "CHARACTERS", active: false },
        { name: "COMICS", active: true },
        { name: "MOVIES", active: false },
        { name: "TV", active: false },
        { name: "GAMES", active: false },
        { name: "COLLECTIBLES", active: false },
        { name: "VIDEOS", active: false },
        { name: "FANS", active: false },
        { name: "NEWS", active: false },
        { name: "SHOP", active: false }
    ];

    return (
        <div>
            <ul className="flex">
                {NavbarLinks.map((link, index) => (
                    <li key={index}> 
                        <a className={link.active ? style.active : ""} href="#">
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar;
