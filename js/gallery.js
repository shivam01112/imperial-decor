// Initialize Magnific Popup for Gallery
$(document).ready(function() {
    $('.gallery-grid').magnificPopup({
        delegate: '.popup-gallery', // child items selector
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1],
            tPrev: 'Previous',
            tNext: 'Next'
        },
        mainClass: 'mfp-with-zoom',
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out'
        },
        image: {
            titleSrc: 'title',
            verticalFit: true
        },
        callbacks: {
            open: function() {
                $('body').css('overflow', 'hidden');
            },
            close: function() {
                $('body').css('overflow', '');
            }
        }
    });

    // Make the entire gallery item clickable
    $('.gallery-item').click(function(e) {
        $(this).find('.popup-gallery').click();
    });
});