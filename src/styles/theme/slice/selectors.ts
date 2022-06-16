import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';
import { isSystemDark } from 'styles/theme/utils';

export const selectTheme = createSelector(
  [(state: RootState) => state?.theme || initialState],
  theme => {
    if (theme.selected === 'system') {
      return isSystemDark
        ? theme.themeConfigurations.dark
        : theme.themeConfigurations.light;
    }
    return theme.themeConfigurations[theme.selected];
  },
);

export const selectThemeKey = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => theme.selected,
);
