import style from "./Logo.module.css"

import Logoimg from "../assets/img/dc-logo.png"

function Logo() {

    return (
       <>
      <div>
      <img className={style.logoimg} src={Logoimg} alt="" />
      </div>
       </>
    )
}

export default Logo