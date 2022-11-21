//= ../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js
//= ../../node_modules/jquery/dist/jquery.slim.min.js
//= ../../node_modules/tiny-slider/dist/min/tiny-slider.js
//= ../../node_modules/bootstrap-select/dist/js/bootstrap-select.min.js

//= https://www.google.com/recaptcha/api.js


$(function() {
    $('.selectpicker').selectpicker();
    initStepsSlider();
    initRecaptcha('6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', ".grecaptcha");
    initFormValidation();
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
                items: 2.2,
                edgePadding: 0,
            },
            576: {
                items: 3,
                edgePadding: 0,
            },
            768: {
                items: 3,
                edgePadding: 0,
            },
            992: {
                items: 3
            }
        }
    });

    console.log('steps slider initialized')
}

function initRecaptcha(sitekey, containerSelector) {
    const recaptchaContainers = document.querySelectorAll(containerSelector);
    recaptchaContainers.forEach(recaptchaContainer => {
        // If reCAPTCHA is still loading, grecaptcha will be undefined.
        grecaptcha.ready(function() {
            grecaptcha.render(recaptchaContainer, {
                sitekey: sitekey
            });
        });
    })
}

function initFormValidation() {
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
}