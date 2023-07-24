import { useEffect, useState } from 'react'
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useRouteError,
  isRouteErrorResponse,
  Link
} from '@remix-run/react'
import styles from '~/styles/index.css'
import Header from '~/components/Header'
import Footer from './components/Footer'

export function meta() {
  return [
    {
      charset: 'utf-8',
      title: 'GuitarLA',
      viewport: 'width=device-width,initial-scale=1'
    }
  ]
}

export function links() {
  return ([
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'true'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap',
    },
    {
      rel: 'stylesheet',
      href: styles
    }
  ])
}

export default function App() {
  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null
  const [carrito, setCarrito] = useState(carritoLS)

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

  const agregarCarrito = guitarra => {
    if(carrito.some(g => g.id === guitarra.id)) {
      const carritoActualizado = carrito.map(g => {
        if(g.id === guitarra.id) {
          return guitarra
        } else {
          return g
        }
      })

      return setCarrito(carritoActualizado)
    }
    setCarrito([...carrito, guitarra])
  }

  const actualizarCantidad = guitarra => {
    const carritoActualizado = carrito.map(gState => {
      if(gState.id === guitarra.id) {
        gState.cantidad = guitarra.cantidad
      }
      return gState
    })

    return setCarrito(carritoActualizado)
  }

  const eliminarGuitarra = id => {
    const carritoActualizado = carrito.filter(guitarraState => guitarraState.id !== id)
    return setCarrito(carritoActualizado)
  }

  return (
    <Document>
      <Outlet 
        context={{
          carrito,
          agregarCarrito,
          actualizarCantidad,
          eliminarGuitarra
        }}
      />
    </Document>
  )
}

function Document({ children }) {
  return(
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>

      <body>
        <Header />
        {children}
        <Footer />

        <Scripts />
        <LiveReload />
      </body>
    </html>

  )
}

export function ErrorBoundary() {
  const error = useRouteError()

  if(isRouteErrorResponse(error)) {
    return (
      <Document>
        <p className='error'>{error.status}: {error.statusText}</p>
        <Link className='error-enlace' to='/'>Volver a la página principal</Link>
      </Document>
    )
  }
}