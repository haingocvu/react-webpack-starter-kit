import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  notFoundPage: () => _t(translations.pageNotFound, 'Not Found Page'),
  404: () => _t(translations[404], '404'),
  goBack: () => _t(translations.goBack, 'Back'),
};
