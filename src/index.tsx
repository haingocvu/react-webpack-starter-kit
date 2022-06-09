import React from 'react';
import 'core-js/stable';
import { createRoot } from 'react-dom/client';

import App from './app/index';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
