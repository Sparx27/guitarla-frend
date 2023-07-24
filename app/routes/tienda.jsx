import { getGuitarras } from "../db/guitarras.server"
import { useLoaderData } from "@remix-run/react"

import styles from '~/styles/guitarras.css'
import ListadoGuitarras from "../components/ListadoGuitarras"

export function meta() {
  return [
    {
      title: 'GuitarLA - Tienda',
      description: 'Nuestra coleccion de guitarras'
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

export async function loader() {
  const guitarras = await getGuitarras()
  return guitarras.data
}

function Tienda() {
  const guitarras = useLoaderData()

  return (
    <main className="contenedor tienda">
      <ListadoGuitarras guitarras={guitarras} />
    </main>
  )
}

export default Tienda