import React from 'react';
import { RouteNode } from '@wildberries/service-router';
import { injectAsyncReducer } from '@wildberries/redux-core-modules';
import { fetchLangDictAction } from '@wildberries/i18next-utils';
import { appNamespace } from '@/_constants/i18next/app-namespace';
import { AppLayout } from '@/_layouts/app-layout';
import reducerUI, {
  reducerUIName,
  startAppLoadingAction,
  stopAppLoadingAction,
} from '@/pages/home/_redux/ui-module';
import { LocalStorageWorker } from '@/_utils/localstorage-worker';
import { getI18nextRequestEndpoint } from '@/api/endpoints/i18next';

const pageNode = 'home';

const locale = LocalStorageWorker.getItem('locale') || 'en';

const action = async ({ router, store }) => {
  injectAsyncReducer({
    store,
    name: reducerUIName,
    reducer: reducerUI,
  });

  await fetchLangDictAction({
    dispatch: store.dispatch,
    startLoadingAction: startAppLoadingAction,
    stopLoadingAction: stopAppLoadingAction,
    appNamespace,
    locale,
    requestUrl: getI18nextRequestEndpoint(locale),
  });

  return new Promise(async resolve => {
    resolve({
      title: 'home',
      content: (
        <AppLayout>
          <RouteNode nodeName={pageNode}>
            {({ route, content }) => {
              if (route.name === pageNode) {
                router.navigate('home.page-x');

                return <></>;
              }

              return content;
            }}
          </RouteNode>
        </AppLayout>
      ),
    });
  });
};

export default action;
