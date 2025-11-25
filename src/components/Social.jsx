import facebook from "../assets/img/footer-facebook.png"
import periscope from "../assets/img/footer-periscope.png"
import pinterest from "../assets/img/footer-pinterest.png"
import twitter from "../assets/img/footer-twitter.png"
import youtube from "../assets/img/footer-youtube.png"

function Social() {

    return (
        <>
            <span>FOLLOW US</span>
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={youtube} alt="" />
            <img src={pinterest} alt="" />
            <img src={periscope} alt="" />

        </>
    )

}

export default Social