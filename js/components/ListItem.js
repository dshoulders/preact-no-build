import { useContext } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import { html } from '../utils/markup.js';
import { listItemStore } from '../state/listItems.js';

function ListItem ({ name, id }) {

    const { dispatch } = useContext(listItemStore);

    return html`
        <li key=${id}>
            <button onclick=${() => dispatch({ type: 'REMOVE_ITEM', id })}>X</button>
            ${name}
        </li>
    `;
}

export default ListItem;