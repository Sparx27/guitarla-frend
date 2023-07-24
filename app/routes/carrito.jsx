import { useEffect, useState } from 'react'
import { useOutletContext } from '@remix-run/react'
import { ClientOnly } from 'remix-utils'
import styles from '~/styles/carrito.css'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export function meta() {
  return [
    {
      title: 'GuitarLA - Carrito'
    },
    {
      description: 'Venta de guitarras, musica, blog, carrito de compras'
    }
  ]
}

function Carrito() {
  const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const precioTotal = carrito.reduce((total, gState) => total + (gState.price * gState.cantidad), 0)
    setTotal(precioTotal)
  }, [carrito])

  const handleChange = (e, gItem) => {
    const guitarra = {
      id: gItem.id,
      cantidad: parseInt(e.target.value)
    }
    return actualizarCantidad(guitarra)
  }

  return (
    <ClientOnly fallback={'cargando...'}>
      {() => (
        <main className='contenedor'>
          <h1 className='heading'>Carrito de Compras</h1>

          <div className='contenido'>

            <div className='carrito'>
              {
                carrito?.length <= 0
                  ? <h3>Carrito vacío</h3>
                  : (
                    carrito?.map(item => {
                      return (<div key={item.id} className='producto'>
                        <div>
                          <img src={item.image} alt={`Producto ${item.name}`} />
                        </div>

                        <div>
                          <p className='nombre'>{item.name}</p>

                          <p className='precio'>$ <span>{item.price}</span></p>

                          <select
                            value={item.cantidad}
                            className='cantidad'
                            onChange={(e) => handleChange(e, item)}
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>

                          <p className='subtotal'>Subtotal: <span>${item.price * item.cantidad}</span></p>
                        </div>

                        <button
                          type='button'
                          className='btn-eliminar'
                          onClick={() => eliminarGuitarra(item.id)}
                        >X</button>
                      </div>)
                    })
                  )
              }
            </div>

            <aside className='resumen'>
              <h3>Resúmen Del Pedido</h3>
              <p>Total a pagar: ${total}</p>
            </aside>

          </div>
        </main>
      )}
    </ClientOnly>
  )
}

export default Carrito