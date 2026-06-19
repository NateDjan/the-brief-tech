import fr from './fr.json';
import en from './en.json';

const translations = { fr, en } as const;

export type Locale = keyof typeof translations;
export const defaultLocale: Locale = 'fr';
export const locales: Locale[] = ['fr', 'en'];

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale];
  for (const k of keys) {
    value = value?.[k];
  }
  return value ?? key;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, locale] = url.pathname.split('/');
  if (locales.includes(locale as Locale)) return locale as Locale;
  return defaultLocale;
}

export function getLocalizedPath(path: string, locale: Locale): string {
  return `/${locale}${path.startsWith('/') ? path : '/' + path}`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'fr' ? 'en' : 'fr';
}
