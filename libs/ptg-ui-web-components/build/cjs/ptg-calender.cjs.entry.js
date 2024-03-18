'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b272a2a2.js');

// import { CalendarEntry } from './calender-entry';
class Calendar {
  constructor(year, month) {
    this.daysInCalendarWithFiveRows = 42;
    this.daysInCalendarWithFourRows = 35;
    this.daysInCalendarWithThreeRows = 28;
    this.daysInCalendar = this.daysInCalendarWithFourRows;
    this.fillStartCount = 0;
    this.fillEndCount = 0;
    this.fillCount = [6, 0, 1, 2, 3, 4, 5];
    this.year = year;
    this.month = month;
  }
  getCalendarDays() {
    const daysOfCurrentMonth = this.getDaysOfCurrentMonth();
    const fillStartCount = this.fillCount[this.getFirstDayOfMonth()];
    const fillEndCount = this.daysInCalendarWithFourRows -
      (daysOfCurrentMonth.length + fillStartCount);
    this.currentMonthCount = daysOfCurrentMonth.length;
    this.fillStartCount = fillStartCount;
    this.fillEndCount = fillEndCount;
    const fillStart = fillStartCount > 0 ? this.getDaysOfLastMonth(fillStartCount) : [];
    const fillEnd = this.getDaysOfNextMonth(fillEndCount);
    return fillStart.concat(daysOfCurrentMonth).concat(fillEnd);
  }
  getDaysOfCurrentMonth() {
    return this.getDaysOfMonth(this.month);
  }
  getDaysOfLastMonth(fillStartCount) {
    const daysOfMonth = this.getDaysOfMonth(this.month - 1);
    return daysOfMonth.slice(-fillStartCount);
  }
  getDaysOfNextMonth(endCount) {
    const daysOfMonth = this.getDaysOfMonth(this.month + 1);
    let slicedDays;
    if (endCount <= -1) {
      endCount =
        this.daysInCalendarWithFiveRows -
          (this.currentMonthCount + this.fillStartCount);
      slicedDays = daysOfMonth.slice(0, endCount);
      this.daysInCalendar = this.daysInCalendarWithFiveRows;
      this.fillEndCount = endCount;
    }
    else if (endCount === 7 &&
      this.currentMonthCount + this.fillStartCount === 28) {
      endCount =
        this.daysInCalendarWithThreeRows -
          (this.currentMonthCount + this.fillStartCount);
      slicedDays = daysOfMonth.slice(0, endCount);
      this.daysInCalendar = this.daysInCalendarWithThreeRows;
      this.fillEndCount = endCount;
    }
    else {
      slicedDays = daysOfMonth.slice(0, endCount);
    }
    return slicedDays;
  }
  getDaysOfMonth(month) {
    const daysOfMonth = new Date(this.year, month, 0).getDate();
    return Array.from({ length: daysOfMonth }, (_, i) => i + 1);
  }
  getFirstDayOfMonth() {
    return new Date(this.year, this.month - 1, 1).getDay();
  }
  getFillStartCount() {
    return this.fillStartCount;
  }
  getFillEndCount() {
    return this.fillEndCount;
  }
  static getToday(date) {
    return {
      day: new Date(date).getDate(),
      month: new Date(date).getMonth() + 1,
      year: new Date(date).getFullYear(),
    };
  }
}

const ptgCalenderCss = "@charset \"UTF-8\";:host{display:block}.calendar{width:350px;font-family:Arial, sans-serif}.calendar>*{line-height:3.5rem}header{display:flex;justify-content:space-between;color:#666;font-weight:bold;font-size:1.1rem}.calendar span{flex-grow:30;width:14.2857142857%;text-align:center}.calendar header span:first-child,.calendar header span:last-child{flex-grow:0.1;cursor:pointer}.day-names{display:flex}.days-in-month{display:flex;flex-wrap:wrap}.days-in-month span{cursor:pointer;position:relative}.days-in-month i{padding:0.8rem;font-style:normal;position:relative;width:100%}.days-in-month i.padding-single-digit{padding:0.8rem 1.1rem}.days-in-month span.disabled{color:#ccc;cursor:default}.material .days-in-month span:hover:not(.disabled) i:not(.selected){background:#e6d2f1;border-radius:50%}.material .days-in-month i.active{border:1px solid #000;border-radius:50%}.material .days-in-month i.selected{background:#902dc6;color:#fff;border-radius:50%}.material .days-in-month i.has-event:before{content:\" ●\";font-size:0.7rem;position:absolute;top:0.4rem;left:1.18rem;color:#902dc6}.material .days-in-month i.selected.has-event:before{color:#fff}.material .days-in-month i.active.has-event:before{top:0.1rem;left:1.1rem}";

