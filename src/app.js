console.dir( localStorage )

// if( localStorage[ 'yourName' ] ) {
//   alert( `Your name is ${ localStorage.getItem( 'yourName' ) }` )
// } else {
//   let yourName = prompt(
//     'What is your name?', "Your Name Here"
//   )
//   localStorage.setItem( 'yourName', yourName )
// }

window.onload = () => {

  const nav = document.querySelector( '#page-nav' )

  nav.addEventListener(
    'click',
    ( event ) => {
      const element = document.createElement( 'p' )
      const insertion_node = document.querySelector( 'body' )

      element.innerHTML = 'stop'
      element.setAttribute( 'text-accent', '' )

      insertion_node.appendChild( element )
    })

  document.querySelector( '#clearButton' ).addEventListener(
    'click',
    ( event ) => {
      // localStorage.removeItem( 'yourName' )
    })
    
}

