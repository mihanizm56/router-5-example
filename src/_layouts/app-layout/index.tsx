import React, { Props } from 'react';
import { connect } from 'react-redux';
import { InitialAppPreloader, Text } from '@wildberries/ui-kit';
import { getAppIsLoading, getIsAppError } from '@/pages/home/_redux/ui-module';

type PropsType = {
  isAppLoading: boolean;
  nodeName: string;
  isAppError: boolean;
} & Props<any>;

const WrappedViewComponent = ({
  isAppLoading,
  children,
  isAppError,
}: PropsType) => {
  if (isAppError) {
    return (
      <Text
        color="black"
        size="h1"
        text="Приносим извинения, в приложении произошла ошибка"
      />
    );
  }

  if (isAppLoading) {
    return <InitialAppPreloader viewBox="25 25 50 50" />;
  }

  return children;
};

const mapStateToProps = state => ({
  isAppError: getIsAppError(state),
  isAppLoading: getAppIsLoading(state),
});

export const AppLayout = connect(mapStateToProps)(WrappedViewComponent);
