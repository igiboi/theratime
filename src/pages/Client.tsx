import { Box, Button, Typography } from '@mui/material';
import ClientDashboard from '@/components/ClientDashboard/ClientDashboard';
import { useNavigate } from 'react-router-dom';

export default function ClientPage() {
  const navigate = useNavigate();

  return (
    <Box p={4}>
      <Typography variant='h4' gutterBottom>
        Client Portal
      </Typography>
      <Button variant='outlined' onClick={() => navigate('/')} sx={{ mb: 2 }}>
        ← Back to Home
      </Button>
      <ClientDashboard />
    </Box>
  );
}
