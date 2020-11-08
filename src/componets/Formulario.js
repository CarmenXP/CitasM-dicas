import React, {Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
const Formulario = ({crearCitas}) =>{

//creando el state para las citas
    const [cita, actualizarCitas] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

// creando el state para los errores
    const [error, actualizarError]= useState(false);    

//evento onChange para actualizar el estado

    const actualizandoState = e => {
        actualizarCitas({
            ...cita,
            [e.target.name]: e.target.value
        })

    }

 //Evento submit
 
    const submitCita = e=>{
        e.preventDefault();
        
        //Válidar datos
        if(mascota.trim()==="" || propietario.trim()==="" || 
        fecha.trim()==="" || hora.trim()==="" || sintomas.trim() ===""){
            actualizarError(true)
            return
        }
        // Quitando el mensaje del error
        actualizarError(false)
        //Crear un Id
        cita.id= uuidv4();
        // Crear una cita
        crearCitas(cita)
        actualizarCitas({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })

        //reiniciar form
    }
// extrayendo valores mediante la destructuración
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    return(
        <Fragment>
            <h2>Crear cita</h2>

            {error ? <p className="alerta-error"> Es necesario llenar todos los campos</p>
            : null}

            <form
                onSubmit={submitCita}
            >

                <label> Nombre de la mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="nombre mascota"
                    onChange={actualizandoState}
                    value ={mascota}

                />
                <label> Nombre del dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="nombre del propietario"
                    onChange={actualizandoState}
                    value ={propietario}

                />
                <label> Fecha </label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"   
                    onChange={actualizandoState}
                    value ={fecha}
                />
                <label> Hora </label>
                <input
                    type="time" 
                    name="hora"
                    className="u-full-width"
                    onChange={actualizandoState}
                    value ={hora}
                />
                <label> Síntomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={actualizandoState}
                    value ={sintomas}
                
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
        
                >Agregar cita</button>
                
            </form>

            
        </Fragment>
    );

}

export default Formulario; 