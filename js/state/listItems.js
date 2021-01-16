import { createContext } from 'https://unpkg.com/preact@latest?module';
import { useReducer } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import { html } from '../utils/markup.js';

const getID = (() => {
    let nextID = 0;
    return () => nextID++;
})();

const initialState =  [
    { id: getID(), name: 'Dave' },
    { id: getID(), name: 'Sally' },
    { id: getID(), name: 'Nigel' }, 
];

const listItemStore = createContext(initialState);
const { Provider } = listItemStore;

const ListItemProvider = ( { children } ) => {

    const [listItems, dispatch] = useReducer((listItems, action) => {

        switch (action.type) {
            case 'ADD_ITEM':
                return  [
                    ...listItems,
                    { id: getID(), name: action.name },
                ];

            case 'REMOVE_ITEM':
                return listItems.filter((item) => {
                    return item.id !== action.id;
                });

            default:
                return listItems;
        };
    }, initialState);

    return html`<${Provider} value=${{ listItems, dispatch }}>${children}</${Provider}>`;
};

export { listItemStore, ListItemProvider }
