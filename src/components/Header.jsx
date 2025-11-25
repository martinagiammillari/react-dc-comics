import style from "./Header.module.css"


import Navbar from "./Navbar"
import Logo from "./Logo"

function Header() {

  return (
    <>
      <header className="flex justify-around">
        <Logo></Logo>
        <Navbar></Navbar>
      </header>

    </>
  )
}

export default Header