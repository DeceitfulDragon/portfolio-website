$(document).ready(function () {
    $('#navbar').fadeIn();
    /*$(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            
        } else {
            $('#navbar').fadeOut();
        }
    });

    $('a.nav-link, a.about-me-btn').on('click', function (event) {
        event.preventDefault();
        const target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);

        $('.nav-link, .about-me-btn').removeClass('active');
        $(this).addClass('active');
    });*/

    anime({
        targets: '.intro-content h1, .intro-content p, .intro-content ul, .intro-content .btn',
        translateX: [-500, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, {start: 300}),
        duration: 1000,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.profile-image',
        opacity: [0, 1],
        duration: 2000,
        easing: 'easeInOutSine',
        delay: 1000
    });

    const projects = {
        professional: [
            { title: "Project One", description: "Lorem ipsum dolor sit amet.", imageUrl: "https://picsum.photos/200/300", url: "https://example.com/project1" },
            { title: "Project Two", description: "Consectetur adipiscing elit.", imageUrl: "https://picsum.photos/200/300", url: "https://example.com/project2" }
        ],
        hobby: [
            { title: "Hobby Project One", description: "Sed do eiusmod tempor.", imageUrl: "https://picsum.photos/200/300", url: "https://example.com/hobby1" },
            { title: "Hobby Project One", description: "Sed do eiusmod tempor.", imageUrl: "https://picsum.photos/200/300", url: "https://example.com/hobby1" },
            { title: "Hobby Project One", description: "Sed do eiusmod tempor.", imageUrl: "https://picsum.photos/200/300", url: "https://example.com/hobby1" },
            { title: "Hobby Project One", description: "Sed do eiusmod tempor.", imageUrl: "https://picsum.photos/200/300", url: "https://example.com/hobby1" },
            { title: "Hobby Project One", description: "Sed do eiusmod tempor.", imageUrl: "https://picsum.photos/200/300", url: "https://example.com/hobby1" },
            { title: "Hobby Project One", description: "Sed do eiusmod tempor.", imageUrl: "https://picsum.photos/200/300", url: "https://example.com/hobby1" },
        ]
    };

    function createProjectCard(project) {
        return `
        <div class="card bg-dark text-white m-2" style="width: 18rem;">
            <div class="card-img-overlay d-flex flex-column justify-content-between p-2" style="background: linear-gradient(to top, rgba(21, 21, 21, 0.7) 30%, transparent 70%)">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <button onclick="location.href='${project.url}'" class="btn btn-primary">Learn More</button>
            </div>
            <img src="${project.imageUrl}" class="card-img-top" alt="${project.title}" style="height: 100%; object-fit: cover;">
        </div>
        `;
    }

    projects.professional.forEach(project => {
        $('.professional-projects').append(createProjectCard(project));
    });

    projects.hobby.forEach(project => {
        $('.hobby-projects').append(createProjectCard(project));
    });


    $('.project-container').each(function () {
        let isDown = false;
        let startX;
        let scrollLeft;

        $(this).on('mousedown', function (e) {
            isDown = true;
            startX = e.pageX - $(this).offset().left;
            scrollLeft = $(this).scrollLeft();
            e.preventDefault();
        }).on('mouseleave', function () {
            isDown = false;
        }).on('mouseup', function () {
            isDown = false;
        }).on('mousemove', function (e) {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - $(this).offset().left;
            const walk = (x - startX) * 2;
            $(this).scrollLeft(scrollLeft - walk);
        });
    });
});
