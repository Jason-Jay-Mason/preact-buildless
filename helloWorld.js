import { h, htm, useState } from './preact.js';
const html = htm.bind(h);

const HelloWorld = () => {
    const [counter, setCounter] = useState(0);
    const increment = () => setCounter(counter + 1);

    return html`
        <h1>Hello World</h1>
        <button onClick="${increment}">Plus One!</button>
        <h2>${counter}</h2>
        <p>blah blah</p>
    `
}

export default HelloWorld