import React, {useEffect , useState} from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
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
    <div>
       <nav className= {isNavFixed ? 'nav' : 'nav2'}>
            <h2 className='name'>AUTO<b>GUAY</b></h2>
            <ul>
                <li><NavLink to='/inicio'>Inicio</NavLink></li>
                <li><NavLink to='/catalogo'>Catálogo</NavLink></li>
                <li><NavLink to='/vender'>Quiero vender</NavLink></li>
                <li><NavLink to='/contacto'>Contacto</NavLink></li>
            </ul>
        </nav> 
    </div>
  )
}
