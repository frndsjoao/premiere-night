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

export const getLanguageName = (code: string): string => {
  return LANGUAGE_MAP[code as keyof typeof LANGUAGE_MAP] ?? code
}
