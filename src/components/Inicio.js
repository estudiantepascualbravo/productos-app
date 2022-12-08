import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { listarProductos } from '../service/productosService';

export const Inicio = () => {
    const [productos, setProductos] = useState([]);

    // se ejecuta una unica vez al cargar el componente
    useEffect(() => {
        getProductos();
    }, []); // observador -> patron observer

    const getProductos = async () => {
        try {
            Swal.fire({ allowOutsideClick: false, text: 'Cargando...' });
            Swal.showLoading();
            const productosFirebase = await listarProductos();
            setProductos(productosFirebase);
            Swal.close();
        } catch (error) {
            Swal.close();
            console.log(error);
        }
    }

    return (
        <div className="container-fluid mt-3 mb-3">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    productos.map(producto => {
                        return (
                            <div className="col" key={producto.id}>
                                <div className="card">
                                    <img src={producto.imagen} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{producto.nombre}</h5>
                                        <p className="card-text">{producto.descripcion}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
