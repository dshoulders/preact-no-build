import { render } from 'https://unpkg.com/preact@latest?module';
import { html } from './utils/markup.js';
import ListItems from './state/listItems.js';
import List from './components/List.js';

const listItems = [
    { id: 0, name: 'Dave' },
    { id: 0, name: 'Sally' },
    { id: 0, name: 'Nigel' },   
];

function App (props) {
    return html`
        <${ListItems.Provider} value=${listItems}>
            <h1>Hello ${props.name}!</h1>
            <${List}/>
        </${ListItems.Provider}>
    `;
}

render(html`<${App} name="World" />`, document.getElementById('app'));