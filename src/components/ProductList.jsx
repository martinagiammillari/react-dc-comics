import ProductCard from "./ProductCard";
import comics from "./comics";
import style from "./Maintop.module.css"


export default function ProductList() {
    return (
        <div className="flex justify-center">
            <div className={style.cardsGrid}>
                {comics.map((comic) => (
                    <ProductCard
                        key={comic.id}
                        id={comic.id}
                        thumb={comic.thumb}
                        title={comic.title}
                        series={comic.series}
                    />

                ))}
            </div>
        </div>
    )
}