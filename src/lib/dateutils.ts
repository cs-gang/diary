export function daysInMonth(mon: number, year: number): 30 | 31 | 29 | 28 {
  if ([1, 3, 5, 7, 8, 10, 12].includes(mon)) {
    return 31;
  } else if (mon === 2) {
    if (leapYear(year)) {
      return 29;
    } else {
      return 28;
    }
  } else {
    return 30;
  }
}

export function leapYear(year: number): boolean {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}

export function* days(year: number): Generator<Date, void, null> {
  // given an year, yields the days in that year
  for (let month = 0; month <= 11; ++month) {
    // javascript months are 0-indexed, because of course they are
    const days = daysInMonth(month, year);
    for (let day = 1; day <= days; ++day) {
      yield new Date(year, month, day);
    }
  }
}
