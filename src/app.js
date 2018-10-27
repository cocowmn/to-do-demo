const createContainer = () => {
  const article = document.querySelector( '#the-content' )

  const container = document.createElement('div')
  
  container.id = 'item-container'
  container.setAttribute( 'flex-column', '' )
  
  article.appendChild(container)
}

const addItem = () => {
  let box = document.createElement('div')
  box.setAttribute( 'margin', '' )
  box.setAttribute( 'bg-primary', '' )
  box.setAttribute( 'rounded', '' )
  box.setAttribute( 'shadow', '' )

  box.style[ 'width' ] = '150px'
  box.style[ 'height' ] = '150px'

  let button = document.createElement( 'button' )
  button.classList.add( 'delete-item' )
  button.setAttribute( 'danger', '' )
  button.setAttribute( 'full', '' )
  button.setAttribute( 'text-uppercase', '' )

  let icon = document.createElement( 'i' )
  icon.classList.add( 'fas' )
  icon.classList.add( 'fa-trash' )

  button.appendChild(icon)

  box.appendChild( button )
  document.querySelector( '#item-container' ).appendChild(box)

  button.addEventListener(
    'click',
    () => deleteItem( box )
  )
}

const deleteItem = ( box ) => {
  const container = document.querySelector( '#item-container' )
  container.removeChild( box )
}

createContainer()

document.querySelector( '#add-item' ).addEventListener(
  'click',
  () => addItem()
)
