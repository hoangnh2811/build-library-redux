import { attach } from "./store.js";
import App from './component/App.js'

attach(App, document.getElementById('root'));

// import html from './core.js';

// const cars = ['BMW', 'Porsche', 'Mazda'];

// const output = html`
//   <h3>TEST ${false}</h3>
//   <ul>
//     ${cars.map(car => `<li>${car}</li>`).join('')}
//   </ul>
// `
