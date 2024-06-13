 import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box , Button, TextField, Typography } from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers';




function EventManagement  ()  {
    return (
    <>    
    <Box sx={{padding: 20, borderRadius: 5, boxShadow: '1px 1px 4px', margin: 5}}>
    <LocalizationProvider  dateAdapter={AdapterDayjs} >
      <DateCalendar/>
    </LocalizationProvider> 

    </Box>  
    <Box  sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 5, width: '600px',borderRadius: 10, boxShadow: '1px 1px 4px', margin: 5}}>
        <Typography variant= 'h4' margin={2} sx={{fontWeight: 'bold'}}>Create Event</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Select Date" sx={{margin: 1}} />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker label="Select Time" sx={{margin: 1}}  
            viewRenderers={{
                    hours: renderTimeViewClock,
                    minutes: renderTimeViewClock,
                    seconds: renderTimeViewClock,
             }}/>
        </LocalizationProvider>

        
        <TextField
          id="outlined-multiline-static"
          label="Event Title"
          sx={{margin: 1}}
        />

        <TextField
          id="outlined-multiline-static"
          label="Event Details"
          multiline
          sx={{margin: 1}}
          rows={6}
      
        />
        <Button variant="contained" sx={{margin: 1}}>Add Event</Button>
    </Box>
   
    </>
    )
}
export default EventManagement;