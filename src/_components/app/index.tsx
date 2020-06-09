import React, { memo } from 'react';
import { Router } from 'router5';
import { RouterProvider } from 'react-router5';
import { RouteNode } from '@wildberries/service-router';
import { RootComponents } from '@/_components/root-components';

type PropsType = {
  router: Router;
};

export const App = memo(({ router }: PropsType) => (
  <>
    <RootComponents />
    <RouterProvider key={1} router={router}>
      <RouteNode nodeName="">{({ content }) => content}</RouteNode>
    </RouterProvider>
  </>
));
