import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { useMutation } from '@apollo/react-hooks';
import { ADD_EVENT } from '../utils/mutations';
// import { QUERY_EVENT_LIST } from '../utils/queries';
import Auth from '../utils/auth';

function Calendar() {
  const [eventFormData, setEventFormData] = useState({ title: '', date: '' });
  // const [validated] = useState(false);
  const [setShowAlert] = useState(false);
  const [addEvent] = useMutation(ADD_EVENT);
  // const eventsArr = useQuery(QUERY_EVENT_LIST);

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
    console.log('this');

    try {
      const { data } = await addEvent({
        variables: { ...eventFormData },
      });

      console.log('works');
      alert(
        `${eventFormData.title} on ${eventFormData.date} added to the database!`
      );
      // Auth.login(data.loginUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setEventFormData({
      title: '',
      date: '',
    });
  };

  const showAddEvent = (events) => {
    if (Auth.loggedIn()) {
      return (
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            required
            id='outlined-multiline-flexible'
            label='Event Title'
            name='title'
            multiline
            maxRows={4}
            onChange={handleInputChange}
            value={eventFormData.title}
          />
          <TextField
            required
            id='outlined-required'
            label='Date xxxx-xx-xx'
            name='date'
            onChange={handleInputChange}
            value={eventFormData.date}
          />
          <Button
            type='submit'
            size='large'
            variant='contained'
            sx={{ mt: 1, mb: 6 }}
          >
            Add Event
          </Button>
        </Box>
      );
    }
  };

  return (
    <div>
      {showAddEvent()}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        // dateClick={this.handleDateClick}
        editable={true}
        events={[
          { title: 'Project Due', date: '2022-08-24' },
          { title: 'Graduation', date: '2022-08-25' },
          { title: 'Trevors Anniversary', date: '2022-08-24' },
          { title: 'Apply for Jobs', date: '2022-08-29' },
          { title: 'PARTY', date: '2022-08-26' },
          { title: 'LotR, Rings of Power', date: '2022-09-02' },
          { title: 'Probably Something', date: '2022-09-05' },
        ]}
      />
    </div>
  );
}

export default Calendar;
