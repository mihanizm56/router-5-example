import { createSelector } from 'reselect';
import { IUIState, IUIStatePart } from './types';
import { reducerUIName } from './constants';

export const UIStorageSelector = (store: IUIStatePart) =>
  store ? store[reducerUIName] : {};

export const getAppIsLoading = createSelector(
  [UIStorageSelector],
  ({ pageIsLoadingState }: IUIState) => pageIsLoadingState,
);

export const getIsAppError = createSelector(
  [UIStorageSelector],
  ({ isAppError }: IUIState) => isAppError,
);
