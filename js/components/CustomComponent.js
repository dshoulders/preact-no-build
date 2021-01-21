import { h, Fragment, createRef } from 'https://unpkg.com/preact@latest?module';import { useContext } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import { useEffect, useRef } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import { html } from '../utils/markup.js';

function CustomComponent ({componentName, ...props}) {

    const isInitialMount = useRef(true);
    const placeholderElementRef = useRef(null);
    const rootElementRef = useRef(null);
    const parentNodeRef = useRef(null);
    const fragmentRef = useRef(null);

    useEffect(() => {

        if (isInitialMount.current) {
            fragmentRef.current = document.createDocumentFragment();
        }

        window.CUSTOM_COMPONENTS[componentName]({
            props,
            element: fragmentRef.current,
        });

        if (isInitialMount.current) {
            rootElementRef.current = fragmentRef.current.firstChild;
            parentNodeRef.current = placeholderElementRef.current.parentNode;
            parentNodeRef.current.insertBefore(fragmentRef.current, placeholderElementRef.current);
        }

        return () => {
            parentNodeRef.current.removeChild(rootElementRef.current);
        }
    });

    return html`<script ref=${placeholderElementRef} />`;
}

export default CustomComponent;