const LANGUAGE_MAP = {
  en: 'English',
  es: 'Spanish',
  it: 'Italian',
  pt: 'Portuguese',
  fr: 'French',
  de: 'German',
  ja: 'Japanese',
  ko: 'Korean',
  zh: 'Chinese',
}

export const getLanguageName = (code: string) => LANGUAGE_MAP[code] || code
