import React, {useEffect , useState} from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
    const [isNavFixed, setIsNavFixed] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsNavFixed(true);
        } else {
          setIsNavFixed(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <header className='header'> 
        <nav className= {isNavFixed ? 'nav' : 'nav2'}>
            <h2 className='name'>AUTO<b>GUAY</b></h2>
            <ul>
                <li><NavLink to='/inicio'>Inicio</NavLink></li>
                <li><NavLink to='/paquetes'>Paquetes</NavLink></li>
                <li><NavLink to='/contacto'>Contacto</NavLink></li>
                <li><NavLink to='/contacto'>Contacto</NavLink></li>
            </ul>
        </nav>
         
        <div className='header-container'>
            <div className='text-container'>
                <h1>La mejor manera</h1>
                <h2>Para comprar o vender tu auto</h2>
            </div>
            
        </div>
        
    </header>
  )
}
