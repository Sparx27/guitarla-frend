import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/db/guitarras.server'
import { getPosts } from '~/db/posts.server'
import { getCurso } from '~/db/curso.server'
import ListadoGuitarras from '../components/ListadoGuitarras'
import ListadoPosts from '../components/ListadoPosts'
import stylesGuitarras from '~/styles/guitarras.css'
import stylesPosts from '~/styles/posts.css'
import stylesCurso from '~/styles/curso.css'
import Curso from '../components/Curso'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]
}

export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  }
}



function Index() {
  const data = useLoaderData()
  const { guitarras, posts, curso } = data

  return (
    <>
      <main className='contenedor'>
        <ListadoGuitarras guitarras={guitarras} />
      </main>

      <Curso curso={curso} />

      <section className='contenedor'>
        <ListadoPosts posts={posts} />
      </section>
    </>
  )
}

export default Index