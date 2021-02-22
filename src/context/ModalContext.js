import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {

    // state del provider
    const [idreceta, guardarIdReceta] = useState(null);
    const [informacion, guardarReceta] = useState({});

    // cuando se tiene id de receta, se requiere llamado a la API
    useEffect(() => {
        if (idreceta !== null) {
            
            const requestAPI = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
                const rqt = await axios.get(url);
                guardarReceta(rqt.data.drinks[0]);
            }
            requestAPI();
        }

    }, [idreceta]);

    return ( 
        <ModalContext.Provider
            value={{
                informacion,
                guardarIdReceta,
                guardarReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;