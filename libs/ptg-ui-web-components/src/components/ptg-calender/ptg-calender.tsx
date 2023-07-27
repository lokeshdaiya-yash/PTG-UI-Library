import {
  Component,
  Event,
  EventEmitter,
  h,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { Calendar } from '../../utils/calender';
// import { CalendarEntry } from '../../utils/calender-entry';

@Component({
  tag: 'ptg-calender',
  styleUrl: 'ptg-calender.scss',
  shadow: true,
})
export class PtgCalender {
  @Prop() dayNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  @Prop({ reflect: true }) startDate;
  @Prop() callback?: (val: any) => void;
  @Prop() monthNames = [
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
  @Prop() showFillDays = true;

  @State() date = Calendar.getToday();
  @State() daysInMonth: number[];
  @State() selectedDate: any;
  @State() eventstartDate = [];
  @State() upateDateStartDate: any;

  @Event({
    eventName: 'dayChanged',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  dayChanged: EventEmitter<any>;

  @Event({
    eventName: 'monthChanged',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  monthChanged: EventEmitter<any>;

  private fillStartCount: number;
  private fillEndCount: number;
  readonly today: any;

  constructor() {
    this.today = Calendar.getToday(this.startDate);
  }

  @Watch('date')
  watchDate(date: any): void {
    if ('month' in date && 'year' in date) {
      this.selectedDate = date;
    }
  }
  @Watch('startDate')
  watchstartDate(): void {
    this.date = Calendar.getToday(this?.startDate);
    this.upateDateStartDate = this?.startDate;
  }

  componentWillLoad() {
    this.setCalendarDetails();
    this.date = Calendar.getToday(this?.startDate);
  }
  connectedCallback() {
    this.date = Calendar.getToday(this?.startDate);
  }

  setCalendarDetails(): void {
    const date = this.getValidDate();
    const calendar = new Calendar(date.year, date.month);
    this.daysInMonth = calendar.getCalendarDays();

    this.fillStartCount = calendar.getFillStartCount();
    this.fillEndCount = calendar.daysInCalendar - calendar.getFillEndCount();
  }

  getValidDate(): any {
    let date = this.date;
    if (!('month' in this.date && 'year' in this.date)) {
      date = this.today;
    }

    return date;
  }

  dayChangedHandler(calendarEntry: any): void {
    this.dayChanged.emit(calendarEntry);
  }

  daySelectedHandler = (day): void => {
    this.selectedDate = {
      day,
      month: this.date.month,
      year: this.date.year,
    };
    this.dayChangedHandler(this.selectedDate);
    this.callback && this?.callback(this.selectedDate);
  };

  monthChangedHandler(calendarEntry: any): void {
    this.monthChanged.emit(calendarEntry);
  }

  switchToPreviousMonth = (): void => {
    if (this.date.month !== 1) {
      this.date.month -= 1;
    } else {
      this.date.month = 12;
      this.date.year -= 1;
    }

    if (typeof this.date !== 'undefined') {
      delete this.date.day;
    }

    this.setCalendarDetails();
    this.monthChangedHandler(this.date);
  };

  switchToNextMonth = (): void => {
    if (this.date.month !== 12) {
      this.date.month += 1;
    } else {
      this.date.month = 1;
      this.date.year += 1;
    }

    delete this.date.day;

    this.setCalendarDetails();
    this.monthChangedHandler(this.date);
  };

  getDigitClassNames = (
    day: number,
    month: number,
    year: number,
    index: number
  ): string => {
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

  isToday(day: number, month: number, year: number, index: number): boolean {
    return (
      this.today.day === day &&
      this.today.month === month &&
      this.today.year === year &&
      this.today.year === year &&
      !(index < this.fillStartCount || index >= this.fillEndCount)
    );
  }

  isSelectedDay(day: number, index: number) {
    return (
      typeof this.selectedDate !== 'undefined' &&
      this.selectedDate.day === day &&
      this.selectedDate.month === this.date.month &&
      this.selectedDate.year === this.date.year &&
      !(index < this.fillStartCount || index >= this.fillEndCount)
    );
  }

  render() {
    const date = this.getValidDate();

    return (
      <div class="calendar material">
        <header>
          <span onClick={this.switchToPreviousMonth}>{'<'}</span>
          <span>
            {this.monthNames[date.month - 1]} {date.year}
          </span>
          <span onClick={this.switchToNextMonth}>{'>'}</span>
        </header>
        <div class="day-names">
          {this.dayNames.map((dayName) => (
            <span>{dayName}</span>
          ))}
        </div>

        <div class="days-in-month">
          {this.daysInMonth.map((day, index) => {
            const classNameDigit = this.getDigitClassNames(
              day,
              date.month,
              date.year,
              index
            );
            if (index < this.fillStartCount || index >= this.fillEndCount) {
              return (
                <span class="disabled">{this.showFillDays ? day : ''}</span>
              );
            } else {
              return (
                <span onClick={() => this.daySelectedHandler(day)}>
                  <i class={classNameDigit}>{day}</i>
                </span>
              );
            }
          })}
        </div>
      </div>
    );
  }
}
