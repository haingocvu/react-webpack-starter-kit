import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { getThemeFromStorage } from 'styles/theme/utils';
import { ThemeKeyType, ThemeState, ThemeConfigurationsType } from './types';
import { themes } from 'styles/theme/themes';

export const initialState: ThemeState = {
  selected: getThemeFromStorage() || 'system',
  themeConfigurations: themes,
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<ThemeKeyType>) {
      state.selected = action.payload;
    },
    changeThemeConfiguration(
      state,
      action: PayloadAction<ThemeConfigurationsType>,
    ) {
      state.themeConfigurations = action.payload;
    },
  },
});

export const { actions: themeActions, reducer } = slice;

export const useThemeSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
