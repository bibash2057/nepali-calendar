/**
 * Shared types for the headless Nepali Calendar (Bikram Sambat) core.
 *
 * This file is framework-agnostic — it contains only plain TypeScript types
 * and is safe to import from both the logic layer and the UI layer.
 */
/** A Bikram Sambat (BS) calendar date. Months are 1-indexed (1 = Baisakh). */
interface BsDate {
    year: number;
    /** 1 = Baisakh ... 12 = Chaitra */
    month: number;
    /** Day of month, 1-indexed */
    day: number;
}
/** A Gregorian (AD) calendar date. Months are 1-indexed (1 = January). */
interface AdDate {
    year: number;
    /** 1 = January ... 12 = December */
    month: number;
    /** Day of month, 1-indexed */
    day: number;
}
/** Language used when rendering labels and digits. */
type CalendarLanguage = 'en' | 'np';
/** A single cell in the month grid produced by {@link generateMonthGrid}. */
interface CalendarDay {
    /** The Bikram Sambat date this cell represents. */
    bs: BsDate;
    /** The equivalent Gregorian date. */
    ad: AdDate;
    /** Day-of-week index, 0 = Sunday ... 6 = Saturday. */
    weekday: number;
    /** True when the cell belongs to the month currently being displayed. */
    isCurrentMonth: boolean;
    /** True when the cell matches today's date. */
    isToday: boolean;
    /** True when the cell matches the externally selected date. */
    isSelected: boolean;
    /** True for Saturday — the public weekend in Nepal. */
    isWeekend: boolean;
}
/** A fully generated month, ready to be rendered by any UI layer. */
interface MonthGrid {
    /** BS year of the displayed month. */
    year: number;
    /** BS month (1-indexed) of the displayed month. */
    month: number;
    /** Number of days in this BS month. */
    daysInMonth: number;
    /** Weekday index (0-6) on which the 1st of the month falls. */
    startWeekday: number;
    /**
     * Flat list of 42 cells (6 weeks * 7 days). Leading/trailing cells belong to
     * the adjacent months and carry `isCurrentMonth: false`.
     */
    days: CalendarDay[];
    /** The same cells chunked into weeks for convenient row rendering. */
    weeks: CalendarDay[][];
}
/** Options accepted by {@link generateMonthGrid}. */
interface GenerateMonthGridOptions {
    /** Whether to pad the grid with leading/trailing days from sibling months. */
    fillAdjacent?: boolean;
    /** The currently selected BS date used to flag `isSelected`. */
    selected?: BsDate | null;
    /** The BS date treated as "today" used to flag `isToday`. Defaults to now. */
    today?: BsDate | null;
}

/** Number of days in a given BS month (month is 1-indexed). */
declare const getBsMonthDays: (year: number, month: number) => number;
/** Total number of days in a given BS year. */
declare const getBsYearDays: (year: number) => number;
/** Convert a Bikram Sambat date to its Gregorian (AD) equivalent. */
declare const bsToAd: (date: BsDate) => AdDate;
/** Convert a Gregorian (AD) date to its Bikram Sambat equivalent. */
declare const adToBs: (date: AdDate) => BsDate;
/** Weekday (0 = Sunday ... 6 = Saturday) for a Bikram Sambat date. */
declare const getBsWeekday: (date: BsDate) => number;
/** Convert a JS Date (interpreted in local time) to a Bikram Sambat date. */
declare const jsDateToBs: (input: Date) => BsDate;
/** Convert a Bikram Sambat date to a JS Date at local midnight. */
declare const bsToJsDate: (date: BsDate) => Date;
/** Today's date expressed in Bikram Sambat. */
declare const getTodayBs: () => BsDate;

/**
 * Generate the displayable grid for a given BS year/month.
 *
 * When `fillAdjacent` is true (the default) the grid is padded to a full 42
 * cells using days from the previous and next months so every week row is
 * complete; those cells carry `isCurrentMonth: false`.
 */
declare const generateMonthGrid: (year: number, month: number, options?: GenerateMonthGridOptions) => MonthGrid;
/** Resolve the BS month that contains a given Gregorian date. */
declare const monthGridForAd: (adYear: number, adMonth: number, adDay: number, options?: GenerateMonthGridOptions) => MonthGrid;
/** Options accepted by {@link generateGregorianGrid}. */
interface GenerateGregorianGridOptions {
    fillAdjacent?: boolean;
    selectedAd?: AdDate | null;
    todayAd?: AdDate | null;
}
/**
 * Generate a standard Gregorian (English) month grid. Mirrors
 * {@link generateMonthGrid} but is driven by AD year/month so the calendar can
 * be viewed in the English system. Each cell still carries its BS equivalent.
 */
