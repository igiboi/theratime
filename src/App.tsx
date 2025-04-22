import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import TherapistPage from '@/pages/Therapist';
import ClientPage from '@/pages/Client';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/therapist' element={<TherapistPage />} />
        <Route path='/client' element={<ClientPage />} />
      </Routes>
    </Router>
  );
}

export default App;
