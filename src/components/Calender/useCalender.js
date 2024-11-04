import { useEffect, useMemo, useState } from "react";
import moment from "moment";

class CalenderDate {
  date;
  dateString;
  constructor(date) {
    this.date = date;
    this.dateString = moment(date).format("DD-MM-YYYY");
  }
}

export default function useCalender(props) {
  const [month, updateMonth] = useState();
  const [year, updateYear] = useState();

  const dates = useMemo(() => {
    if (year && (month || month === 0)) {
      const firstDay = moment().year(year).month(month).startOf("month");
      const lastDay = moment().year(year).month(month).endOf("month");
      let currentDay = firstDay;
      const monthDates = [];
      while (currentDay.isSameOrBefore(lastDay)) {
        monthDates.push(new CalenderDate(moment(currentDay)));
        currentDay = currentDay.add(1, "day");
      }
      const currentDate = moment(new Date())
        .set("month", month)
        .set("year", year)
        .startOf("month");
      if (currentDate.weekday() !== 0) {
        const weekdays = moment.weekdays();
        for (let i = 0; i < weekdays.length; i++) {
          if (i !== currentDate.weekday()) {
            let lastMonthDay = moment(currentDate)
              .subtract(1, "month")
              .endOf("month")
              .subtract(i, "day");
            monthDates.unshift(new CalenderDate(lastMonthDay));
          } else {
            break;
          }
        }
      }
      return monthDates;
    }
    return [];
  }, [month, year]);

  useEffect(() => {
    const currentDate = moment();
    updateMonth(currentDate.month());
    updateYear(currentDate.year());
  }, []);

  const nextMonth = () => {
    if (month === 11) {
      updateMonth(0);
      nextYear();
      return;
    }
    updateMonth(month + 1);
  };
  const prevMonth = () => {
    if (month === 0) {
      updateMonth(11);
      prevYear();
      return;
    }
    updateMonth(month - 1);
  };

  const nextYear = () => {
    updateYear(year + 1);
  };

  const prevYear = () => {
    updateYear(year - 1);
  };

  const monthString = useMemo(() => {
    if (month || month === 0) {
      return moment()?.set("month", month)?.set("year", year)?.format("MMM");
    }
    return null;
  }, [month, year]);

  const gotoMonth = (month) => {
    updateMonth(month);
  };
  const gotoYear = (year) => {
    updateYear(year);
  };

  return {
    ...props,
    dates,
    month,
    monthString,
    year,
    prevMonth,
    nextMonth,
    nextYear,
    prevYear,
    gotoYear,
    gotoMonth,
  };
}
