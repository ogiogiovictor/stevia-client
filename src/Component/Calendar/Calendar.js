import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar-like-google';
import events from './events';
import moment from 'moment';
import 'react-big-calendar-like-google/lib/css/react-big-calendar.css';

class Calendar extends Component {
  render() {
    BigCalendar.momentLocalizer(moment);
    return (
      <div {...this.props}>
        <h3 className="callout">
          Click an event to see more info, or
          drag the mouse over the calendar to select a date/time range.
        </h3>
        <BigCalendar
          selectable
          events={events}
          defaultView='week'
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date(2020, 3, 12)}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={(slotInfo) => alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}` +
            `\naction: ${slotInfo.action}`
          )}
        />
      </div>
    );
  }
}

export default Calendar;