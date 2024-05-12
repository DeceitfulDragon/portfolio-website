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
        delay: anime.stagger(100, {start: 1000}),
        easing: 'easeOutExpo',
        duration: 800
    });
});