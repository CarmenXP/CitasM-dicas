import React, {Fragment, useState} from 'react';

const Formulario = () =>{

//creando el state para las citas
    const [cita, actualizarCitas] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

//evento onChange para actualizar el estado

    const actualizandoState = e => {
        actualizarCitas({
            ...cita,
            [e.target.name]: e.target.value
        })

    }
// extrayendo valores mediante la destructuración
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    return(
        <Fragment>
            <h2>Crear cita</h2>

            <form>
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