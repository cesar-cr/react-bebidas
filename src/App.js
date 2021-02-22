import React, { Fragment } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListaRecetas from './components/ListaRecetas';
import CategoriasContext from './context/CategoriasContext';
import RecetasContext from './context/RecetasContext';
import ModalProvider from './context/ModalContext';

function App() {
	return (
		<CategoriasContext>
			<RecetasContext>
				<ModalProvider>
					<Header />
					<div className="container mt-5">
						<div className="row">
							<Formulario />
						</div>
						<ListaRecetas/>
					</div>
				</ModalProvider>
			</RecetasContext>
		</CategoriasContext>
	);
}

export default App;
