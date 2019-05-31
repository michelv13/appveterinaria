import React, { Component } from 'react';
import uuid from 'uuid';
import propTypes from 'prop-types';

const stateInicial = { 
    cita : {
        mascota : '',
        propietario : '',
        fecha : '',
        hora : '',
        sintomas : ''

    },
    error: false
}

class NuevaCita extends Component {
    state = { ...stateInicial }
    //cuando el usuario escribe en los inputs

    handleChange = e => {
        console.log(e.target.name + ': ' + e.target.value);

        //colocar lo que el usuario escribe en el state

        this.setState({
            cita : {
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        })
    }

    //cuando el usuario envia el form

    handleSubmit = e => {
        e.preventDefault();

        //extraer los valores del state
        const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;

        //validar que todos los campos esten llenos
        if(mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '') {
            this.setState ({
                error: true
            });

            //detener la ejecucion

            return;

        }

        //generar objeto con los datos
        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();

        //agregar la cita al state de app
        this.props.crearNuevaCita(nuevaCita)

        //colocar en el state el stateinicial
        this.setState({
            ...stateInicial
        })
    }

    render() {
        
        //extraer el valor del state

        const { error } = this.state;
        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-tittle text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>

                    { error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null}

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre Mascotas
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                id="mascota"
                                className="form-control"
                                type="text"
                                placeholder="Nombre mascota"
                                name="mascota"
                                onChange={this.handleChange}
                                value={this.state.cita.mascota}
                                />
                                
                            </div>{/* col-sm-8 */}
                        </div>{/*form-group */}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre del dueño
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                className="form-control"
                                type="text"
                                placeholder="Nombre dueño"
                                name="propietario"
                                onChange={this.handleChange}
                                value={this.state.cita.propietario}
                                />
                                
                            </div>{/* col-sm-8 */}
                        </div>{/*form-group */}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Fecha
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                className="form-control"
                                type="date"
                                name="fecha"
                                onChange={this.handleChange}
                                value={this.state.cita.fecha}
                                />
                                
                            </div>{/* col-sm-8 */}
                        
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Hora
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                className="form-control"
                                type="time"
                                name="hora"
                                onChange={this.handleChange}
                                value={this.state.cita.hora}
                                />
                            </div>{/* col-sm-8 */}
                        </div>{/*form-group */}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Sintomas
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea className="form-control" name="sintomas" placeholder="Describe los sintomas"
                                onChange={this.handleChange}
                                value={this.state.cita.sintomas}></textarea>
                                
                            </div>{/* col-sm-8 */}
                        </div>{/*form-group */}

                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar nueva cita" />
                    </form>
                </div>
            </div>
        );
    }
}

NuevaCita.protoType = {
    crearNuevaCita : propTypes.func.isRequired
}

export default NuevaCita;

