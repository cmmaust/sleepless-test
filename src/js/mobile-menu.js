( ( d ) => {
  // When we click the mobile menu, toggle the classes of the button and menu.
  const mobileMenuButton = d.querySelector( 'button.hamburger' );
  const headerNav        = d.querySelector( '.header__nav' );

  mobileMenuButton.addEventListener( 'click', () => {
    mobileMenuButton.classList.toggle( 'is-active' );

    if ( mobileMenuButton.classList.contains( 'is-active' ) ) {
      headerNav.classList.remove( 'd-none' );
      headerNav.classList.add( 'menu-shown' );
    } else {
      headerNav.classList.add( 'd-none' );
      headerNav.classList.remove( 'menu-shown' );
    }

  } );

} )(document);
