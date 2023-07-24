import { Link } from '@remix-run/react'
import styles from '~/styles/posts.css'
import { formatearFecha } from '~/utils/helpers.js'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

function Post({ post }) {
  const { content, image, publishedAt, title, url } = post.attributes

  return (
    <div className='post'>
      <img src={image.data.attributes.formats.small.url} alt={`Imagen sobre ${title}`} />
      
      <div className='contenido'>
        <h3>{title}</h3>
        <p className='fecha'>{formatearFecha(publishedAt)}</p>
        <p className='resumen'>{content}</p>
        <Link className='aPost' to={`/posts/${url}`}>Leer Post</Link>
      </div>
    </div>
  )
}

export default Post