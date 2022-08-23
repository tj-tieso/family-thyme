import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box"

export default class DemoApp extends React.Component {
  render() {
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        event: data.get('event'),
        date: data.get('date'),
      });
    };
    return (
   
      <div>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            
            <TextField
              required
              id="outlined-multiline-flexible"
              label="Event"
              name="event"
              multiline
              maxRows={4}
              // value={value}
              // onChange={handleChange}
            />
            <TextField
              required
              id="outlined-required"
              label="Date xxxx-xx-xx"
              name="date"
            />
            <Button
              type="submit"
              size="large"
              variant="contained"
              sx={{ mt: 1, mb: 6 }}
            >
              Add Event
            </Button>
          </Box>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            dateClick={this.handleDateClick}
            editable={true}
            events={[{ title: "event 1 Kyle", date: "2022-08-24" }]}
          />
        </div>
    );
  }

  handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };
}