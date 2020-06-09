import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Text } from '@wildberries/ui-kit';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

export const Page = memo(() => (
  <div className={cn('homePage')} data-page="home">
    <Text color="black" size="h1" text="hello world" />
  </div>
));
