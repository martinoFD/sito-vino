
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