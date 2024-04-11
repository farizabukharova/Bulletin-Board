import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.js';
import store from './store.js';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);



