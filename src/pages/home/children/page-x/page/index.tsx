import React, { memo } from 'react';
import { Router } from 'router5';

type PropType = {
  router: Router;
};

export const Page = memo(({ router }: PropType) => {
  return (
    <div>
      <h1>page-x</h1>
      <button onClick={() => router.navigate('home.page-y')} type="button">
        To Y
      </button>
      <button
        onClick={() => router.navigate('home.page-x.page-x-child')}
        type="button"
      >
        To CHILD
      </button>
    </div>
  );
});
