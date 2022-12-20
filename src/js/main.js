//= ../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js
//= ../../node_modules/jquery/dist/jquery.slim.min.js
//= ../../node_modules/tiny-slider/dist/min/tiny-slider.js
//= ../../node_modules/bootstrap-select/dist/js/bootstrap-select.min.js

//= https://www.google.com/recaptcha/api.js


$(function() {
    initSelectPicker();
    initStepsSlider();
    initRecaptcha('6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', ".grecaptcha");
    initFormValidation();
});

function initSelectPicker() {
    $('.selectpicker').selectpicker();
    const selectPickers = document.querySelectorAll('.selectpicker')
    selectPickers.forEach(function(picker) {
        picker.addEventListener('invalid', (e) => {
            console.log("e", picker.value);
            const parentControl = picker.closest('.dropdown.bootstrap-select');
            if (parentControl) {
                parentControl.classList.add('is-invalid')
                picker.addEventListener("change", (e) => {
                    parentControl.classList.remove('is-invalid')
                }, { once: true });
            }
        })
    });
}

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
        if (form.id == 'subscribeForm') {
            form.addEventListener('submit', event => validateSubscribeUsForm(event, form));
        } else {
            form.addEventListener('submit', event => genericFormsValidation(event, form));
        }

        
    })
}

function validateSubscribeUsForm(event, form) {
    event.preventDefault()
    event.stopPropagation()

    if (form.checkValidity()) {
        // TODO: send request to server

        // cleanup the data
        form.reset();
        form.classList.remove('was-validated')

        var confirmationModal = new bootstrap.Modal(document.getElementById('requestAcceptedModal'))
        confirmationModal.show();

    } else {
        form.classList.add('was-validated')
    }
}

function genericFormsValidation(event, form) {
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }

    form.classList.add('was-validated')
}