import { useContext } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import { html } from '../utils/markup.js';
import { listItemStore } from '../state/listItems.js';
import ListItem from './ListItem.js';

function List (props) {

    const { listItems } = useContext(listItemStore);

    return html`
        <ul>
            ${
                listItems.map(ListItem)
            }
        </ul>
    `;
}

export default List;