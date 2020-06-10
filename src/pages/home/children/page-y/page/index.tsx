import React, { memo } from 'react';
import { Router } from 'router5';

type PropType = {
  router: Router;
};

export const Page = memo(({ router }: PropType) => {
  return (
    <div>
      <h1>page-y</h1>
      <button onClick={() => router.navigate('home.page-x')} type="button">
        To X
      </button>
      <button
        onClick={() => router.navigate('home.page-y.page-y-child-1')}
        type="button"
      >
        To CHILD 1
      </button>
      <button
        onClick={() => router.navigate('home.page-y.page-y-child-2')}
        type="button"
      >
        To CHILD 2
      </button>
      <button
        onClick={() => router.navigate('home.page-y.page-y-child-3')}
        type="button"
      >
        To CHILD 3
      </button>
      <button
        onClick={() => router.navigate('home.page-y.page-y-child-4')}
        type="button"
      >
        To CHILD 4
      </button>
    </div>
  );
});
