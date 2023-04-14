import html from './app.html?raw';
/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {
    
    // Cuando la función  App() sea llamada
    (() => {

        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
    })();
}