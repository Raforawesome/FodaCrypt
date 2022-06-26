/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';
import { createSignal } from 'solid-js';

import App from './App';

render(() => <App />, document.getElementById('root') as HTMLElement);
