import { Link } from "@remix-run/react"

export default function Guitarra({ guitarras }) {
  const { description, image, name, price, url } = guitarras

  return (
    <div className="guitarra">
      <img src={image.data.attributes.formats.medium.url} alt={image.data.attributes.formats.medium.hash} />
      
      <div className="contenido">
        <h3>{name}</h3>
        <p className="descripcion">{description}</p>
        <p className="precio">${price}</p>

        <Link className="enlace" to={`/guitarras/${url}`}>Ver Producto</Link>
      </div>
    </div>
  )
}