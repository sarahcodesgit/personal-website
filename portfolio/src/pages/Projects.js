const Projects = () => {
    return `
        <section class="p-8">
            <h2 class="text-2xl font-bold mb-4">My Projects</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-white shadow rounded p-4">
                    <h3 class="text-xl font-semibold mb-2">Project 1</h3>
                    <p class="text-gray-600">Description of the project goes here.</p>
                    <a href="https://github.com/yourusername/project1" target="_blank" class="text-blue-500 hover:underline">
                        View on GitHub
                    </a>
                </div>
                <div class="bg-white shadow rounded p-4">
                    <h3 class="text-xl font-semibold mb-2">Project 2</h3>
                    <p class="text-gray-600">Description of another project goes here.</p>
                    <a href="https://github.com/yourusername/project2" target="_blank" class="text-blue-500 hover:underline">
                        View on GitHub
                    </a>
                </div>
                <!-- Add more project cards as needed -->
            </div>
        </section>
    `;
};

export default Projects;
