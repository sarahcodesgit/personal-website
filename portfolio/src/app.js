import About from '/pages/about.js';
import Home from '/pages/home.js';
import Projects from '/pages/projects.js';

const app = document.getElementById('app');
app.innerHTML = `
    ${Home()}
    ${About()}
    ${Projects()}
`;
