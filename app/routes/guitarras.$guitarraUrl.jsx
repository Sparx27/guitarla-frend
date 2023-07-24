import { useState } from "react"
import { useLoaderData, useNavigate, useOutletContext } from "@remix-run/react"
import { getGuitarra } from "../db/guitarras.server"
import styles from '~/styles/guitarras.css'

export async function loader({ params }) {
  const { guitarraUrl } = params
  const guitarra = await getGuitarra(guitarraUrl)

  if(guitarra.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'No se encontró la guitarra'
    })
  }

  return guitarra
}

export function meta({ data }) {

  if(!data) {
    return [
      {
        title: 'Guitarra no encontrada'
      },
      {
        description: 'Guitarras, venta de guitarra, guitarra no encontrada'
      }
    ]
  }

  return [
    {
      title: `GuitarLA - ${data.data[0].attributes.name}`
    },
    {
      description: `Guitarras, venta de guitarra, guitarra ${data.data[0].attributes.name}`
    }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

function GuitarrasFull() {
  const [cantidad, setCantidad] = useState(0)
  const guitarra = useLoaderData()
  const { name, price, image, description } = guitarra.data[0].attributes
  const navigate = useNavigate()

  const { agregarCarrito } = useOutletContext()

  const handleSubmit = e => {
    e.preventDefault()

    if(cantidad < 1) {
      return alert('Selecciona una cantidad antes de agregar al carrito')
    }

    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      name,
      price,
      image: image.data.attributes.url,
      cantidad
    }

    return agregarCarrito(guitarraSeleccionada)
  }

  return (
    <>
      <div className="contenedor guitarra">
        <img src={image.data.attributes.url} alt={`Imagen de la guitarra ${name}`} />

        <div className="contenido">
          <h3>{name}</h3>

          <p className="descripcionFull">{description}</p>
          <p className="precio">$ {price}</p>

          <form className="formulario" onSubmit={handleSubmit}>
            <label htmlFor="cantidad">Cantidad</label>

            <select
              id="cantidad"
              onChange={e => setCantidad(parseInt(e.target.value))}
            >
              <option value="0">-- Seleccionar --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>

      <button className="bButton" onClick={() => navigate(-1)}>Página Previa</button>
    </>
  )
}

export default GuitarrasFull