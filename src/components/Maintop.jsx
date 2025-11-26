import React from "react";
import comics from "../components/comics";
import style from "./Maintop.module.css";
import comicsbg from "../assets/img/jumbotron.jpg";

function Maintop() {
  return (
    <>
      <img className={style.comicsbg} src={comicsbg} alt="jumbotron" />

      <div className="flex justify-center">
        <div className={style.cardsGrid}>
          {comics.map((comic) => (
            <div className={style.card} key={comic.id}>
              <img
                className={style.cardImg}
                src={comic.thumb}
                alt={comic.title}
              />
              <h3 className={style.cardTitle}>{comic.series.toUpperCase()}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Maintop;
