import 'fast-text-encoding/text';
import 'reset-css';
import React from 'react';
import ReactDOM from 'react-dom';
import { geti18Next } from '@wildberries/i18next-utils';
import { Provider } from 'react-redux';
import { createAppStore } from '@wildberries/redux-core-modules';
import { configureRouter } from '@wildberries/service-router';
import { App } from '@/_components/app';
import routes from '@/pages/routes';
import { appNamespace } from './_constants/i18next/app-namespace';
import { LocalStorageWorker } from './_utils/localstorage-worker';
import '@/styles/global.css';
import '@/styles/font-imports.css';
import '@/styles/variables.module.scss';

const ROOT_ELEMENT = document.getElementById('root');
const initialLocale = LocalStorageWorker.getItem('locale') || 'en';

const router = configureRouter({ defaultRoute: 'home' });
const store = createAppStore({ router });

router.setDependencies({
  store,
  routes,
});

router.add(routes);

geti18Next({ appNamespace, locale: initialLocale }).then(() =>
  router.start(() => {
    ReactDOM.render(
      <Provider store={store}>
        <App router={router} />
      </Provider>,
      ROOT_ELEMENT,
    );
  }),
);
