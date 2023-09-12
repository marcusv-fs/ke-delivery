import React, {useContext} from "react";
import styles from "./ProductCard.module.css";
import propTypes from "prop-types";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import formatCurrency from "../../../../utils/formatCurrency.js";

function ProductCard({ data }) {

    const { title, thumbnail, price } = data;

    return (
        <section className={styles.productCard}>

            <img
                src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
                alt="Product"
                className={styles.cardImage}
            />

            
            <div className={styles.cardInfos}>
                <h2 className={styles.cardPrice}>{formatCurrency(price, 'BRL')}</h2>
                <h2 className={styles.cardTitle}> {title}</h2>
                
            </div>

            <button
                type="button"
                className={styles.buttonAddCart}
            >
                <MdOutlineAddShoppingCart />
            </button>
        </section>
    );
}

export default ProductCard;

ProductCard.propTypes = {
    data: propTypes.shape({}),
};
