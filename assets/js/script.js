$(document).ready(function () {
    $('#navbar').fadeIn();
    /*
    $('a.nav-link, a.about-me-btn').on('click', function (event) {
        event.preventDefault();
        const target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);

        $('.nav-link, .about-me-btn').removeClass('active');
        $(this).addClass('active');
    });*/


    // Anime.js animations
    // Left side text in Home
    anime({
        targets: '.intro-content h1, .intro-content p, .intro-content ul, .intro-content .btn',
        translateX: [-500, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, { start: 300 }),
        duration: 1000,
        easing: 'easeOutExpo'
    });
    // Right side profile image in Home
    anime({
        targets: '.profile-image',
        opacity: [0, 1],
        duration: 1500,
        easing: 'easeInOutSine',
        delay: 1000
    });

    // About Me Section in About
    anime({
        targets: '.about-section article p',
        translateY: [20, 0],
        opacity: [0, 1],
        delay: anime.stagger(400),
        easing: 'easeOutExpo',
        duration: 1000
    });

    // Skills Grid List in About
    anime({
        targets: '.skills-grid .list-group-item',
        translateX: [-30, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, { start: 1000 }),
        easing: 'easeOutExpo',
        duration: 500
    });

    // Animate the form fields sliding up and fading in
    anime({
        targets: '.contact-form .form-field',
        translateY: [40, 0], // Start 40px below their final position and move up
        opacity: [0, 1], // Fade from transparent to opaque
        delay: anime.stagger(150, { start: 300 }), // Start after 300ms, stagger the start of each form field
        easing: 'easeOutExpo',
        duration: 750
    });

    // Animate the submit button
    anime({
        targets: '.submit-btn',
        scale: [0.7, 1], // Start scaled down to 70% and scale up to 100%
        opacity: [0, 1], // Fade in
        delay: 1000, // Delay so it animates after the form fields
        easing: 'easeOutExpo',
        duration: 500
    });

    // Animate social icons
    anime({
        targets: '.contact-socials li',
        translateX: [30, 0], // Start 30px to the right and move to final position
        opacity: [0, 1], // Fade in
        delay: anime.stagger(100, { start: 1200 }), // Stagger the start times of each icon, starting after the button
        easing: 'easeOutExpo',
        duration: 500
    });
});