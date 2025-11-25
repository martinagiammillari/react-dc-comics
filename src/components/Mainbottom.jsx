import style from "./Mainbottom.module.css"



import comics from "../assets/img/buy-comics-digital-comics.png"
import merch from "../assets/img/buy-comics-merchandise.png"
import locator from "../assets/img/buy-comics-shop-locator.png"
import subscript from "../assets/img/buy-comics-subscriptions.png"
import power from "../assets/img/buy-dc-power-visa.svg"

function Mainbottom() {
    return (
        <ul className={`${style.myList} flex justify-center items-center`}>
            <li>
                <img src={comics} alt="" /> DIGITAL COMICS
            </li>

            <li>
                <img src={merch} alt="" /> MC MERCHANDISE
            </li>

            <li>
                <img src={subscript} alt="" /> SUBSCRIPTIONS
            </li>

            <li>
                <img src={locator} alt="" /> COMIC SHOP LOCATOR
            </li>


            <li>
                <img src={power} alt="" /> DC POWER VISA
            </li>
        </ul>

    )
}

export default Mainbottom