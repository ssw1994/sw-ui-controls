import React, { createContext, forwardRef, useContext, useMemo } from "react";
import useCalender from "./useCalender";
import moment from "moment";
import CalenderStyle from "./Calender.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAnglesLeft,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button/Button";
export const CalenderContext = createContext();

const Day = ({ date }) => {
  const { dateTemplate, month, year } = useContext(CalenderContext);
  const isPreviosMonthDate = useMemo(() => {
    return moment(date).get("month") !== month;
  }, [month, year]);

  let cssClass = `${CalenderStyle.sw_calender_date} flex-row center-items`;
  cssClass = isPreviosMonthDate ? "disabled " + cssClass : cssClass;

  if (dateTemplate && typeof dateTemplate === "function") {
    const template = dateTemplate(date);
    if (template) return <div className={cssClass}>{template}</div>;
  }

  const formattedDate =
    date && date instanceof moment ? date.format("D") : date;

  return <div className={cssClass}>{formattedDate}</div>;
};

const CalenderHeader = () => {
  const days = moment.weekdays();
  return days.map((day) => {
    return (
      <div className={`${CalenderStyle.sw_calender_day} flex-row center-items`}>
        {day.substring(0, 3)}
      </div>
    );
  });
};

const CalenderControls = () => {
  const {
    month,
    year,
    monthString,
    prevMonth,
    nextMonth,
    nextYear,
    prevYear,
    gotoYear,
    gotoMonth,
  } = useContext(CalenderContext);

  const months = Array.apply(0, Array(12)).map(function (_, i) {
    return moment().month(i).format("MMM");
  });
  const years = useMemo(() => {
    const ys = [year];
    for (let i = 1; i <= 10; i++) {
      ys.push(year + i);
      ys.push(year - i);
    }
    return Array.from(new Set(ys)).sort();
  }, [year]);

  return (
    <div
      className={`${CalenderStyle.sw_calender_controls} flex-row center-items`}
    >
      <Button onClick={prevYear}>
        <FontAwesomeIcon icon={faAnglesLeft} />
      </Button>
      <Button onClick={prevMonth}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button>
      <div className={CalenderStyle.sw_calender_controls_control}>
        <select
          placeholder="Month"
          value={month}
          onChange={(e) => gotoMonth(e.target.value)}
        >
          {months.map((month, index) => {
            return (
              <option key={month} value={index}>
                {month}
              </option>
            );
          })}
        </select>
      </div>
      <div className={CalenderStyle.sw_calender_controls_control}>
        <select
          placeholder="Year"
          value={year}
          onChange={(e) => gotoYear(e.target.value)}
        >
          {years.map((year, index) => {
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
      <Button onClick={nextMonth}>
        <FontAwesomeIcon icon={faChevronRight} />
      </Button>
      <Button onClick={nextYear}>
        <FontAwesomeIcon icon={faAngleRight} />
      </Button>
    </div>
  );
};

export const Calender = forwardRef((props, ref) => {
  const updatedProps = useCalender(props);
  const { dates } = updatedProps;
  return (
    <CalenderContext.Provider value={updatedProps}>
      <div className={`${CalenderStyle.sw_calender} flex-row`}>
        <CalenderControls />
        <CalenderHeader />
        {dates.map((date) => (
          <Day {...date} />
        ))}
      </div>
    </CalenderContext.Provider>
  );
});
