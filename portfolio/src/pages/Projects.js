const Projects = () => {
    return `
        <section id="projects">
            <h2>Projects</h2>
            <div class="project-list">
                <!-- Project 1 -->
                <div class="project">
                    <h3>Project Title 1</h3>
                    <img src="/images/project1.png" alt="Project 1 Thumbnail" width="300">
                    <p>A brief description of the project and its purpose.</p>
                    <p><strong>Tech Stack:</strong> HTML, CSS, JavaScript</p>
                    <a href="https://github.com/yourusername/project1" target="_blank">View Source</a>
                </div>

                <!-- Project 2 -->
                <div class="project">
                    <h3>Project Title 2</h3>
                    <img src="/images/project1.png" alt="Project 2 Thumbnail" width="300">
                    <p>A brief description of the project and its purpose.</p>
                    <p><strong>Tech Stack:</strong> React, Node.js, MongoDB</p>
                    <a href="https://github.com/yourusername/project2" target="_blank">View Source</a>
                </div>
            </div>
        </section>
    `;
};

export default Projects;
