import style from "./Footertop.module.css";
import Biglogo from "../assets/img/dc-logo-bg.png"

function Footertop() {
    return (
        <div className={style.mybackground}>
            <div className={style.bigLogo}></div>

            <div className={`${style.content} flex justify-between`}>
                <div>
                    <ul className={style.column}>
                        <li className={style.title}>DC COMICS</li>
                        <li>Characters</li>
                        <li>Comics</li>
                        <li>Movies</li>
                        <li>TV</li>
                        <li>Games</li>
                        <li>Videos</li>
                        <li>News</li>
                    </ul>

                    <ul className={style.column}>
                        <li className={style.title}>SHOP</li>
                        <li>Shop DC</li>
                        <li>Shop DC Collectibles</li>
                    </ul>
                </div>

                <ul className={style.column}>
                    <li className={style.title}>DC</li>
                    <li>Terms Of Use</li>
                    <li>Privacy policy (New)</li>
                    <li>Ad Choices</li>
                    <li>Advertising</li>
                    <li>Jobs</li>
                    <li>Subscriptions</li>
                    <li>Talent Workshops</li>
                    <li>CPSC Certificates</li>
                    <li>Ratings</li>
                    <li>Shop Help</li>
                    <li>Contact Us</li>
                </ul>

                <ul className={style.column}>
                    <li className={style.title}>SITES</li>
                    <li>DC</li>
                    <li>MAD Magazine</li>
                    <li>DC Kids</li>
                    <li>DC Universe</li>
                    <li>DC Power Visa</li>
                </ul>
            </div>

            <div>
                <img className="{style.biglogo}" src="{Biglogo}" alt="" />
            </div>
        </div>
    );
}

export default Footertop;
