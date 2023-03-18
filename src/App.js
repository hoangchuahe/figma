import AppLayout from 'Layout/AppLayout';
import Dashboard from 'Pages/Dashboard';
import Doctors from 'Pages/Doctors';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Navigate to="/dashboard" />} />
        <Route path='' element={<AppLayout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='doctors' element={<Doctors />} />

        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
