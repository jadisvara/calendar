import React, { PropTypes } from 'react';

import styles from './styles.scss';

const months = [
  { value: 0, name: 'January', nOfDays: 31 },
  { value: 1, name: 'February', nOfDays: 28 },
  { value: 2, name: 'March', nOfDays: 31 },
  { value: 3, name: 'April', nOfDays: 30 },
  { value: 4, name: 'May', nOfDays: 31 },
  { value: 5, name: 'June', nOfDays: 30 },
  { value: 6, name: 'July', nOfDays: 31 },
  { value: 7, name: 'August', nOfDays: 31 },
  { value: 8, name: 'September', nOfDays: 30 },
  { value: 9, name: 'October', nOfDays: 31 },
  { value: 10, name: 'November', nOfDays: 30 },
  { value: 11, name: 'December', nOfDays: 31 }
];

const weekdays = [
  { value: 0, name: 'Sunday'},
  { value: 1, name: 'Monday'},
  { value: 2, name: 'Tuesday'},
  { value: 3, name: 'Wednesday'},
  { value: 4, name: 'Thursday'},
  { value: 5, name: 'Friday'},
  { value: 6, name: 'Saturday'}
];

const getDaysInMonth = (month,year)  => new Date(year, month + 1, 0).getDate();

const Calendar = (props) => (
    <div className='calendar'>
        <div className='calendar__header'>
          <div className='calendar__nav'>
            <div className='calendar__arrow-left'></div>
            <div className='calendar__month'>September</div>
            <div className='calendar__year'>2016</div>
            <div className='calendar__arrow-right'></div>
          </div>
          <div className='calendar__weekdays'></div>
        </div>
        <div className='calendar__days'>
          {getDaysInMonth(1, 2017)}
        </div>

        <div className='calendar'></div>
        <div className='calendar'></div>
    </div>
);

Calendar.propTypes = {
  mounth: PropTypes.string
};

export default Calendar;
