import { useContext } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import { html } from '../utils/markup.js';
import { listItemStore } from '../state/listItems.js';

function List (props) {

    const { dispatch, listItems } = useContext(listItemStore);

    return html`
        <div>
            <ul>
                ${
                    listItems.map(({ id, name }) => html`
                        <li key=${id}>
                            <button onclick=${() => dispatch({ type: 'REMOVE_ITEM', id })}>X</button>
                            ${name}
                        </li>
                    `)
                }
            </ul>
            <button onclick=${() => dispatch({ type: 'ADD_ITEM', name: 'Jenny' })}>Add</button>
        </div>
    `;
}

export default List;