// So the user doesn't jump back to the top of the page
// everytime they click a test button.

( ( d ) => {
  const testAnchors = d.querySelectorAll( 'a[href="#"]' );

  testAnchors.forEach( ( anchor ) => {
    anchor.addEventListener( 'click', ( event ) => {
      event.preventDefault();
    } )
  } );
} )( document );
