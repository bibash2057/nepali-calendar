/**
 * Headless date-picker state hook.
 *
 * Layers a "draft selection + confirm/cancel" workflow on top of
 * {@link useNepaliCalendar}, which is exactly what a bottom-sheet date picker
 * needs: the user taps around freely and the committed value only changes when
 * they confirm. Still entirely headless — no UI is rendered here.
 */
import { useCallback, useMemo, useState } from 'react';
import { useNepaliCalendar } from './useNepaliCalendar';
import type { UseNepaliCalendarResult } from './useNepaliCalendar';
import { getTodayBs, NEPALI_MONTHS, formatNumber } from '../core';
import { isSameBsDate } from '../core/utils';
import type { BsDate, CalendarLanguage } from '../core/types';

/** Configuration for {@link useNepaliDatePicker}. */
export interface UseNepaliDatePickerOptions {
  /** The committed value shown when the picker opens. */
  value?: BsDate | null;
  /** Fires when the user confirms a new selection. */
  onConfirm?: (date: BsDate) => void;
  /** Label language. Defaults to `'en'`. */
  language?: CalendarLanguage;
}

/** Everything a date-picker UI needs. */
export interface UseNepaliDatePickerResult {
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
export const formatBsDate = (
  date: BsDate | null,
  language: CalendarLanguage = 'en'
): string => {
  if (!date) return '';
  const day = formatNumber(date.day, language);
  const year = formatNumber(date.year, language);
  const month = NEPALI_MONTHS[language][date.month - 1];
  return `${day} ${month} ${year}`;
};

export const useNepaliDatePicker = (
  options: UseNepaliDatePickerOptions = {}
): UseNepaliDatePickerResult => {
  const { value = null, onConfirm, language = 'en' } = options;

  const [draft, setDraftState] = useState<BsDate | null>(value);

  const calendar = useNepaliCalendar({
    initialDate: value ?? getTodayBs(),
    value: draft,
    language,
    onChange: setDraftState,
  });

  const setDraft = useCallback((date: BsDate) => {
    setDraftState(date);
  }, []);

  const confirm = useCallback(() => {
    if (draft) onConfirm?.(draft);
  }, [draft, onConfirm]);

  const reset = useCallback(() => {
    setDraftState(value);
    if (value) calendar.goToMonth(value.year, value.month);
  }, [value, calendar]);

  const isDirty = !isSameBsDate(draft, value);

  const formattedValue = useMemo(() => formatBsDate(value, language), [value, language]);
  const formattedDraft = useMemo(() => formatBsDate(draft, language), [draft, language]);

  return {
    calendar,
    draft,
    setDraft,
    confirm,
    reset,
    isDirty,
    formattedValue,
    formattedDraft,
  };
};
