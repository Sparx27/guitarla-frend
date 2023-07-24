import { Link } from '@remix-run/react'
import logo from '../../public/img/logo.svg'
import Navegacion from './Navegacion'

function Header() {
  return (
    <header className='header'>
      <div className='contenedor barra'>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} alt='GuitarLA Logo' /></Link> 
        </div>

        <Navegacion />
      </div>
    </header>
  )
}

export default Header