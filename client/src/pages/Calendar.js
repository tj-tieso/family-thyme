import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick

export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={this.handleDateClick}
        events={[
          { title: 'Project Due', date: '2022-08-24' },
          { title: 'Graduation', date: '2022-08-25' },
          { title: 'Trevors Anniversary', date: '2022-08-24' },
          { title: 'Apply for Jobs', date: '2022-08-29' },
          { title: 'PARTY', date: '2022-08-26' },
          { title: 'LoTR, Rings of Power', date: '2022-09-02' },
          { title: 'Probably Something', date: '2022-09-05' },
        ]}
      />
    );
  }
}
