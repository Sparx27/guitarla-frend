
function Curso({ curso }) {
  const { title, content, image } = curso.attributes

  return (
    <section className='curso'>
      <style jsx='true'>{`
        .curso {
          background-image: linear-gradient(to right, rgb(0 0 0 / .55), rgb(0 0 0 / .7)), url(${image.data.attributes.url})
        }
      `}
      </style>

      <div className='curso-grid'>
        <div className='contenido'>
          <h2 className='heading'>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </section>
  )
}

export default Curso
