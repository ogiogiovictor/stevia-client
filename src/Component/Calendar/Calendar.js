import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import moment from 'moment';

// import './main.scss'
export default class DemoApp extends React.Component {
  calendarComponentRef = React.createRef();
  state = {
    calendarWeekends: true,
    calendarEvents: [
      // initial event data
      { title: 'Event Now', start: '' }
    ]
  };

  render() {
    console.log(this.state.calendarEvents)
    const { coach } = this.props;
    return (
      <FullCalendar
        defaultView='dayGridWeek'
        selectable={true}
        header={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
          allDaySlot: false
        }}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        ref={this.calendarComponentRef}
        weekends={this.state.calendarWeekends}
        allDaySlot={false}
        businessHours={{
          daysOfWeek:
            coach && Object.keys(JSON.parse(coach.appointment[0].day)),
          startTime: coach && JSON.parse(coach.appointment[0].time).start,
          endTime: coach && JSON.parse(coach.appointment[0].time).end,
          color: 'red'
        }}
        selectConstraint={'businessHours'}
        dateClick={this.handleDateClick}
        select={this.handleDateClick}
        selectAllow={function(selectInfo) {
          return moment().diff(selectInfo.start) <= 0;
        }}
      />
    );
  }

  handleDateClick = arg => {
    if (alert('selected ' + arg.startStr + ' to ' + arg.endStr)) {
      this.setState({
        // add new event data
        calendarEvents: this.state.calendarEvents.concat({
          // creates a new array
          title: 'New Event',
          start: arg.date,
          allDay: arg.allDay,
          startStr: arg.startStr,
          endStr: arg.endStr
        })
      });
    }
  };
}
