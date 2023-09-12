import React, { useState } from 'react';
import propTypes from "prop-types";
import PedidosContext from "./PedidosContext";

function Provider({ children }) {

    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const value = {
        products,
        setProducts,
        loading,
        setLoading,
        cartItems,
        setCartItems,
    };
    return (
        <PedidosContext.Provider value={value}>
            {children}
        </PedidosContext.Provider>
    );
}

export default Provider;

Provider.propTypes = {
    children: propTypes.any,
}.isRequired;