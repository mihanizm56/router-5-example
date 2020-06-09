import React from 'react';
import { RouteNode } from '@wildberries/service-router';
import { Page } from './page';

const pageNode = 'home.page-x';

const action = async ({ store, router, toState }) => {
  return {
    title: 'page-x',
    content: (
      <RouteNode nodeName={pageNode}>
        {({ route, content }) => {
          if (route.name === pageNode) {
            return <Page router={router} />;
          }
          return content;
        }}
      </RouteNode>
    ),
  };
};

export default action;
