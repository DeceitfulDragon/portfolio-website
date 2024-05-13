$(document).ready(function () {
    if (window.location.href.includes("work.html")) {
        const professionalProjects = [
            {
                title: "Project 1",
                description: "This is a professional project description, showcasing the use of advanced web technologies.",
                imageUrl: "https://picsum.photos/650/300",
                url: "https://github.com/DeceitfulDragon/professional-project1",
                tools: ["HTML", "CSS", "JavaScript"]
            },
            {
                title: "Project 2",
                description: "Detailed project involving complex backend systems and data management.",
                imageUrl: "https://picsum.photos/650/300",
                url: "https://github.com/DeceitfulDragon/professional-project2",
                tools: ["Node.js", "Express", "MongoDB"]
            }
        ];
        
        const hobbyProjects = [
            {
                title: "Project 1",
                description: "A personal project exploring game development and interactive design.",
                imageUrl: "https://picsum.photos/650/300",
                url: "https://github.com/DeceitfulDragon/hobby-project1",
                tools: ["Unity", "C#", "Blender"]
            },
            {
                title: "Project 2",
                description: "A creative project focusing on digital art and graphic design.",
                imageUrl: "https://picsum.photos/650/300",
                url: "https://github.com/DeceitfulDragon/hobby-project2",
                tools: ["Photoshop", "Illustrator"]
            }
        ];

        function createProjectCard(project) {
            const link = $('<a>', { href: project.url, class: "project-card-link", target: "_blank" });
            const card = $('<article class="project-card">');
            const header = $('<header class="project-header">');
            const title = $('<h3 class="project-title">').text(project.title);
            const tools = $('<section class="project-tools">');
        
            project.tools.forEach(tool => {
                const toolSpan = $('<span class="tool-item">').text(tool);
                tools.append(toolSpan);
            });
        
            const imageContainer = $('<section class="image-container">');
            const image = $('<img>', { src: project.imageUrl, class: "project-image" });
            const description = $('<p class="project-description">').text(project.description);
        
            header.append(title, tools);
            imageContainer.append(image, description);
            card.append(header, imageContainer);
            link.append(card);
        
            return link;
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

        displayProjects(professionalProjects, '.professional-projects');
        displayProjects(hobbyProjects, '.hobby-projects');
    } else {
        return;
    }
});
