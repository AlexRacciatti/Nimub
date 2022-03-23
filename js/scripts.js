/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    
    document.getElementById('contactForm').addEventListener('submit', event => {
        event.preventDefault();

        const BTN = document.getElementById('submitButton');

        BTN.innerHTML= `<div> <div class="btn-loading"></div> </div>`;

        emailjs.sendForm('service_9i33rcg', 'template_ijplm8s', event.target, 'user_XahECptLwZO05hjr0ZwRz')
            .then((result) => {
                BTN.innerHTML= 'Send Message';
                swal("Enviado!", "Muchas gracias por ponerte en contacto con nosotros. Nos contactaremos a la brevedad para despejar tus dudas.", "success");
            }, (error) => {
                BTN.innerHTML= 'Send Message';
                swal("Error!", "Su mail no pudo ser procesado. Por favor, intente más tarde.", "error");
            });
    });

});
