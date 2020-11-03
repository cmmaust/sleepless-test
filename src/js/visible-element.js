( ( w ) => {
  /**
   * isElementXPercentInViewport() yanked from:
   * https://stackoverflow.com/questions/30943662/check-if-element-is-partially-in-viewport
   */
  const isElementXPercentInViewport = function( el, percentVisible ) {
    let
        rect = el.getBoundingClientRect(),
        windowHeight = ( window.innerHeight || document.documentElement.clientHeight );
    return ! (
        Math.floor( 100 - ( ( ( rect.top >= 0 ? 0 : rect.top ) / +-( rect.height / 1 ) ) * 100 ) ) < percentVisible ||
        Math.floor( 100 - ( ( rect.bottom - windowHeight ) / rect.height ) * 100 ) < percentVisible
    );
  };

  w.addEventListener( 'scroll', () => {
    const animateSections = document.querySelectorAll( '.animate' );

    animateSections.forEach( ( animateSection ) => {
        if ( true === isElementXPercentInViewport( animateSection, 10 ) ) {
            animateSection.classList.add( 'animate--go' );
        }
    } );
  } );
} )( window );
