import React, { Props } from 'react';
import { Router } from 'router5';

type PropsType = {
  routeName: string;
  router: Router;
} & Props<any>;

export const TestTabsLayout = ({ routeName, router, children }: PropsType) => {
  const baseChildName = routeName.replace(/(.+)-(\d)$/, '$1');
  const baseCoreName = routeName.replace(/^([-a-z]+\.)([-a-z]+)\.(.+)/, '$1$2');

  return (
    <>
      <div>
        <button onClick={() => router.navigate(baseCoreName)} type="button">
          BACK
        </button>
        <button
          onClick={() => router.navigate(`${baseChildName}-1`)}
          type="button"
        >
          Tab 1
        </button>
        <button
          onClick={() => router.navigate(`${baseChildName}-2`)}
          type="button"
        >
          Tab 2
        </button>
        <button
          onClick={() => router.navigate(`${baseChildName}-3`)}
          type="button"
        >
          Tab 3
        </button>
        <button
          onClick={() => router.navigate(`${baseChildName}-4`)}
          type="button"
        >
          Tab 4
        </button>
      </div>

      {children}
    </>
  );
};
