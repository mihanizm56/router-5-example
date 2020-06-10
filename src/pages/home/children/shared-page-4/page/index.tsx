import React, { memo } from 'react';
import { Router } from 'router5';

type PropType = {
  router: Router;
};

export const Page = memo(({ router }: PropType) => {
  return <p>shared page 4</p>;
});
