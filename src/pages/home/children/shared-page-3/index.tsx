import React from 'react';
import { RouteNode } from '@wildberries/service-router';
import { TestTabsLayout } from '../../_layouts/test-tabs-layout';
import { Page } from './page';

const action = async ({ router, toState }) => {
  return {
    content: (
      <RouteNode nodeName={toState.name}>
        {() => (
          <TestTabsLayout routeName={toState.name} router={router}>
            <Page router={router} />
          </TestTabsLayout>
        )}
      </RouteNode>
    ),
  };
};

export default action;
