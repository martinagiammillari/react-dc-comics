import style from "./Maintop.module.css";

export default function ProductCard(props) {
    return (
        <div className={style.card} key={props.id}>
            <img
                className={style.cardImg}
                src={props.thumb}
                alt={props.title}
            />
            <h3 className={style.cardTitle}>{props.series.toUpperCase()}</h3>
        </div>
    );
}