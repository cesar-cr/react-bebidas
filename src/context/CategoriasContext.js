import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// crear el context
export const CategoriasContext = createContext();

// provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {
    const [categorias, guardarCategorias] = useState([]);

    // ejecutar request a la API
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const rqt = await axios.get(url);
            guardarCategorias(rqt.data.drinks);
        };
        obtenerCategorias();
    }, []);


    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    );
}

export default CategoriasProvider;