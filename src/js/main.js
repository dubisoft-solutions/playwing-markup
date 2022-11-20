//= ../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js
//= ../../node_modules/jquery/dist/jquery.slim.min.js
//= ../../node_modules/tiny-slider/dist/min/tiny-slider.js
//= ../../node_modules/bootstrap-select/dist/js/bootstrap-select.min.js

$(function() {
    $('.selectpicker').selectpicker();
    initStepsSlider();
});

function initStepsSlider() {
    const slidesContainer = document.querySelector('.steps-slider');
    if (!slidesContainer) return;

    tns({
        container: slidesContainer,
        items: 1.4,
        autoplay: false,
        controls: false,
        mouseDrag: true,
        nav: false,
        autoHeight: false,
        gutter: 15, // padding between slides

        responsive: {
            0: {
                items: 1.4,
                edgePadding: 0,
            },
            576: {
                items: 1.4,
                edgePadding: 0,
            },
            768: {
                items: 2.4,
                edgePadding: 0,
            },
            992: {
                items: 3
            }
        }
    });

    console.log('steps slider initialized')
}