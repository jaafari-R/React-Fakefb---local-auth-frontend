import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './Navbar';
import Register from './Register';
import Dashboard from './Dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Register />}/>
          <Route exact path="/dashboard" element={<Dashboard />}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
