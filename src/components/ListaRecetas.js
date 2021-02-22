import React, {useContext} from 'react'
import PropTypes from 'prop-types';
import { RecetasContext } from '../context/RecetasContext';
import Receta from './Receta';

const ListaRecetas = () => {

    const { recetas } = useContext(RecetasContext);

    return (
        <div className="row mt-5">
            { recetas.map(receta => (
                <Receta key={ receta.idDrink } receta={receta} />
            ))}
        </div>
    )
}

ListaRecetas.propTypes = {

}

export default ListaRecetas
