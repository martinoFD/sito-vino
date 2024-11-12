
function setAnimation() {

    var scrollLenght = jQuery(window).scrollTop();
    var winHeight = jQuery(window).height() / 1.2;    

    jQuery('.animation').each(function () {
        var thisHeight = jQuery(this).offset().top;
        if (scrollLenght >= thisHeight - winHeight)
            jQuery(this).addClass('animate');
        else {
            jQuery(this).removeClass('animate');
        }
    });

}

jQuery(window).on('scroll', setAnimation);

jQuery(window).on('load', setAnimation);



//nav-bar animation

// Aggiorna la posizione al clic
document.querySelector('.navbar-toggler').addEventListener('click', function() {
	// let nav_height = $(".navbar-nav").outerHeight(true);
    // $(".navbar-nav").css("height", nav_height-1 + "px")
	// console.log(nav_height);
	
 
    $('.navbar').toggleClass('active');
});

