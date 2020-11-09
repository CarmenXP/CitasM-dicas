import React, {Fragment, useState} from 'react';
import Formulario from './componets/Formulario';
import Cita from './componets/Cita';

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
//función para eliminar cita
const eliminarCita= id=>{
  const nuevaCitas= citas.filter(cita => cita.id !== id);
  guardarCitas(nuevaCitas);
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
              <h2>Administra tus citas</h2>
              {citas.map(cita => (
                <Cita 
                key={cita.id}
                cita={cita}
                eliminarCita ={eliminarCita}
                />


              ))}
              
            </div>

          </div>
        </div>


    </Fragment>
    
  );
}

export default App;
