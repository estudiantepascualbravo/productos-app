import React from 'react';
import { Navbar } from './ui/Navbar';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Inicio } from './components/Inicio';
import { NuevoProducto } from './components/NuevoProducto';
import { Buscar } from './components/Buscar';

export const MainApp = () => {
    return <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='inicio' element={<Inicio />} />
                <Route path='nuevo' element={<NuevoProducto />} />
                <Route path='buscar' element={<Buscar />} />

                <Route path='*' element={<Navigate to='/inicio' />} />
            </Routes>
        </BrowserRouter>
    </>
}

