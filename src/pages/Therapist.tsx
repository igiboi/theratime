import { Box, Button, Typography } from '@mui/material';
import TherapistDashboard from '../components/TherapistDashboard/TherapistDashboard';
import { useNavigate } from 'react-router-dom';

export default function TherapistPage() {
  const navigate = useNavigate();

  return (
    <Box p={4}>
      <Typography variant='h4' gutterBottom>
        Therapist Portal
      </Typography>
      <Button variant='outlined' onClick={() => navigate('/')} sx={{ mb: 2 }}>
        ← Back to Home
      </Button>
      <TherapistDashboard />
    </Box>
  );
}
