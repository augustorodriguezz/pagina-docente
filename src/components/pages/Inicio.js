import React from 'react';
import { NavLink } from 'react-router-dom';

export const Inicio = () => {
  return (
    <div className='inicio'>
      <section className='presentacion'>
        <div className='caja'>
        <div class="custom-shape-divider-bottom-1709731418">
            <h2 className='offer-text'>Get an offer</h2>
            <button>call to action</button>
            <button>call to action 2</button>
            <svg fill='#fff' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 65" preserveAspectRatio="none">
                <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
            </svg>
        </div>
        </div>
      </section>
      <section className='signatures'>
            <h2>Elegí tu próximo vehículo entre nuestros usados clasificados</h2>
            <article className="signature"> 
                <h3>Ford Focus</h3>
                <p>Descripción</p>
                <button>Más Info</button>
            </article>
            <article className="signature">
                <h3>Toyota Corolla</h3>
                <p>Descripción</p>
                <button>Más Info</button>
            </article>
            <article className="signature">
                <h3>Fiat Uno</h3>
                <p>Descripción</p>
                <button>Más Info</button>
            </article>
            <article className="signature">
                <h3>Toyota Hilux</h3>
                <p>Descripción</p>
                <button>Más Info</button>
            </article>
      </section>
      <section className='work-type'>
        <div className="custom-shape-divider-top-1709738448">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path fill='#fff' d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
            </svg>
            
        <h3 className='section-title'>Así es como trabajamos:</h3>
        
        </div>
      </section>
      <div className='bottom-work'>
        <div className="custom-shape-divider-bottom-1709738660">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path fill='#fff' d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
            </svg>
        </div>
      </div>
      
      <section className='contact'>
        <div className='contact-box'>
          <h3>Ponete en contacto ahora mismo</h3>
          <button><NavLink to='/contacto'>¡Charlemos!</NavLink></button>
        </div>
      </section>
    </div>
  )
}

