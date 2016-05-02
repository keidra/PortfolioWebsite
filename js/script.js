 /*BUTTON COLLAPSE*/
 $( document ).ready(function(){
   $(".button-collapse").sideNav();
 });



/* SNAP TO SCROLL */
$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});


/* HIDE NAVBAR*/

