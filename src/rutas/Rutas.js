import React from 'react';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import { Inicio } from '../components/pages/Inicio';
import { Paquetes } from '../components/pages/Paquetes';
import { Contacto } from '../components/pages/Contacto';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';


export const Rutas = () => {
  return (
    <BrowserRouter>

      {/* Header de todo el viewport que incluya al nav */}
        <HeaderNav />

      {/* Contenido central con las rutas y el contenido */}
        <section className='content'>
          <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/inicio' element={<Inicio/>}/>
            <Route path='/paquetes' element={<Paquetes/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
          </Routes>
        </section>

      {/* Footer */}
        <Footer />

    </BrowserRouter>
  )
}
