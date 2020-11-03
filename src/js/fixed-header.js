( ( d ) => {
  // Get the height of the header and use value to offset hero, due to fixed header.
  headerOffset = () => {
    const headerH = d.querySelector( '.header--primary' ).offsetHeight;
    const hero    = d.querySelector( '.hero' );

    hero.style.paddingTop = headerH + 'px';
  }

  window.addEventListener( 'resize', headerOffset );

  headerOffset();

} )( document );
