import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { useMutation } from "@apollo/react-hooks";
import { ADD_EVENT } from "../utils/mutations";
import Auth from "../utils/auth";

function Calendar() {
  const [eventFormData, setEventFormData] = useState({ event: "", date: "" });
  // const [validated] = useState(false);
  const [setShowAlert] = useState(false);
  const [addEvent] = useMutation(ADD_EVENT);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEventFormData({ ...eventFormData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log("this");
    try {
      const { data } = await addEvent({
        variables: { ...eventFormData },
      });
      console.log("works");

      Auth.login(data.loginUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setEventFormData({
      event: "",
      date: "",
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
          onChange={handleInputChange}
          value={eventFormData.event}
        />
        <TextField
          required
          id="outlined-required"
          label="Date xxxx-xx-xx"
          name="date"
          onChange={handleInputChange}
          value={eventFormData.date}
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
        // dateClick={this.handleDateClick}
        editable={true}
        events={[{ title: 'Project Due', date: '2022-08-24' },
        { title: 'Graduation', date: '2022-08-25' },
        { title: 'Trevors Anniversary', date: '2022-08-24' },
        { title: 'Apply for Jobs', date: '2022-08-29' },
        { title: 'PARTY', date: '2022-08-26' },
        { title: 'LoTR, Rings of Power', date: '2022-09-02' },
        { title: 'Probably Something', date: '2022-09-05' },
      ]}
      />
    </div>
  );
}

export default Calendar;
