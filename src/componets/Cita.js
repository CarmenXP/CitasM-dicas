import React from 'react';

const Cita = ({cita, eliminarCita}) =>{
    return(

        <div className="cita">
            <p>Mascota: <spa>{cita.mascota}</spa></p>
            <p>Dueño: <spa>{cita.propietario}</spa></p>
            <p>Fecha: <spa>{cita.fecha}</spa></p>
            <p>Hora: <spa>{cita.hora}</spa></p>
            <p>Síntomas: <spa>{cita.sintomas}</spa></p>

            <button
                className= "button eliminar u-full-width"
                onClick={()=> eliminarCita(cita.id)}
            >Eliminar &times;</button>
        </div>
    );

}

export default Cita;