import { useTherapists } from '../../hooks/useTherapists';
import { useTimeSlots } from '../../hooks/useTimeSlots';
import { Box, Button, List, ListItem, Typography } from '@mui/material';
import { useState } from 'react';

export default function ClientDashboard() {
  const therapists = useTherapists();
  const { slots, bookSlot } = useTimeSlots();
  const [selected, setSelected] = useState<string | null>(null);

  const availableSlots = slots.filter((slot) => slot.therapistId === selected);

  return (
    <Box>
      <Typography variant='h5'>Choose a Therapist:</Typography>
      <List>
        {therapists.map((t) => (
          <ListItem key={t.id}>
            <Button onClick={() => setSelected(t.id)}>{t.name}</Button>
          </ListItem>
        ))}
      </List>

      {selected && (
        <>
          <Typography mt={3} variant='h6'>
            Available Time Slots:
          </Typography>
          <List>
            {availableSlots.length === 0 && (
              <ListItem>No slots available.</ListItem>
            )}
            {availableSlots.map((slot) => (
              <ListItem key={slot.id}>
                {slot.date} — {slot.startTime} to {slot.endTime}
                <Button
                  variant='outlined'
                  size='small'
                  sx={{ ml: 2 }}
                  onClick={() => bookSlot(slot.id)}
                >
                  Book
                </Button>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Box>
  );
}
