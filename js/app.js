import { render } from 'https://unpkg.com/preact@latest?module';
import { html } from './utils/markup.js';
import { ListItemProvider } from './state/listItems.js';
import Lists from './components/Lists.js';

function App () {

    return html`
        <${ListItemProvider}>
            <${Lists}/>
        </${ListItemProvider}>
    `;
}

render(html`<${App}/>`, document.getElementById('app'));