import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { ModalContext } from '../context/ModalContext';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'relative',
        width: 500,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const Receta = ({ receta }) => {
    
    // conf de module de material UI
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const clases = useStyles();
    const handleOpen  = () => { setOpen(true) }
    const handleClose = () => { setOpen(false) };

    const { idDrink, strDrink, strDrinkThumb } = receta;
    const { informacion, guardarIdReceta, guardarReceta } = useContext(ModalContext);

     // Muestra y formatea los ingredientes
    const mostrarIngredientes = informacion => {
        let ingredientes = [];
        for(let i = 1; i < 16; i++){
            if( informacion[`strIngredient${i}`] ) {
                ingredientes.push(
                    <li> { informacion[`strIngredient${i}`] }  { informacion[`strMeasure${i}`] }</li>
                )
            }
        }

        return ingredientes;
    }


    return (
        <div className="col-md-6">
            <div className="card mt-5">
                <h2 className="card-header pt-5 pb-5 text-center">{strDrink}</h2>
                <img className="card-img-top" src={strDrinkThumb} alt={`Imagen de ${strDrink}`} />
                <div className="">
                    <button
                        type="button"
                        className="card-body btn btn-block btn-primary"
                        onClick={ () => {
                            guardarIdReceta(idDrink);
                            handleOpen();
                        }}
                    >
                        Ver receta
                    </button>
                    <Modal
                        open={open}
                        onClose={() => {
                            guardarIdReceta(null);
                            guardarReceta({});
                            handleClose();
                        }}
                    >
                        <div style={modalStyle} className={clases.paper}>
                            <h2>{informacion.strDrink} </h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>
                                {informacion.strInstructions}
                            </p>
                            <img className="img-fluid my-4" src={informacion.strDrinkThumb} />
                            <h3>Ingredientes y cantidades</h3>
                            <ul>
                                {mostrarIngredientes(informacion)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

Receta.propTypes = {

}

export default Receta
