import React, { useContext, useState }from 'react';
import PropTypes from 'prop-types';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';


const Formulario = () => {


    const { categorias } = useContext(CategoriasContext);
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

     const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    });


    const obtenerDatosReceta = (e) => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                buscarRecetas(busqueda);
                guardarConsultar(true);
            } }
            className="col-12">
            <fieldset>
                <legend className="text-center">
                    Bebidas por categoría o ingrediente
                </legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        type="text"
                        placeholder="Busqueda por ingrediente"
                        className="form-control"
                        name="nombre"
                        onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatosReceta}
                    >
                        <option value="">-- Selecciona una categoría --</option> 
                        {categorias.map(categoria => (
                            <option
                                key={categoria.strCategory}
                                value={categoria.strCategory}>
                                {categoria.strCategory}
                            </option> 
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar bebidas"
                    />
                </div>
            </div>
        </form>
    )
}

Formulario.propTypes = {

}

export default Formulario
