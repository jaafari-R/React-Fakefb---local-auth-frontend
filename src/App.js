import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './Navbar';
import Register from './Register';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Register />}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
