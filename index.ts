/**
 * Nepali Calendar (Bikram Sambat) — a self-contained, copy-paste portable
 * package split into a headless logic layer and a themeable UI layer.
 *
 *   import { Calendar, useNepaliCalendar, adToBs } from '@/packages/nepali-calendar';
 *
 * - `core`       — pure TS converter, grid generator, datasets (no React/RN).
 * - `hooks`      — headless React state hooks (no UI).
 * - `components` — themeable React Native UI built on the hooks.
 *
 * The three layers can be used independently; the core has zero dependencies.
 */

// Logic layer (headless core) — pure TypeScript.
export * from "./core";

// Headless React hooks — state only, no UI.
export * from "./hooks";
