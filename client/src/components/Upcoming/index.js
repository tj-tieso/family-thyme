import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridDay'
        contentHeight={400}
        events={[
          { title: 'Graduation!', date: '2022-08-25' },

          { title: 'Dinner: Salmon', date: '2022-08-25', color: 'green' },
        ]}
      />
    );
  }
}
