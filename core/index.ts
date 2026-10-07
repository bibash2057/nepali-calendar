/**
 * Headless core for the Nepali Calendar (Bikram Sambat).
 *
 * Pure TypeScript — no React, no React Native, no UI. Import from here to use
 * the converter, grid generator, and helpers in any environment (server, CLI,
 * tests, or a framework of your choice).
 */
export * from './types';
export * from './converter';
export * from './grid';
export * from './utils';
export {
  BS_MONTH_DATA,
  REFERENCE_AD,
  REFERENCE_BS,
  MIN_BS_YEAR,
  MAX_BS_YEAR,
  NEPALI_MONTHS,
  GREGORIAN_MONTHS,
  WEEKDAYS,
  WEEKDAYS_SHORT,
  toNepaliDigits,
  toEnglishDigits,
  formatNumber,
} from './data';
