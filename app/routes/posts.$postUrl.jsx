import { useLoaderData, useNavigate } from '@remix-run/react'
import { getPost } from '~/db/posts.server'
import { formatearFecha } from '~/utils/helpers'
import styles from '~/styles/posts.css'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader({ params }) {
  const { postUrl } = params
  const post = await getPost(postUrl)

  if(post.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'No se encontró el post'
    })
  }
  
  return post.data
}

export function meta({ data }) {
  const { title } = data[0].attributes

  if(!data) {
    return [
      {
        title: 'GuitarLA - Post no encontrado'
      }
    ]
  }

  return [
    {
      title: `GuitarLA - ${title}`
    },
    {
      description: 'GuitarLA, informacion sobre guitarras'
    }
  ]
}

function Blog() {
  const post = useLoaderData()
  const { content, image, publishedAt, title } = post[0].attributes

  const navigate = useNavigate()

  return (
    <>
      <article className='post post-dos'>
        <h3 className='titulo-dos'>{title}</h3>
        <img src={image.data.attributes.url} alt={`Imagen sobre ${title}`} />
        
        <div className='contenido'>
          <p className='fecha fecha-dos'>{formatearFecha(publishedAt)}</p>
          <p className='texto'>{content}</p>
        </div>
      </article>

      <button className="bButton" onClick={() => navigate(-1)}>Página Previa</button>
    </>
  )
}

export default Blog