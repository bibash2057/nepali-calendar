# Nepali Calendar (Bikram Sambat)

A self-contained, copy-paste portable **Bikram Sambat (BS)** calendar package for
React Native. Strictly split into two independent layers that live in the same
folder:

1. **Logic Layer (Headless Core)** — `core/`. Pure TypeScript. No React, no React
   Native, no UI. Date conversion, month-grid generation, and helpers.
2. **UI Layer** — `components/` (with headless React state in `hooks/`). A clean,
   themeable calendar and bottom-sheet date picker that consume the core.

> **Portability:** copy the entire `nepali-calendar/` folder into any React
> Native project and it works. Zero external dependencies beyond `react`,
> `react-native`, and — for the `DatePickerSheet` only — `@gorhom/bottom-sheet`.

---

## Folder structure

```
nepali-calendar/
├── core/                 # Headless logic — pure TS, framework-agnostic
│   ├── data/
│   │   ├── calendarData.ts   # BS month-length table + AD reference anchor
│   │   ├── months.ts         # Month / weekday labels (en + np)
│   │   ├── digits.ts         # Devanagari digit helpers
│   │   └── index.ts
│   ├── types.ts          # Shared types (BsDate, AdDate, CalendarDay, ...)
│   ├── converter.ts      # bsToAd / adToBs and friends
│   ├── grid.ts           # generateMonthGrid
│   ├── utils.ts          # equality, clamping, month navigation
│   └── index.ts
├── hooks/                # Headless React state — no UI
│   ├── useNepaliCalendar.ts
│   ├── useNepaliDatePicker.ts
│   └── index.ts
├── components/           # React Native UI
│   ├── Calendar.tsx
│   ├── CalendarHeader.tsx
│   ├── CalendarGrid.tsx
│   ├── DayCell.tsx
│   ├── DatePickerSheet.tsx
│   ├── theme.ts          # Color contract + light/dark defaults
│   └── index.ts
├── index.ts              # Public entry — re-exports all three layers
└── README.md
```

---

## Quick start

### 1. Inline calendar

```tsx
import { Calendar, type BsDate } from '@/packages/nepali-calendar';

function Example() {
  const [date, setDate] = useState<BsDate | null>(null);

  return (
    <Calendar
      value={date}
      onChange={setDate}
      language="np"      // 'en' | 'np'
      mode="light"       // 'light' | 'dark'
      showAdDay          // show the small AD day under each BS day
    />
  );
}
```

### 2. Bottom-sheet date picker

Wrap your app root once (required by `@gorhom/bottom-sheet`):

```tsx
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

<GestureHandlerRootView style={{ flex: 1 }}>
  <BottomSheetModalProvider>{/* app */}</BottomSheetModalProvider>
</GestureHandlerRootView>;
```

Then present the sheet imperatively via its ref:

```tsx
import { useRef } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { DatePickerSheet, formatBsDate, type BsDate } from '@/packages/nepali-calendar';

function Example() {
  const sheet = useRef<BottomSheetModal>(null);
  const [value, setValue] = useState<BsDate | null>(null);

  return (
    <>
      <Button title={value ? formatBsDate(value, 'en') : 'Pick a date'}
              onPress={() => sheet.current?.present()} />

      <DatePickerSheet
        ref={sheet}
        value={value}
        onConfirm={setValue}
        mode="dark"
      />
    </>
  );
}
```

**Interaction:** tapping a day selects it (brand-filled circle), fires
`onConfirm`, and closes the sheet immediately — there is no confirm button.
Tapping the **month** or **year** in the header opens a dedicated picker sheet
(clean scrollable month / year lists) that updates the calendar on tap.

**Language toggle:** pass `onLanguageChange` (alongside `language`) to render an
EN / नेप segmented toggle in the sheet. The package stays state-agnostic — the
consumer owns persistence. In this app `NepaliDateField` wires it to the
MMKV-backed `useCalendarPreference` store, so the choice persists app-wide.

