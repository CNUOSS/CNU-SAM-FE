import { init } from './libs/i18n';

// default language is korean
global.beforeEach(() => {
  // eslint-disable-next-line no-undef
  const languageGetter = jest.spyOn(window.navigator, 'language', 'get');
  languageGetter.mockReturnValue('ko');
  init();
});
