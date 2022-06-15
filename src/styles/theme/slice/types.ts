import { themes } from 'styles/theme/themes';

export type ThemeKeyType = keyof typeof themes | 'system';

export type ThemeConfigurationsType = typeof themes;

export interface ThemeState {
  selected: ThemeKeyType;
  themeConfigurations: ThemeConfigurationsType;
}
