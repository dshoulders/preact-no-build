import { useContext } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import { html } from '../utils/markup.js';
import { listItemStore } from '../state/listItems.js';
import List from './List.js';
import ListOfCustomComponents from './ListOfCustomComponents.js';

const Lists = () => {

    const { dispatch } = useContext(listItemStore);

    return html`<div>
        <style>
            .lists {
                display: flex;
            }
        </style>
        <div class="lists">
            <${List}/>
            <${ListOfCustomComponents}/>
        </div>
        <button onclick=${() => dispatch({ type: 'ADD_ITEM', name: 'Jenny' })}>Add</button>
        <button onclick=${() => dispatch({ type: 'REVERSE_ITEMS' })}>Reverse</button>
        <button onclick=${() => dispatch({ type: 'RENAME_ITEMS' })}>Rename</button>
    </div>`
}

export default Lists;
