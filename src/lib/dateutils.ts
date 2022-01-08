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
  const month = 0;
  for (let day = 1; day <= (leapYear(year) ? 366 : 365); ++day) {
    yield new Date(year, month, day);
  }
}
