import React from "react";
import comics from "../components/comics";
import style from "./Maintop.module.css";
import comicsbg from "../assets/img/jumbotron.jpg";
import ProductList from "./ProductList";

function Maintop() {
  return (
    <>
      <img className={style.comicsbg} src={comicsbg} alt="jumbotron" />
      <ProductList></ProductList>

    </>
  );
}

export default Maintop;
