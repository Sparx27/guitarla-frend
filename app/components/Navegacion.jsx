import { Link, useLocation } from '@remix-run/react'
import carritoImg from '../../public/img/carrito.png'

function Navegacion() {
  const location = useLocation()
  
  return (
    <nav className='navegacion'>
      <Link 
        to='/'
        className={location.pathname === '/' ? 'links active' : 'links'}
      >Inicio</Link>
      <Link 
        to='/nosotros'
        className={location.pathname === '/nosotros' ? 'links active' : 'links'}
      >Nosotros</Link>
      <Link 
        to='/tienda'
        className={location.pathname === '/tienda' ? 'links active' : 'links'}
      >Tienda</Link>
      <Link 
        to='/blog'
        className={location.pathname === '/blog' ? 'links active' : 'links'}
      >Blog</Link>
      <Link
        to='/carrito'
        className={location.pathname === '/carrito' ? 'links active linkCarrito' : 'links'}
      ><img src={carritoImg} alt='carrito de compras' /></Link>
    </nav>
  )
}

export default Navegacion