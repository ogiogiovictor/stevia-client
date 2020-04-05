import React, { Fragment } from 'react';
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
  state = { startTime: '', endTime: '' };

    handleSelect = selectedInfo => {
      //alert(selectedInfo.startStr)
      this.setState({
        startTime: selectedInfo.startStr,
        endTime: selectedInfo.endStr
      });
      console.log('working!!', this.state.startTime, this.state.endTime);
    };

  render() {
    return (
      <Fragment>
        <FullCalendar
          defaultView='listWeek'
          weekends={false}
          allDaySlot={false}
          plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
          selectAllow={function(selectInfo) {
            return (
              moment().diff(selectInfo.start) <= 0
            );
          }}
          selectable={true}
          selectMirror={true}
          selectOverlap={false}
          select={this.handleSelect}
          header={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
          }}
        />
        <div>{this.state.startTime}</div>
      </Fragment>
    );
  }
}