declare const generateGregorianGrid: (year: number, month: number, options?: GenerateGregorianGridOptions) => MonthGrid;

/** True when two BS dates refer to the same calendar day. */
declare const isSameBsDate: (a: BsDate | null | undefined, b: BsDate | null | undefined) => boolean;
/** True when two BS dates fall in the same month of the same year. */
declare const isSameBsMonth: (a: BsDate, b: BsDate) => boolean;
/** Clamp a BS date's day so it never exceeds the length of its month. */
declare const clampBsDay: (date: BsDate) => BsDate;
/**
 * Move a BS year/month pair by a number of months (positive or negative),
 * rolling over year boundaries. Results are clamped to the supported range.
 */
declare const addBsMonths: (year: number, month: number, delta: number) => {
    year: number;
    month: number;
};
/** True when navigating one month back stays within the supported range. */
declare const canGoPrevMonth: (year: number, month: number) => boolean;
/** True when navigating one month forward stays within the supported range. */
declare const canGoNextMonth: (year: number, month: number) => boolean;
/** Inclusive list of supported BS years, useful for year-picker dropdowns. */
declare const getSupportedYears: () => number[];

/**
 * Bikram Sambat calendar dataset.
 *
 * Each entry maps a BS year to the number of days in each of its 12 months,
 * starting with Baisakh (index 0) and ending with Chaitra (index 11).
 *
 * The dataset is anchored to the reference point below: 1 Baisakh 2000 BS
 * corresponds to 14 April 1943 AD. All conversions count days forward/backward
 * from this anchor, so the table must remain contiguous and complete.
 */
/** Days-per-month table, keyed by Bikram Sambat year. */
declare const BS_MONTH_DATA: Readonly<Record<number, readonly number[]>>;
/**
 * Reference anchor: the first day of the dataset (1 Baisakh 2000 BS) expressed
 * as a Gregorian date. 1 Baisakh 2000 BS = 14 April 1943 AD.
 */
declare const REFERENCE_BS: {
    readonly year: 2000;
    readonly month: 1;
    readonly day: 1;
};
declare const REFERENCE_AD: {
    readonly year: 1943;
    readonly month: 4;
    readonly day: 14;
};
/** Inclusive lower bound of supported BS years. */
declare const MIN_BS_YEAR = 2000;
/** Inclusive upper bound of supported BS years. */
declare const MAX_BS_YEAR = 2088;

/**
 * Static label tables for months and weekdays in both English and Nepali
 * (Devanagari) scripts. UI layers pick the appropriate array based on the
 * active {@link CalendarLanguage}.
 */

/** Bikram Sambat month names, indexed 0 (Baisakh) - 11 (Chaitra). */
declare const NEPALI_MONTHS: Readonly<Record<CalendarLanguage, readonly string[]>>;
/** Gregorian month names, indexed 0 (January) - 11 (December). */
declare const GREGORIAN_MONTHS: readonly string[];
/** Full weekday names, indexed 0 (Sunday) - 6 (Saturday). */
declare const WEEKDAYS: Readonly<Record<CalendarLanguage, readonly string[]>>;
/** Short weekday labels for the calendar header row. */
declare const WEEKDAYS_SHORT: Readonly<Record<CalendarLanguage, readonly string[]>>;

/**
 * Devanagari digit helpers. Conversions are purely string-based so they remain
 * framework-agnostic and lossless for any non-negative integer input.
 */

/** Convert an Arabic-numeral value to Devanagari digits. */
declare const toNepaliDigits: (value: number | string) => string;
/** Convert Devanagari digits back to Arabic numerals. */
declare const toEnglishDigits: (value: string) => string;
/** Format a number using the script appropriate for the given language. */
declare const formatNumber: (value: number, language: CalendarLanguage) => string;

