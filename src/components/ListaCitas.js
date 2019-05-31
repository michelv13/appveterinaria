import React from 'react';
import Cita from './Cita'
import propTypes from 'prop-types';

const ListaCitas = ({citas, eliminarCita}) => {

    //imprimir un mensaje en base a si no hay citas o si
    const mensaje = Object.keys(citas).length === 0 ? 'no hay citas' : 'Administra las citas aqui';
    return (
            <div className="card mt-2 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{mensaje}</h2>
    
                    <div className="lista-citas">
                        {citas.map(cita => (
                            <Cita 
                                key={cita.id}
                                cita={cita}
                                eliminarCita={eliminarCita}
    
                            />
                        ))}
                    </div>
                </div>
            </div>
    )
}

    ListaCitas.propTypes = {
        citas : propTypes.array.isRequired,
        eliminarCita : propTypes.func.isRequired
    }

export default ListaCitas;