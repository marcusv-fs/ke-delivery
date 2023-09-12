import React, {useState, useEffect } from "react";
import styles from "./Produtos.module.css";
import fetchProducts from "../../../../api/fetchProducts.js";
import ProductCard from "../ProductCard";
import Loading from "../Loading";


const Produtos = () => {

    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts('leite').then((response) => {
            setProducts(response);
            setLoading(false);
        });
    }, []);

    

    return (
        (loading && <Loading />) || (
            <section className={styles.products}>
                {products.map((product) => <ProductCard key={product.id} data={product} />)}
            </section>)
    );
};

export default Produtos;
