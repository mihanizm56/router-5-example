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
    </div>
  );
});
