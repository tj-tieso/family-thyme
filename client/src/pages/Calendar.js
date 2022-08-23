import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick



export default class DemoApp extends React.Component {

  render() {
    return (
      
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        dateClick={this.handleDateClick}
        editable={true}
        
        events={[
          { title: 'event 1', date: '2022-08-24' },
          { title: 'event 2', date: '2022-08-26' }
        ]}
      />
    )
  }

}