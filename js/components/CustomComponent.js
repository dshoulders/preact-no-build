import { h, Fragment, createRef } from 'https://unpkg.com/preact@latest?module';import { useContext } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import { useEffect, useRef } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import { html } from '../utils/markup.js';

function CustomComponent ({componentName, ...props}) {

    const placeholderElementRef = useRef(null);
    const instanceRef = useRef(null);

    useEffect(() => {

        const placeholderElement = placeholderElementRef.current;
        const parentNode = placeholderElement.parentNode;

        const instance = new window.CUSTOM_COMPONENTS[componentName]();
        instanceRef.current = instance;
        instance.props = props;
        const rootElement = instance.render();

        const fragment = document.createDocumentFragment();
        fragment.appendChild(rootElement);
        parentNode.insertBefore(fragment, placeholderElement);

        return () => {
            parentNode.removeChild(rootElement);
        }
    }, []);

    useEffect(() => {
        instanceRef.current.update(props);
    });

    return html`<script ref=${placeholderElementRef} />`;
}

export default CustomComponent;