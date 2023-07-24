import Guitarra from './Guitarra'

function ListadoGuitarras({ guitarras }) {
  return (
    <>
      <h2 className="heading">Nuestra Colección</h2>

      {guitarras?.length && (
        <div className="guitarras-grid">
          {guitarras?.map(g => {
            return <Guitarra 
              key={g?.id}
              guitarras={g?.attributes}
            />
          })}
        </div>
      )}
    </>
  )
}

export default ListadoGuitarras