import React, { useState } from 'react';
import { crearProducto } from '../service/productosService';
import Swal from 'sweetalert2';

export const NuevoProducto = () => {

  const [ valoresFormulario, setValoresFormulario ] = useState({});
  const { nombre = '', inventario = '', precio = '', imagen = '' } = valoresFormulario;

  // permite asignar los valores del formulario a la variable de estado  formValues
  const handleOnChange = (e) => {
    setValoresFormulario({ ...valoresFormulario, [e.target.name]: e.target.value });
  }

  // pinta los valores del formulario cuando presionan el boton
  const handleOnSubmit = async (e) => {
    e.preventDefault(); // evita que se recargue el formulario
    console.log(valoresFormulario);
    try {
      Swal.fire({ allowOutsideClick: false, text: 'Cargando...' });
      Swal.showLoading();
      await crearProducto(valoresFormulario);
      Swal.close();
      console.log('Creado desde la pagina nuevo producto');
      // limpiamos formulario
      setValoresFormulario({ nombre: '', inventario: '', precio: '', imagen: '' });
    } catch (error) {
      Swal.close();
      console.log(error);
    }
  }

  return (
    <div className="container-fluid mt-3">
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <div className="mb-3">
          <label className="form-label">Nombre producto</label>
          <input required type="text" name="nombre" value={nombre} 
              className="form-control" onChange={ (e) => { handleOnChange(e) } } />
        </div>
        <div className="mb-3">
          <label className="form-label">Inventario</label>
          <input required type="number" name="inventario" value={inventario} 
              className="form-control" onChange={ (e) => { handleOnChange(e) } } />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input required type="number" className="form-control" name='precio' 
              value={ precio } onChange={ (e) => { handleOnChange(e) } } />
        </div>
        <div className="mb-3">
          <label className="form-label">Imagen</label>
          <input required type="url" className="form-control" name='imagen' 
              value={ imagen } onChange={ (e) => { handleOnChange(e) } } />
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    </div>
  )
}
