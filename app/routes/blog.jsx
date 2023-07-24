import { useLoaderData } from "@remix-run/react"
import { getPosts } from "../db/posts.server"
import styles from '~/styles/posts.css'
import ListadoPosts from "../components/ListadoPosts"

export function meta() {
  return [
    {
      title: 'GuitarLA - Blog'
    },
    {
      description: 'GuitarLA, blog sobre guitarras'
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
  const posts = await getPosts()

  return posts.data
}

function Blog() {
  const posts = useLoaderData()

  return (
    <div className="contenedor">
      <ListadoPosts posts={posts} />
    </div>
  )
}

export default Blog