import { useContext } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import { html } from '../utils/markup.js';
import ListItems from '../state/listItems.js';

function List (props) {

    const listItems = useContext(ListItems);

    return html`
        <ul>
            ${
                listItems.map(({ id, name }) => html`
                    <li key=${id}>${name}</li>
                `)
            }
        </ul>
    `;
}

export default List;