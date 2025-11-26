
import style from "./Maintop.module.css";
import comicsbg from "../assets/img/jumbotron.jpg";

function Maintop() {
  return (
    <>
      
        <img className={style.comicsbg} src={comicsbg} alt="" />
    
      <div>
        qua inserisco le card dinamicamente
      </div>
    </>
  );
}

export default Maintop; 
