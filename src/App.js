import React, {Fragment, useEffect, useState} from 'react';
import Formulario from './componets/Formulario';
import Cita from './componets/Cita';


function App() {

  //listas en localStorage

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(!citasIniciales){
      citasIniciales = [];
    }

  //creando el state para guardar citas

  const [citas, guardarCitas] = useState([citasIniciales])

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

//mensaje cuando no hay citas y cuando si las hay

const titulo= citas.length === 0 ? "No hay citas" : "Administra tus citas";

//useEffect, sustitute al component di mount, se usa como tipo observador, nota los cambios en el estado

useEffect (()=>{
  if(citasIniciales){
    localStorage.setItem('citas', JSON.stringify)(citas)
  }
  else{
    localStorage.setItem('citas', JSON.stringify([]))
  }
}, [citas, citasIniciales]);

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
              <h2>{titulo}</h2>
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
