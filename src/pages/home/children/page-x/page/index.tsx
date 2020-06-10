import React, { memo } from 'react';
import { Router } from 'router5';
// import { useDispatch } from 'react-redux';
// import { setModalAction } from '@wildberries/notifications';

type PropType = {
  router: Router;
};

export const Page = memo(({ router }: PropType) => {
  // const dispatch = useDispatch();

  return (
    <div>
      <h1>page-x</h1>
      <button onClick={() => router.navigate('home.page-y')} type="button">
        To Y
      </button>
      <button
        onClick={() => router.navigate('home.page-x.page-x-child-1')}
        type="button"
      >
        To CHILD 1
      </button>
      <button
        onClick={() => router.navigate('home.page-x.page-x-child-2')}
        type="button"
      >
        To CHILD 2
      </button>
      <button
        onClick={() => router.navigate('home.page-x.page-x-child-3')}
        type="button"
      >
        To CHILD 3
      </button>
      <button
        onClick={() => router.navigate('home.page-x.page-x-child-4')}
        type="button"
      >
        To CHILD 4
      </button>
      {/* <button
        onClick={() =>
          dispatch(setModalAction({ status: 'success', text: 'test' }))}
        type="button"
      >
        modal error
      </button>
      <button
        onClick={() =>
          dispatch(
            setModalAction({
              status: 'error',
              text: 'очень длинная какая то ошибка не знаю почему такая',
            }),
          )}
        type="button"
      >
        modal success
      </button>
      <button
        onClick={() =>
          dispatch(setModalAction({ status: 'warning', text: 'test' }))
        }
        type="button"
      >
        modal warning
      </button> */}
    </div>
  );
});