/** Configuration for {@link useNepaliCalendar}. */
interface UseNepaliCalendarOptions {
    /** Initially displayed/selected BS date. Defaults to today. */
    initialDate?: BsDate;
    /** Currently selected date (controlled mode). */
    value?: BsDate | null;
    /** Fires whenever the user picks a day. */
    onChange?: (date: BsDate) => void;
    /** Label language. Defaults to `'en'`. */
    language?: CalendarLanguage;
}
/** Everything a UI layer needs to render and drive a month view. */
interface UseNepaliCalendarResult {
    /** The displayable grid for the visible month. */
    grid: MonthGrid;
    /** BS year currently shown. */
    year: number;
    /** BS month (1-indexed) currently shown. */
    month: number;
    /** The selected BS date, or null when nothing is selected. */
    selected: BsDate | null;
    /** Localized name of the visible BS month. */
    monthLabel: string;
    /** Localized year, using Devanagari digits when language is `'np'`. */
    yearLabel: string;
    /** Gregorian span covering the visible BS month, e.g. "Apr/May 2024". */
    gregorianLabel: string;
    /** Go to the previous month (no-op at the lower bound). */
    goPrevMonth: () => void;
    /** Go to the next month (no-op at the upper bound). */
    goNextMonth: () => void;
    /** Jump to an arbitrary BS year/month. */
    goToMonth: (year: number, month: number) => void;
    /** Jump the view back to today's month. */
    goToday: () => void;
    /** Select a specific BS date (also moves the view to its month). */
    selectDate: (date: BsDate) => void;
    /** Whether navigating back is possible. */
    canGoPrev: boolean;
    /** Whether navigating forward is possible. */
    canGoNext: boolean;
}
declare const useNepaliCalendar: (options?: UseNepaliCalendarOptions) => UseNepaliCalendarResult;

/** Inclusive AD navigation bounds (kept within the BS dataset's coverage). */
declare const AD_MIN_YEAR = 1944;
declare const AD_MAX_YEAR = 2030;
interface UseGregorianCalendarOptions {
    /** Currently selected AD date (controlled). */
    value?: AdDate | null;
    /** Fires whenever the user picks a day. */
    onChange?: (date: AdDate) => void;
}
interface UseGregorianCalendarResult {
    grid: MonthGrid;
    year: number;
    month: number;
    selected: AdDate | null;
    monthLabel: string;
    yearLabel: string;
    goPrevMonth: () => void;
    goNextMonth: () => void;
    goToMonth: (year: number, month: number) => void;
    selectDate: (date: AdDate) => void;
    canGoPrev: boolean;
    canGoNext: boolean;
}
declare const useGregorianCalendar: (options?: UseGregorianCalendarOptions) => UseGregorianCalendarResult;

/** Configuration for {@link useNepaliDatePicker}. */
interface UseNepaliDatePickerOptions {
    /** The committed value shown when the picker opens. */
    value?: BsDate | null;
    /** Fires when the user confirms a new selection. */
    onConfirm?: (date: BsDate) => void;
    /** Label language. Defaults to `'en'`. */
    language?: CalendarLanguage;
}
/** Everything a date-picker UI needs. */
interface UseNepaliDatePickerResult {
    /** The underlying calendar controller (grid, navigation, labels). */
    calendar: UseNepaliCalendarResult;
    /** The pending (not yet confirmed) selection. */
    draft: BsDate | null;
    /** Set the pending selection without committing it. */
    setDraft: (date: BsDate) => void;
    /** Commit the pending selection via `onConfirm`. */
    confirm: () => void;
    /** Discard the pending selection and revert to the committed value. */
    reset: () => void;
    /** True when the draft differs from the committed value. */
    isDirty: boolean;
    /** A human-readable label for the committed value, e.g. "14 Falgun 2081". */
    formattedValue: string;
    /** A human-readable label for the draft selection. */
    formattedDraft: string;
}
/** Format a BS date as "<day> <Month> <year>" in the requested language. */
declare const formatBsDate: (date: BsDate | null, language?: CalendarLanguage) => string;
declare const useNepaliDatePicker: (options?: UseNepaliDatePickerOptions) => UseNepaliDatePickerResult;

export { AD_MAX_YEAR, AD_MIN_YEAR, type AdDate, BS_MONTH_DATA, type BsDate, type CalendarDay, type CalendarLanguage, GREGORIAN_MONTHS, type GenerateGregorianGridOptions, type GenerateMonthGridOptions, MAX_BS_YEAR, MIN_BS_YEAR, type MonthGrid, NEPALI_MONTHS, REFERENCE_AD, REFERENCE_BS, type UseGregorianCalendarOptions, type UseGregorianCalendarResult, type UseNepaliCalendarOptions, type UseNepaliCalendarResult, type UseNepaliDatePickerOptions, type UseNepaliDatePickerResult, WEEKDAYS, WEEKDAYS_SHORT, adToBs, addBsMonths, bsToAd, bsToJsDate, canGoNextMonth, canGoPrevMonth, clampBsDay, formatBsDate, formatNumber, generateGregorianGrid, generateMonthGrid, getBsMonthDays, getBsWeekday, getBsYearDays, getSupportedYears, getTodayBs, isSameBsDate, isSameBsMonth, jsDateToBs, monthGridForAd, toEnglishDigits, toNepaliDigits, useGregorianCalendar, useNepaliCalendar, useNepaliDatePicker };
