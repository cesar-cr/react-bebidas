import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
    
    const [recetas, guardarRecetas] = useState([]);
    const [busqueda, buscarRecetas] = useState({
        nombre: '',
        categoria:''
    });
    const [consultar, guardarConsultar] = useState(false);

    const { nombre, categoria } = busqueda;

    useEffect(() => {
        if (consultar) {
            const obtenerRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
                const rqt = await axios.get(url);
                guardarRecetas(rqt.data.drinks);
                console.log(rqt.data.drinks);
            }
            obtenerRecetas();
        }
    }, [busqueda]);

    return (
        <RecetasContext.Provider
            value={{
                buscarRecetas,
                guardarConsultar,
                recetas
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}

export default RecetasProvider;