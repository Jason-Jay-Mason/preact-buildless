import { h, Component, render, htm } from './preact.js';

import HelloWorld from './helloWorld.js';

// Initialize htm with Preact
const html = htm.bind(h);

function App (props) {
  return html`<div><${HelloWorld} /></div>`;
}

render(html`<${App} name="World" />`, document.body);