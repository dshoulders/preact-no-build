import { useContext } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import { html } from '../utils/markup.js';
import { listItemStore } from '../state/listItems.js';
import CustomComponent from './CustomComponent.js';

function ListOfCustomComponents (props) {

    const { listItems } = useContext(listItemStore);

    return html`
        <ul>
            ${
                listItems.map(({ id, name }) => html`<${CustomComponent} componentName="list-item" id=${id} name=${name} />`)
            }
        </ul>
    `;
}

export default ListOfCustomComponents;