import About from './pages/About.js';
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';

const app = document.getElementById('app');

const routes = {
    home: Home,
    about: About,
    projects: Projects,
};

const renderRoute = (route) => {
    app.innerHTML = routes[route] ? routes[route]() : '<h1>404 - Page Not Found</h1>';
};

// Default to Home on load
window.addEventListener('load', () => renderRoute('home'));

// Listen for hash changes (basic routing)
window.addEventListener('hashchange', () => {
    const route = window.location.hash.substring(1); // Get hash without #
    renderRoute(route);
});