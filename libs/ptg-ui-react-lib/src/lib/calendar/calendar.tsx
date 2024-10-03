/* eslint-disable jsx-a11y/no-access-key */
/**
 * @since March 2022
 * @author Harsha Zalawa
 * @desc Reusable Calendar Component
 *
 */
import './calendar.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
export interface CalendarProps {
  onChange?: any;
  date?: any;
  selected?: any;
  className?: any;
  startDate?: any;
  endDate?: any;
  disabled?: boolean;
  startRef?: any;
  onKeyDown?: any;
  accessKey?: string;
  showTimeSelect?:boolean;
  dateFormat?:string;
}

export function PtgUiCalendar({
  className,
  selected,
  onChange,
  startDate,
  endDate,
  disabled,
  startRef,
  onKeyDown,
  accessKey,
  showTimeSelect,
  dateFormat="MM-dd-yyyy"
}: CalendarProps) {
  return (
    <div className="position-relative post-icon">
      <DatePicker
        disabled={disabled}
        selected={selected}
        className={className}
        dateFormat={dateFormat}
        placeholderText="MM-DD-YYYY"
        onChange={onChange}
        minDate={startDate === null ? startDate : new Date(startDate)}
        maxDate={endDate === null ? endDate : new Date(endDate)}
        ref={startRef}
        onKeyDown={onKeyDown}
        showTimeSelect={showTimeSelect}
      />
      <i className="icon cal-icon"></i>
    </div>
  );
}

export default PtgUiCalendar;
