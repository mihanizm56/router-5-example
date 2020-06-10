import React, { memo } from 'react';
import { Router } from 'router5';

type PropType = {
  router: Router;
};

export const Page = memo(({ router }: PropType) => {
  return (
    <div>
      <p>shared page 1</p>
    </div>
  );
});
