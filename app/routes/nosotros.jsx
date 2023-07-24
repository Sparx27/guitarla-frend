import nosotrosimg from '../../public/img/nosotros.jpg'
import nosotroscss from '../styles/nosotros.css'

export function meta() {
  return [
    {
      title: 'GuitarLA - Nosotros'
    }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: nosotroscss
    },
    {
      rel: 'preload',
      href: nosotrosimg,
      as: 'nosotrosImg'
    }
  ]
}

function Nosotros() {
  return (
    <main className='contenedor nosotros'>
      <h2 className='heading'>Nosotros</h2>

      <div className='contenido'>
        <img src={nosotrosimg} alt='Imagen sobre nosotros' />

        <div>
          <p>Quisque ac feugiat quam, condimentum interdum leo. Phasellus posuere quis arcu nec sodales. In mattis massa eget purus accumsan tristique. Fusce ut diam sem. Nulla tincidunt libero nec velit ultrices auctor. Morbi sit amet tortor maximus, dictum ligula eget, hendrerit lorem. Cras dignissim vulputate massa, eu malesuada nulla accumsan eu. Quisque arcu mi, facilisis sed porttitor a, laoreet vitae risus.Quisque tortor mi, euismod.</p>

          <p>Etiam porttitor maximus rutrum. Phasellus interdum aliquam aliquet. Curabitur volutpat porttitor velit, eget pretium dui cursus mollis. Donec commodo ac lacus quis bibendum. Sed porta consequat sapien eu volutpat. Phasellus porta commodo facilisis. Etiam sed iaculis turpis. Donec vitae gravida arcu.</p>
        </div>
      </div>

    </main>
  )
}

export default Nosotros