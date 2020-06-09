import React from 'react';
import { RouteNode } from '@wildberries/service-router';
import { Page } from './page';

const action = async ({ router, toState }) => {
  return {
    title: 'Shared page',
    content: (
      <RouteNode nodeName={toState.name}>
        {({ route, content }) => <Page router={router} />}
      </RouteNode>
    ),
  };
};

export default action;
