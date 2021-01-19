import { useContext } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import { html } from '../utils/markup.js';
import { listItemStore } from '../state/listItems.js';
import ListItem from './ListItem.js';

function List (props) {

    const { dispatch, listItems } = useContext(listItemStore);

    return html`
        <div>
            <ul>
                ${
                    listItems.map(ListItem)
                }
            </ul>
            <button onclick=${() => dispatch({ type: 'ADD_ITEM', name: 'Jenny' })}>Add</button>
            <button onclick=${() => dispatch({ type: 'REVERSE_ITEMS' })}>Reverse</button>
        </div>
    `;
}

export default List;