const PtgCalender = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dayChanged = index.createEvent(this, "dayChanged", 7);
    this.monthChanged = index.createEvent(this, "monthChanged", 7);
    this.daySelectedHandler = (day) => {
      this.selectedDate = {
        day,
        month: this.date.month,
        year: this.date.year,
      };
      this.dayChangedHandler(this.selectedDate);
      this.callback && (this === null || this === void 0 ? void 0 : this.callback(this.selectedDate));
    };
    this.switchToPreviousMonth = () => {
      if (this.date.month !== 1) {
        this.date.month -= 1;
      }
      else {
        this.date.month = 12;
        this.date.year -= 1;
      }
      if (typeof this.date !== 'undefined') {
        delete this.date.day;
      }
      this.setCalendarDetails();
      this.monthChangedHandler(this.date);
    };
    this.switchToNextMonth = () => {
      if (this.date.month !== 12) {
        this.date.month += 1;
      }
      else {
        this.date.month = 1;
        this.date.year += 1;
      }
      delete this.date.day;
      this.setCalendarDetails();
      this.monthChangedHandler(this.date);
    };
    this.getDigitClassNames = (day, month, year, index) => {
      let classNameDigit = [];
      if (day.toString().length === 1) {
        classNameDigit.push('padding-single-digit');
      }
      if (this.isToday(day, month, year, index)) {
        classNameDigit.push('active');
      }
      if (this.isSelectedDay(day, index)) {
        classNameDigit.push('selected');
      }
      if (this.eventstartDate.includes(day)) {
        classNameDigit.push('has-event');
      }
      return classNameDigit.join(' ');
    };
    this.dayNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    this.startDate = undefined;
    this.callback = undefined;
    this.monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    this.showFillDays = true;
    this.date = Calendar.getToday();
    this.daysInMonth = undefined;
    this.selectedDate = undefined;
    this.eventstartDate = [];
    this.upateDateStartDate = undefined;
    this.today = Calendar.getToday(this.startDate);
  }
  watchDate(date) {
    if ('month' in date && 'year' in date) {
      this.selectedDate = date;
    }
  }
  watchstartDate() {
    this.date = Calendar.getToday(this === null || this === void 0 ? void 0 : this.startDate);
    this.upateDateStartDate = this === null || this === void 0 ? void 0 : this.startDate;
  }
  componentWillLoad() {
    this.setCalendarDetails();
    this.date = Calendar.getToday(this === null || this === void 0 ? void 0 : this.startDate);
  }
  connectedCallback() {
    this.date = Calendar.getToday(this === null || this === void 0 ? void 0 : this.startDate);
  }
  setCalendarDetails() {
    const date = this.getValidDate();
    const calendar = new Calendar(date.year, date.month);
    this.daysInMonth = calendar.getCalendarDays();
    this.fillStartCount = calendar.getFillStartCount();
    this.fillEndCount = calendar.daysInCalendar - calendar.getFillEndCount();
  }
  getValidDate() {
    let date = this.date;
    if (!('month' in this.date && 'year' in this.date)) {
      date = this.today;
    }
    return date;
  }
  dayChangedHandler(calendarEntry) {
    this.dayChanged.emit(calendarEntry);
  }
  monthChangedHandler(calendarEntry) {
    this.monthChanged.emit(calendarEntry);
  }
  isToday(day, month, year, index) {
    return (this.today.day === day &&
      this.today.month === month &&
      this.today.year === year &&
      this.today.year === year &&
      !(index < this.fillStartCount || index >= this.fillEndCount));
  }
  isSelectedDay(day, index) {
    return (typeof this.selectedDate !== 'undefined' &&
      this.selectedDate.day === day &&
      this.selectedDate.month === this.date.month &&
      this.selectedDate.year === this.date.year &&
      !(index < this.fillStartCount || index >= this.fillEndCount));
  }
  render() {
    const date = this.getValidDate();
    return (index.h("div", { class: "calendar material" }, index.h("header", null, index.h("span", { onClick: this.switchToPreviousMonth }, '<'), index.h("span", null, this.monthNames[date.month - 1], " ", date.year), index.h("span", { onClick: this.switchToNextMonth }, '>')), index.h("div", { class: "day-names" }, this.dayNames.map((dayName) => (index.h("span", null, dayName)))), index.h("div", { class: "days-in-month" }, this.daysInMonth.map((day, index$1) => {
      const classNameDigit = this.getDigitClassNames(day, date.month, date.year, index$1);
      if (index$1 < this.fillStartCount || index$1 >= this.fillEndCount) {
        return (index.h("span", { class: "disabled" }, this.showFillDays ? day : ''));
      }
      else {
        return (index.h("span", { onClick: () => this.daySelectedHandler(day) }, index.h("i", { class: classNameDigit }, day)));
      }
    }))));
  }
  static get watchers() { return {
    "date": ["watchDate"],
    "startDate": ["watchstartDate"]
  }; }
};
PtgCalender.style = ptgCalenderCss;

exports.ptg_calender = PtgCalender;
