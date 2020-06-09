import React from 'react';
import { Notifications } from '@wildberries/notifications';
import { Portal } from '@wildberries/ui-kit';

export const RootComponents = () => (
  <>
    <Portal prefix="notifications">
      <Notifications />
      {/* add your root components */}
    </Portal>
  </>
);
