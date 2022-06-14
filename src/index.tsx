import React from 'react';
import 'core-js/stable';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

import App from './app/index';
import './locales/i18n';
import { configureAppStore } from 'store/configureStore';
import { ThemeProvider } from 'styles/theme/ThemeProvider';

const root = createRoot(document.getElementById('root'));
const store = configureAppStore();

root.render(
  <Provider store={store}>
    <ThemeProvider>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  </Provider>,
);

// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  });
}
