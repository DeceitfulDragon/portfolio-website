$(document).ready(function () {
    if (window.location.href.includes("work.html")) {
        const professionalProjects = [
            {
                title: "Five Loaves Website",
                description: "A website for a non-profit food shelf and thrift store dedicated to providing essential services to their local community. Designed to be mobile-responsive and user-friendly, ensuring that all visitors, regardless of their technical skill level, can navigate and obtain the information they need.",
                imageUrl: "./assets/images/work/flscreenshot.png",
                url: "https://github.com/DeceitfulDragon/five-loaves-website",
                tools: ["HTML/CSS/JS", "Bootstrap", "jQuery"]
            },
            {
                title: "Portfolio Website",
                description: "A website for myself to show off my work, my skills, and information about me. You're currently on it right now! Making this helped me learn about Ruby, and especially Jekyll for some more dynamic rendering of web pages. Loved how easy it was to integrate into Github, where it's currently being hosted with my domain.",
                imageUrl: "./assets/images/work/portfoliowebsite.png",
                url: "https://github.com/DeceitfulDragon/portfolio-website",
                tools: ["HTML/CSS/JS", "Anime.js", "Jekyll", "Ruby"]
            }
        ];

        const hobbyProjects = [
            {
                title: "Rainy Fallout Render",
                description: "A small render I made while learning how to use Blender. All models made by me, using references from Fallout 4. Took about a week of on-and-off rendering (abt 8 hour sessions each) to get the look I wanted. Actual modelling was likely around a month or two. You can click the button to see the animation, with music and rain.",
                imageUrl: "./assets/images/work/rainyfallout.png",
                url: "https://www.youtube.com/watch?v=jBtDjHbq-gE",
                tools: ["Blender", "Substance Painter"]
            },
            {
                title: "Project 2",
                description: "A creative project focusing on digital art and graphic design.",
                imageUrl: "https://picsum.photos/650/300",
                url: "https://github.com/DeceitfulDragon/hobby-project2",
                tools: ["Photoshop", "Illustrator"]
            }
        ];

        const toolIcons = {
            "HTML/CSS/JS": "devicon-html5-plain",
            "CSS": "devicon-css3-plain",
            "JavaScript": "devicon-javascript-plain",
            "Bootstrap": "devicon-bootstrap-plain",
            "jQuery": "devicon-jquery-plain",
            "Ruby": "devicon-ruby-plain",
            "Jekyll": "devicon-jekyll-plain",
            "Blender": "devicon-blender-original",
            "Substance Painter": "devicon-substancepainter-plain",
            "Photoshop": "devicon-photoshop-plain",
            "Illustrator": "devicon-illustrator-plain",
            "Anime.js": "devicon-javascript-plain",
            "Node.js": "devicon-nodejs-plain",
            "Express": "devicon-express-original",
            "MongoDB": "devicon-mongodb-plain",
            "Unity": "devicon-unity-plain",
            "C#": "devicon-csharp-plain",
            "Blender": "devicon-blender-original",
        };

        function createProjectCard(project) {
            const card = $('<article class="project-card">');
            const header = $('<header class="project-header">');
            const title = $('<h3 class="project-title">').text(project.title);
            const tools = $('<section class="project-tools">');

            project.tools.forEach(tool => {
                const toolContainer = $('<span class="tool-item">');
                const toolIcon = $('<i>').addClass(`devicon ${toolIcons[tool]}`);
                const toolText = $('<span>').text(` ${tool}`);
                toolContainer.append(toolIcon, toolText);
                tools.append(toolContainer);
            });

            const imageContainer = $('<section class="image-container">');
            const image = $('<img>', { src: project.imageUrl, class: "project-image" });
            const description = $('<p class="project-description">').text(project.description);

            header.append(title, tools);
            imageContainer.append(image, description);
            card.append(header, imageContainer);

            card.click(() => openModal(project));

            return card;
        }

        function displayProjects(projects, containerSelector) {
            projects.forEach((project, index) => {
                const card = createProjectCard(project);
                $(containerSelector).append(card);

                // Image anim
                anime({
                    targets: card.find('.project-image').get(0),
                    opacity: [0, 1],
                    translateY: [50, 0],
                    easing: 'easeOutExpo',
                    duration: 800,
                    delay: index * 200 + 400
                });

                // Title anim
                anime({
                    targets: card.find('.project-title').get(0),
                    translateX: [-100, 0],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    duration: 800,
                    delay: index * 200
                });

                // Skills/tools anim
                anime({
                    targets: card.find('.tool-item').toArray(),
                    translateX: [-30, 0],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    duration: 800,
                    delay: (el, i) => index * 200 + 100 * i
                });
            });
        }

        function openModal(project) {
            $('#projectModalLabel').text(project.title);

            const toolsSection = $('#projectModal .modal-tools');
            toolsSection.empty();
            project.tools.forEach(tool => {
                const toolContainer = $('<span class="modal-tool-item">');
                const toolIcon = $('<i>').addClass(`devicon ${toolIcons[tool]}`);
                const toolText = $('<span>').text(` ${tool}`);
                toolContainer.append(toolIcon, toolText);
                toolsSection.append(toolContainer);
            });

            const imageContainer = $('#projectModal .modal-image-container');
            imageContainer.empty();
            const img = $('<img>').addClass('d-block w-100').attr('src', project.imageUrl).css('cursor', 'pointer');
            img.click(() => window.open(project.imageUrl, '_blank'));
            imageContainer.append(img);

            $('.modal-description').text(project.description);

            const learnMoreButton = $('<a>', { href: project.url, class: "btn btn-success learn-more-button", target: "_blank" }).text('Learn More');
            $('.modal-footer').empty().append(learnMoreButton);

            $('#projectModal').modal('show');
        }

        displayProjects(professionalProjects, '.professional-projects');
        displayProjects(hobbyProjects, '.hobby-projects');
    } else {
        return;
    }
});