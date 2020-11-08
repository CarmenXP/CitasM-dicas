import React, {Fragment, useState} from 'react';
import Formulario from './componets/Formulario'

function App() {

  //creando el state para guardar citas

  const [citas, guardarCitas] = useState([])

  //función que crea citas
  const crearCitas = cita =>{
    guardarCitas([
      ...citas,
      cita
    ]);
  }
  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
        <div className="container">
          <div className="row"> 
            <div className="one-half column">
              <Formulario
              crearCitas={crearCitas}
              
              />
        
            </div>
            <div className="one-half column">
              2
            </div>

          </div>
        </div>


    </Fragment>
    
  );
}

export default App;
