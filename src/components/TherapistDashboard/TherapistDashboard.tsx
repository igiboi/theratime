import { useState } from 'react';
import { Box, Typography, Button, TextField, Stack } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { TimeSlot } from '../../types';

export default function TherapistDashboard() {
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [slots, setSlots] = useState<TimeSlot[]>([]);

  const addTimeSlot = () => {
    if (!date || !startTime || !endTime) return;

    const newSlot: TimeSlot = {
      id: uuidv4(),
      date,
      startTime,
      endTime,
    };

    setSlots([...slots, newSlot]);
    setDate('');
    setStartTime('');
    setEndTime('');
  };

  return (
    <Box p={4}>
      <Typography variant='h5' gutterBottom>
        Therapist Availability
      </Typography>

      <Stack direction='row' spacing={2} mb={2}>
        <TextField
          label='Date'
          type='date'
          InputLabelProps={{ shrink: true }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <TextField
          label='Start Time'
          type='time'
          InputLabelProps={{ shrink: true }}
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <TextField
          label='End Time'
          type='time'
          InputLabelProps={{ shrink: true }}
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
        <Button variant='contained' onClick={addTimeSlot}>
          Add Slot
        </Button>
      </Stack>

      <Typography variant='h6'>Your Time Slots:</Typography>
      <ul>
        {slots.map((slot) => (
          <li key={slot.id}>
            {slot.date} — {slot.startTime} to {slot.endTime}
          </li>
        ))}
      </ul>
    </Box>
  );
}
