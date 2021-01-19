import { h, Fragment } from 'https://unpkg.com/preact@latest?module';
import { html } from '../utils/markup.js';

function CustomComponent ({componentName, ...props}) {

    return html`<div 
        ref=${ 
            (host) => {
                window.CUSTOM_COMPONENTS[componentName](host, props);
                const fragment = document.createDocumentFragment();
                while (host.childNodes.length > 0) {
                    fragment.appendChild(host.childNodes[0]);
                }
                host.parentNode.insertBefore(fragment, host);
                host.parentNode.removeChild(host);
            }
        }
    />`;
}

export default CustomComponent;