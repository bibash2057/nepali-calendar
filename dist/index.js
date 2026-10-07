// core/data/calendarData.ts
var BS_MONTH_DATA = {
  2e3: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2001: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2002: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2003: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2004: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2005: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2006: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2007: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2008: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  2009: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2010: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2011: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2012: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2013: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2014: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2015: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2016: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2017: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2018: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2019: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2020: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  2021: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2022: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  2023: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2024: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  2025: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2026: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2027: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2028: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2029: [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
  2030: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2031: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2032: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2033: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2034: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2035: [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  2036: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2037: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2038: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2039: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2040: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2041: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2042: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2043: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2044: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2045: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2046: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2047: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  2048: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2049: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  2050: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2051: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  2052: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2053: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  2054: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2055: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2056: [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
  2057: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2058: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2059: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2060: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2061: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2062: [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31],
  2063: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2064: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2065: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2066: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  2067: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2068: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2069: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2070: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2071: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2072: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2073: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2074: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  2075: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2076: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  2077: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2078: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  2079: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2080: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  2081: [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  2082: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  2083: [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
  2084: [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
  2085: [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30],
  2086: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  2087: [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
  2088: [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30]
};
var REFERENCE_BS = { year: 2e3, month: 1, day: 1 };
var REFERENCE_AD = { year: 1943, month: 4, day: 14 };
var MIN_BS_YEAR = 2e3;
var MAX_BS_YEAR = 2088;

// core/converter.ts
var MS_PER_DAY = 24 * 60 * 60 * 1e3;
var REFERENCE_AD_MS = Date.UTC(REFERENCE_AD.year, REFERENCE_AD.month - 1, REFERENCE_AD.day);
var getBsMonthDays = (year, month) => {
  const months = BS_MONTH_DATA[year];
  if (!months) {
    throw new RangeError(
      `Bikram Sambat year ${year} is outside the supported range ${MIN_BS_YEAR}-${MAX_BS_YEAR}.`
    );
  }
  if (month < 1 || month > 12) {
    throw new RangeError(`BS month must be between 1 and 12, received ${month}.`);
  }
  return months[month - 1];
};
var getBsYearDays = (year) => {
  const months = BS_MONTH_DATA[year];
  if (!months) {
    throw new RangeError(
      `Bikram Sambat year ${year} is outside the supported range ${MIN_BS_YEAR}-${MAX_BS_YEAR}.`
    );
  }
  return months.reduce((sum, days) => sum + days, 0);
};
var bsToDayOffset = (date) => {
  const { year, month, day } = date;
  if (year < MIN_BS_YEAR || year > MAX_BS_YEAR) {
    throw new RangeError(
      `Bikram Sambat year ${year} is outside the supported range ${MIN_BS_YEAR}-${MAX_BS_YEAR}.`
    );
  }
  let offset = 0;
  for (let y = MIN_BS_YEAR; y < year; y += 1) {
    offset += getBsYearDays(y);
  }
  for (let m = 1; m < month; m += 1) {
    offset += getBsMonthDays(year, m);
  }
  offset += day - 1;
  return offset;
};
var bsToAd = (date) => {
  const offset = bsToDayOffset(date);
  const result = new Date(REFERENCE_AD_MS + offset * MS_PER_DAY);
  return {
    year: result.getUTCFullYear(),
    month: result.getUTCMonth() + 1,
    day: result.getUTCDate()
  };
};
var adToBs = (date) => {
  const targetMs = Date.UTC(date.year, date.month - 1, date.day);
  let remaining = Math.round((targetMs - REFERENCE_AD_MS) / MS_PER_DAY);
  if (remaining < 0) {
    throw new RangeError(
      `Gregorian date ${date.year}-${date.month}-${date.day} is before the supported range.`
    );
  }
  let year = MIN_BS_YEAR;
  while (year <= MAX_BS_YEAR) {
    const yearDays = getBsYearDays(year);
    if (remaining < yearDays) break;
    remaining -= yearDays;
    year += 1;
  }
  if (year > MAX_BS_YEAR) {
    throw new RangeError(
      `Gregorian date ${date.year}-${date.month}-${date.day} is after the supported range.`
    );
  }
  let month = 1;
  while (month <= 12) {
    const monthDays = getBsMonthDays(year, month);
    if (remaining < monthDays) break;
    remaining -= monthDays;
    month += 1;
  }
  return { year, month, day: remaining + 1 };
};
var getBsWeekday = (date) => {
  const ad = bsToAd(date);
  return new Date(Date.UTC(ad.year, ad.month - 1, ad.day)).getUTCDay();
};
var jsDateToBs = (input) => adToBs({ year: input.getFullYear(), month: input.getMonth() + 1, day: input.getDate() });
var bsToJsDate = (date) => {
  const ad = bsToAd(date);
  return new Date(ad.year, ad.month - 1, ad.day);
};
var getTodayBs = () => jsDateToBs(/* @__PURE__ */ new Date());

// core/utils.ts
var isSameBsDate = (a, b) => !!a && !!b && a.year === b.year && a.month === b.month && a.day === b.day;
var isSameBsMonth = (a, b) => a.year === b.year && a.month === b.month;
var clampBsDay = (date) => {
  const maxDay = getBsMonthDays(date.year, date.month);
  return { ...date, day: Math.min(Math.max(date.day, 1), maxDay) };
};
var addBsMonths = (year, month, delta) => {
  const absolute = year * 12 + (month - 1) + delta;
  let nextYear = Math.floor(absolute / 12);
  let nextMonth = absolute % 12 + 1;
  if (nextYear < MIN_BS_YEAR) {
    nextYear = MIN_BS_YEAR;
    nextMonth = 1;
  } else if (nextYear > MAX_BS_YEAR) {
    nextYear = MAX_BS_YEAR;
    nextMonth = 12;
  }
  return { year: nextYear, month: nextMonth };
};
var canGoPrevMonth = (year, month) => !(year <= MIN_BS_YEAR && month <= 1);
var canGoNextMonth = (year, month) => !(year >= MAX_BS_YEAR && month >= 12);
var getSupportedYears = () => {
  const years = [];
  for (let y = MIN_BS_YEAR; y <= MAX_BS_YEAR; y += 1) years.push(y);
  return years;
};

// core/grid.ts
var DAYS_IN_WEEK = 7;
var TOTAL_CELLS = 42;
var isSame = (a, b) => !!b && a.year === b.year && a.month === b.month && a.day === b.day;
var buildDay = (bs, isCurrentMonth, today, selected) => {
  const ad = bsToAd(bs);
  const weekday = new Date(Date.UTC(ad.year, ad.month - 1, ad.day)).getUTCDay();
  return {
    bs,
    ad,
    weekday,
    isCurrentMonth,
    isToday: isSame(bs, today),
    isSelected: isSame(bs, selected),
    isWeekend: weekday === 6
    // Saturday is the public holiday in Nepal.
  };
};
var generateMonthGrid = (year, month, options = {}) => {
  const { fillAdjacent = true, selected = null, today = getTodayBs() } = options;
  const daysInMonth = getBsMonthDays(year, month);
  const startWeekday = getBsWeekday({ year, month, day: 1 });
  const days = [];
  if (fillAdjacent && startWeekday > 0) {
    const prev = addBsMonths(year, month, -1);
    const prevDays = getBsMonthDays(prev.year, prev.month);
    for (let i = startWeekday - 1; i >= 0; i -= 1) {
      const day = prevDays - i;
      days.push(buildDay({ year: prev.year, month: prev.month, day }, false, today, selected));
    }
  }
  for (let day = 1; day <= daysInMonth; day += 1) {
    days.push(buildDay({ year, month, day }, true, today, selected));
  }
  if (fillAdjacent) {
    const next = addBsMonths(year, month, 1);
    let nextDay = 1;
    while (days.length < TOTAL_CELLS) {
      days.push(buildDay({ year: next.year, month: next.month, day: nextDay }, false, today, selected));
      nextDay += 1;
    }
  }
  const weeks = [];
  for (let i = 0; i < days.length; i += DAYS_IN_WEEK) {
    weeks.push(days.slice(i, i + DAYS_IN_WEEK));
  }
  return { year, month, daysInMonth, startWeekday, days, weeks };
};
var monthGridForAd = (adYear, adMonth, adDay, options) => {
  const bs = adToBs({ year: adYear, month: adMonth, day: adDay });
  return generateMonthGrid(bs.year, bs.month, options);
};
var ZERO_BS = { year: 0, month: 0, day: 0 };
var sameAd = (a, b) => !!b && a.year === b.year && a.month === b.month && a.day === b.day;
var safeAdToBs = (ad) => {
  try {
    return adToBs(ad);
  } catch {
    return ZERO_BS;
  }
};
var buildAdDay = (ad, isCurrentMonth, today, selected) => {
  const weekday = new Date(Date.UTC(ad.year, ad.month - 1, ad.day)).getUTCDay();
  return {
    bs: safeAdToBs(ad),
    ad,
    weekday,
    isCurrentMonth,
    isToday: sameAd(ad, today),
    isSelected: sameAd(ad, selected),
    isWeekend: weekday === 6
  };
};
var shiftAdMonth = (year, month, delta) => {
  const absolute = year * 12 + (month - 1) + delta;
  return { year: Math.floor(absolute / 12), month: absolute % 12 + 1 };
};
var daysInAdMonth = (year, month) => new Date(Date.UTC(year, month, 0)).getUTCDate();
var generateGregorianGrid = (year, month, options = {}) => {
  const today = options.todayAd === void 0 ? (() => {
    const now = /* @__PURE__ */ new Date();
    return { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
  })() : options.todayAd;
  const selected = options.selectedAd ?? null;
  const fillAdjacent = options.fillAdjacent ?? true;
  const daysInMonth = daysInAdMonth(year, month);
  const startWeekday = new Date(Date.UTC(year, month - 1, 1)).getUTCDay();
  const days = [];
  if (fillAdjacent && startWeekday > 0) {
    const prev = shiftAdMonth(year, month, -1);
    const prevDays = daysInAdMonth(prev.year, prev.month);
    for (let i = startWeekday - 1; i >= 0; i -= 1) {
      days.push(buildAdDay({ year: prev.year, month: prev.month, day: prevDays - i }, false, today, selected));
    }
  }
  for (let day = 1; day <= daysInMonth; day += 1) {
    days.push(buildAdDay({ year, month, day }, true, today, selected));
  }
  if (fillAdjacent) {
    const next = shiftAdMonth(year, month, 1);
    let nextDay = 1;
    while (days.length < TOTAL_CELLS) {
      days.push(buildAdDay({ year: next.year, month: next.month, day: nextDay }, false, today, selected));
      nextDay += 1;
    }
  }
  const weeks = [];
  for (let i = 0; i < days.length; i += DAYS_IN_WEEK) {
    weeks.push(days.slice(i, i + DAYS_IN_WEEK));
  }
  return { year, month, daysInMonth, startWeekday, days, weeks };
};

// core/data/months.ts
var NEPALI_MONTHS = {
  en: [
    "Baisakh",
    "Jestha",
    "Ashadh",
    "Shrawan",
    "Bhadra",
    "Ashwin",
    "Kartik",
    "Mangsir",
    "Poush",
    "Magh",
    "Falgun",
    "Chaitra"
  ],
  np: [
    "\u092C\u0948\u0936\u093E\u0916",
    "\u091C\u0947\u0920",
    "\u0905\u0938\u093E\u0930",
    "\u0938\u093E\u0909\u0928",
    "\u092D\u0926\u094C",
    "\u0905\u0938\u094B\u091C",
    "\u0915\u093E\u0930\u094D\u0924\u093F\u0915",
    "\u092E\u0902\u0938\u093F\u0930",
    "\u092A\u0941\u0937",
    "\u092E\u093E\u0918",
    "\u092B\u093E\u0917\u0941\u0928",
    "\u091A\u0948\u0924"
  ]
};
var GREGORIAN_MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var WEEKDAYS = {
  en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  np: ["\u0906\u0907\u0924\u092C\u093E\u0930", "\u0938\u094B\u092E\u092C\u093E\u0930", "\u092E\u0902\u0917\u0932\u092C\u093E\u0930", "\u092C\u0941\u0927\u092C\u093E\u0930", "\u092C\u093F\u0939\u0940\u092C\u093E\u0930", "\u0936\u0941\u0915\u094D\u0930\u092C\u093E\u0930", "\u0936\u0928\u093F\u092C\u093E\u0930"]
};
var WEEKDAYS_SHORT = {
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  np: ["\u0906", "\u0938\u094B", "\u092E\u0902", "\u092C\u0941", "\u092C\u093F", "\u0936\u0941", "\u0936"]
};

// core/data/digits.ts
var NEPALI_DIGITS = ["\u0966", "\u0967", "\u0968", "\u0969", "\u096A", "\u096B", "\u096C", "\u096D", "\u096E", "\u096F"];
var toNepaliDigits = (value) => String(value).replace(/[0-9]/g, (d) => NEPALI_DIGITS[Number(d)]);
var toEnglishDigits = (value) => value.replace(/[०-९]/g, (d) => String(NEPALI_DIGITS.indexOf(d)));
var formatNumber = (value, language) => language === "np" ? toNepaliDigits(value) : String(value);

// hooks/useNepaliCalendar.ts
import { useCallback, useMemo, useState } from "react";
var buildGregorianLabel = (year, month) => {
  const start = bsToAd({ year, month, day: 1 });
  const next = addBsMonths(year, month, 1);
  const startName = GREGORIAN_MONTHS[start.month - 1].slice(0, 3);
  const nextStart = bsToAd({ year: next.year, month: next.month, day: 1 });
  const endMs = new Date(Date.UTC(nextStart.year, nextStart.month - 1, nextStart.day - 1));
  const endName = GREGORIAN_MONTHS[endMs.getUTCMonth()].slice(0, 3);
  const endYear = endMs.getUTCFullYear();
  if (startName === endName) return `${startName} ${start.year}`;
  if (start.year === endYear) return `${startName}/${endName} ${start.year}`;
  return `${startName} ${start.year}/${endName} ${endYear}`;
};
var useNepaliCalendar = (options = {}) => {
  const { initialDate, value, onChange, language = "en" } = options;
  const today = useMemo(() => getTodayBs(), []);
  const start = initialDate ?? value ?? today;
  const [view, setView] = useState({
    year: start.year,
    month: start.month
  });
  const [internalSelected, setInternalSelected] = useState(
    initialDate ?? null
  );
  const isControlled = value !== void 0;
  const selected = isControlled ? value ?? null : internalSelected;
  const goToMonth = useCallback((y, m) => {
    const next = addBsMonths(y, m, 0);
    setView({ year: next.year, month: next.month });
  }, []);
  const goPrevMonth = useCallback(() => {
    setView((prev) => addBsMonths(prev.year, prev.month, -1));
  }, []);
  const goNextMonth = useCallback(() => {
    setView((prev) => addBsMonths(prev.year, prev.month, 1));
  }, []);
  const goToday = useCallback(() => {
    setView({ year: today.year, month: today.month });
  }, [today]);
  const selectDate = useCallback(
    (date) => {
      const safe = clampBsDay(date);
      setView({ year: safe.year, month: safe.month });
      if (!isControlled) setInternalSelected(safe);
      onChange?.(safe);
    },
    [isControlled, onChange]
  );
  const grid = useMemo(
    () => generateMonthGrid(view.year, view.month, {
      selected,
      today,
      fillAdjacent: true
    }),
    [view.year, view.month, selected, today]
  );
  const monthLabel = NEPALI_MONTHS[language][view.month - 1];
  const yearLabel = formatNumber(view.year, language);
  const gregorianLabel = useMemo(
    () => buildGregorianLabel(view.year, view.month),
    [view.year, view.month]
  );
  return {
    grid,
    year: view.year,
    month: view.month,
    selected,
    monthLabel,
    yearLabel,
    gregorianLabel,
    goPrevMonth,
    goNextMonth,
    goToMonth,
    goToday,
    selectDate,
    canGoPrev: canGoPrevMonth(view.year, view.month),
    canGoNext: canGoNextMonth(view.year, view.month)
  };
};

// hooks/useGregorianCalendar.ts
import { useCallback as useCallback2, useMemo as useMemo2, useState as useState2 } from "react";
var AD_MIN_YEAR = 1944;
var AD_MAX_YEAR = 2030;
var todayAd = () => {
  const now = /* @__PURE__ */ new Date();
  return { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
};
var shift = (year, month, delta) => {
  const absolute = year * 12 + (month - 1) + delta;
  let y = Math.floor(absolute / 12);
  let m = absolute % 12 + 1;
  if (y < AD_MIN_YEAR) {
    y = AD_MIN_YEAR;
    m = 1;
  } else if (y > AD_MAX_YEAR) {
    y = AD_MAX_YEAR;
    m = 12;
  }
  return { year: y, month: m };
};
var useGregorianCalendar = (options = {}) => {
  const { value, onChange } = options;
  const start = value ?? todayAd();
  const [view, setView] = useState2({
    year: start.year,
    month: start.month
  });
  const selected = value ?? null;
  const goToMonth = useCallback2((y, m) => {
    setView(shift(y, m, 0));
  }, []);
  const goPrevMonth = useCallback2(() => {
    setView((prev) => shift(prev.year, prev.month, -1));
  }, []);
  const goNextMonth = useCallback2(() => {
    setView((prev) => shift(prev.year, prev.month, 1));
  }, []);
  const selectDate = useCallback2(
    (date) => {
      setView({ year: date.year, month: date.month });
      onChange?.(date);
    },
    [onChange]
  );
  const grid = useMemo2(
    () => generateGregorianGrid(view.year, view.month, { selectedAd: selected }),
    [view.year, view.month, selected]
  );
  return {
    grid,
    year: view.year,
    month: view.month,
    selected,
    monthLabel: GREGORIAN_MONTHS[view.month - 1],
    yearLabel: String(view.year),
    goPrevMonth,
    goNextMonth,
    goToMonth,
    selectDate,
    canGoPrev: !(view.year <= AD_MIN_YEAR && view.month <= 1),
    canGoNext: !(view.year >= AD_MAX_YEAR && view.month >= 12)
  };
};

// hooks/useNepaliDatePicker.ts
import { useCallback as useCallback3, useMemo as useMemo3, useState as useState3 } from "react";
var formatBsDate = (date, language = "en") => {
  if (!date) return "";
  const day = formatNumber(date.day, language);
  const year = formatNumber(date.year, language);
  const month = NEPALI_MONTHS[language][date.month - 1];
  return `${day} ${month} ${year}`;
};
var useNepaliDatePicker = (options = {}) => {
  const { value = null, onConfirm, language = "en" } = options;
  const [draft, setDraftState] = useState3(value);
  const calendar = useNepaliCalendar({
    initialDate: value ?? getTodayBs(),
    value: draft,
    language,
    onChange: setDraftState
  });
  const setDraft = useCallback3((date) => {
    setDraftState(date);
  }, []);
  const confirm = useCallback3(() => {
    if (draft) onConfirm?.(draft);
  }, [draft, onConfirm]);
  const reset = useCallback3(() => {
    setDraftState(value);
    if (value) calendar.goToMonth(value.year, value.month);
  }, [value, calendar]);
  const isDirty = !isSameBsDate(draft, value);
  const formattedValue = useMemo3(() => formatBsDate(value, language), [value, language]);
  const formattedDraft = useMemo3(() => formatBsDate(draft, language), [draft, language]);
  return {
    calendar,
    draft,
    setDraft,
    confirm,
    reset,
    isDirty,
    formattedValue,
    formattedDraft
  };
};
export {
  AD_MAX_YEAR,
  AD_MIN_YEAR,
  BS_MONTH_DATA,
  GREGORIAN_MONTHS,
  MAX_BS_YEAR,
  MIN_BS_YEAR,
  NEPALI_MONTHS,
  REFERENCE_AD,
  REFERENCE_BS,
  WEEKDAYS,
  WEEKDAYS_SHORT,
  adToBs,
  addBsMonths,
  bsToAd,
  bsToJsDate,
  canGoNextMonth,
  canGoPrevMonth,
  clampBsDay,
  formatBsDate,
  formatNumber,
  generateGregorianGrid,
  generateMonthGrid,
  getBsMonthDays,
  getBsWeekday,
  getBsYearDays,
  getSupportedYears,
  getTodayBs,
  isSameBsDate,
  isSameBsMonth,
  jsDateToBs,
  monthGridForAd,
  toEnglishDigits,
  toNepaliDigits,
  useGregorianCalendar,
  useNepaliCalendar,
  useNepaliDatePicker
};
