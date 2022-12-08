import React, { useState } from 'react';
import { listaProductos } from '../data/data-producto';

const Buscar = () => {
    const [valoresFormulario, setValoresFormulario] = useState({});
    const { nombre = '', apellido = '', edad = '' } = valoresFormulario;
    const [resultado, setResultado] = useState([]);

    // permite asignar los valores del formulario a la variable de estado  formValues
    const handleOnChange = (e) => {
        //console.log(e);
        console.log(e.target.name, e.target.value);
        //setValoresFormulario({ ...valoresFormulario, miedad: e.target.value });
        if (e.target.name === 'nombre') {
            setValoresFormulario({ ...valoresFormulario, nombre: e.target.value });
        } else if (e.target.name === 'apellido') {
            setValoresFormulario({ ...valoresFormulario, apellido: e.target.value });
        } else if (e.target.name === 'miedad') {
            setValoresFormulario({ ...valoresFormulario, edad: e.target.value });
        }
        console.log(valoresFormulario);
    }

    // pinta los valores del formulario cuando presionan el boton
    const handleOnSubmit = (e) => {
        e.preventDefault(); // evita que se recargue el formulario
        console.log('estoy haciendo click');
        const filtro = listaProductos
            .filter(hshshs => hshshs.nombre.toUpperCase().includes(nombre.toUpperCase()));
        console.log(resultado);
        setResultado(filtro);
    }

    return (
        <div className="container-fluid mt-3">
            <div className='row'>
                <div className='col'>
                    <form onSubmit={(e) => handleOnSubmit(e)}>
                        <div className="mb-3">
                            <label className="form-label">Nombre producto</label>
                            <input required type="text" name="nombre" value={nombre}
                                className="form-control" onChange={(e) => { handleOnChange(e) }} />
                        </div>
                        {/*<div className="mb-3">
                    <label className="form-label">Apellido</label>
                    <input required type="text" name="apellido" value={apellido}
                        className="form-control" onChange={(e) => { handleOnChange(e) }} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Edad</label>
                    <input required type="text" name="miedad" value={edad}
                        className="form-control" onChange={(e) => { handleOnChange(e) }} />
                </div>*/}
                        <button type="submit" className="btn btn-primary">Buscar</button>
                    </form>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {
                            resultado.map(asasas => {
                                return (
                                    <div className="col" key={asasas.id}>
                                        <div className="card">
                                            <img src={asasas.imagen} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{asasas.nombre}</h5>
                                                <p className="card-text">{asasas.descripcion}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export {
    Buscar
}