**English (AD) view:** `GregorianDatePickerSheet` is the AD counterpart of
`DatePickerSheet` (same interaction; built on `useGregorianCalendar` +
`generateGregorianGrid`). The app's `useCalendarPreference` lets users switch
between the Nepali (BS) and English (AD) calendars from the More → Calendar
screen; either way the field stores Gregorian `YYYY-MM-DD`.

> **In-app theming:** within this project the default `light`/`dark` themes are
> sourced from `@/lib/colors` (via `getCalendarTheme`), so the calendar matches
> the POS design system exactly. Pass a partial `theme` to override any token.

---

## Headless usage (no UI)

The hooks render nothing — they only manage state and hand you a ready-to-draw
grid. Build your own UI on top:

```tsx
import { useNepaliCalendar } from '@/packages/nepali-calendar';

const { grid, monthLabel, yearLabel, goNextMonth, goPrevMonth, selectDate } =
  useNepaliCalendar({ language: 'np' });

grid.weeks.forEach((week) =>
  week.forEach((cell) => {
    // cell.bs / cell.ad / cell.isToday / cell.isSelected / cell.isWeekend ...
  })
);
```

And the core is usable with no React at all (server, CLI, tests):

```ts
import { bsToAd, adToBs, generateMonthGrid } from '@/packages/nepali-calendar';

bsToAd({ year: 2081, month: 1, day: 1 });   // → { year: 2024, month: 4, day: 13 }
adToBs({ year: 2024, month: 4, day: 13 });   // → { year: 2081, month: 1, day: 1 }
generateMonthGrid(2081, 11);                  // → MonthGrid for Falgun 2081
```

---

## Core API

| Export | Description |
| --- | --- |
| `bsToAd(bs)` | Bikram Sambat → Gregorian. |
| `adToBs(ad)` | Gregorian → Bikram Sambat. |
| `jsDateToBs(date)` / `bsToJsDate(bs)` | Interop with JS `Date`. |
| `getTodayBs()` | Today as a `BsDate`. |
| `getBsMonthDays(y, m)` / `getBsYearDays(y)` | Month / year lengths. |
| `getBsWeekday(bs)` | Weekday `0–6` (0 = Sunday). |
| `generateMonthGrid(y, m, opts?)` | 6×7 `MonthGrid` of `CalendarDay` cells. |
| `addBsMonths(y, m, delta)` | Navigate months with year rollover. |
| `isSameBsDate(a, b)` / `clampBsDay(bs)` | Comparison / clamping helpers. |
| `toNepaliDigits` / `toEnglishDigits` / `formatNumber` | Devanagari digits. |
| `NEPALI_MONTHS`, `WEEKDAYS`, `WEEKDAYS_SHORT` | Localized labels (`en` / `np`). |
| `MIN_BS_YEAR`, `MAX_BS_YEAR` | Supported range. |

### Supported range & accuracy

The dataset covers **BS 2000 – 2088** and is anchored to:

> **1 Baisakh 2000 BS = 14 April 1943 AD**

Verified against known reference dates:

| Bikram Sambat | Gregorian |
| --- | --- |
| 1 Baisakh 2081 | 13 April 2024 |
| 1 Baisakh 2080 | 14 April 2023 |
| 14 Falgun 2081 | 26 February 2025 |

Conversions are computed in UTC, so they are immune to device timezone and
daylight-saving transitions.

---

## Theming

No colors are hardcoded in components. Each component accepts a `mode`
(`'light' | 'dark'`) that selects a built-in `CalendarTheme`, plus an optional
`theme` prop to override individual tokens:

```tsx
<Calendar
  mode="dark"
  theme={{ accent: '#16A34A', accentText: '#FFFFFF' }}
/>
```

`CalendarTheme` tokens: `background`, `surface`, `border`, `textPrimary`,
`textSecondary`, `textMuted`, `accent`, `accentText`, `accentMuted`, `weekend`,
`pressed`. Defaults are exported as `lightTheme` and `darkTheme`, and
`resolveTheme(base, override)` merges a partial override onto a base.

---

## Dependencies

| Dependency | Required by |
| --- | --- |
| `react`, `react-native` | hooks + components |
| `@gorhom/bottom-sheet` | `DatePickerSheet` only |

The `core/` layer has **no dependencies** at all.
