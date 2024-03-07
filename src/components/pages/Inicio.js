import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Carrusel from './Carrusel';
import { HeaderNav } from '../layout/HeaderNav';



export const Inicio = () => {

  return (

    <div className='inicio'>
      <HeaderNav />
      <section className='presentacion'>
        <div className='caja'>
        <div className="custom-shape-divider-bottom-1709731418">
            <h2 className='offer-text'>Get an offer</h2>
            <button>call to action</button>
            <button>call to action 2</button>
            <svg fill='#fff' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 65" preserveAspectRatio="none">
                <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
            </svg>
        </div>
        </div>
      </section>
      <section className='signatures'>
            <h2>Elegí tu próximo vehículo entre nuestros usados clasificados</h2>
           
            <div className="signature"> 
            <article >
                <h3>Toyota Hilux</h3>
                <p>Descripción</p>
                <button>Más Info</button>
            </article>
            </div>
            <div className="signature"> 
            <article >
                <h3>Toyota Hilux</h3>
                <p>Descripción</p>
                <button>Más Info</button>
            </article>
            </div>
            <div className="signature"> 
            <article >
                <h3>Toyota Hilux</h3>
                <p>Descripción</p>
                <button>Más Info</button>
            </article>
            </div>
            <div className="signature"> 
            <article >
                <h3>Toyota Hilux</h3>
                <p>Descripción</p>
                <button>Más Info</button>
            </article>
            </div>
      </section>
      <section className='work-type'>
        <div className="custom-shape-divider-top-1709738448">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path fill='#fff' d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
            </svg>
            
        <h3 className='section-title'>Así es como trabajamos:</h3>
        
        </div>
      </section>
      <div className='bottom-work'>
        <div className="custom-shape-divider-bottom-1709738660">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path fill='#fff' d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
            </svg>
        </div>
      </div>
      <section className='contact'>
        <div className='contact-box'>
          <h3>Ponete en contacto ahora mismo</h3>
          <button className='button'><NavLink to='/contacto'>¡Charlemos!</NavLink></button>
        </div>
      </section>
      <hr></hr>
      <section className='beneficios'>
       <h3 className='beneficios-texto'>Necesitas más info? ¡Esto te puede terminar de convencer!</h3>
        <p>acá irían las 3 'tarjetas' una al lado de la otra: ej, calidad asegurada, satisfacción asegurada,
          excelente seleccion '(auto hero)'
        </p>
      </section>
      <hr></hr>
      <div className='carrusel'>
      <Carrusel/>
      </div>
    </div>
  )
}

