import Post from "./Post"

function ListadoPosts({ posts }) {
  return (
    <>
      <h2 className="heading">Nuestro Blog</h2>

      <div className="posts">
        {
          posts.map(p => {
            return <Post key={p.id} post={p} />
          })
        }
      </div>
    </>
  )
}

export default ListadoPosts