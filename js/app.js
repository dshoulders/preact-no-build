import { render } from 'https://unpkg.com/preact@latest?module';
import { html } from './utils/markup.js';
import { ListItemProvider } from './state/listItems.js';
import List from './components/List.js';

function App (props) {

    return html`
        <${ListItemProvider}>
            <h1>Hello ${props.name}!</h1>
            <${List}/>
        </${ListItemProvider}>
    `;
}

render(html`<${App} name="World" />`, document.getElementById('app'));