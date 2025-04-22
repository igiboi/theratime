import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box p={4}>
      <Typography variant='h4' gutterBottom>
        Welcome to TheraTime
      </Typography>
      <Button
        variant='contained'
        onClick={() => navigate('/client')}
        sx={{ mr: 2 }}
      >
        Continue as Client
      </Button>
      <Button variant='outlined' onClick={() => navigate('/therapist')}>
        Continue as Therapist
      </Button>
    </Box>
  );
}
