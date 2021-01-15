import { html, render } from 'https://unpkg.com/htm/preact/index.mjs?module'

function App (props) {
    return html`<h1>Hello ${props.name}!</h1>`;
}

render(html`<${App} name="World" />`, document.getElementById('app'));